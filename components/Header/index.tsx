import { Button } from 'components/Button';
import { FlexBox } from 'components/FlexBox';
import { Logout } from 'components/Logout';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

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
      <h2
        onClick={() => router.push('/')}
        style={{color: 'olive'}}
      >Run Chat</h2>
      {loggedIn && (
        <>
          <FlexSpacer />
          <Button 
            label='My Profile'
            onClick={() => router.push('/profile')}
          />
          <Logout />
        </>
      )}
    </FlexBox>
  )
}

