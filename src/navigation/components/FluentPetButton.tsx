import * as WebBrowser from "expo-web-browser";
import React from "react";

import NavigationButtonContainer from "./NavigationButtonContainer";
import { FluentPetIcon } from "../../assets/icons";

const FluentPetButton: React.FC = () => {
  const onPress = async () => {
    await WebBrowser.openBrowserAsync("https://fluent.pet/collections/kits");
  };

  return (
    <NavigationButtonContainer side="right" onPress={onPress}>
      <FluentPetIcon />
    </NavigationButtonContainer>
  );
};

export default FluentPetButton;
