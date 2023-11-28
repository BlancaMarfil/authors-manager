import BlockHeader from "../BlockHeader";
import BlockContainer from "../BlockContainer";
import SerieSection from "./SerieSection";
import {
  useSearchGoogleBooksByAuthorQuery,
  useSearchGoogleBooksQuery,
} from "../../graphql/generated";
import { useEffect, useState } from "react";
import { getSeriesFromBooks } from "../../lib/utils/bookFunctions";
import { Series } from "../../types/types";

interface Props {
  blockTitle: string;
  series: Series[];
}

const SeriesBlock = (props: Props) => {
  const { blockTitle, series } = props;

  return (
    <BlockContainer>
      <BlockHeader title={blockTitle} lined />
      <>
        {series.map((serie, i) => (
          <SerieSection key={i} title={serie.name} seriesBooks={serie.books} />
        ))}
      </>
    </BlockContainer>
  );
};

export default SeriesBlock;
