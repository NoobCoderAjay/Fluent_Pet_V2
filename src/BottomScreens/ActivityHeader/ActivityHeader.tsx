import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

interface ActivityHeaderProps {
  onBackPress?: () => void;
  title: string;
  icon?: string;
  onPressDrawer?: () => void;
}

const ActivityHeader: React.FC<ActivityHeaderProps> = ({
  onBackPress,
  title,
  icon,
  onPressDrawer,
}) => {
  const handleIconPress = () => {
    if (onPressDrawer && icon === "menu") {
      onPressDrawer();
    } else if (onBackPress) {
      onBackPress();
    }
  };
  return (
    <View style={styles.container}>
      {icon && (
        <TouchableOpacity onPress={handleIconPress}>
          <Feather
            //@ts-ignore
            name={icon}
            size={24}
            color="#006271"
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

export default ActivityHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
    backgroundColor: "#E2F3FB",
    height: 100,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
    marginTop: 20,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#006271",
  },
  icon: {
    marginRight: 10,
    marginTop: 20,
  },
});
