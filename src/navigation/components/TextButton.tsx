import React from "react";
import { StyleSheet, View } from "react-native";

import NavigationButtonContainer from "./NavigationButtonContainer";
import { Caption1 } from "../../common/Text";
import { Colors } from "../../theme/Colors";

interface Props {
  side: "left" | "right";
  text: string;
  onPress(): void;
}

const TextButton: React.FC<Props> = ({ side, text, onPress }) => {
  return (
    <NavigationButtonContainer
      side={side}
      onPress={onPress}
      style={styles.buttonWidth}
    >
      <View style={styles.textContainer}>
        <Caption1 color={Colors.WHITE}>{text}</Caption1>
      </View>
    </NavigationButtonContainer>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: Colors.SECONDARY,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonWidth: { width: 100 },
});
