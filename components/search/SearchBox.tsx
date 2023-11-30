import styled from "styled-components";
import SearchIcon from "../../public/icons/search.svg";
import CloseIcon from "../../public/icons/close.svg";
import theme from "../../styles/theme";
import Button from "../UI/Button";
import { KeyboardEvent, ChangeEvent, useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: ${({ theme }) => theme.dimensions.base3};
  }
`;

const BoxContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base2};
  margin: ${({ theme }) => theme.dimensions.base2} 0;
  background-color: ${({ theme }) => theme.colors.veryLightGray};
  padding: 0 ${({ theme }) => theme.dimensions.base3};
  border-radius: ${({ theme }) => theme.dimensions.base6};
  height: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: ${({ theme }) => theme.dimensions.base2}
      ${({ theme }) => theme.dimensions.base3};
    height: 100%;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: 0;
  background-color: ${({ theme }) => theme.colors.veryLightGray};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: ${({ theme }) => theme.dimensions.base2};
  }
`;

const StyledButtonWeb = styled.div`
  padding: 0 ${({ theme }) => theme.dimensions.base3};
`;

const StyledButtonMobile = styled.div`
  width: 40px;
  height: 40px;
  padding-top: 8px;
`;

interface Props {
  placeholder: string;
  onSearch: (value: string) => void;
}

const SearchBox = (props: Props) => {
  const { placeholder, onSearch } = props;
  const { isMobile } = useIsMobile();

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

  const handleOnClear = () => {
    setSearchValue("");
  };

  return (
    <Container>
      <BoxContainer>
        {!isMobile && <SearchIcon style={{ fill: theme.colors.lightGray }} />}
        <StyledInput
          placeholder={placeholder}
          value={searchValue}
          onKeyDown={handleKeyPress}
          onChange={handleInputChange}
        />
        <CloseIcon
          style={{ fill: theme.colors.lightGray, cursor: "pointer" }}
          onClick={handleOnClear}
        />
      </BoxContainer>
      {isMobile ? (
        <div style={{ width: "40px", height: "40px" }}>
          <Button buttonStyle="round" onClick={() => onSearch(searchValue)}>
            <StyledButtonMobile>
              <SearchIcon style={{ fill: theme.colors.white }} />
            </StyledButtonMobile>
          </Button>
        </div>
      ) : (
        <Button onClick={() => onSearch(searchValue)}>
          <StyledButtonWeb>Search</StyledButtonWeb>
        </Button>
      )}
    </Container>
  );
};

export default SearchBox;
