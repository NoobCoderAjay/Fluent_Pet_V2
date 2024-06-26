import { Feather } from "@expo/vector-icons";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

import CustomSuccessModal from "./Modals/SuccessModal";
import CustomButton from "./Forms/CustomButton";
import { FontArizona } from "../common/Typography";
import { Colors } from "../theme/Colors";
import Checkbox from "expo-checkbox";
import { Navigator, Screen } from "../navigation/constants";

type Props = {};

const SetupFinish = (_props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleBackBtnPress = () => {
    navigation.navigate(Screen.TEST_SCREEN);
  };
  const handleNavigationClick = () => {
    navigation.navigate(Navigator.TAB_NAV);
  };

  return (
    <>
      <ScrollView className="p-5 bg-white" style={styles.container}>
        <View>
          <Text className="text-gray-800 font-bold text-2xl">Finish Setup</Text>
          <Text className="text-gray-800 text-base mt-1.5">
            Tell us a little about you.
          </Text>
        </View>
        <View className="mt-8">
          <Text className="text-base font-bold text-gray-800 font-arizonaRegular">
            Data consent
          </Text>
          <View className="flex-row mt-5">
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text className="ml-2.5 font-arizonaRegular">
              “I consent to having my pet button pressing data {"\n"}shared with
              qualified university researchers for the purpose of scientific
              research, and agree to allow {"\n"}myself to be contacted by
              researchers investigating related scientific questions.”
            </Text>
          </View>
        </View>
        <View className="flex-row mt-5">
          <Feather name="info" size={24} color="#F03738" />
          <View className="ml-2.5">
            <Text className="text-[#F03738] font-arizonaBold mt-0.75">
              Privacy you can change this at any time in settings
            </Text>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-5 flex-row justify-between px-5 bg-white">
        <CustomButton text="Back" onPress={handleBackBtnPress} />
        <CustomButton
          text="Next"
          onPress={toggleModal}
          style={[styles.saveButton]}
          textStyle={[styles.bottomButtonText]}
        />
      </View>
      <CustomSuccessModal
        visible={isModalVisible}
        onClose={() => {
          toggleModal();
          handleNavigationClick();
        }}
      />
    </>
  );
};

export default SetupFinish;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height - 100,
  },
  heading: {
    color: "#333333",
    fontFamily: FontArizona.BOLD,
    fontSize: 25,
  },
  subHeading: {
    color: "#666666",
    fontSize: 14,
    marginTop: 6,
    fontFamily: FontArizona.REGULAR,
  },
  dataConsentContainer: {
    marginTop: 30,
  },
  dataConsentLabel: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: FontArizona.REGULAR,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  checkboxText: {
    marginLeft: 10,
    fontFamily: FontArizona.REGULAR,
  },
  infoContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  infoTextContainer: {
    marginLeft: 10,
  },
  infoText: {
    color: "#F03738",
    fontFamily: FontArizona.BOLD,
    marginTop: 3,
  },
  bottomButtonContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  saveButton: {
    backgroundColor: Colors.PRIMARY_DARK,
    marginLeft: 10,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.WHITE,
  },
  checkbox: {
    alignSelf: "flex-start",
  },
});
