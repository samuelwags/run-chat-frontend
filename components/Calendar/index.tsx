import dayjs, { Dayjs } from "dayjs";
import { ReactElement, useCallback, useMemo, useState } from "react";
import UpdateLocale from 'dayjs/plugin/updateLocale';
import ArraySupport from 'dayjs/plugin/arraySupport';
import styled from 'styled-components';
import Day from "./day";
import { FlexBox } from "components/FlexBox";
import { Button } from "components/Button";

dayjs.extend(UpdateLocale)
dayjs.extend(ArraySupport)

const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;
type Month = typeof months[number];

const years = [2023, 2024] as const;
type Year = typeof years[number];

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
`

export default function Calendar({
  getButtons = (date) => null,
  getDayContents
}: {
  getButtons?: (arg0: Dayjs) => ReactElement[] | null
  getDayContents?: (arg0: Dayjs) => ReactElement[] | null
}) {
  const [month, setMonth] = useState<Month>(dayjs().month() as Month);
  const [year, setYear] = useState<Year>(dayjs().year() as Year);

  const prevYear = useCallback(() => {
    if (year == 2023) return false;
    else {
      setYear( year => (year - 1) as Year);
      return true;
    }
  }, [year]);

  const nextYear = useCallback(() => {
    if (year >= 2024) return false;
    else  {
      setYear( year => (year + 1) as Year);
      return true;
    }
  }, [year]);

  const prevMonth = useCallback(() => {
    if (month === 0 ) {
      if ( prevYear() ) setMonth(11);
    }
    else setMonth( month => (month - 1) as Month);
  }, [month, prevYear]);

  const nextMonth = useCallback(() => {
    if (month === 11 ) {
      if (nextYear()) setMonth(0);
    } 
    else setMonth( month => (month + 1) as Month);
  }, [month, nextYear]);

  const startDate = useMemo(() => {
    const firstOfMonth = dayjs([year, month]);
    const sundayBefore = firstOfMonth.subtract(firstOfMonth.day(), 'day');
    return sundayBefore;
  }, [month, year]);

  const dates = useMemo(
    () => Array.from(Array(42))
      .map( (_, index) => startDate.add(index, 'day'))
    , [startDate]
  )

  return (
    <>
      <FlexBox
        align='center'
        justify='center'
        width='100%'
        gap={12}
      >
        <Button label='Previous Month' onClick={prevMonth} />
        <h4>{dayjs([year, month]).format('MMMM YYYY')}</h4>
        <Button label='Next Month' onClick={nextMonth} />
      </FlexBox>
      <CalendarGrid>
        {dates.map( date => (
          <Day key={date.toString()} buttons={getButtons(date)} day={date} outOfMonth={date.month() !== month}>
            {getDayContents?.(date)}
          </Day>
        ))}
      </CalendarGrid>
    </>
  )
}