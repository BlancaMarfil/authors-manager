import BlockContainer from "../containers/BlockContainer";
import BlockHeader from "../blocks/BlockHeader";

interface Props {
  blockTitle: string;
  children: JSX.Element | JSX.Element[];
}

const BookShelfBlock = (props: Props) => {
  const { blockTitle, children } = props;

  return (
    <BlockContainer>
      <BlockHeader title={blockTitle} lined />
      <>{children}</>
    </BlockContainer>
  );
};

export default BookShelfBlock;
