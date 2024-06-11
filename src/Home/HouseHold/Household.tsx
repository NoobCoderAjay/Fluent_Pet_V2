import { Text, View } from "react-native";
import React from "react";
import AvatarTypeSpecific from "../../components/Avatar/AvatarTypeSpecific";
import CustomButton from "../../QuizScreens/Forms/CustomButton";
import { FontArizona } from "../../common/Typography";

type Props = {};
const Member = ({ name, role }: { name: string; role: string }) => (
  <View className="flex-row px-3 mt-5">
    <AvatarTypeSpecific
      name={name[0]}
      pushers={[]}
      size={60}
      style={{ marginTop: 6 }}
    />
    <View className="flex-col ml-3 mt-3">
      <Text
        className={`text-[16px] font-bold text-[#007180] font-[${FontArizona.BOLD}]`}
      >
        {name}
      </Text>
      <Text
        className={`text-[12px] font-bold text-[#333333] font-[${FontArizona.BOLD} mt-1]`}
      >
        {role}
      </Text>
    </View>
  </View>
);
const Household: React.FC<Props> = () => {
  return (
    <View className="p-5 bg-white h-full">
      <View className="flex-row px-3">
        <AvatarTypeSpecific name="OK" pushers={[]} />
        <View className="flex-col gap-2 ml-2">
          <Text
            className={`font-bold text-[#006271] font-[${FontArizona.BOLD}] text-2xl`}
          >
            Rameet D’Souza
          </Text>
          <Text className={`font-bold font-[${FontArizona.BOLD}] text-1xl`}>
            Teacher
          </Text>
        </View>
      </View>
      <View className="px-3 py-5">
        <Text className={`font-bold font-[${FontArizona.BOLD}] text-[16px]`}>
          Add a member
        </Text>
        <Text
          className={`text-[14px] mt-3 text-[#8C8C8C] font-[${FontArizona.REGULAR}]`}
        >
          This request submits a request to delete all of your account data
          within 5 business days.
        </Text>
      </View>
      <View className="h-14 px-3">
        <CustomButton
          text="Add a Member"
          textStyle={{ color: "#333333" }}
          borderColor="#2B8996"
        />
      </View>
      <Member name="Floyd Miles" role="Teacher" />
      <Member name="Cookie" role="Teacher" />
    </View>
  );
};

export default Household;
