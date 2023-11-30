import styled, { css } from "styled-components";
import BlockContainer from "../containers/BlockContainer";
import Bookmark from "../../public/icons/bookmark.svg";
import Calendar from "../../public/icons/edit_calendar.svg";
import Close from "../../public/icons/close.svg";
import theme from "../../styles/theme";
import Button from "../UI/Button";
import {
  useAddBookMutation,
  useRemoveBookMutation,
} from "../../graphql/generated";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse, parseISO } from "date-fns";
import useIsMobile from "../../hooks/useIsMobile";
const {
  getBookReadByUser,
  getLastBookRead,
  getBooksByUserId,
} = require("../../graphql/queries/catalogue.graphql");

const StyledBlockContainer = styled(BlockContainer)`
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: ${({ theme }) => theme.dimensions.base3} 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -${({ theme }) => theme.dimensions.base2};
  }
`;

const GroupDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.dimensions.base};
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  position: absolute;
  top: ${({ theme }) => theme.dimensions.base8};
  left: 0;
  right: 0;
  padding-top: ${({ theme }) => theme.dimensions.base};
  padding-bottom: ${({ theme }) => theme.dimensions.base};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: ${({ theme }) => theme.dimensions.base3};
    justify-content: flex-start;
    width: fit-content;
    position: relative;
    top: 0;
    border: 0;
    padding: 0;
    margin: 0;
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

const CloseIconDiv = styled(ReadIconDiv)`
  width: ${({ theme }) => theme.dimensions.base4};
  height: ${({ theme }) => theme.dimensions.base4};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: ${({ theme }) => theme.dimensions.base5};
    height: ${({ theme }) => theme.dimensions.base5};
  }
`;

const ReadText = styled.p<{ color: string }>`
  font-size: ${({ theme }) => theme.dimensions.base6};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ color }) => color};
  margin-top: ${({ theme }) => theme.dimensions.base};
`;

const DateDiv = styled.div`
  display: flex;
`;

const DateText = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.lightGray};
  padding: 0 ${({ theme }) => theme.dimensions.base2};
  border-radius: ${({ theme }) => theme.dimensions.base2};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: ${({ theme }) => theme.dimensions.base5};
    font-weight: ${({ theme }) => theme.fontWeights.bold};

    &:hover {
      ${({ theme }) => theme.boxShadows.button};
    }
  }
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

export const StyledDatePicker = styled(DatePicker)`
  width: 160px;
  padding: ${({ theme }) => theme.dimensions.base05} 0;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.dimensions.base};

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: ${({ theme }) => theme.dimensions.base}
      ${({ theme }) => theme.dimensions.base2};
  }
`;

const StyledHeaderMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  margin: 0 -16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 20px;
`;

interface Props {
  bookId: string;
  dateReadInput?: string;
  onChangeDateRead?: (newValue: string) => void;
}

const ReadHeader = (props: Props) => {
  const { isMobile } = useIsMobile();
  const { bookId, dateReadInput = "", onChangeDateRead } = props;

  const { userId } = useContext(AuthContext);
  const [showCalendarInput, setShowCalendarInput] = useState(false);

  const isRead = dateReadInput !== "";
  const dateRead = parse(dateReadInput, "dd/MM/yyyy", new Date());
  const readColor = isRead ? theme.colors.lightGray : theme.colors.sunsetRed;
  const readText = isRead ? "Already read" : "Not Read yet";
  const buttonText = isRead ? "Mark as unread" : "Mark as read";

  const [addBook] = useAddBookMutation();
  const [removeBook] = useRemoveBookMutation();

  const queriesToRefetch = [
    {
      query: getBookReadByUser,
      variables: { userId: userId, bookId: bookId },
    },
    {
      query: getLastBookRead,
      variables: { userId: userId },
    },
    {
      query: getBooksByUserId,
      variables: { userId: userId },
    },
  ];

  const addBookData = (date: Date) => {
    const stringDate = format(date, "dd/MM/yyyy");
    addBook({
      variables: { userId: userId, bookId: bookId, dateRead: stringDate },
      refetchQueries: queriesToRefetch,
    });
    onChangeDateRead(stringDate);
  };

  const handleBookmark = () => {
    if (isRead) {
      removeBook({
        variables: { userId: userId, bookId: bookId },
        refetchQueries: queriesToRefetch,
      });
      onChangeDateRead("");
    } else {
      addBookData(new Date());
    }
  };

  const handleDateChange = (date: Date) => {
    addBookData(date);
    setShowCalendarInput(false);
  };

  return (
    <>
      {
        <StyledBlockContainer>
          <Container>
            {!isMobile && (
              <GroupDiv>
                <ReadIconDiv color={readColor} onClick={handleBookmark}>
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
                {showCalendarInput ? (
                  <>
                    <StyledDatePicker
                      selected={dateRead}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      maxDate={new Date()}
                    />
                    <CloseIconDiv
                      color={theme.colors.lightGray}
                      onClick={() => setShowCalendarInput(false)}
                    >
                      <Close style={{ fill: theme.colors.white }} />
                    </CloseIconDiv>
                  </>
                ) : (
                  <DateDiv
                    onClick={() => setShowCalendarInput(!showCalendarInput)}
                  >
                    <DateText>
                      {isMobile && "Read on"} {format(dateRead, "dd/MM/yyyy")}
                    </DateText>
                    {isMobile && (
                      <Calendar style={{ fill: theme.colors.lightGray }} />
                    )}
                  </DateDiv>
                )}
              </GroupDiv>
            )}
          </Container>
        </StyledBlockContainer>
      }
      {isMobile && (
        <>
          <ToReadDiv>
            <Button
              buttonStyle={isRead ? "terciary" : "primary"}
              onClick={handleBookmark}
            >
              {buttonText}
            </Button>
          </ToReadDiv>
        </>
      )}
    </>
  );
};

export default ReadHeader;
