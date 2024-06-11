import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import {
  BUTTON_TYPE_IMAGE_HEIGHT,
  BUTTON_TYPE_LIST_ITEM_SIZE,
} from "./constants";
import { ButtonType } from "./types";
import { Body } from "../../common/Text";
import { Colors } from "../../theme/Colors";
import { Size, SizeV2 } from "../../theme/Size";
import { Font } from "../../theme/Text";

interface Props {
  buttonTypes: ButtonType[];
}

const BaseTypesList: React.FC<Props> = ({ buttonTypes }) => (
  <View style={styles.listContainer}>
    {buttonTypes.map((type) => (
      <TouchableHighlight
        onPress={type.onPress}
        key={type.name}
        style={styles.touchableWrapper}
        underlayColor={Colors.GREY_4}
      >
        <View style={styles.itemContainer}>
          <Image
            source={type.imageSource}
            style={styles.image}
            resizeMode="contain"
          />
          <Body v2 style={styles.text} align="center">
            {type.name}
          </Body>
        </View>
      </TouchableHighlight>
    ))}
  </View>
);

export default BaseTypesList;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  touchableWrapper: {
    marginBottom: Size.M,
    borderRadius: Size.BORDER_RADIUS,
  },
  itemContainer: {
    height: BUTTON_TYPE_LIST_ITEM_SIZE,
    width: BUTTON_TYPE_LIST_ITEM_SIZE,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.SECONDARY_LIGHT,
    borderRadius: 15,
    padding: SizeV2.XS,
  },
  image: {
    height: BUTTON_TYPE_IMAGE_HEIGHT,
    marginBottom: SizeV2.XS,
  },
  text: {
    fontFamily: Font.BOLD,
  },
});
