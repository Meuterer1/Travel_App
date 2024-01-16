import React from 'react'
import { Button } from '../styled_components/buttons'
import { SmallIcon } from '../styled_components/images'
import { ButtonLink } from '../styled_components/links'
import { Nav } from '../styled_components/navigation'
import { HorizontalSection } from '../styled_components/sections'
import { Text } from '../styled_components/text'
import { hoveredMintGreen, white } from '../styled_components/variables'

const MenuBigScreen: React.FC = () => {
  return (
    <Nav>
      <HorizontalSection>
        <SmallIcon src="assets/ion_bed.png" alt="bed icon"></SmallIcon>
        <ButtonLink to={'/'} color={white} hovered_color={hoveredMintGreen}>
          <Text>Find Stays</Text>
        </ButtonLink>
      </HorizontalSection>
      <img src="assets/Logo.png" alt="Golobe logo"></img>
      <HorizontalSection>
        <ButtonLink to={'/'} color={white} hovered_color={hoveredMintGreen}>
          <Text>Login</Text>
        </ButtonLink>
        <Button background={white} hovered_color={hoveredMintGreen}>
          <Text>Sign up</Text>
        </Button>
      </HorizontalSection>
    </Nav>
  )
}

export default MenuBigScreen
