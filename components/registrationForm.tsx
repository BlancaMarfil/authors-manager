import styled from "styled-components";
import RegistrationBlock from "../components/registrationBlock";
import Button from "../components/UI/button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegistrationType } from "../types/types";

const StyledRowBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.base05};
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base5};
`;

const StyledLabel = styled.label`
  width: 100%;
  text-align: end;
  ${({ theme }) => theme.fontTypes.medium}
  flex: 1;
`;

const StyledField = styled(Field)`
  height: ${({ theme }) => theme.dimensions.base5};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.dimensions.base3};
  flex: 2;
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

  const onSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
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
        <RegistrationBlock>
          <StyledRowBlock>
            <StyledRow>
              <StyledLabel htmlFor="email">Email</StyledLabel>
              <StyledField type="email" id="email" name="email" />
            </StyledRow>
            <StyledError name="email" component="div" />
          </StyledRowBlock>

          <StyledRowBlock>
            <StyledRow>
              <StyledLabel htmlFor="password">Password</StyledLabel>
              <StyledField type="password" id="password" name="password" />
            </StyledRow>
            <StyledError name="password" component="div" />
          </StyledRowBlock>

          {origin === "signup" && (
            <StyledRowBlock>
              <StyledRow>
                <StyledLabel htmlFor="confirmPassword">Confirm Password</StyledLabel>
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
