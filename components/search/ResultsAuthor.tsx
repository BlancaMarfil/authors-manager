import styled from "styled-components";
import AuthorsSection from "../authors/AuthorsSection";
import theme from "../../styles/theme";
import Button from "../UI/Button";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 ${({ theme }) => theme.dimensions.base2}
    ${({ theme }) => theme.dimensions.base3};
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 0 ${({ theme }) => theme.dimensions.base3};
    justify-content: flex-start;
    column-gap: ${({ theme }) => theme.dimensions.base7};
    row-gap: ${({ theme }) => theme.dimensions.base3};
  }
`;

const ButtonDiv = styled.div`
  margin-top: ${({ theme }) => theme.dimensions.base};
  margin-left: ${({ theme }) => theme.dimensions.base2};
`;

const StyledButton = styled.div`
  padding: ${({ theme }) => theme.dimensions.base05}
    ${({ theme }) => theme.dimensions.base3};
`;

const ResultsAuthor = () => {
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

  return (
    <Container>
      <AuthorsSection
        images={imgArray}
        numberToShow={imgArray.length}
        color={theme.colors.black}
        searchTheme
      />
      <ButtonDiv>
        <Button buttonStyle="secondary">
          <StyledButton>Load More</StyledButton>
        </Button>
      </ButtonDiv>
    </Container>
  );
};

export default ResultsAuthor;
