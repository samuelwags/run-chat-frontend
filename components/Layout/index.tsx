import Head from 'next/head'
import React, { ReactNode, useEffect } from 'react'
import { useSession } from "hooks/useSession";
import { Header } from 'components/Header';
import styled from 'styled-components';
import { FlexBox } from 'components/FlexBox';

const Page = styled.div`
  padding: 24px;
`

export const Layout = ({
  unprotected = false,
  children
}: {
  unprotected?: boolean;
  children: ReactNode;
}) => {
  const session = useSession(unprotected);

  return (
    <>
      <Head>
        <title>Run Chat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Page>
          <FlexBox gap={36} direction='column'>
            <Header loggedIn={session?.is_logged_in} />
            {children}
          </FlexBox>
        </Page>
      </main>
    </>
  )
}