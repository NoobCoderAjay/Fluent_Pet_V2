import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";

interface HeaderProps {
  onBackPress?: () => void;
  onSkipPress?: () => void;
  title?: string;
  progress?: number;
}

const Header: React.FC<HeaderProps> = ({
  onBackPress,
  onSkipPress,
  progress = 0,
}) => {
  const [statusBarStyle] = useState<"dark-content">("dark-content");

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={statusBarStyle}
      />
      {/* <View style={styles.leftHalf} />  */}
      <View style={styles.rightHalf} />
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.button}>
          <Feather name="chevron-left" size={24} color="#006271" />
        </TouchableOpacity>
      )}
      <View style={styles.spacer} />
      <TouchableOpacity
        onPress={onSkipPress}
        style={[styles.button, styles.skipButton]}
      >
        <Text style={[styles.buttonText, styles.skipButtonText]}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.progressBarContainer}>
        <View style={{ ...styles.progressBar, width: `${progress}%` }} />
      </View>
    </View>
  );
};

const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F6FCFE",
    height: 100,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "transparent",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#006271",
  },
  skipButton: {
    opacity: 0.6,
  },
  skipButtonText: {
    color: "#006271",
  },
  spacer: {
    flex: 1,
  },
  leftHalf: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: Dimensions.get("screen").width,
    backgroundColor: "#E1F4FB",
  },
  rightHalf: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: Dimensions.get("screen").width - 195,
    backgroundColor: "#E1F4FB",
  },
  progressBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: screenHeight * 0.007,
    backgroundColor: "#CBE6ED",
    borderRadius: screenHeight * 0.005,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#006271",
    borderRadius: screenHeight * 0.0025,
  },
});

export default Header;
