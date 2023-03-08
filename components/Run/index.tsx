import { FlexBox } from 'components/FlexBox';
import { Tag } from 'components/Tag';
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
    const nonZeroUnits = unitTypes.filter( key =>  time.get(key) > 0 );

    if (nonZeroUnits.length === 0) return 'under a minute';

    return nonZeroUnits
      .map( key => dayjs.duration(time.get(key), key).humanize())
      .join(' and ');
  }, [run]);

  const distanceString = useMemo(() => {
    if (!run?.distance) return 'an unknown distance'

    if (run.distance === 1) return '1 mile';

    return `${run.distance} miles`;
  }, [run])

  const prs = Object.entries(run.prs)
    .filter( ([cat, pr]) => !!pr )

  return (
    <Container>
      <FlexBox gap={6} direction='column'>
        {prs.length > 0 && (
          <FlexBox gap={6} direction='row' height='30px' align='start'>
            {prs.map(([cat, pr]) => <Tag key={cat} text={`${cat.toUpperCase()} PR!`} />)}
          </FlexBox>
        )}
        {run?.date && <Label text={dayjs(run.date).format('MM/DD/YYYY')}/>}
        
        <p>{run?.user?.user_name} ran {distanceString} in {timeString}</p>
        {run?.description && <p>+ {run.description}</p>}
      </FlexBox>
    </Container>
  )
}