import styled from 'styled-components';

export const FlexBox = styled.div<{
  gap: number, 
  direction?: 'column' | 'row',
  width?: string,
  height?: string,
  align?: 'center' | 'start' | 'end' | 'stretch',
  justify?: 'start' | 'center' | 'stretch'
}>`
  display: flex;
  flex-direction: ${({direction}) => direction || 'row'};
  gap: ${({gap}) => gap}px;

  width: ${({width}) => width || '100%'};
  ${({height}) => height ? `height: ${height};` : ``}
  ${({align}) => align ? `align-items: ${align};` : ``}
  ${({justify}) => justify ? `justify-content: ${justify};` : ``}
`