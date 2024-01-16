import styled from 'styled-components'
import { blackishGreen } from './variables'

export const ListItem = styled.li`
  color: ${blackishGreen};

  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  list-style: none;

  margin-bottom: 12px;

  opacity: 0.7;
`
export const ListHeadline = styled(ListItem)`
  font-size: 16px;
  font-weight: 700;
  opacity: 1;
  margin-bottom: 16px;
`
export const UnList = styled.ul`
  @media (max-width: 1100px) {
    width: 30%;
  }

  @media (max-width: 800px) {
    width: 25%;
  }

  @media (max-width: 600px) {
    width: 40%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`
