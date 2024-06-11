import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
//@ts-ignore
import BaseImage from "../assets/images/baseImages/BaseImage.png";
//@ts-ignore
import BaseImageTwo from "../assets/images/baseImages/BaseImageTwo.png";
import CustomButton from "../QuizScreens/Forms/CustomButton";

type Props = {};

const HardwareScreen = (props: Props) => {
  return (
    <>
      <ScrollView className="p-5 bg-[#FFFFFF]">
        <View className="flex-row justify-between border p-4 border-[#CCCCCC] rounded-lg">
          <View className="flex-col">
            <Text className="mr-4 font-arizona text-base font-bold">
              Buttons
            </Text>
            <Text className="mr-4">Total Buttons: 0</Text>
            <View className="mt-4 h-10 ">
              <CustomButton text="Add a Button" className="px-5 rounded-lg" />
            </View>
          </View>
          <Image source={BaseImage} className="mt-4" />
        </View>

        <View className="justify-center items-center">
          <View className="flex-col justify-center items-center mt-10">
            <Image source={BaseImageTwo} />
            <View className="mt-10">
              <Text className="font-arizona text-lg font-bold">
                You don’t any have Bases yet!
              </Text>
              <Text className="font-arizona-sans text-base font-normal ml-10">
                Add a base to continue
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-5 flex-row justify-between px-5 bg-white">
        <CustomButton text="Cancel" />
        <CustomButton
          text="Connect a Base"
          className="bg-[#006271] ml-2.5"
          textStyle={[styles.bottomButtonText]}
        />
      </View>
    </>
  );
};

export default HardwareScreen;
const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
