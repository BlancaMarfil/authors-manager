import BlockHeader from "../BlockHeader";
import BlockContainer from "../BlockContainer";
import SerieSection from "./SerieSection";

interface Props {
  title: string;
}

const SeriesBlock = (props: Props) => {
  const { title } = props;

  return (
    <BlockContainer>
      <BlockHeader title={title} lined />
      <SerieSection title={"Muir Harbour"} />
      <SerieSection title={"Morning Sun"} />
    </BlockContainer>
  );
};

export default SeriesBlock;
