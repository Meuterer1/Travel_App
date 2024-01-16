import React, { useEffect, useState } from 'react'

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
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const handleScroll = (): void => {
    const scrollY = window.scrollY

    if (scrollY > 0 && !isSectionVisible) {
      setIsSectionVisible(true)
    } else if (scrollY === 0 && isSectionVisible) {
      setIsSectionVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isSectionVisible])

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

  const slides = [
    <VerticalSection
            initial={{ translateY: 100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 2.5 }}
            width='100%'
          >
            <HorizontalSection>
              <SmallTail src="assets/Istanbul.jpg" alt="vacation image" />
              <VerticalSection width='30%'>
                <MediumText>Istanbul, Turkey</MediumText>
                <SmallDescription color={blackishGreen}>
                  325 places
                </SmallDescription>
              </VerticalSection>
            </HorizontalSection>
    </VerticalSection>,
      <VerticalSection
            initial={{ translateY: 100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 2.5 }}
            width='100%'
          >
            <HorizontalSection>
              <SmallTail src="assets/Australia.jpg" alt="vacation image" />
              <VerticalSection width='30%'>
                <MediumText>Sydney, Australia</MediumText>
                <SmallDescription color={blackishGreen}>
                  325 places
                </SmallDescription>
              </VerticalSection>
            </HorizontalSection>
          </VerticalSection>,
          <VerticalSection
            initial={{ translateY: 100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 2.5 }}
            width='100%'
          >
            <HorizontalSection>
              <SmallTail src="assets/Baku.jpg" alt="vacation image" />
              <VerticalSection width='30%'>
                <MediumText>Baku, Azerbaijan</MediumText>
                <SmallDescription color={blackishGreen}>
                  325 places
                </SmallDescription>
              </VerticalSection>
            </HorizontalSection>
          </VerticalSection>,
          <VerticalSection
            initial={{ translateY: 100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 2.5 }}
            width='100%'
          >
            <HorizontalSection>
              <SmallTail src="assets/Maledives.jpg" alt="vacation image" />
              <VerticalSection width='30%'>
                <MediumText>Malé, Maldives</MediumText>
                <SmallDescription color={blackishGreen}>
                  325 places
                </SmallDescription>
              </VerticalSection>
            </HorizontalSection>
          </VerticalSection>

  ]

  return (
    <FirstSection>
      <VerticalSection
        variants={translateVariants}
        initial="hidden"
        animate={isSectionVisible ? 'visible' : 'hidden'}
        width="100%"
      >
        <MediumHedlineText>Recent Searches</MediumHedlineText>
        <Slider slides={slides} />
      </VerticalSection>
    </FirstSection>
  )
}

export default Searches
