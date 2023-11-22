import styled from "styled-components";
import AuthorsBlock from "../components/authors/AuthorsBlock";
import useIsMobile from "../hooks/useIsMobile";
import AddAuthor from "../components/authors/AddAuthor";

const Authors = () => {
  const { isMobile } = useIsMobile();

  return (
    <>
      <AuthorsBlock isMobile={isMobile} origin="authors" />
      <AddAuthor />
    </>
  );
};

export default Authors;
