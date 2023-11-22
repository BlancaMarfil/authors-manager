import styled from "styled-components";
import SingleAuthor, { NewAuthorSection } from "./SingleAuthor";
import theme from "../../styles/theme";

const BlockContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.dimensions.base}
    ${({ theme }) => theme.dimensions.base2};
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 0 ${({ theme }) => theme.dimensions.base3};
    justify-content: flex-start;
    column-gap: ${({ theme }) => theme.dimensions.base7};
    row-gap: ${({ theme }) => theme.dimensions.base3};
  }
`;

interface Props {
  images: string[];
  numberToShow: number;
  color?: string;
  showNewAuthor?: boolean;
  searchTheme?: boolean;
}

const AuthorsSection = (props: Props) => {
  const {
    images,
    numberToShow,
    color = theme.colors.white,
    showNewAuthor = false,
    searchTheme = false,
  } = props;

  return (
    <BlockContent>
      {images.map(
        (img, i) =>
          i < numberToShow && (
            <SingleAuthor
              imgSrc={img}
              name={"J. K. Rowling"}
              color={color}
              searchTheme={searchTheme}
            />
          )
      )}

      {showNewAuthor && <NewAuthorSection />}
    </BlockContent>
  );
};

export default AuthorsSection;
