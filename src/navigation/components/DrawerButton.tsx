import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet } from "react-native";

import NavigationButtonContainer from "./NavigationButtonContainer";
import { DrawerIcon } from "../../assets/icons";

const DrawerButton = () => {
  const navigation: any = useNavigation();

  return (
    <NavigationButtonContainer
      side="left"
      onPress={navigation.openDrawer}
      style={styles.buttonWrapper}
    >
      <DrawerIcon />
    </NavigationButtonContainer>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: { paddingHorizontal: 5, paddingVertical: 10 },
});

export default DrawerButton;
