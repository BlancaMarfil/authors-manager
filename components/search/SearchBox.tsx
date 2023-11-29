import styled from "styled-components";
import SearchIcon from "../../public/icons/search.svg";
import theme from "../../styles/theme";
import Button from "../UI/Button";
import { KeyboardEvent, ChangeEvent, useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base3};
`;

const BoxContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const StyledButton = styled.div`
  padding: 0 ${({ theme }) => theme.dimensions.base3};
`;

interface Props {
  placeholder: string;
  onSearch: (value: string) => void;
}

const SearchBox = (props: Props) => {
  const { placeholder, onSearch } = props;

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <Container>
      <BoxContainer>
        <SearchIcon style={{ fill: theme.colors.lightGray }} />
        <StyledInput
          placeholder={placeholder}
          value={searchValue}
          onKeyDown={handleKeyPress}
          onChange={handleInputChange}
        />
      </BoxContainer>
      <Button onClick={() => onSearch(searchValue)}>
        <StyledButton>Search</StyledButton>
      </Button>
    </Container>
  );
};

export default SearchBox;
