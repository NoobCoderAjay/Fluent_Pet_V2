import ConnectStepTwo from "./src/Hardware/ConnectStepTwo";
import ConnectionStepOne from "./src/Hardware/ConnectStepOne";
import HardwareScreen from "./src/Hardware/HardwareScreen";
import SetupConnection from "./src/Hardware/SetupConnection";
import SystemSelection from "./src/Home/SystemSelection";
import FontLoader from "./src/components/FontLoader";
import HardWareNavigator from "./src/navigation/navigators/HardwareNavigator";
import OnboardingNavigator from "./src/navigation/navigators/OnboardingNavigator";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/navigators/RootNavigator";
import { Provider } from "react-redux";
import store from "./store";
import { useAuth0, Auth0Provider } from "react-native-auth0";

export default function App() {
  return (
    <Auth0Provider
      domain={"auth.fluent.pet"}
      clientId={"AIrOPMfqW9CSVaKxJPsPR8sG2NdUGggY"}
    >
      <Provider store={store}>
        <FontLoader>
          <RootNavigator />
        </FontLoader>
      </Provider>
    </Auth0Provider>
  );
}
