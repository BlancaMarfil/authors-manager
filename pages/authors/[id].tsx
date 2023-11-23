import styled from "styled-components";
import AuthorNameBlock from "../../components/authors/AuthorNameBlock";
import { useRouter } from "next/router";
import SeriesBlock from "../../components/books/SeriesBlock";
import StandAloneBlock from "../../components/books/StandAloneBlock";

const Author = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <AuthorNameBlock />
      <SeriesBlock />
      <StandAloneBlock />
    </>
  );
};

export default Author;
