import { InferredBook, Series } from "../../types/types";

export const getSeriesFromBooks = (books: InferredBook[]) => {
  let series: Series = {};

  books.forEach((book) => {
    const match = book.volumeInfo.title.match(
      /^(.*?)\s*\(([^)]+)\s*Book\s*#(\d+)\)$/
    );

    if (match) {
      const [, bookTitle, seriesName, order] = match;

      if (!series[seriesName]) {
        series[seriesName] = { name: seriesName, books: [] };
      }

      series[seriesName].books.push({ order: parseInt(order), book });
    }
  });

  const seriesArray: Series[] = Object.values(series);

  const orderedBooksSeries: Series[] = seriesArray.map((serie) => {
    const orderedBooks = Object.values(serie.books).sort(
      (a, b) => a.order - b.order
    );
    return { name: serie.name, books: orderedBooks };
  });
  return orderedBooksSeries;
};
