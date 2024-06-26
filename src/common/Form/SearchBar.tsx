import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";

import AnimatedPressable from "../AnimatedPressable";
import TextInput from "./TextInput";
import { CloseIcon } from "../../assets/icons";
import { Colors } from "../../theme/Colors";
import { Size } from "../../theme/Size";

interface Props {
  currentSearch: string;
  placeholderText: string;
  customIcon?: React.FC;
  onChangeText(value: string): void;
  onClearButtonPress(): void;
}

const SearchBar: React.FC<Props> = ({
  currentSearch,
  placeholderText,
  customIcon,
  onChangeText,
  onClearButtonPress,
}) => {
  const renderClearButton = () => (
    <AnimatedPressable
      style={styles.clearButtonContainer}
      onPress={onClearButtonPress}
    >
      <CloseIcon width={15} />
    </AnimatedPressable>
  );

  const icon = customIcon
    ? customIcon
    : () => <Ionicons color={Colors.GREY_DARK} name="search" size={Size.M} />;

  return (
    <TextInput
      backgroundColor={Colors.GREY_LIGHT}
      placeholder={placeholderText}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      onChangeText={onChangeText}
      value={currentSearch}
      icon={icon}
      IconRight={currentSearch.length > 0 ? renderClearButton() : undefined}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  clearButtonContainer: {
    position: "absolute",
    right: Size.S,
    bottom: Size.S,
  },
});
