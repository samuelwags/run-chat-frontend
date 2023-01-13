import React, {ReactElement} from 'react';
import { Dayjs } from 'dayjs';

export const DateRange = ({
  start,
  end
}: {
  start: Dayjs,
  end: Dayjs
}): ReactElement => (
  <span>{start.format('MM/DD')}–{end.format('MM/DD')}</span>
)