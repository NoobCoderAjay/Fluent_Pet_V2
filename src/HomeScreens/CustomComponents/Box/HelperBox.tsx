import Intercom from "@intercom/intercom-react-native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

//@ts-ignore
import File from "../../../assets/images/newImages/File.png";
//@ts-ignore
import message from "../../../assets/images/newImages/message.png";
import { FontArizona } from "../../../common/Typography";

type Props = {};

const HelperBox: React.FC<Props> = (_props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity disabled style={[styles.button, styles.firstButton]}>
        <Image source={File} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Take the Daily Assessment</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity
        style={[styles.button, styles.secondButton]}
        onPress={() => Intercom.present()}
      >
        <Image source={message} style={styles.buttonIcon} />
        <Text style={styles.secondButtonText}>Need Help?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelperBox;

const styles = StyleSheet.create({
  container: {
    borderColor: "#D9D9D9",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginTop: 15,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: FontArizona.BOLD,
  },
  secondButtonText: {
    color: "#434343",
    fontSize: 16,
    fontFamily: FontArizona.BOLD,
  },
  firstButton: {
    backgroundColor: "#006271",
    borderRadius: 10,
    opacity: 0.5,
  },
  secondButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#0062718A",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },
  separator: {
    height: 10,
  },
});
