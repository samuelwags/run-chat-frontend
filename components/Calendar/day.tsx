import {ReactElement, ReactNode} from 'react';
import { Dayjs } from "dayjs"
import styled from "styled-components"
import { FlexBox } from 'components/FlexBox';

const DayContainer = styled.div<{dim: boolean}>`
  position: relative;
  border: 2px solid olive;
  border-radius: 3px;
  min-height: 125px;
  padding: 6px;
  background: rgba(238, 232, 170, 0.1);
  display: flex;
  flex-direction: column;
  gap: 6px;

  ${({dim}) => dim ? `
    opacity: 0.35;
    background: none;
  ` : ''};
`

const ButtonContainer = styled.div`

`

const DateLabel = styled.div`
  border-bottom: 1px solid olive;
  padding: 0 0 4px 0;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 28px;
`

export default function Day({
  children,
  day,
  outOfMonth,
  buttons
}: {
  children: ReactNode;
  day: Dayjs;
  outOfMonth?: boolean;
  buttons?: ReactElement[] | null
}) {
  return (
    <DayContainer dim={!!outOfMonth}>
      <DateLabel>
        <p>{day.date()}</p>
        { buttons }
      </DateLabel>
      <FlexBox gap={4} align='start' justify='start' direction='column'>
        {children}
      </FlexBox>
    </DayContainer>
  )
}