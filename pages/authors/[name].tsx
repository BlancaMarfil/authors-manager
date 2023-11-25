import styled from "styled-components";
import AuthorNameBlock from "../../components/authors/AuthorNameBlock";
import { useRouter } from "next/router";
import SeriesBlock from "../../components/books/SeriesBlock";
import StandAloneBlock from "../../components/books/StandAloneBlock";

const Author = () => {
  const router = useRouter();
  const name = router.query.name as string;

  return (
    <>
      <AuthorNameBlock authorName={name} />
      <SeriesBlock title="Series" />
      <StandAloneBlock />
    </>
  );
};

export default Author;
