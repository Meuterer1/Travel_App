import React from 'react'
import { SmallButton } from '../styled_components/buttons'
import { FooterDiv, FooterImage } from '../styled_components/divs'
import { PrimaryInput } from '../styled_components/inputs'
import {
  FooterSubscribeSection,
  FullWidthHorizontalSection,
  HorizontalAbsolute,
  HorizontalSection,
  VerticalSection
} from '../styled_components/sections'
import {
  HeadlineText,
  MediumText,
  SmallHeadlineText,
  Text
} from '../styled_components/text'
import {
  blackishGreen,
  lightMint,
  mintGreen,
  white
} from '../styled_components/variables'

import { useInView } from 'react-intersection-observer'
import { FooterIcon, IconAbsolute } from '../styled_components/images'
import { ButtonLink } from '../styled_components/links'
import { ListHeadline, ListItem, UnList } from '../styled_components/lists'

const Footer: React.FC = () => {
  const [ref, inView] = useInView()

  const rotateVariants = {
    hidden: {
      rotate: 0
    },
    visible: {
      rotate: [-5, 5, -5, 5, -5, 5, -5, 5, 0],
      transition: {
        duration: 1.5
      }
    }
  }

  return (
    <FooterDiv>
      <FooterSubscribeSection background={lightMint}>
        <VerticalSection
          justify="space-between"
          className="m-24"
          align="center"
          width="80%"
        >
          <HeadlineText align="start" width="50%" className="m-24">
            Subscribe Newsletter
          </HeadlineText>
          <SmallHeadlineText>The Travel</SmallHeadlineText>
          <MediumText className="m-24">
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </MediumText>
          <FullWidthHorizontalSection>
            <PrimaryInput
              title="email"
              placeholder="Your email address"
            ></PrimaryInput>
            <SmallButton
              background={blackishGreen}
              color={white}
              hovered={mintGreen}
            >
              <Text>Subscribe</Text>
            </SmallButton>
          </FullWidthHorizontalSection>
        </VerticalSection>
        <FooterImage
          ref={ref}
          variants={rotateVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5, duration: 2.5 }}
        >
          <IconAbsolute
            src="assets/Vector1.png"
            alt="vector"
            top="140px"
            left="150px"
          />
          <IconAbsolute
            src="assets/Vector6.png"
            alt="vector"
            top="210px"
            left="150px"
          />
          <IconAbsolute
            src="assets/Vector7.png"
            alt="vector"
            top="210px"
            left="190px"
          />
          <IconAbsolute
            src="assets/Vector5.png"
            alt="vector"
            top="40px"
            left="60px"
          />
          <IconAbsolute
            src="assets/Vector2.png"
            alt="vector"
            top="40px"
            left="0"
          />
          <IconAbsolute
            src="assets/Vector3.png"
            alt="vector"
            top="140px"
            left="220px"
          />
          <IconAbsolute
            src="assets/Vector4.png"
            alt="vector"
            top="52px"
            left="10px"
          />
        </FooterImage>
      </FooterSubscribeSection>
      <HorizontalAbsolute
        background={mintGreen}
        justify="space-between"
        width="100%"
      >
        <VerticalSection width="auto">
          <img src="assets/LogoBlack.png" alt="Golobe logo"></img>
          <HorizontalSection className="m-24">
            <FooterIcon src="assets/facebook_icon.png"></FooterIcon>
            <FooterIcon src="assets/twitter_icon.png"></FooterIcon>
            <FooterIcon src="assets/youtube_icon.png"></FooterIcon>
            <FooterIcon src="assets/instagram_icon.png"></FooterIcon>
          </HorizontalSection>
        </VerticalSection>
        <UnList>
          <ListHeadline>Our Destinations</ListHeadline>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Canada
            </ButtonLink>
          </ListItem>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Alaska
            </ButtonLink>
          </ListItem>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              France
            </ButtonLink>
          </ListItem>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Iceland
            </ButtonLink>
          </ListItem>
        </UnList>
        <UnList>
          <ListHeadline>Our Activities</ListHeadline>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Northern Lights
            </ButtonLink>
          </ListItem>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Cruising & sailing
            </ButtonLink>
          </ListItem>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Multi-activities
            </ButtonLink>
          </ListItem>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Kayaing
            </ButtonLink>
          </ListItem>
        </UnList>
        <UnList>
          <ListHeadline>Travel Blogs</ListHeadline>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Bali Travel Guide
            </ButtonLink>
          </ListItem>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Sri Lanks Travel Guide
            </ButtonLink>
          </ListItem>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Peru Travel Guide
            </ButtonLink>
          </ListItem>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Peru Travel Guide
            </ButtonLink>
          </ListItem>
        </UnList>
        <UnList>
          <ListHeadline>About Us</ListHeadline>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Our Story
            </ButtonLink>
          </ListItem>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Work with us
            </ButtonLink>
          </ListItem>
        </UnList>
        <UnList>
          <ListHeadline>Contact Us</ListHeadline>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Write to us
            </ButtonLink>
          </ListItem>
          <ListItem>
            <ButtonLink to="/" hovered_color={white}>
              Visit us
            </ButtonLink>
          </ListItem>
        </UnList>
      </HorizontalAbsolute>
    </FooterDiv>
  )
}

export default Footer
