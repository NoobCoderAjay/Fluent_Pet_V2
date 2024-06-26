import _ from "lodash";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Button, { ButtonProps } from "./Button";
import { Body } from "./Text";

import { parseErrors } from "../lib/utilities";
import { Size } from "../theme/Size";
import { Colors } from "../theme/Colors";

interface Props extends ButtonProps {
  errors?: Record<string, any>;
  safeAreaEnabled?: boolean;
}

const SafeAreaBottomButton: React.FC<Props> = ({
  errors,
  safeAreaEnabled = true,
  ...restProps
}) => {
  const { bottom } = useSafeAreaInsets();

  const marginBottom = safeAreaEnabled ? bottom : 0;

  return (
    <View style={{ marginBottom, ...styles.container }}>
      {errors && !_.isEmpty(errors) && (
        <View style={{ paddingBottom: Size.S }}>
          <Body color={Colors.RED}>{parseErrors(errors)}</Body>
        </View>
      )}
      <Button marginBottom={Size.S} fullWidth {...restProps} />
    </View>
  );
};

export default SafeAreaBottomButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Size.L,
    paddingVertical: Size.XS,
    alignItems: "center",
  },
});
