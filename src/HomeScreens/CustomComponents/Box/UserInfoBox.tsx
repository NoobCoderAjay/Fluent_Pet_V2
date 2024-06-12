import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AvatarTypeSpecific from "../../../components/Avatar/AvatarTypeSpecific";
import { FontArizona } from "../../../common/Typography";

type Props = {};

const UserInfoBox = (_props: Props) => {
  return (
    <View style={styles.userInfoContainer}>
      <AvatarTypeSpecific name={"H"} pushers={[]} size={80} />
      <View style={styles.userInfoTextContainer}>
        <Text style={styles.userInfoText}>Welcome Teacher!</Text>
        <Text style={styles.userInfoSubText}>Joined since July 15, 2023</Text>
      </View>
    </View>
  );
};

export default UserInfoBox;

const styles = StyleSheet.create({
  userInfoContainer: {
    flexDirection: "row",
  },
  userInfoTextContainer: {
    flexDirection: "column",
    marginLeft: 15,
    marginTop: 15,
  },
  userInfoText: {
    fontSize: 20,
    fontFamily: FontArizona.BOLD,
    lineHeight: 24.66,
    textAlign: "left",
    color: "#333333",
  },
  userInfoSubText: {
    fontSize: 12,
    fontFamily: FontArizona.BOLD,
    lineHeight: 14.8,
    textAlign: "left",
    color: "#666666",
    marginTop: 6,
  },
});
