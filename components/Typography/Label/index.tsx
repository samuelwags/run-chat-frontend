import React from 'react'
import styled from 'styled-components'

const BoldSpan = styled.span`
  color: olive;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
`

export const Label = ({text}: {text: string}) => <BoldSpan>{text}</BoldSpan>