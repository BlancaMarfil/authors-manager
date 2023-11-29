import styled, { css } from "styled-components";
import BlockContainer from "../BlockContainer";
import BlockHeader from "../BlockHeader";
import ColoredBlockContainer from "../ColoredBlockContainer";
import theme from "../../styles/theme";
import Button from "../UI/Button";
import { useRouter } from "next/router";
import AuthorsSection from "./AuthorsSection";
import useIsMobile from "../../hooks/useIsMobile";
import { useGetAuthorsByUserIdQuery } from "../../graphql/generated";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

interface Props {
  truncate?: boolean;
}

const AuthorsBlock = (props: Props) => {
  const { truncate = false } = props;
  const { isMobile } = useIsMobile();
  const { userId } = useContext(AuthContext);

  const router = useRouter();

  const { data: dataAuthors, loading: loadingAuthors } =
    useGetAuthorsByUserIdQuery({ variables: { userId: userId } });
  const authorNames: string[] = dataAuthors?.authorsByUserId;

  // Actions
  const onViewAllPressed = () => {
    router.push("/authors");
  };

  return (
    <BlockContainer>
      <BlockHeader
        title={"Your Authors"}
        rightElement={!isMobile && truncate && "View all"}
        onPressed={onViewAllPressed}
      />

      <ColoredBlockContainer
        color={theme.colors.oceanBlue}
        mobileColor={theme.colors.oceanBlue}
      >
        <AuthorsSection
          authorNames={authorNames}
          truncate={truncate}
          showNewAuthor
        />
        {isMobile && <Button>See all</Button>}
      </ColoredBlockContainer>
    </BlockContainer>
  );
};

export default AuthorsBlock;
