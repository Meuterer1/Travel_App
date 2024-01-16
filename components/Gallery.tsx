import React, { useEffect, useState } from 'react'

import { Button, OutlinedButton } from '../styled_components/buttons'
import {
  BigTail,
  FullVerticalSection,
  FullWidthEndSection,
  FullWidthHorizontalSection,
  HorizontalSection,
  MarginSection,
  SmallTail,
  VerticalSection,
  XSTail
} from '../styled_components/sections'
import {
  HeadlineText,
  MediumHedlineText,
  MediumText,
  SmallHeadlineText,
  Text
} from '../styled_components/text'
import { mintGreen, white } from '../styled_components/variables'

const Gallery: React.FC = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const handleScroll = (): void => {
    const scrollY = window.scrollY
    console.log('scroll: ', scrollY)

    if (scrollY > 600 && !isSectionVisible) {
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
  return (
    <MarginSection>
      <VerticalSection
        variants={translateVariants}
        initial="hidden"
        animate={isSectionVisible ? 'visible' : 'hidden'}
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

        <FullWidthHorizontalSection className="m-24" wrap="nowrap">
          <BigTail
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 2.5 }}
          >
            <VerticalSection justify="space-between" height="100%" width="100%">
              <FullWidthHorizontalSection>
                <HeadlineText width="50%" align="start">
                  Backpacking Sri Lanka
                </HeadlineText>
                <XSTail>
                  <Text>From</Text>
                  <SmallHeadlineText>$700</SmallHeadlineText>
                </XSTail>
                <Text>
                  Traveling is a unique experience as it's the best way to
                  unplug from the pushes and pulls of daily life. It helps us to
                  forget about our problems, frustrations, and fears at home.
                  During our journey, we experience life in different ways. We
                  explore new places, cultures, cuisines, traditions, and ways
                  of living.
                </Text>
              </FullWidthHorizontalSection>

              <FullWidthEndSection>
                <Button background={white} hovered_color={mintGreen}>
                  <Text>Book Flight</Text>
                </Button>
              </FullWidthEndSection>
            </VerticalSection>
          </BigTail>
          <FullWidthHorizontalSection wrap="nowrap">
            <FullVerticalSection width="45%">
              <SmallTail
                background="assets/Travel1.jpg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 2.5 }}
              ></SmallTail>
              <SmallTail
                background="assets/Travel2.jpg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 2.5 }}
              ></SmallTail>
            </FullVerticalSection>
            <FullVerticalSection width="45%">
              <SmallTail
                background="assets/Travel3.jpg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 2.5 }}
              ></SmallTail>
              <SmallTail
                background="assets/Travel4.jpg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 2.5 }}
              ></SmallTail>
            </FullVerticalSection>
          </FullWidthHorizontalSection>
        </FullWidthHorizontalSection>
      </VerticalSection>
    </MarginSection>
  )
}

export default Gallery