import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useContext, useRef, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { Screen } from '@navigation/constants';
import { ModalStackScreenProps } from '@navigation/navigators/ModalNavigator';

import { AuthContext } from 'src/AuthContext';
import CustomButton from 'src/QuizeScreens/CustomComponents/CustomButton';
import useEducationDetails from 'src/api/hooks/useEducationDetails';
import { ScreenWrapper } from 'src/components';
import { Caption, FontArizona } from 'src/components/common/Typography';
import { Colors } from 'src/theme/Colors';

//@ts-ignore
import LessonHeader from '../CustomComponents/LessonHeader/LessonHeader';
import ModuleSuccessModal from '../Modals/ModuleSuccessModal';

type Props = ModalStackScreenProps<Screen.LESSON_SCREEN>;

const LessonScreen: React.FC<Props> = ({ route }) => {
  const { lessonID, moduleID } = route.params;
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { globalState } = useContext(AuthContext);
  const token = globalState.authToken;
  const backendAPIEndpoint = globalState.backendUrl;
  const [pageIndex, setPageIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [isError, setIsError] = useState(false);
  const { data: moduleData } = useEducationDetails({
    doLoad: false,
  });
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const goToCourseScreen = () => {
    toggleModal();
    navigation.navigate(Screen.COURSE_SCREEN, { id: moduleID });
  };

  const currentLessonList =
    moduleData[moduleID]?.lessons[lessonID]?.screens || [];
  const onErrorHTTP = async () => {
    setIsError(true);
    setLoading(false);
  };
  const handleNextPage = () => {
    setIsError(false);
    setLoading(true);
    setPageIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevPage = () => {
    setIsError(false);
    setLoading(true);
    setPageIndex((prevIndex) => prevIndex - 1);
  };

  const handleBackBtnPress = () => {
    navigation.navigate(Screen.COURSE_SCREEN, { id: moduleID });
  };

  return (
    <ScreenWrapper isLoading={isLoading}>
      <View>
        {currentLessonList?.length ? (
          <LessonHeader
            title={moduleData[moduleID]?.lessons[lessonID].title}
            onBackPress={handleBackBtnPress}
            icon="chevron-left"
            notificationIconName="notifications-outline"
            progress={((pageIndex + 1) / currentLessonList?.length) * 100}
          />
        ) : null}

        <View style={styles.container}>
          <ScrollView
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.contentContainer}>
              <Text style={styles.overviewTitle}>
                {moduleData[moduleID]?.lessons[lessonID].title}
              </Text>
              {isError ? (
                <View>
                  <Caption>Something went wrong!</Caption>
                </View>
              ) : null}
              {!isError && currentLessonList?.length ? (
                <WebView
                  showsVerticalScrollIndicator={false}
                  onLoad={() => {
                    setLoading(false);
                    scrollViewRef.current?.scrollTo({
                      x: 5,
                      y: 5,
                      animated: true,
                    });
                  }}
                  onHttpError={onErrorHTTP}
                  source={{
                    uri: `${backendAPIEndpoint}/education/learning_modules/${moduleData[moduleID].sequence}/lessons/${moduleData[moduleID]?.lessons[lessonID].sequence}?screen=${currentLessonList[pageIndex].sequence}`,
                    headers: {
                      Authorization: 'Bearer' + ' ' + token,
                    },
                  }}
                  style={{ height: Dimensions.get('screen').height - 100 }}
                />
              ) : null}
            </View>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <View style={styles.bottomButtonContainer}>
              {currentLessonList?.length > 1 && pageIndex !== 0 ? (
                <CustomButton
                  text="Back"
                  disabled={pageIndex === 0}
                  onPress={() => {
                    handlePrevPage();
                    pageIndex === 0 && handleBackBtnPress();
                  }}
                />
              ) : null}

              {currentLessonList?.length - 1 === pageIndex ? (
                <CustomButton
                  text="Finish"
                  style={[styles.saveButton]}
                  textStyle={[styles.bottomButtonText]}
                  onPress={() => {
                    setIsModalVisible(!isModalVisible);
                  }}
                />
              ) : (
                <CustomButton
                  text="Next"
                  disabled={currentLessonList?.length - 1 === pageIndex}
                  style={[styles.saveButton]}
                  textStyle={[styles.bottomButtonText]}
                  onPress={() => {
                    handleNextPage();
                  }}
                />
              )}
            </View>
          </View>
        </View>

        <ModuleSuccessModal
          visible={isModalVisible}
          onClose={() => {
            goToCourseScreen();
          }}
          toggleModal={toggleModal}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#FFFFFF',
    height: Dimensions.get('screen').height - 130,
  },

  contentContainer: {
    padding: 0,
  },
  overviewTitle: {
    color: '#006271',
    fontSize: 18,
    marginTop: 4,
    marginBottom: 5,
    fontFamily: FontArizona.BOLD,
  },
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    height: Dimensions.get('screen').height * 0.16,
    width: '100%',
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 60,
    paddingHorizontal: 20,
  },
  saveButton: {
    backgroundColor: Colors.PRIMARY_DARK,
    marginLeft: 10,
  },
  bottomButtonText: {
    fontSize: 16,
    fontFamily: FontArizona.BOLD,
    color: Colors.WHITE,
  },
});

export default LessonScreen;
