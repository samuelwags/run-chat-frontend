import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid olive;
  padding: 3px 7px;
  border-radius: 8px;
  background: olive;
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
`

export const Tag = ({
  text
}: {
  text: string
}) => (
  <Container>
    {text}
  </Container>
)