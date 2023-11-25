import styled, { css } from "styled-components";
import BlockContainer from "../BlockContainer";
import BlockHeader from "../BlockHeader";
import ColoredBlockContainer from "../ColoredBlockContainer";
import theme from "../../styles/theme";
import Button from "../UI/Button";
import { useRouter } from "next/router";
import AuthorsSection from "./AuthorsSection";
import useIsMobile from "../../hooks/useIsMobile";

interface Props {
  truncate?: boolean;
}

const AuthorsBlock = (props: Props) => {
  const { truncate = false } = props;
  const { isMobile } = useIsMobile();

  const router = useRouter();

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
        <AuthorsSection truncate={truncate} showNewAuthor />
        {isMobile && <Button>See all</Button>}
      </ColoredBlockContainer>
    </BlockContainer>
  );
};

export default AuthorsBlock;
