import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomSwitch from "../common/Form/SwitchButton";
import ProfileForm from "./Forms/ProfileForm";
import PolygonImageContainer from "../common/PolygonImageContainer";
import { PolygonShapePoints } from "../common/helpers/constants";
import { AnimatedPressable } from "../common";
import { parseErrors } from "../lib/utilities";

import CustomButton from "./Forms/CustomButton";
import { isEmpty } from "lodash";
import { Screen } from "../navigation/constants";

const ProfileScreen: React.FC = () => {
  const [errors, setErrors] = useState({});
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const navigationFunction = useNavigation<NavigationProp<ParamListBase>>();
  const handleSwitchChange = (value: boolean) => {
    setSwitchValue(value);
  };
  const navigateToNextScreen = () => {
    navigationFunction.navigate(Screen.INFORMATION_SCREEN);
  };

  return (
    <>
      <ScrollView
        className="p-5 bg-[#FFFFFF]"
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ paddingBottom: 130 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-5">
          <Text className="text-[#333333] text-2xl font-bold font-arizona-bold">
            Add a profile picture
          </Text>
          <Text className="text-[#666666] text-base mt-1.5 font-arizona-regular">
            Tell us a little about you.
          </Text>
        </View>
        <View className="justify-center items-center mt-5">
          <AnimatedPressable>
            <PolygonImageContainer
              points={PolygonShapePoints.HEXAGON}
              imageLoaded={true}
              intialStyle={styles.polygonIntailContainer}
              isIntialPage
            />
          </AnimatedPressable>
        </View>
        <View className="mt-5">
          <ProfileForm />
          <View className="flex-row justify-between mt-2.5">
            <Text className="text-[#006271] text-sm font-arizona-bold">
              Do you have FluentPet connect smart buttons{"\n"}you need to
              setup?
            </Text>
            <CustomSwitch
              onChange={handleSwitchChange}
              initialValue={switchValue}
            />
          </View>
        </View>

        {errors && !isEmpty(errors) && (
          <View className="self-center py-5">
            <Text className="text-[#F03738]">{parseErrors(errors)}</Text>
          </View>
        )}
      </ScrollView>

      <View className="absolute bottom-5 flex-row justify-between px-5 bg-white">
        <CustomButton text="Cancel" />
        <CustomButton
          onPress={navigateToNextScreen}
          text="Next"
          className="bg-[#006271] ml-2.5"
          textStyle={[styles.bottomButtonText]}
        />
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  polygonIntailContainer: { top: -30, right: -25 },
});
