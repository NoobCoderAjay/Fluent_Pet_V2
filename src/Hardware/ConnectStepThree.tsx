import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Body, Title1 } from "../common/Text";
import { Colors } from "../theme/Colors";
import { Size, SizeV2 } from "../theme/Size";
import { TextInput } from "../common/Form";
import CustomButton from "../QuizScreens/Forms/CustomButton";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Screen } from "../navigation/constants";
//@ts-ignore
import Wifi from "../assets/images/baseRegistration/WiFi_List.png";
type Props = {};

const ConnectStepThree = (props: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleBackBtnPress = () => {
    navigation.navigate(Screen.CONNECTION_TO_BASE);
  };
  return (
    <>
      <View className="flex-1 p-5 bg-white">
        <Title1 v2 color={Colors.BLACK} marginBottom={SizeV2.S}>
          Connect to your Base
        </Title1>
        <Body v2 marginBottom={Size.L}>
          Scan the QR code on the bottom of the Base to automatically connect to
          it.
        </Body>

        <TextInput
          autoCapitalize="characters"
          placeholder="Search Wi-Fi Networks"
          backgroundColor={Colors.LIGHT_WHITE}
          value={undefined}
        />
        <View className="mt-10 ">
          <Image source={Wifi} />
        </View>
        <View className="flex-row mt-10 justify-center">
          <SimpleLineIcons name="question" size={20} color={Colors.BLUE_NEW} />
          <Text className="ml-2 font-bold text-[#006271]">
            Tap here for troubleshooting support.
          </Text>
        </View>
      </View>
      <View className="absolute bottom-5 flex-row justify-between px-5 bg-white">
        <CustomButton text="Cancel" onPress={handleBackBtnPress} />
        <CustomButton
          text="Next"
          className="bg-[#006271] ml-2.5"
          textStyle={[styles.bottomButtonText]}
        />
      </View>
    </>
  );
};

export default ConnectStepThree;

const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
