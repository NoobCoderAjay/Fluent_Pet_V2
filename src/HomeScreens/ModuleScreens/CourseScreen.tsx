import { Feather, Ionicons } from '@expo/vector-icons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';

import { Screen } from '@navigation/constants';
import { ModalStackScreenProps } from '@navigation/navigators/ModalNavigator';

import CustomButton from 'src/QuizeScreens/CustomComponents/CustomButton';
import useEducationDetails from 'src/api/hooks/useEducationDetails';
import { ScreenWrapper } from 'src/components';
import { Caption, FontArizona } from 'src/components/common/Typography';

//@ts-ignore
import BG from '../../assets/images/newImages/BG.png';
import ModuleOverviewContent from './Component/Course/ModuleOverviewContent';
import ModuleOverviewLessonsList from './Component/Course/ModuleOverviewLessonsList';

type Props = ModalStackScreenProps<Screen.COURSE_SCREEN>;
const CourseScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const [isError, setIsError] = useState(false);

  const [currentScreen, setCurrentScreen] = useState(0);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { data: moduleData } = useEducationDetails({ doLoad: false });

  const [isLoading, setLoading] = useState(true);

  const handleBtnPress = (moduleID: number, lessonID: number) => {
    navigation.navigate(Screen.LESSON_SCREEN, { moduleID, lessonID });
  };

  const handleBackBtnPress = () => {
    navigation.navigate(Screen.MODULE_SCREEN);
  };

  return (
    <ScreenWrapper isLoading={isLoading}>
      <View style={styles.container}>
        <ImageBackground source={BG} style={styles.imageContainer}>
          <View style={styles.header}>
            <Feather
              name="chevron-left"
              size={24}
              color="#FFFFFF"
              onPress={handleBackBtnPress}
            />
            <Text style={styles.lessonTitle}>Module Overview</Text>
            <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{moduleData[id].title}</Text>
          </View>
        </ImageBackground>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {isError ? (
            <View style={styles.error}>
              <Text style={styles.overviewTitle}>Overview</Text>
              <Caption>Something went wrong!</Caption>
            </View>
          ) : null}
          {!isError && moduleData[id]?.screens?.length ? (
            <ModuleOverviewContent
              isLoading={isLoading}
              moduleId={moduleData[id].sequence}
              screen={moduleData[id]?.screens[currentScreen]}
              setLoading={setLoading}
              onError={() => {
                setIsError(true);
                setLoading(false);
              }}
            />
          ) : null}
          {moduleData[id]?.screens?.length > 1 ? (
            <View style={styles.bottomButtonContainer}>
              {currentScreen !== 0 ? (
                <CustomButton
                  disabled={currentScreen === 0}
                  text="Back"
                  onPress={() => {
                    setLoading(true);
                    setCurrentScreen(currentScreen - 1);
                  }}
                />
              ) : null}
              {currentScreen !== moduleData[id]?.screens?.length - 1 ? (
                <CustomButton
                  disabled={
                    currentScreen === moduleData[id]?.screens?.length - 1
                  }
                  text="Next"
                  onPress={() => {
                    setLoading(true);
                    setCurrentScreen(currentScreen + 1);
                  }}
                  style={[styles.saveButton]}
                  textStyle={[styles.bottomButtonText]}
                />
              ) : null}
            </View>
          ) : null}
          {moduleData[id]?.lessons?.length ? (
            <View style={styles.overview}>
              <Text style={styles.overviewTitle1}>In this course:</Text>
              {moduleData[id]?.lessons?.map((lesson: any, idx: number) => (
                <ModuleOverviewLessonsList
                  key={idx}
                  handleBtnPress={handleBtnPress}
                  id={id}
                  index={idx}
                  lesson={lesson}
                />
              ))}
            </View>
          ) : null}
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  scrollViewContent: {
    paddingBottom: 300,
  },

  imageContainer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 85,
    left: 30,
    right: 30,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  lessonTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    padding: 20,
  },
  overviewTitle1: {
    color: '#006271',
    fontSize: 18,
    fontFamily: FontArizona.BOLD,
  },
  overviewTitle: {
    color: '#006271',
    fontSize: 18,
    marginTop: 4,
    marginBottom: 5,
    fontFamily: FontArizona.BOLD,
  },
  overview: { padding: 10 },
  textContainer: {
    position: 'absolute',
    bottom: 80,
    left: 30,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //bottom buttons
  bottomButtonContainer: {
    // position: 'absolute',
    // bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    // zIndex: 50,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  saveButton: {
    backgroundColor: '#006271',
    marginLeft: 10,
  },
});

export default CourseScreen;
