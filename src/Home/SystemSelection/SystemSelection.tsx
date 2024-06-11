import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { images } from "../../assets/images";
import ButtonTypesList from "./ButtonTypesList";
import { FLUENT_PET_SHOPPING_URL } from "./constants";
import { Title1 } from "../../common/Text";
import { Colors } from "../../theme/Colors";
import { SizeV2 } from "../../theme/Size";

type Props = {};

const SystemSelection: React.FC<Props> = ({}) => {
  const buttonTypes = [
    {
      name: "FluentPet Connect",
      imageSource: images.systemSetup.connect,
      onPress: () => WebBrowser.openBrowserAsync(FLUENT_PET_SHOPPING_URL),
    },
    {
      name: "FluentPet Classic",
      imageSource: images.systemSetup.classic,
      onPress: () => WebBrowser.openBrowserAsync(FLUENT_PET_SHOPPING_URL),
    },
    {
      name: "Non-FluentPet Buttons",
      imageSource: images.systemSetup.thirdParty,
      onPress: () => WebBrowser.openBrowserAsync(FLUENT_PET_SHOPPING_URL),
    },
    {
      name: "No buttons yet",
      imageSource: null,
      onPress: () => WebBrowser.openBrowserAsync(FLUENT_PET_SHOPPING_URL),
    },
  ];

  return (
    <>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Title1 v2 color={Colors.BLACK} marginBottom={SizeV2.X2_L}>
          Let's set up your system
        </Title1>
        <ButtonTypesList buttonTypes={buttonTypes} />
      </ScrollView>
    </>
  );
};

export default SystemSelection;

const styles = StyleSheet.create({
  contentContainer: {
    padding: SizeV2.L,
    paddingVertical: SizeV2.X2_L,
  },
});
