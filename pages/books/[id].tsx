import BookBlock from "../../components/BookBlock";
import ReadHeader from "../../components/books/ReadHeader";
import SeriesBlock from "../../components/books/SeriesBlock";
import useIsMobile from "../../hooks/useIsMobile";

const Book = () => {
  const isRead = false;
  const { isMobile } = useIsMobile();

  return (
    <>
      <ReadHeader isRead={isRead} isMobile={isMobile} />
      <BookBlock isMobile={isMobile} />
      <SeriesBlock title="Other books in this series" />
    </>
  );
};

export default Book;
