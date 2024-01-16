import { motion } from 'framer-motion'
import styled from 'styled-components'
import { mintGreen, white } from './variables'

interface SectionProps {
  align?: string
  background?: string
  direction?: string
  overflow?: string
  justify?: string
  height?: string
  width?: string
  wrap?: string
}

export const HorizontalSection = styled.section<SectionProps>`
  align-items: center;
  display: flex;
  padding: 0;

  @media (max-width: 710px) {
    justify-content: ${props => props.justify};
    width: 100%;
  }
`

export const FullWidthHorizontalSection = styled(HorizontalSection)`
  align-items: stretch;
  flex-wrap: ${props => (props.wrap ? props.wrap : 'wrap')};
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;
  overflow: ${props => props.overflow};

  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }

  @media (max-width: 500px) {
    align-items: center;
  }
`

export const FullWidthEndSection = styled(HorizontalSection)`
  justify-content: flex-end;
  gap: 24px;
  align-self: stretch;

  @media (max-width: 700px) {
    justify-content: space-between;
  }
`

export const VerticalSection = styled(motion.section)<SectionProps>`
  align-self: ${props => (props.align ? props.align : 'stretch')};
  background: ${props => props.background};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: ${props => props.height};
  justify-content: ${props => props.justify};
  overflow: ${props => props.overflow};
  position: relative;

  @media (max-width: 1250px) {
    width: ${props => (props.width ? props.width : '30%')};
  }

  @media (max-width: 1000px) {
    width: ${props => (props.width ? props.width : '45%')};
  }

  @media (max-width: 700px) {
    width: ${props => (props.width ? props.width : '95%')};
  }
`

export const HorizontalAbsolute = styled(VerticalSection)`
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -353px;
  padding: 241px 104px 64px 104px;
  position: relative;
  z-index: 0;

  @media (max-width: 1250px) {
    flex-direction: row;
    gap: 30px;
  }

  @media (max-width: 600px) {
    padding: 281px 104px 64px 104px;
  }
`

export const FullVerticalSection = styled(VerticalSection)`
  justify-content: end;
  gap: 24px;
  height: 100%;
  width: 100%;

  @media (max-width: 1000px) {
    width: ${props => props.width};
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const ColumnSection = styled.section`
  margin-top: 80px;
`

export const HeaderSearchSection = styled.section<SectionProps>`
  background-color: ${props => (props.background ? props.background : white)};
  margin: 150px 74px;
  border-radius: 16px;
  box-shadow: 0px 4px 16px 0px rgba(141, 211, 187, 0.15);
  display: flex;
  padding: 16px 32px 32px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 600px) {
    margin: 100px 34px;
    padding: 16px 10px;
  }

  @media (max-width: 500px) {
    margin: 100px 10px;
  }
`

export const FooterSubscribeSection = styled(HeaderSearchSection)`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: end;
  padding-bottom: 0;
  position: relative;
  z-index: 1;

  @media (max-width: 1100px) {
    justify-content: space-between;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FirstSection = styled.section`
  margin: 220px 104px 80px 104px;

  @media (max-width: 1250px) {
    margin-top: 350px;
  }

  @media (max-width: 1000px) {
    margin-top: 450px;
  }

  @media (max-width: 700px) {
    margin-top: 500px;
  }

  @media (max-width: 600px) {
    margin: 500px 80px 80px 80px;
  }

  @media (max-width: 600px) {
    margin: 500px 40px 80px 40px;
  }
`

export const MarginSection = styled.section`
  margin: 80px 104px;

  @media (max-width: 600px) {
    margin: 80px 40px 80px 40px;
  }
`

export const MediumTail = styled(motion.section)<SectionProps>`
  border-radius: 12px;
  background: ${mintGreen};
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  width: 250px;
  height: 420px;
  display: flex;
  align-items: end;
  padding: 24px;
  margin: 32px 0;
`

export const SmallTail = styled(MediumTail)`
  align-self: end;
  height: 200px;
  margin: 0;
  padding: 0;
  width: 95%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const BigTail = styled(MediumTail)`
  box-sizing: border-box;
  height: 424px;
  width: 100%;
  padding: 24px;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 400px) {
    height: 530px;
  }
`

export const XSTail = styled.section`
  background: ${white};
  border-radius: 8px;

  display: flex;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  height: 62px;

  @media (max-width: 400px) {
    height: 42px;
    flex-direction: row;
    padding: 0;
    width: 100%;
    order: -1;
  }
`
