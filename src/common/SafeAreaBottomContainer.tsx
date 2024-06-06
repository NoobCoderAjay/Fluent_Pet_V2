import _ from "lodash";
import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Body } from "./Text";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Size } from "../theme/Size";
import { parseErrors } from "../lib/utilities";

interface Props {
  errors?: Record<string, any>;
  children?: ReactNode;
}

const SafeAreaBottomContainer: React.FC<Props> = ({ errors, children }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{ marginBottom: bottom, ...styles.container }}>
      {errors && !_.isEmpty(errors) && (
        <View style={{ paddingBottom: Size.S }}>
          <Body color={Colors.RED}>{parseErrors(errors)}</Body>
        </View>
      )}
      {children}
    </View>
  );
};

export default SafeAreaBottomContainer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Size.L,
    paddingVertical: Size.XS,
    alignItems: "center",
  },
});
