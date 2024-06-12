import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";

//@ts-ignore
import Buy from "../assets/images/newImages/Buy.png";
//@ts-ignore
import Learner_Activity from "../assets/images/newImages/Learner_Activity.png";
import ActivityBox from "./CustomComponents/Box/ActivityBox";
import LearnerActivityBox from "./CustomComponents/Box/LearnerActivityBox";
import ProTipBox from "./CustomComponents/Box/ProTipBox";
// import StreakBox from './CustomComponents/Box/StreakBox';
import UserInfoBox from "./CustomComponents/Box/UserInfoBox";
import WelComeBox from "./CustomComponents/Box/WelComeBox";
import CustomHomeHeader from "./CustomComponents/HomeHeader/CustomHeader";
import { Navigator } from "../navigation/constants";

type Props = {};

const HomeScreen = (_props: Props) => {
  const navigation: any = useNavigation();
  const handlePurchase = () => {
    return Linking.openURL("https://eu.fluent.pet/");
  };
  return (
    <View>
      {/* <CustomHomeHeader
        title="FluentPet"
        icon="menu"
        notificationIconName="notifications-outline"
        onPressDrawer={navigation.openDrawer}
      /> */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <UserInfoBox />
          {/* <StreakBox /> */}
          <ActivityBox />
          <WelComeBox />
          <ProTipBox />
          <LearnerActivityBox />
          <View style={styles.LastImageContainer}>
            <TouchableOpacity
              onPress={() =>
                // navigation.navigate({ name: Navigator.BASE, merge: true })
                {}
              }
            >
              <Image source={Learner_Activity} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePurchase}>
              <Image source={Buy} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
const screenHeight = Dimensions.get("window").height;
const paddingBottom = screenHeight * 0.08;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    height: "auto",
  },

  LastImageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  scrollContainer: { paddingBottom: paddingBottom },
});
