import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface NumberBoxProps {
  number: number;
  onPress: () => void;
}

const NumberBox: React.FC<NumberBoxProps> = ({ number, onPress }) => {
  return (
    <View style={styles.boxContainer}>
      <View style={[styles.boxStyle, { borderColor: "#006271" }]}>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{number}</Text>
          <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.buttonText}>Event</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textStyle}>Communication</Text>
      </View>
      <View style={[styles.boxStyle, { borderColor: "#E4E7EC" }]}>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{number}</Text>
          <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.buttonText}>Event</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textStyle}>Modeling</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  boxStyle: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: "45%",
  },
  numberText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  buttonStyle: {
    backgroundColor: "#FEE0BC",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
    padding: 0,
    margin: 0,
  },
  textStyle: {
    marginLeft: 10,
    color: "#999999",
  },
  numberContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default NumberBox;
