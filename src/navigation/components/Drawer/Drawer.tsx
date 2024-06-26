import { AntDesign } from "@expo/vector-icons";
import Intercom from "@intercom/intercom-react-native";
import {
  DrawerActions,
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import React, { useContext } from "react";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Navigator, Screen } from "../../constants";
import CloseButton from "../CloseButton";
import DrawerButton from "./DrawerButton";
import TopButtons, { TopButton } from "./TopButtons";
import { BookIcon, LogoutIcon, SettingsIcon } from "../../../assets/icons";
import { SCREEN_WIDTH, Size, ViewportSize } from "../../../theme/Size";
import { UserProps } from "../../../UserProps";
import { Colors } from "../../../theme/Colors";
import Avatar from "../../../components/Avatar/Avatar";
import { AvatarSize } from "../../../components/Avatar/constants/AvatarSize";
import { HeadlineLight, Title1 } from "../../../common/Text";
import { Divider } from "../../../common";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const TEACHING_GUIDES_URL = "https://flnt.pt/teaching";

const Drawer = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const { top: topSafeArea } = useSafeAreaInsets();

  const topButtons: TopButton[] = [
    {
      visible: true,
      iconLeft: <BookIcon />,
      label: "TEACHING GUIDES",
      onPress: () => {
        WebBrowser.openBrowserAsync(TEACHING_GUIDES_URL);
      },
    },
    {
      visible: true,
      iconLeft: <SettingsIcon />,
      label: "ADVANCED TOOLS",
      onPress: () => {
        closeDrawer();
        navigation.navigate(Navigator.HOME_NAV, {
          screen: Screen.SETTINGS,
        });
      },
    },
    {
      visible: true,
      iconLeft: (
        <AntDesign
          name="customerservice"
          marginBottom={-Size.X2_S}
          size={24}
          color="black"
        />
      ),
      label: "HELP",
      onPress: () => {
        Intercom.present();
      },
    },
  ];

  const handleSignOut = async () => {
    // Intercom.logout();
    // setIsIntercomLoggedIn(false);
    // signOut();
  };

  const getUserName = ({ name, email }: UserProps) => {
    if (name) {
      // fullname can be an email address
      return name.split("@")[0];
    }

    return email ? email.split("@")[0] : "";
  };

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  // On smaller screens and if Bases Button is displayed
  // decrease spacing between items in the menu
  const spacingBetweenButtons =
    SCREEN_WIDTH <= ViewportSize.SMALL ? Size.XS : Size.S;

  return (
    <ScrollView
      style={{ paddingTop: topSafeArea, ...styles.container }}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.closeButtonHolder}>
        <CloseButton
          withBackground
          color={Colors.WHITE}
          backgroundColor={Colors.PRIMARY}
          onPress={closeDrawer}
        />
      </View>
      <View style={styles.userInfo}>
        <Avatar
          size={AvatarSize.LARGE}
          name=""
          // imageUri={globalState.user.avatar}
          style={styles.avatar}
        />
        {/* {globalState.user && (
          <Title1 align="center" style={styles.fullName}>
            {getUserName(globalState.user)}
          </Title1>
        )} */}
        <Divider
          marginTop={Size.XS}
          marginBottom={Size.XS}
          color={Colors.PRIMARY}
          height={2}
        />
        {/* {globalState.user && (
          <HeadlineLight
            align="center"
            marginBottom={Size.S}
            style={styles.email}>
            {globalState.user.email}
          </HeadlineLight>
        )} */}
      </View>
      <TopButtons buttons={topButtons} marginBottom={spacingBetweenButtons} />
      <Divider
        marginBottom={spacingBetweenButtons}
        width="100%"
        height={1}
        color={Colors.GREY}
      />
      <DrawerButton
        fullWidth
        marginBottom={spacingBetweenButtons}
        iconLeft={<LogoutIcon color={Colors.WHITE} />}
        label={"LOGOUT"}
        color={Colors.PRIMARY}
        textColor={Colors.WHITE}
        onPress={handleSignOut}
      />
    </ScrollView>
  );
};

export default Drawer;

const FULL_NAME_FONT_SIZE = 24;
const EMAIL_FONT_SIZE = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: { paddingHorizontal: Size.L, paddingBottom: Size.L },
  avatar: {
    marginTop: -Size.XS,
    marginBottom: Size.XS,
  },
  userInfo: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: Size.M,
  },
  fullName: {
    fontSize: FULL_NAME_FONT_SIZE,
    color: Colors.PRIMARY_DARK,
  },
  email: {
    fontSize: EMAIL_FONT_SIZE,
  },
  closeButtonHolder: {
    left: -Size.L,
    width: "100%",
  },
});
