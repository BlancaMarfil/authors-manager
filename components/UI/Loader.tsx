import styled from "styled-components";

const StyledDiv = styled.div`
    border: 8px solid ${({ theme }) => theme.colors.oceanBlue};
    border-top: 8px solid ${({ theme }) => theme.colors.veryLightGray};
    border-radius: 50%;
    width: ${({ theme }) => theme.dimensions.base7};
    height: ${({ theme }) => theme.dimensions.base7};
    animation: spin 1s linear infinite;
    margin: ${({ theme }) => theme.dimensions.base17} auto;
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Loader = () => {
  return <StyledDiv />;
};

export default Loader;
