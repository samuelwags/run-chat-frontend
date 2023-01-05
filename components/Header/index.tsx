import { Button } from 'components/Button';
import { FlexBox } from 'components/FlexBox';
import { Logout } from 'components/Logout';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const HeaderButtons = styled.div`

`

const FlexSpacer = styled.div`
  flex-grow: 1;
`

export const Header = ({
  loggedIn
}: {
  loggedIn?: boolean
}) => {
  const router = useRouter();

  return (
    <FlexBox gap={24}>
      <h2 style={{color: 'olive'}}>Run Chat</h2>
      {loggedIn && (
        <>
          <FlexSpacer />
          <Button 
            label='Add Run'
            onClick={() => router.push('/addRun')}
          />
          <Logout />
        </>
      )}
    </FlexBox>
  )
}

