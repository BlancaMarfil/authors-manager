import BlockHeader from "../BlockHeader";
import BlockContainer from "../BlockContainer";
import SerieSection from "./SerieSection";

const SeriesBlock = () => {
  return (
    <BlockContainer>
      <BlockHeader title="Series" lined />
      <SerieSection title={"Muir Harbour"} />
    </BlockContainer>
  );
};

export default SeriesBlock;
