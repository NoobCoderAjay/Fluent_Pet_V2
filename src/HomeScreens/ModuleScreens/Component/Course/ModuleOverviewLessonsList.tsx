import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FontArizona } from 'src/components/common/Typography';

//@ts-ignore
import Complete from '../../../../assets/images/newImages/Complete.png';
//@ts-ignore
import Reload from '../../../../assets/images/newImages/Reload.png';

interface Props {
  lesson: any;
  index: number;
  id: number;
  handleBtnPress(moduleID: number, lessonID: number): void;
}
const ModuleOverviewLessonsList: React.FC<Props> = ({
  handleBtnPress,
  id,
  lesson,
  index,
}) => {
  return (
    <TouchableOpacity onPress={() => handleBtnPress(id, index)}>
      <View style={styles.courseBoxesContainer}>
        <View style={styles.courseBox}>
          <View style={styles.boxContent}>
            <View style={styles.boxLeftContent}>
              <Image source={Complete} style={styles.boxImage} />
              <View style={styles.boxTextContainer}>
                <Text style={styles.boxText}>{lesson.title}</Text>
                <Text style={styles.boxSubText}>Completed: 2d ago</Text>
              </View>
            </View>
            <Image source={Reload} style={styles.reloadImage} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ModuleOverviewLessonsList;

const styles = StyleSheet.create({
  courseBoxesContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  courseBox: {
    flex: 1,
    backgroundColor: '#E2F3FB',
    borderRadius: 20,
    padding: 15,
  },
  boxContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  boxLeftContent: {
    flexDirection: 'row',
    marginLeft: 4,
  },
  boxTextContainer: {
    marginLeft: 10,
  },
  boxText: {
    fontFamily: FontArizona.BOLD,
    fontSize: 14,
    marginBottom: 10,
    color: '#006271',
  },
  boxSubText: {
    fontFamily: FontArizona.BOLD,
    fontSize: 12,
    marginBottom: 10,
    color: '#3692A1',
  },
  boxImage: {
    width: 50,
    height: 50,
  },
  reloadImage: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
});
