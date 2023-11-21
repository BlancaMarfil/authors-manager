import styled from "styled-components";
import RegistrationBlock from "./RegistrationBlock";
import Button from "./UI/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegistrationType } from "../types/types";
import { useLoginMutation, useSignUpMutation } from "../graphql/generated";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const StyledRowBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base05};
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base3};
`;

const StyledDivLabel = styled.div`
  width: 30%;
  text-align: end;
`;

const StyledLabel = styled.label`
  width: 100%;
  text-align: end;
  font-size: 20px;
  line-height: ${({ theme }) => theme.dimensions.base3};
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    ${({ theme }) => theme.fontTypes.medium}
  }
`;

const StyledField = styled(Field)`
  width: 66%;
  height: ${({ theme }) => theme.dimensions.base5};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.dimensions.base3};
  padding: 0 ${({ theme }) => theme.dimensions.base2};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.dimensions.base2};
  outline: none;
`;

const StyledError = styled(ErrorMessage)`
  color: ${({ theme }) => theme.colors.sunsetRed};
  width: 100%;
  text-align: end;
  font-style: italic;
`;

interface InitialValues {
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  origin: RegistrationType;
}

const RegistrationForm = ({ origin }: Props) => {
  const initialValues: InitialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const buttonTitle = origin === "signup" ? "Sign Up" : "Log In";
  var token = "";

  // Hooks
  const [signUpUser] = useSignUpMutation();
  const [loginUser] = useLoginMutation();
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  // Actions
  const onSubmit = async (values: any, { setSubmitting }: any) => {
    if (origin === "signup") {
      try {
        await signUpUser({
          variables: { email: values.email, password: values.password },
        }).then((dataSignup) => (token = dataSignup.data.createUser.token));
      } catch (error) {
        return console.error(error);
      }
    } else if (origin === "login") {
      try {
        await loginUser({
          variables: { email: values.email, password: values.password },
        }).then((dataLogin) => {
          token = dataLogin.data.loginUser.token;
        });
      } catch (error) {
        return console.error(error);
      }
    }
    if (token) {
      authCtx.onLogin(token);
      // router.push("/");
    }
    setSubmitting(false);
  };

  const validate = (values: any) => {
    const errors = {};

    if (!values.email) {
      errors["email"] = "An email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors["email"] = "Invalid email address";
    }

    if (!values.password) {
      errors["password"] = "Password is required";
    } else if (values.password.length < 8) {
      errors["password"] = "Password must be at least 8 characters long";
    } else if (!/(?=.*[a-z])/.test(values.password)) {
      errors["password"] =
        "Password must contain at least one lowercase letter";
    } else if (!/(?=.*[A-Z])/.test(values.password)) {
      errors["password"] =
        "Password must contain at least one uppercase letter";
    } else if (!/(?=.*\d)/.test(values.password)) {
      errors["password"] = "Password must contain at least one number";
    } else if (!/(?=.*[!@#$%^&*])/.test(values.password)) {
      errors["password"] =
        "Password must contain at least one special character (!@#$%^&*)";
    }

    if (origin === "signup") {
      if (!values.confirmPassword) {
        errors["confirmPassword"] = "You need to confirm your password";
      } else if (values.password !== values.confirmPassword) {
        errors["confirmPassword"] =
          "Your confirmation password differs from your password";
      }
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <RegistrationBlock origin={origin}>
          <StyledRowBlock>
            <StyledRow>
              <StyledDivLabel>
                <StyledLabel htmlFor="email">Email</StyledLabel>
              </StyledDivLabel>
              <StyledField type="email" id="email" name="email" />
            </StyledRow>
            <StyledError name="email" component="div" />
          </StyledRowBlock>

          <StyledRowBlock>
            <StyledRow>
              <StyledDivLabel>
                <StyledLabel htmlFor="password">Password</StyledLabel>
              </StyledDivLabel>
              <StyledField type="password" id="password" name="password" />
            </StyledRow>
            <StyledError name="password" component="div" />
          </StyledRowBlock>

          {origin === "signup" && (
            <StyledRowBlock>
              <StyledRow>
                <StyledDivLabel>
                  <StyledLabel htmlFor="confirmPassword">
                    Confirm Password
                  </StyledLabel>
                </StyledDivLabel>
                <StyledField
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
              </StyledRow>
              <StyledError name="confirmPassword" component="div" />
            </StyledRowBlock>
          )}

          <Button buttonType="submit">{buttonTitle}</Button>
        </RegistrationBlock>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
