import { FlexBox } from 'components/FlexBox';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 16px;
  background: white;
  flex-grow: 1;
  border: 2px solid olive;
  padding: 40px;
  position: relative;
`

const LabelContainer = styled.div`
  background: white;
  border-radius: 10px;

  padding: 2px 12px;;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

export const Tile = ({
  label,
  children
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <Container>
      {label && (
        <LabelContainer>
          <p>{label}</p>
        </LabelContainer>
      )}
      <FlexBox 
        gap={18} 
        direction='column' 
        align='center' 
        justify='center'
      >
        {children}
      </FlexBox>
    </Container>
  )
}