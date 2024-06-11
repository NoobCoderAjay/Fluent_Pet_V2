import { useActionSheet } from "@expo/react-native-action-sheet";
import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import FormSelect from "./FormSelect";
import { getDisabledLabels } from "./helpers/getDisabledLabels";
import { Avatar as AvatarType, AddPusherGuide } from "../model/household";
import Avatar from "../../components/Avatar/Avatar";
import { AvatarSize } from "../../components/Avatar/constants/AvatarSize";
import { AddIcon } from "../../assets/icons";
import { Colors } from "../../theme/Colors";
import { Size, SizeV2 } from "../../theme/Size";
import { HeadlineLight, Title1 } from "../../common/Text";
import { Divider, SafeAreaBottomButton } from "../../common";
import { Label, TextInput } from "../../common/Form";
import { LearnerForm, TeacherForm } from "../../components/Household";
import CustomButton from "../../QuizScreens/Forms/CustomButton";
import AvatarTypeSpecific from "../../components/Avatar/AvatarTypeSpecific";
import { FontArizona } from "../../common/Typography";
import CustomTextInput from "../../common/Form/CustomTextInput";

// type Props = ModalStackScreenProps<Screen.HOUSEHOLD_ADD>;
type Props = {};

const HouseholdAdd: React.FC<Props> = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const [errors, setErrors] = useState({});
  const [subjectName, setSubjectName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState<Date>();
  const [trainingDate, setTrainingDate] = useState<Date>();
  const [species, setSpecies] = useState<any>({});
  const [country, setCountry] = useState("");
  const [formType, setFormType] = useState(
    AddPusherGuide.TEACHER ? "Teacher" : "Learner"
  );
  type LearnerTypesForSelect = {
    Name: string;
    Id: number;
  }[];
  const [learnerTypesForSelect, setLearnerTypesForSelect] =
    useState<LearnerTypesForSelect>([]);
  const [subType, setSubType] = useState("");
  const [language, setLanguage] = useState("");
  const [researchId, setResearchId] = useState("");
  const [avatar, setAvatar] = useState<AvatarType>();
  const [sendHouseholdInvitation, setSendHouseholdInvitation] =
    useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isLearnerForm = formType === "Learner";
  const onBirthDateSelect = (date?: Date) => {
    if (date) {
      setBirthDate(date);
    }
  };

  const onTrainingDateSelect = (date?: Date) => {
    if (date) {
      setTrainingDate(date);
    }
  };

  return (
    <>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <FormSelect
          labels={["Learner", "Teacher"]}
          disabledLabels={[]}
          value={formType}
          onChange={(value) => setFormType(value)}
        />

        <View className="flex-row mt-5 w-full">
          <AvatarTypeSpecific
            name={""}
            pushers={[]}
            size={70}
            style={{ marginTop: 6 }}
          />
          <View className="flex-col ml-3 mt-7">
            <Text
              className={`text-[16px] font-bold text-[#007180] font-[${FontArizona.BOLD}]`}
            >
              Upload photo
            </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Label>{isLearnerForm ? "Learner Name" : "Teacher Name"}</Label>
          <TextInput
            marginBottom={Size.XS}
            placeholder={isLearnerForm ? "Learner Name" : "Teacher Name"}
            onChangeText={setSubjectName}
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
            value={subjectName}
          />

          {isLearnerForm ? (
            <LearnerForm
              learnerTypesForSelect={learnerTypesForSelect}
              species={species}
              subType={subType}
              language={language}
              researchId={researchId}
              birthDate={birthDate}
              trainingDate={trainingDate}
              setSpecies={setSpecies}
              setSubType={setSubType}
              setLanguage={setLanguage}
              setResearchId={setResearchId}
              onBirthDateSelect={onBirthDateSelect}
              onTrainingDateSelect={onTrainingDateSelect}
            />
          ) : (
            <TeacherForm
              isNewTeacher={true}
              email={email}
              country={country}
              sendHouseholdInvitation={sendHouseholdInvitation}
              setEmail={setEmail}
              setCountry={setCountry}
              setSendHouseholdInvitation={setSendHouseholdInvitation}
            />
          )}
        </View>
      </KeyboardAwareScrollView>
      {/* <SafeAreaBottomButton
        // onPress={onSubmit}
        isDisabled={isSubmitting}
        label={`SAVE NEW ${formType.toUpperCase()}`}
        errors={errors}
      /> */}
      <View className="absolute bottom-5 w-full">
        <CustomButton
          text={`SAVE NEW ${formType.toUpperCase()}`}
          className="bg-[#006271] ml-2.5 "
          textStyle={[styles.bottomButtonText]}
        />
      </View>
    </>
  );
};

export default HouseholdAdd;

const styles = StyleSheet.create({
  screenHeader: {
    paddingTop: Size.L,
    paddingHorizontal: Size.L,
    alignItems: "center",
  },
  contentContainer: {
    paddingHorizontal: Size.L,
    paddingBottom: Size.L,
    alignItems: "center",
    flexGrow: 1,
  },
  inputContainer: {
    width: "100%",
    marginTop: 15,
  },
  bottomButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
