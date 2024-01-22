import styled from 'styled-components'

import { mintGreen } from './variables'

export const SmallMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: ${mintGreen};
  z-index: 2;

  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 30px;
  gap: 15px;
  text-align: start;
`
export const CloseSection = styled.div`
  display: flex;
  justify-content: end;
  width: calc(100vw - 100px);
`
