import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatedPressable, Link } from "../common";
import { Colors } from "../theme/Colors";
import { SCREEN_WIDTH, Size, ViewportSize } from "../theme/Size";
import { images } from "../assets/images";
import { ArrowLeftIcon } from "../assets/icons";

interface Props {
  children: React.ReactNode;
  backgroundColor?: Colors;
  noBackButton?: boolean;
  hideForgotPassword?: boolean;
}

const AuthScreen: React.FC<Props> = ({
  children,
  backgroundColor = Colors.PRIMARY,
  noBackButton = false,
  hideForgotPassword = false,
}) => {
  const { goBack } = useNavigation();
  const onForgotPasswordPress = () => {
    // TODO: Navigate to Forgot Password screen
    Alert.alert("This feature has not been implemented yet.");
  };

  const onBackButtonPress = () => {
    goBack();
  };

  return (
    <SafeAreaView style={{ backgroundColor, ...styles.safeArea }}>
      <View style={styles.header}>
        {!noBackButton && (
          <AnimatedPressable
            style={styles.backButton}
            onPress={onBackButtonPress}
          >
            <ArrowLeftIcon color={Colors.WHITE} />
          </AnimatedPressable>
        )}
        <Image
          source={images.welcome.fluentPetLogo}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <ScrollView
        contentContainerStyle={{ backgroundColor, ...styles.contentContainer }}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={images.welcome.backgroundHexagon}
          style={styles.backgroundImage}
        >
          {children}
        </ImageBackground>
        {!hideForgotPassword && (
          <Link
            text="FORGOT PASSWORD?"
            style={{ marginTop: Size.L }}
            onPress={onForgotPasswordPress}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;

const BACKGROUND_IMAGE_HEIGHT = 577;
const BACKGROUND_IMAGE_WIDTH = 525;
const BACKGROUD_IMAGE_PADDING_HORIZONTAL = 100;
const LOGO_IMAGE_HEIGHT = 100;

const CONTENT_PADDING_TOP =
  SCREEN_WIDTH < ViewportSize.LARGE ? Size.L : Size.X4_L;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Size.XL,
    paddingVertical: Size.XS,
  },
  logo: {
    height: LOGO_IMAGE_HEIGHT,
  },
  backButton: {
    position: "absolute",
    padding: Size.X2_S,
    top: Size.S,
    left: Size.M,
  },
  contentContainer: {
    paddingTop: CONTENT_PADDING_TOP,
    paddingBottom: Size.X4_L,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    justifyContent: "center",
    alignItems: "center",
    height: BACKGROUND_IMAGE_HEIGHT,
    width: BACKGROUND_IMAGE_WIDTH,
    paddingHorizontal: BACKGROUD_IMAGE_PADDING_HORIZONTAL,
  },
});
