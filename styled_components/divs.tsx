import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HeaderDiv = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url('/assets/landing_background.png');
  background-position: center;
  background-size: cover;
  border: none;
  border-radius: 24px;
  height: 599px;
  margin: 30px;
  text-align: center;

  @media (max-width: 500px) {
    border-radius: 0 0 24px 24px;
    margin: 0;
    padding: 10px 30px;
  }
`
export const FooterImage = styled(motion.div)`
  width: 400px;
  height: 305px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 500px) {
    display: none;
  }
`
export const FooterDiv = styled.footer`
  background: transparent;
`
