import AuthorsBlock from "../../components/authors/AuthorsBlock";
import useIsMobile from "../../hooks/useIsMobile";
import AddAuthor from "../../components/authors/AddAuthor";

const Authors = () => {
  const { isMobile } = useIsMobile();

  return (
    <>
      <AuthorsBlock />
      <AddAuthor />
    </>
  );
};

export default Authors;
