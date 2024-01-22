import React, { useState } from 'react'

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { MenuIcon } from '../styled_components/icons'
import { ButtonLink } from '../styled_components/links'
import { CloseSection, SmallMenu } from '../styled_components/menu'
import { Nav } from '../styled_components/navigation'
import { HorizontalSection } from '../styled_components/sections'
import { MediumHedlineText, Text } from '../styled_components/text'
import { blackishGreen, white } from '../styled_components/variables'

const MenuSmallScreen: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const handleMenuButton = (): void => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <Nav>
      <HorizontalSection justify="space-between">
        <img src="assets/Logo.png" alt="Golobe logo"></img>
        <MenuIcon icon={faBars} size={'2xl'} onClick={handleMenuButton} />
      </HorizontalSection>

      {isMenuActive && (
        <SmallMenu>
          <CloseSection>
            <MenuIcon onClick={handleMenuButton} icon={faXmark} size={'2xl'} />
          </CloseSection>
          <MediumHedlineText>Menu</MediumHedlineText>
          <ButtonLink to={'/'} color={white} hovered_color={blackishGreen}>
            <Text>Login</Text>
          </ButtonLink>
          <ButtonLink to={'/'} color={white} hovered_color={blackishGreen}>
            <Text>Sign up</Text>
          </ButtonLink>
        </SmallMenu>
      )}
    </Nav>
  )
}

export default MenuSmallScreen
