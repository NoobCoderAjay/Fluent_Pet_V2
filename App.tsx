import HardwareScreen from "./src/Hardware/HardwareScreen";
import FontLoader from "./src/components/FontLoader";
import OnboardingNavigator from "./src/navigation/navigators/OnboardingNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <FontLoader> */}
        {/* <OnboardingScreen /> */}
        {/* <OnboardingNavigator /> */}
        <HardwareScreen />
        {/* </FontLoader> */}
      </NavigationContainer>
    </>
  );
}
