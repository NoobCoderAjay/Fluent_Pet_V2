/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Dimensions,
} from "react-native";

import AchievementBox from "../CustomComponents/Box/AchievementBox";
import HelperBox from "../CustomComponents/Box/HelperBox";

import ProTipBox from "../CustomComponents/Box/ProTipBox";
import CustomHomeHeader from "../CustomComponents/HomeHeader/CustomHeader";
import ImageCardBox from "../CustomComponents/Box/ImageCardBox";

type Props = {};

const ModuleScreen = (_props: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(1);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / IMAGE_WIDTH);
    setCurrentIndex(index);
  };
  useEffect(() => {
    setCurrentIndex(1);
  }, []);

  return (
    <View>
      {/* <CustomHomeHeader
        title="FluentPet EDU"
        icon="chevron-left"
        notificationIconName="notifications-outline"
      /> */}
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.imageContainer}
        >
          {[1, 2, 3, 4].map((index) => (
            <ImageCardBox key={index} title={""} id={0} />
          ))}
        </ScrollView>
        <View style={styles.dotContainer}>
          {[1, 2, 3, 4].map((index) => (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === currentIndex ? "#006271" : "#BDEEFD",
                },
              ]}
            />
          ))}
        </View>
        <ProTipBox />
        <AchievementBox />
        <HelperBox />
      </View>
    </View>
  );
};

const IMAGE_WIDTH = 230;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("screen").height - 130,
  },

  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },

  imageContainer: { gap: 4 },
});

export default ModuleScreen;
