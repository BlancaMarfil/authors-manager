import styled from "styled-components";
import SearchIcon from "../../public/icons/search.svg";
import theme from "../../styles/theme";

const Container = styled.div`
  display: flex;
  align-items: cenrer;
  gap: ${({ theme }) => theme.dimensions.base2};
  margin: ${({ theme }) => theme.dimensions.base2} 0;
  background-color: ${({ theme }) => theme.colors.veryLightGray};
  padding: ${({ theme }) => theme.dimensions.base2}
    ${({ theme }) => theme.dimensions.base3};
  border-radius: ${({ theme }) => theme.dimensions.base6};
`;

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: 0;
  background-color: ${({ theme }) => theme.colors.veryLightGray};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.dimensions.base2};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray}
  }
`;

interface Props {
  placeholder: string;
}

const SearchBox = ({ placeholder }: Props) => {
  return (
    <Container>
      <SearchIcon style={{ fill: theme.colors.lightGray }} />
      <StyledInput placeholder={placeholder} />
    </Container>
  );
};

export default SearchBox;
