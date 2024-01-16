import { motion } from 'framer-motion'
import styled from 'styled-components'
import { primaryFont, white } from './variables'

interface TextProps {
  align?: string
  color?: string
  width?: string
}

export const Text = styled(motion.p)<TextProps>`
  color: ${props => props.color};
  font-family: ${primaryFont};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const LightText = styled(Text)`
  font-weight: 400;
`

export const MediumText = styled(Text)`
  font-size: 16px;
  margin-bottom: 8px;
`

export const BigText = styled(Text)`
  font-size: 24px;
`

export const SmallDescription = styled(Text)`
  font-size: 12px;
  font-weight: 400;
`

export const HeadlineText = styled(Text)`
  text-align: ${props => (props.align ? props.align : 'center')};
  font-family: ${primaryFont};
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 2px;
  width: ${props => props.width};

  @media (max-width: 700px) {
    font-size: 35px;
  }
  @media (max-width: 500px) {
    font-size: 28px;
  }
`

export const SmallHeadlineText = styled(Text)`
  font-size: 20px;
`

export const MediumHedlineText = styled(Text)`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 32px;

  @media (max-width: 700px) {
    font-size: 25px;
  }
`

export const InputDescription = styled(Text)`
  position: absolute;
  padding: 5px;
  top: 0;
  left: 0;
  transform: translate(20%, -30%);
  background: ${white};
`

export const BigHeadlineText = styled(HeadlineText)`
  font-size: 80px;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 60px;
  }
`
