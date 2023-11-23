import styled from "styled-components";
import BlockContainer from "../BlockContainer";
import Bookmark from "../../public/icons/bookmark.svg";
import Calendar from "../../public/icons/edit_calendar.svg";
import theme from "../../styles/theme";
import Button from "../UI/Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -${({ theme }) => theme.dimensions.base2};
  }
`;

const GroupDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base3};
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding-bottom: ${({ theme }) => theme.dimensions.base2};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    justify-content: flex-start;
    width: fit-content;
    border: 0;
    padding: 0;
  }
`;

const ReadIconDiv = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.dimensions.base7};
  height: ${({ theme }) => theme.dimensions.base7};
  border-radius: 50%;
  background-color: ${({ color }) => color};
  cursor: pointer;

  &:hover {
    ${({ theme }) => theme.boxShadows.button};
  }
`;

const ReadText = styled.p<{ color: string }>`
  font-size: ${({ theme }) => theme.dimensions.base6};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ color }) => color};
  margin-top: ${({ theme }) => theme.dimensions.base};
`;

const DateText = styled.p`
  font-size: ${({ theme }) => theme.dimensions.base5};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.lightGray};
`;

const ToReadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.oceanBlue};
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: ${({ theme }) => theme.dimensions.base2}
    ${({ theme }) => theme.dimensions.base2};
`;

interface Props {
  isRead: boolean;
  isMobile: boolean;
}

const ReadHeader = (props: Props) => {
  const { isRead, isMobile } = props;

  const readColor = isRead ? theme.colors.lightGray : theme.colors.sunsetRed;
  const readText = isRead ? "Already read" : "Mark as read";
  const buttonText = isRead ? "Mark as unread" : "Mark as read";

  return (
    <>
      {!isMobile && isRead && (
        <BlockContainer>
          <Container>
            {!isMobile && (
              <GroupDiv>
                <ReadIconDiv color={readColor}>
                  <Bookmark
                    width={40}
                    height={40}
                    style={{ fill: theme.colors.white }}
                  />
                </ReadIconDiv>
                <ReadText color={readColor}>{readText}</ReadText>
              </GroupDiv>
            )}

            {isRead && (
              <GroupDiv>
                <DateText>27/03/2023</DateText>
                <ReadIconDiv color={theme.colors.lightGray}>
                  <Calendar
                    width={40}
                    height={40}
                    style={{ fill: theme.colors.white }}
                  />
                </ReadIconDiv>
              </GroupDiv>
            )}
          </Container>
        </BlockContainer>
      )}
      {isMobile && (
        <ToReadDiv>
          <Button buttonStyle="terciary">{buttonText}</Button>
        </ToReadDiv>
      )}
    </>
    
  );
};

export default ReadHeader;
