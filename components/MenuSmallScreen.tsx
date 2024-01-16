import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button } from "../styled_components/buttons";
import { MenuIcon } from "../styled_components/icons";
import { ButtonLink } from "../styled_components/links";
import { Nav } from "../styled_components/navigation";
import { HorizontalSection } from "../styled_components/sections";
import { Text } from "../styled_components/text";
import { hoveredMintGreen, white } from "../styled_components/variables";

const MenuSmallScreen = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuButton = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Nav>
       <HorizontalSection  justify='space-between'> 
            <img src="assets/Logo.png" alt="Golobe logo"></img>
            <MenuIcon icon={faBars} size={"2xl"}/>
      </HorizontalSection>
      

      {isMenuActive && (
        <HorizontalSection>
        <ButtonLink to={'/'} color={white} hovered_color={hoveredMintGreen}>
          <Text>Login</Text>
        </ButtonLink>
        <Button background={white} hovered_color={hoveredMintGreen}>
          <Text>Sign up</Text>
        </Button>
      </HorizontalSection>
      )}
    </Nav>
  );
};

export default MenuSmallScreen;
