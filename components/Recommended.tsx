import React from 'react'

import { useInView } from 'react-intersection-observer'
import { Button, OutlinedButton } from '../styled_components/buttons'
import {
  FullVerticalSection,
  FullWidthHorizontalSection,
  HorizontalSection,
  MarginSection,
  MediumTail,
  VerticalSection
} from '../styled_components/sections'
import {
  BigText,
  LightText,
  MediumHedlineText,
  MediumText,
  Text
} from '../styled_components/text'
import {
  hoveredMintGreen,
  mintGreen,
  white
} from '../styled_components/variables'
import Slider from './Slider'

const Recommended: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const translateVariants = {
    hidden: {
      translateY: 100,
      opacity: 0
    },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 2.5
      }
    }
  }

  const translateXVariants = {
    hidden: {
      translateX: 1000,
      opacity: 0
    },
    visible: {
      translateX: 0,
      opacity: 1
    }
  }

  const slides = [
    <MediumTail
      background="assets/Melbourne.jpg"
      variants={translateXVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: 0.5, duration: 2.5 }}
      key={0}
    >
      <FullVerticalSection>
        <FullWidthHorizontalSection>
          <VerticalSection width="45%">
            <BigText color={white}>Melbourne</BigText>
            <LightText color={white}>An amazing journey</LightText>
          </VerticalSection>
          <BigText color={white}>$ 700</BigText>
        </FullWidthHorizontalSection>
        <FullWidthHorizontalSection>
          <Button background={mintGreen} hovered={hoveredMintGreen}>
            <Text>Book a Hotel</Text>
          </Button>
        </FullWidthHorizontalSection>
      </FullVerticalSection>
    </MediumTail>,
    <MediumTail
      background="assets/Paris.jpg"
      variants={translateXVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: 1, duration: 2.5 }}
      key={1}
    >
      <FullVerticalSection>
        <FullWidthHorizontalSection>
          <VerticalSection width="45%">
            <BigText color={white}>Paris</BigText>
            <LightText color={white}>A Paris Adventure</LightText>
          </VerticalSection>
          <BigText color={white}>$ 600</BigText>
        </FullWidthHorizontalSection>
        <FullWidthHorizontalSection>
          <Button background={mintGreen} hovered={hoveredMintGreen}>
            <Text>Book a Hotel</Text>
          </Button>
        </FullWidthHorizontalSection>
      </FullVerticalSection>
    </MediumTail>,
    <MediumTail
      background="assets/London.jpg"
      variants={translateXVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: 1.5, duration: 2.5 }}
      key={2}
    >
      <FullVerticalSection>
        <FullWidthHorizontalSection>
          <VerticalSection width="45%">
            <BigText color={white}>London</BigText>
            <LightText color={white}>London eye adventure</LightText>
          </VerticalSection>
          <BigText color={white}>$ 350</BigText>
        </FullWidthHorizontalSection>
        <FullWidthHorizontalSection>
          <Button background={mintGreen} hovered={hoveredMintGreen}>
            <Text>Book a Hotel</Text>
          </Button>
        </FullWidthHorizontalSection>
      </FullVerticalSection>
    </MediumTail>,
    <MediumTail
      background="assets/Columbia.jpg"
      variants={translateXVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: 2, duration: 2.5 }}
      key={3}
    >
      <FullVerticalSection>
        <FullWidthHorizontalSection>
          <VerticalSection width="45%">
            <BigText color={white}>Columbia</BigText>
            <LightText color={white}>Amazing streets</LightText>
          </VerticalSection>
          <BigText color={white}>$ 700</BigText>
        </FullWidthHorizontalSection>
        <FullWidthHorizontalSection>
          <Button background={mintGreen} hovered={hoveredMintGreen}>
            <Text>Book a Hotel</Text>
          </Button>
        </FullWidthHorizontalSection>
      </FullVerticalSection>
    </MediumTail>
  ]

  return (
    <MarginSection>
      <VerticalSection
        ref={ref}
        variants={translateVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        width="100%"
      >
        <MediumHedlineText>Fall into travel</MediumHedlineText>
        <HorizontalSection>
          <MediumText className="part">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </MediumText>
          <OutlinedButton background={mintGreen}>
            <Text>See All</Text>
          </OutlinedButton>
        </HorizontalSection>

        <FullWidthHorizontalSection overflow="hidden">
          <Slider slides={slides} />
        </FullWidthHorizontalSection>
      </VerticalSection>
    </MarginSection>
  )
}

export default Recommended
