import { StyleSheet, TextInput, View, Image } from "react-native";
import React from "react";

interface CustomTextInputProps {
  icon?: string;
  image?: any;
  placeholder?: string;
  width?: number | string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  icon,
  image,
  placeholder,
  width,
}) => {
  return (
    <View style={[styles.container, { width: width as any }]}>
      {icon && <Image source={{ uri: icon }} style={styles.icon} />}
      {image && <Image source={image} style={styles.icon} />}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#A9A9A9"
        style={[styles.input, { width: "100%" }]}
      />
      <View style={styles.bottomLine} />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#A9A9A9",
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    height: 40,
    fontSize: 16,
    color: "#000",
  },
  bottomLine: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 0,
    backgroundColor: "#A9A9A9",
  },
});
