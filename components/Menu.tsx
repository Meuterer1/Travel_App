import React from 'react'
import { SharpButton } from '../styled_components/buttons'
import { HeaderDiv } from '../styled_components/divs'
import { InputIcon, SmallIcon, XSIcon } from '../styled_components/images'
import { DateInput, DescribedInput } from '../styled_components/inputs'
import {
  ColumnSection,
  FullWidthEndSection,
  FullWidthHorizontalSection,
  HeaderSearchSection,
  HorizontalSection,
  VerticalSection
} from '../styled_components/sections'
import { DescribedSelect, Option } from '../styled_components/select'
import {
  BigHeadlineText,
  HeadlineText,
  InputDescription,
  SmallHeadlineText,
  Text
} from '../styled_components/text'
import {
  hoveredMintGreen,
  mintGreen,
  white
} from '../styled_components/variables'
import Navigation from './Navigation'

const Menu: React.FC = () => {
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

  const scaleVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 3
      }
    }
  }

  return (
    <>
      <HeaderDiv>
        <Navigation />
        <ColumnSection>
          <HeadlineText
            color={white}
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
          >
            Helping Others
          </HeadlineText>
          <BigHeadlineText
            color={white}
            variants={scaleVariants}
            initial="hidden"
            animate="visible"
          >
            Live & Travel
          </BigHeadlineText>
          <SmallHeadlineText
            color={white}
            variants={translateVariants}
            initial="hidden"
            animate="visible"
          >
            Special offers to suit your plan
          </SmallHeadlineText>
        </ColumnSection>
        <HeaderSearchSection>
          <HorizontalSection>
            <SmallIcon
              src="assets/ion_bed_black.png"
              alt="bed icon"
            ></SmallIcon>
            <Text>Find Stays</Text>
          </HorizontalSection>
          <FullWidthHorizontalSection>
            <VerticalSection>
              <InputDescription>Enter Destination</InputDescription>
              <InputIcon src="assets/ion_bed_black.png" alt="bed icon" />
              <DescribedInput placeholder="San Francisco" />
            </VerticalSection>
            <VerticalSection>
              <InputDescription>
                <label htmlFor="birthday">Check In</label>
              </InputDescription>
              <DateInput type="date" id="birthday" name="birthday" />
            </VerticalSection>
            <VerticalSection>
              <InputDescription>
                <label htmlFor="birthday">Check Out</label>
              </InputDescription>
              <DateInput type="date" id="birthday" name="birthday" />
            </VerticalSection>
            <VerticalSection>
              <InputDescription>Rooms</InputDescription>
              <InputIcon src="assets/user.png" alt="user icon" />
              <DescribedSelect name="rooms" id="rooms" title="rooms">
                <Option value={1}>1 room</Option>
              </DescribedSelect>
            </VerticalSection>
            <VerticalSection>
              <InputDescription>Guests</InputDescription>
              <InputIcon src="assets/user.png" alt="user icon" />
              <DescribedSelect name="guests" id="guests" title="guests">
                <Option value={2}>2 guests</Option>
              </DescribedSelect>
            </VerticalSection>
          </FullWidthHorizontalSection>
          <FullWidthEndSection>
            <SharpButton
              background="transparent"
              hovered_color={hoveredMintGreen}
            >
              <SmallHeadlineText>+</SmallHeadlineText>
              <Text>Add Promo Code</Text>
            </SharpButton>
            <SharpButton background={mintGreen} hovered={hoveredMintGreen}>
              <XSIcon src="assets/building.png" alt="building icon" />
              <Text>Show Places</Text>
            </SharpButton>
          </FullWidthEndSection>
        </HeaderSearchSection>
      </HeaderDiv>
    </>
  )
}

export default Menu
