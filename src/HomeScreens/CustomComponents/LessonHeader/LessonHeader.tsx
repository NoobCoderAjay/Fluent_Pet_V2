import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';

import { FontArizona } from 'src/components/common/Typography';

interface LessonHeaderProps {
  onBackPress?: () => void;
  title: string;
  icon?: string;
  iconColor?: string;
  titleColor?: string;
  notificationIconName?: string;
  onPressDrawer?: () => void;
  progress?: number;
}

const LessonHeader: React.FC<LessonHeaderProps> = ({
  onBackPress,
  title,
  icon,
  iconColor = '#006271',
  titleColor = '#006271',
  notificationIconName,
  onPressDrawer,
  progress = 0,
}) => {
  const handleIconPress = () => {
    if (onPressDrawer && icon === 'menu') {
      onPressDrawer();
    } else if (onBackPress) {
      onBackPress();
    }
  };
  const [statusBarStyle] = useState<'dark-content'>('dark-content');
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={statusBarStyle}
      />
      <View style={styles.leftHalf} />
      <View style={styles.rightHalf} />
      <View style={styles.contentContainer}>
        <View style={styles.titleIconContainer}>
          {icon && (
            <TouchableOpacity onPress={handleIconPress}>
              <Feather
                //@ts-ignore
                name={icon}
                size={24}
                color={iconColor}
                style={styles.icon}
              />
            </TouchableOpacity>
          )}

          <View style={styles.titleContainer}>
            <Text style={[styles.titleText, { color: titleColor }]}>
              {title}
            </Text>
          </View>

          {notificationIconName && (
            <Ionicons
              //@ts-ignore
              name={notificationIconName}
              size={24}
              color={iconColor}
              style={styles.icon}
            />
          )}
        </View>
        <View style={styles.progressTitleContainer}>
          <Text style={styles.progressText}>Course Progress</Text>
          <View style={styles.progressContainer}>
            <View
              style={{
                ...styles.progressBar,
                width: `${progress}%`,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LessonHeader;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: screenWidth * 0.05,
    backgroundColor: '#F6FCFE',
    height: screenHeight * 0.19,
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
  },
  progressTitleContainer: { alignItems: 'center' },
  progressContainer: {
    height: screenHeight * 0.015,
    backgroundColor: '#CBE6ED',
    width: '70%',
    borderRadius: screenHeight * 0.005,
    marginTop: screenHeight * 0.0075,
    marginBottom: screenHeight * 0.015,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#006271',
    borderRadius: screenHeight * 0.0025,
  },
  progressText: {
    fontSize: screenWidth * 0.03,
    fontFamily: FontArizona.BOLD,
    color: '#448F9B',
    marginTop: screenHeight * 0.0075,
    marginBottom: screenHeight * 0.0075,
  },
  leftHalf: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: screenWidth,
    backgroundColor: '#E1F4FB',
    transform: [{ skewY: '70deg' }],
    marginLeft: screenWidth * 0.09,
  },
  rightHalf: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: screenWidth - screenWidth * 0.55,
    backgroundColor: '#E1F4FB',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
    marginBottom: screenHeight * 0.03,
    marginRight: screenWidth * 0.075,
  },
  titleText: {
    fontSize: screenWidth * 0.04,
    fontFamily: FontArizona.BOLD,
    marginLeft: screenWidth * 0.025,
  },
  icon: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: screenWidth * 0.025,
    marginBottom: screenHeight * 0.023,
  },
  titleIconContainer: { flexDirection: 'row', justifyContent: 'space-between' },
});
