import { FlexBox } from 'components/FlexBox';
import { Label } from 'components/Typography/Label';
import dayjs from 'dayjs';
import duration, { DurationUnitType } from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { RunType } from 'hooks/useRuns';
import React, { useMemo } from 'react'
import styled from 'styled-components';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const Container = styled.div`
  border-left: 2px solid olive;
  padding-left: 12px;
`

export const Run = ({
  run
}: {
  run: RunType
}) => {
  const timeString = useMemo(() => {
    if (!run?.time) return 'an unknown time'

    const time = dayjs.duration({
      seconds: run.time % 60,
      minutes: Math.floor(run.time / 60) % 60, 
      hours: Math.floor(run.time / 3600)
    });

    const unitTypes = ['hours', 'minutes'] as DurationUnitType[];
    return unitTypes
      .filter( key =>  time.get(key) > 0 )
      .map( key => dayjs.duration(time.get(key), key).humanize())
      .join(' and ');
  }, [run]);

  const distanceString = useMemo(() => {
    if (!run?.distance) return 'an unknown distance'

    if (run.distance === 1) return '1 mile';

    return `${run.distance} miles`;
  }, [run])



  return (
    <Container>
      <FlexBox gap={6} direction='column'>
        {run?.date && <Label text={run.date}/>}
        <p>{run?.user?.user_name} ran {distanceString} in {timeString}</p>
        {run?.description && <p>+ {run.description}</p>}
      </FlexBox>
    </Container>
  )
}