import styled from 'styled-components'
import { blackishGreen } from './variables'

interface ButtonProps {
  background?: string
  color?: string
  hovered?: string
  hovered_color?: string
}

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${props => props.background};
  border: none;
  border-radius: 8px;
  color: ${props => (props.color ? props.color : blackishGreen)};
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 48px;
  justify-content: center;
  padding: 3px 24px;
  flex: 1 0 0;

  &:hover {
    background: ${props => props.hovered};
    color: ${props => props.hovered_color};
    cursor: pointer;
  }
`

export const SmallButton = styled(Button)`
  flex: 0 0 0;

  @media (max-width: 1035px) {
    flex: 1 0 0;
  }
`

export const SharpButton = styled(Button)`
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 4px;
  gap: 10px;
  padding: 3px 16px;
  max-width: 13%;

  @media (max-width: 1350px) {
    max-width: 25%;
  }

  @media (max-width: 850px) {
    max-width: 45%;
  }
`

export const FullWidthButton = styled(SharpButton)`
  min-width: 100%;
`

export const OutlinedButton = styled(SharpButton)`
  border: 1px solid ${props => props.background};
  background: transparent;

  &:hover {
    background: ${props => props.background};
  }
`
