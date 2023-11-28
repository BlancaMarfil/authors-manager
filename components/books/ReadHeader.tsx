import styled, { css } from "styled-components";
import BlockContainer from "../BlockContainer";
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
const {
  getBookReadByUser,
} = require("../../graphql/queries/catalogue.graphql");

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

const CloseIconDiv = styled(ReadIconDiv)`
  width: ${({ theme }) => theme.dimensions.base5};
  height: ${({ theme }) => theme.dimensions.base5};
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

  padding: 0 ${({ theme }) => theme.dimensions.base2};
  border-radius: ${({ theme }) => theme.dimensions.base2};
  &:hover {
    ${({ theme }) => theme.boxShadows.button};
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
  padding: ${({ theme }) => theme.dimensions.base}
    ${({ theme }) => theme.dimensions.base2};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.dimensions.base};
`;

interface Props {
  bookId: string;
  dateReadInput?: string;
  onChangeDateRead?: (newValue: string) => void;
  isMobile: boolean;
}

const ReadHeader = (props: Props) => {
  const { bookId, dateReadInput = "", onChangeDateRead, isMobile } = props;

  const { userId } = useContext(AuthContext);
  const [showCalendarInput, setShowCalendarInput] = useState(false);

  const isRead = dateReadInput !== "";
  const dateRead = parse(dateReadInput, "dd/MM/yyyy", new Date());
  const readColor = isRead ? theme.colors.lightGray : theme.colors.sunsetRed;
  const readText = isRead ? "Already read" : "Not Read yet";
  const buttonText = isRead ? "Mark as unread" : "Mark as read";

  const [addBook] = useAddBookMutation();
  const [removeBook] = useRemoveBookMutation();

  const addBookData = (date: Date) => {
    const stringDate = format(date, "dd/MM/yyyy");
    addBook({
      variables: { userId: userId, bookId: bookId, dateRead: stringDate },
      refetchQueries: [
        {
          query: getBookReadByUser,
          variables: { userId: userId, bookId: bookId },
        },
      ],
    });
    onChangeDateRead(stringDate);
  };

  const handleBookmark = () => {
    if (isRead) {
      removeBook({
        variables: { userId: userId, bookId: bookId },
        refetchQueries: [
          {
            query: getBookReadByUser,
            variables: { userId: userId, bookId: bookId },
          },
        ],
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
      {!isMobile && (
        <BlockContainer>
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
                  <DateText
                    onClick={() => setShowCalendarInput(!showCalendarInput)}
                  >
                    {format(dateRead, "dd/MM/yyyy")}
                  </DateText>
                )}
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
