import React from 'react'
import { RunType, useRuns } from 'hooks/useRuns';
import { FlexBox } from 'components/FlexBox';
import { Run } from 'components/Run';
import styled from 'styled-components';
import { Button } from 'components/Button';
import { useModal } from 'hooks/useModal';
import { Modal } from '@mui/material';
import RunForm from 'components/RunForm';
import { IconButton } from 'components/IconButton';

const Container = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`

export const Runs = () => {
  const [runs, fetchRuns] = useRuns();
  const {isOpen, open, close} = useModal();

  return (
    <>
      <Container>
        <FlexBox 
          direction='column' 
          gap={24}
        >
          <div>
            <IconButton
              onClick={open}
            />
          </div>
          { runs.map( run => <Run run={run} key={run.id} />) }
        </FlexBox>
      </Container>
      <Modal
        open={isOpen}
        onClose={close}
      >
        <RunForm 
          callback={() => {close(); fetchRuns();}}
        />
      </Modal>
    </>
  )
}