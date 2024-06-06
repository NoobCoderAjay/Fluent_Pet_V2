import React from "react";

import Button, { ButtonProps } from "./Button";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SecondaryButton: React.FC<ButtonProps> = ({ ...props }) => (
  <Button
    color={Colors.TRANSPARENT}
    labelStyle={{ color: Colors.PRIMARY }}
    outline
    {...props}
  />
);

export default SecondaryButton;
