import styled from 'styled-components';

export const FlexBox = styled.div<{
  gap: number, 
  direction?: 'column' | 'row',
  width?: string
}>`
  display: flex;
  flex-direction: ${({direction}) => direction || 'row'};
  gap: ${({gap}) => gap}px;
  width: ${({width}) => width || '100%'};
`