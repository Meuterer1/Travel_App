import styled from 'styled-components'

export const Nav = styled.nav`
  align-items: center;
  background: transparent;
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;

  @media(max-width: 550px) {
    flex-wrap: nowrap;
  }
`
