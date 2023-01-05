import React from 'react'
import styled from 'styled-components'

const MyButton = styled.button`
  color: olive;
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  border-radius: 4px;
  padding: 8px 16px;
  transition: 0.3s ease background, color 0.3s ease;
  &:hover {
    cursor: pointer;
    background: rgba(238, 232, 170, 0.3);
    color: black;
  }
`

export const Button = ({
  label,
  onClick
}: {
  label: string,
  onClick: () => void;
}) => {
  return (
    <MyButton
      type='button'
      onClick={onClick}
    >
      {label}
    </MyButton>
  )
}