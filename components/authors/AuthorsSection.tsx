import styled, { css } from "styled-components";
import SingleAuthor, { NewAuthorSection } from "./SingleAuthor";
import theme from "../../styles/theme";
import { useGetAuthorsByUserIdQuery } from "../../graphql/generated";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useIsMobile from "../../hooks/useIsMobile";

const BlockContent = styled.div<{ $truncate: string }>`
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
    ${({ $truncate }) =>
      $truncate === "true" &&
      css`
        flex-wrap: nowrap;
        overflow: hidden;
      `}
  }
`;

interface Props {
  authorNames: string[];
  truncate?: boolean;
  color?: string;
  showNewAuthor?: boolean;
  searchTheme?: boolean;
}

const AuthorsSection = (props: Props) => {
  const {
    authorNames,
    truncate = false,
    color = theme.colors.white,
    showNewAuthor = false,
    searchTheme = false,
  } = props;

  const { isMobile } = useIsMobile();

  const numberToShow = isMobile ? 6 : authorNames?.length;

  return (
    <BlockContent $truncate={(truncate && !isMobile).toString()}>
      {authorNames?.map(
        (authorName, i) =>
          i < numberToShow && (
            <SingleAuthor
              key={i}
              authorName={authorName}
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
