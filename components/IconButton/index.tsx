import React from 'react'
import styled from 'styled-components'

const MyButton = styled.button`
  color: olive;
  border: 1px olive dashed;
  background-color: transparent;
  border-radius: 14px;
  height: 28px;
  width: 28px;
  transition: 0.3s ease background, color 0.3s ease;
  &:hover {
    cursor: pointer;
    background: rgba(180, 180, 0, 0.3);
    color: black;
  }
`

export const IconButton = ({
  onClick
}: {
  onClick: () => void;
}) => {
  return (
    <MyButton
      type='button'
      onClick={onClick}
    >
      +
    </MyButton>
  )
}