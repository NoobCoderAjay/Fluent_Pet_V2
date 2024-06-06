import { FontAwesome as FontAwesomeIcon } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { BodyBold } from "./Typography";
import { TextSize } from "../theme/Text";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { SizeV2 } from "../theme/Size";
import AnimatedPressable from "./AnimatedPressable";

interface Props {
  linkName: string;
  iconName?: any;
  title?: string;
}

export const SUPPORT_URLS: Record<string, string> = {
  home: "https://flnt.pt/connect-support#troubleshooting-adding-a-base-and-buttons",
  connectToBase:
    "https://support.fluent.pet/en/articles/6887888-troubleshoot-step-2-connecting-to-your-new-base",
  onboardingVideo: "https://flnt.pt/connect-onboarding-video",
  connectToHomeWifi:
    "https://support.fluent.pet/en/articles/6887903-troubleshoot-step-3-select-your-wifi-network",
  registerBase:
    "https://support.fluent.pet/en/articles/6887905-troubleshoot-step-4-registering-your-base",
  addButton:
    "https://support.fluent.pet/en/articles/6875605-troubleshoot-step-5-let-s-add-a-button",
};

export const SupportLink: React.FC<Props> = ({ linkName, iconName, title }) => {
  title = title || "Tap here for troubleshooting support";
  iconName = iconName || "question-circle";

  return (
    <AnimatedPressable
      style={{ marginTop: SizeV2.L }}
      onPress={() => {
        WebBrowser.openBrowserAsync(SUPPORT_URLS[linkName]);
      }}
    >
      <BodyBold>
        <FontAwesomeIcon
          name={iconName}
          size={TextSize.caption1.lineHeight}
          color={Colors.SECONDARY_LIGHT}
        />
        {"  "}
        {title}
      </BodyBold>
    </AnimatedPressable>
  );
};
