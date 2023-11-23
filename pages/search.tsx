import styled from "styled-components";
import SearchBox from "../components/search/SearchBox";

const Container = styled.div`
  margin-top: ${({ theme }) => theme.dimensions.base4};
`;

const Search = () => {
  return (
    <Container>
      <SearchBox placeholder="Type a book title, author name, series..." />
    </Container>
  );
};

export default Search;
