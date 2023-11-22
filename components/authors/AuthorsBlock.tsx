import BlockContainer from "../BlockContainer";
import BlockHeader from "../BlockHeader";
import ColoredBlockContainer from "../ColoredBlockContainer";
import theme from "../../styles/theme";
import Button from "../UI/Button";
import { useRouter } from "next/router";
import AuthorsSection from "./AuthorsSection";

interface Props {
  isMobile: boolean;
  origin: "home" | "authors";
}

const AuthorsBlock = (props: Props) => {
  const { isMobile, origin } = props;

  const router = useRouter();

  const imgArray = [
    "https://play-lh.googleusercontent.com/LSKVFRARxJltAbFMAbCOdgycL3p96M7S2IVX_rf7SAxb0JB492DjTW1hCV6nIZRujQ=w7680-h4320-rw",
    "https://play-lh.googleusercontent.com/AZXnzSPOoq_O0DmJhie3K26zIfByZMn5L0G1zhv2Qax2ub7F_W0QRbpipQwJ5ea-eQ=w7680-h4320-rw",
    "https://play-lh.googleusercontent.com/NGQTAEyoor1vztjpGQnH0G-sttzitmPVVJiqUZJn9wodo5SeBdCyYo-yPFIkSKgE7w=w7680-h4320-rw",
    "https://i0.wp.com/ken-follett.com/wp-content/uploads/2023/05/KF-2023-Author-Photo-Portrait-Please-Credit-Olivier-Favre.png?w=961&ssl=1",
    "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    "https://learn.zoner.com/wp-content/uploads/2019/01/how-can-you-get-good-profile-photos-watch-for-these-6-things.jpg",
    "https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg",
  ];

  const numberToShow = origin === "home" ? (isMobile ? 6 : 5) : imgArray.length;

  // Actions
  const onViewAllPressed = () => {
    router.push("/authors");
  };

  return (
    <BlockContainer>
      <BlockHeader
        title={"Your Authors"}
        rightElement={!isMobile && origin === "home" && "View all"}
        onPressed={onViewAllPressed}
      />

      <ColoredBlockContainer
        color={theme.colors.oceanBlue}
        mobileColor={theme.colors.oceanBlue}
      >
        <AuthorsSection
          images={imgArray}
          numberToShow={numberToShow}
          showNewAuthor
        />
        {isMobile && origin === "home" && <Button>See all</Button>}
      </ColoredBlockContainer>
    </BlockContainer>
  );
};

export default AuthorsBlock;
