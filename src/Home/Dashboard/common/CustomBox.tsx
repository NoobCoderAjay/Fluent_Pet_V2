import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  name: string;
  day: string;
  image1: any;
  image2: any;
  image3?: any;
  image4?: any;
}

const CustomBox: React.FC<Props> = ({
  name,
  day,
  image1,
  image2,
  image3,
  image4,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={image1} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.dayContainer}>
            <Text style={styles.day}>{day}</Text>
            <AntDesign name="right" size={16} color="grey" />
          </View>
          <View style={styles.imageContainer}>
            <Image source={image2} style={styles.smallImage} />
            <View style={{ width: 10 }} />
            <Image source={image3} style={styles.smallImage2} />
            {/* <Image source={image4} style={styles.smallImage3} /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomBox;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E4E7EC",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 80,
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#006271",
  },
  dayContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  day: {
    fontSize: 14,
    color: "#999999",
    marginRight: 5,
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  smallImage: {
    width: 50,
    height: 20,
    marginBottom: 5,
  },
  smallImage2: {
    width: 35,
    height: 20,
  },
  smallImage3: {
    width: 60,
    height: 20,
  },
});
