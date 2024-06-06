import React from "react";
import { Text, TextProps } from "react-native";
import { Color } from "../theme/Color";
import { Size, SizeV2 } from "../theme/Size";

export enum FontArizona {
  REGULAR = "ABCArizonaSans-Regular",
  BOLD = "ABCArizonaSans-Bold",
}

const TextAlign = {
  center: "center",
  left: "left",
  right: "right",
};

interface Props extends TextProps {
  children: React.ReactNode;
  color?: Color;
  marginBottom?: Size | SizeV2;
  letterSpacing?: number;
  underline?: boolean;
  numberOfLines?: number;
  align?: keyof typeof TextAlign;
}

export const BasicText: React.FC<Props> = (props) => {
  const {
    children,
    color = Color.BLACK_800,
    marginBottom,
    style,
    letterSpacing,
    underline,
    numberOfLines,
    align = "left",
    ...rest
  } = props;

  const textDecorationLine = underline ? "underline" : undefined;

  return (
    <Text
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      {...rest}
      style={[
        style,
        {
          color,
          marginBottom,
          letterSpacing,
          textDecorationLine,
          textAlign: align,
        },
      ]}
    >
      {children}
    </Text>
  );
};

export const Headline1: React.FC<Props> = (props) => (
  <BasicText
    {...props}
    className={`font-arizona-bold text-3xl leading-[42px] ${props.className}`}
  />
);

export const Headline2: React.FC<Props> = (props) => (
  <BasicText
    {...props}
    className={`font-arizona-bold text-2xl leading-[36px] ${props.className}`}
  />
);

export const ButtonLabel: React.FC<Props> = (props) => (
  <BasicText
    {...props}
    className={`font-arizona-regular text-2xl leading-[39px] ${props.className}`}
  />
);

export const NavigationTitle: React.FC<Props> = (props) => (
  <BasicText
    {...props}
    className={`font-arizona-bold text-xl leading-[34px] tracking-[1px] ${props.className}`}
  />
);

export const BodyBold: React.FC<Props> = (props) => (
  <BasicText
    {...props}
    className={`font-arizona-bold text-base leading-[27px] ${props.className}`}
  />
);

export const BodySmallBold: React.FC<Props> = (props) => (
  <BasicText
    {...props}
    className={`font-arizona-bold text-sm leading-[24px]${props.className}`}
  />
);

export const CaptionBold: React.FC<Props> = (props) => (
  <BasicText {...props} className="font-arizona-bold text-xs leading-[16px]" />
);

export const Body: React.FC<Props> = (props) => (
  <BasicText
    {...props}
    className="text-base leading-[27px] font-arizona-regular"
  />
);

export const BodySmall: React.FC<Props> = (props) => (
  <BasicText
    {...props}
    className="text-sm leading-[24px] font-arizona-regular"
  />
);

export const Caption: React.FC<Props> = (props) => (
  <BasicText
    {...props}
    className={`text-xs leading-[16px] font-arizona-regular ${props.className}`}
  />
);

export const CaptionSmall: React.FC<Props> = (props) => (
  <BasicText
    {...props}
    className="text-xs leading-[16px] font-arizona-regular"
  />
);
