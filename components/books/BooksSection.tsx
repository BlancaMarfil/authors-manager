import styled from "styled-components";
import SingleBook from "./SingleBook";
import { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import { useIsOverflow } from "../../hooks/useIsOverflow";

const Container = styled.div<{ wrap: string }>`
  display: flex;
  justify-content: center;
  column-gap: ${({ theme }) => theme.dimensions.base5};
  row-gap: ${({ theme }) => theme.dimensions.base4};
  flex-wrap: ${({ wrap }) => wrap};

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    justify-content: flex-start;
    overflow: auto;
    position: relative;
  }
`;

const FadeEffect = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 200px;
  background: linear-gradient(270deg, #fff -10%, transparent);
  pointer-events: none;
  z-index: 1;
`;

interface Props {
  wrap: "wrap" | "no-wrap";
  sendOverflow?: () => void;
}

const BooksSection = (props: Props) => {
  const { wrap, sendOverflow } = props;

  const imgArr = [
    "https://books.google.com/books/content?id=JMd1zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=ScxnAgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71eXf3Tx4ySZRLcO0e6wQJzm1pXOx9nvQigqz3rYkf1sfmbjGvkyznuK89-wKxw6ePD_88TkDFT5_wzWIt-K3jRVCsXfeZBjra6LNVGe-gtIEWdc1dJDbfv4hpKG47zmOIJsUF7&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=be-ZAAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE710ABNVJIY9GDX3myvKuUNJIGHZjJKmeUD57mQlmUZwFLKSdUh0BzKzmuJ7l9xpTnjoCmmebO0fz3iSc8R-C0kLXKXwTYLFsIB3moW3Y4rVRE33gN7I0uy_0ogCBx49lrI7W8WQ&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=_ZWdBAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72kFH4ckIWfINnAW3lYvKrcPgMPZISbKEmztCiw9NKItHwgJ68m_BNK0aU5eRqXdMXc3OIQ34IbdAMt5DXxumQzeP2IP2IJFo-AUlh7GX5kksix3aseC2JcdTj_UfHhj2ZSlg97&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=KAE_CgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70tOT5K022qjDQ8niOPvKLl2bVoTJVhgQiwRtVGYphVDBj3dZFo_EbWyU_hLBEuzY9wzVhnqbqYnzpasgtVWTbNC_KO3-4rbFmYPtKzLgBKxYwScptTCOwamS5gQ8gyzm2Qt9kT&source=gbs_api",
    "https://books.google.com/books/publisher/content?id=fotsBgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70bgGbzv0mKVZsi5JSk9poIXq0SgslrOsKIIO7ssYP6-iGAh-44-RFEFalI8laH_du0Nvue0EMe-ptTJ7xpQgqtLn1-2k2Q4Yzo4397hdid5Yzg6I5KF7xa98QPtwY0vJCnOyC0&source=gbs_api",
  ];

  const ref = useRef();
  const isOverflow = useIsOverflow(ref, (isOverflowFromCallback: any) => {
    console.log("OVERFLOW", isOverflowFromCallback);
  });

  useEffect(() => {
    console.log("ISOVERFLOW EFFECT", isOverflow);
    isOverflow && sendOverflow && sendOverflow();
  }, [isOverflow, sendOverflow]);

  return (
    <>
      <Container wrap={wrap} ref={ref}>
        {imgArr.map((img, i) => (
          <SingleBook
            key={i}
            imgSrc={img}
            title="Wedding at sea"
            author="Melissa Tagg"
          />
        ))}
        {isOverflow && <FadeEffect />}
      </Container>
    </>
  );
};
export default BooksSection;
