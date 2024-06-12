import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

//@ts-ignore
import Batches from "../../../assets/images/newImages/Batches.png";
//@ts-ignore
import Nexts from "../../../assets/images/newImages/Nexts.png";
//@ts-ignore
import Target from "../../../assets/images/newImages/Target.png";
import { FontArizona } from "../../../common/Typography";

type Props = {};

const AchievementBox = (_props: Props) => {
  return (
    <View style={styles.thirdBoxContainer}>
      <View style={styles.activityContainer}>
        <Text style={styles.activityText}>Achievements</Text>
      </View>
      <View style={styles.imagesContainer}>
        <View style={styles.imageContainer}>
          <Image source={Batches} />
          <Text style={styles.imageText}>5-Day Streak</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={Target} />
          <Text style={styles.imageText}>Target Master</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={Nexts} />
          <Text style={styles.imageText}>Next Badge</Text>
        </View>
      </View>
    </View>
  );
};

export default AchievementBox;

const styles = StyleSheet.create({
  thirdBoxContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 20,
    overflow: "hidden",
  },
  activityContainer: {
    padding: 20,
    paddingBottom: 0,
  },
  activityText: {
    fontSize: 18,
    fontFamily: FontArizona.BOLD,
    color: "#006271",
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    alignItems: "center",
  },
  //   image: {
  //     width: 90,
  //     height: 90,
  //     marginBottom: 10,
  //   },
  //   nextImage: {
  //     width: 90,
  //     height: 87,
  //     marginBottom: 10,
  //   },
  imageText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: FontArizona.BOLD,
    color: "#9A96B2",
    alignItems: "center",
  },
});
