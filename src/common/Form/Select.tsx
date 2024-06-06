import React from "react";
import { StyleSheet, View } from "react-native";

import AnimatedPressable from "../AnimatedPressable";
import TextInput, { TextInputProps } from "./TextInput";
import { Colors } from "../../theme/Colors";
import { Size } from "../../theme/Size";
import { CalendarIcon, ChevronDownIcon } from "../../assets/icons";

export enum SelectIcon {
  CALENDAR = "calendar",
  CHEVRON = "chevron",
}

interface Props extends TextInputProps {
  iconRight?: SelectIcon;
  marginBottom?: number;
  onPress?: () => void;
  disabled?: boolean;
}
const Select: React.FC<Props> = ({
  onPress,
  iconRight,
  marginBottom,
  disabled,
  ...restProps
}) => {
  const renderIconRight = () => {
    if (iconRight === SelectIcon.CALENDAR) {
      return <CalendarIcon color={Colors.SECONDARY} />;
    }
    return <ChevronDownIcon color={Colors.SECONDARY} />;
  };

  return (
    <AnimatedPressable
      disabled={disabled}
      onPress={onPress}
      style={{ marginBottom, ...styles.touchableWrapper }}
    >
      <TextInput disablePointerEvents {...restProps} />
      {iconRight && (
        <View style={styles.iconRightContainer}>{renderIconRight()}</View>
      )}
    </AnimatedPressable>
  );
};

export default Select;

const styles = StyleSheet.create({
  touchableWrapper: {
    justifyContent: "center",
  },
  iconRightContainer: {
    position: "absolute",
    right: Size.M,
  },
});
