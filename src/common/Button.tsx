import React from "react";
import Color from "color";
import { View } from "react-native";
import AnimatedPressable from "./AnimatedPressable";
import { Body } from "./Text";
import { Colors } from "../theme/Colors";
import { Font, TextSize } from "../theme/Text";
import { Size, SizeV2 } from "../theme/Size";

interface LabelStyle {
  color?: Colors;
  fontFamily?: Font;
  fontSize?: number;
  letterSpacing?: number;
}

export interface ButtonProps {
  label: string;
  labelStyle?: LabelStyle;
  color?: Colors | string;
  height?: number;
  width?: number | string;
  marginBottom?: Size | SizeV2;
  iconLeft?: React.ReactNode;
  fullWidth?: boolean;
  isDisabled?: boolean;
  outline?: boolean;
  onPress?(): void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  color = Colors.PRIMARY,
  labelStyle,
  width = Size.BUTTON_WIDTH,
  height = Size.BUTTON_HEIGHT,
  marginBottom,
  fullWidth,
  isDisabled = false,
  outline = false,
  onPress,
}) => {
  const buttonWidth = fullWidth ? "100%" : width;
  const disabledColor = Color(color)
    .mix(Color("white"))
    .rgb()
    .desaturate(0.2)
    .string();
  const currentColor = isDisabled ? disabledColor : color;
  const borderColor = outline ? labelStyle?.color ?? Colors.PRIMARY : undefined;
  const borderWidth = outline ? 2 : 0;

  return (
    <AnimatedPressable
      disabled={isDisabled || !onPress}
      className={`flex-row ${marginBottom ? `mb-${marginBottom}` : ""}`}
      style={{ width: buttonWidth }}
      onPress={onPress}
    >
      <View
        className={`flex-grow flex-row justify-center items-center px-${Size.XS} rounded-${Size.BORDER_RADIUS}`}
        style={{
          height,
          backgroundColor: currentColor,
          borderColor,
          borderWidth,
        }}
      >
        <Body
          align="center"
          color={labelStyle?.color ?? Colors.WHITE}
          style={{
            fontFamily: labelStyle?.fontFamily ?? Font.BOLD,
            fontSize: labelStyle?.fontSize ?? TextSize.body.fontSize,
          }}
          letterSpacing={
            labelStyle?.letterSpacing ?? Size.BUTTON_LETTER_SPACING
          }
        >
          {label}
        </Body>
      </View>
    </AnimatedPressable>
  );
};

export default Button;
