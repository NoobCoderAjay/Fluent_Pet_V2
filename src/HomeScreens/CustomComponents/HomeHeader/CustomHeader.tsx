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

interface HomeHeaderProps {
  onBackPress?: () => void;
  title: string;
  icon?: string;
  iconColor?: string;
  titleColor?: string;
  notificationIconName?: string;
  onPressDrawer?: () => void;
}

const CustomHomeHeader: React.FC<HomeHeaderProps> = ({
  onBackPress,
  title,
  icon,
  iconColor = '#006271',
  titleColor = '#006271',
  notificationIconName,
  onPressDrawer,
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
        <Text style={[styles.titleText, { color: titleColor }]}>{title}</Text>
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
  );
};

export default CustomHomeHeader;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: screenWidth * 0.05,
    backgroundColor: '#F6FCFE',
    height: screenHeight * 0.13,
  },
  leftHalf: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: screenWidth,
    backgroundColor: '#E1F4FB',
    transform: [{ skewY: '60deg' }],
    marginLeft: screenWidth * 0.06,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginBottom: screenHeight * 0.023,
    marginRight: screenWidth * 0.075,
  },
  titleText: {
    fontSize: 16,
    fontFamily: FontArizona.BOLD,
    marginLeft: screenWidth * 0.025,
  },
  icon: {
    marginRight: screenWidth * 0.025,
    marginBottom: screenHeight * 0.023,
  },
});
