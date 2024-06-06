import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
//@ts-ignore
import OnboardingOne from "../assets/images/OnboardingImages/OnboardingOne.png";
//@ts-ignore
import OnboardingTwo from "../assets/images/OnboardingImages/OnboardingTwo.png";
//@ts-ignore
import OnboardingThree from "../assets/images/OnboardingImages/OnboardingThree.png";
//@ts-ignore
import SplashScreen from "../assets/images/OnboardingImages/SplashScreen.png";

type Props = {};

const OnboardingScreen = (props: Props) => {
  const images = [OnboardingThree, OnboardingTwo, OnboardingOne, SplashScreen];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <Image source={images[currentImageIndex]} style={styles.image} />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
