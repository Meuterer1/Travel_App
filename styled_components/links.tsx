import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { blackishGreen } from './variables'

interface LinkProps {
  color?: string
  hovered_color?: string
}

export const ButtonLink = styled(Link)<LinkProps>`
  color: ${props => (props.color ? props.color : blackishGreen)};
  padding-right: 32px;
  text-decoration: none;
  transition: 0.7s ease;

  &:hover,
  &:focus {
    color: ${props => props.hovered_color};
    cursor: pointer;
  }
`

export const PrimaryLink = styled(Link)<LinkProps>`
  &:hover {
    color: ${props => props.hovered_color};
    cursor: pointer;
  }
`
