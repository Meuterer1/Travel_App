import React from 'react'

import { useInView } from 'react-intersection-observer'
import { SmallTail } from '../styled_components/images'
import {
  FirstSection,
  HorizontalSection,
  VerticalSection
} from '../styled_components/sections'
import {
  MediumHedlineText,
  MediumText,
  SmallDescription
} from '../styled_components/text'
import { blackishGreen } from '../styled_components/variables'
import Slider from './Slider'

const Searches: React.FC = () => {
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
      opacity: 1
    }
  }

  const slides = [
    <VerticalSection
      variants={translateVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 1.5 }}
      width="100%"
      key={0}
    >
      <HorizontalSection>
        <SmallTail src="assets/Istanbul.jpg" alt="vacation image" />
        <VerticalSection width="30%">
          <MediumText>Istanbul, Turkey</MediumText>
          <SmallDescription color={blackishGreen}>325 places</SmallDescription>
        </VerticalSection>
      </HorizontalSection>
    </VerticalSection>,
    <VerticalSection
      variants={translateVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: 0.5, duration: 1.5 }}
      width="100%"
      key={1}
    >
      <HorizontalSection>
        <SmallTail src="assets/Australia.jpg" alt="vacation image" />
        <VerticalSection width="30%">
          <MediumText>Sydney, Australia</MediumText>
          <SmallDescription color={blackishGreen}>325 places</SmallDescription>
        </VerticalSection>
      </HorizontalSection>
    </VerticalSection>,
    <VerticalSection
      variants={translateVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: 1, duration: 1.5 }}
      width="100%"
      key={2}
    >
      <HorizontalSection>
        <SmallTail src="assets/Baku.jpg" alt="vacation image" />
        <VerticalSection width="30%">
          <MediumText>Baku, Azerbaijan</MediumText>
          <SmallDescription color={blackishGreen}>325 places</SmallDescription>
        </VerticalSection>
      </HorizontalSection>
    </VerticalSection>,
    <VerticalSection
      variants={translateVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: 1.5, duration: 1.5 }}
      width="100%"
      key={3}
    >
      <HorizontalSection>
        <SmallTail src="assets/Maledives.jpg" alt="vacation image" />
        <VerticalSection width="30%">
          <MediumText>Malé, Maldives</MediumText>
          <SmallDescription color={blackishGreen}>325 places</SmallDescription>
        </VerticalSection>
      </HorizontalSection>
    </VerticalSection>
  ]

  return (
    <FirstSection>
      <VerticalSection
        ref={ref}
        variants={translateVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{
          duration: 1
        }}
        width="100%"
      >
        <MediumHedlineText>Recent Searches</MediumHedlineText>
        <Slider slides={slides} />
      </VerticalSection>
    </FirstSection>
  )
}

export default Searches
