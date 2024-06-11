import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { GlobalState } from "../../GlobalState";
import { emptyUserObject } from "../../UserProps";
import { AuthParams } from "../../AuthParams";
import { BackendEnvType } from "../../lib/environment";

interface AuthState extends GlobalState {
  axios: AxiosInstance;
}

const initialState: AuthState = {
  //@ts-ignore
  backendEnv: BackendEnvType,
  backendUrl: "",
  user: emptyUserObject,
  authToken: null,
  isLoading: false,
  errors: null,
  loginAs: null,
  refreshTokenData: null,
  expiresDateTime: null,
  isIntercomLoggedIn: false,
  expoPushToken: null,
  axios: {} as AxiosInstance,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart(state) {
      state.isLoading = true;
      state.errors = null;
    },
    signInSuccess(state, action: PayloadAction<AuthParams>) {
      const {
        authToken,
        avatar,
        userInfo,
        refreshTokenData,
        expiresIn,
        loginAs,
      } = action.payload;
      state.authToken = authToken;
      state.user = userInfo;
      state.user.avatar = avatar;
      state.refreshTokenData = refreshTokenData;
      state.expiresDateTime = Date.now() + expiresIn * 1000;
      state.loginAs = loginAs;
      state.isLoading = false;
    },
    signInFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errors = action.payload;
    },

    signOutSuccess(state) {
      state.authToken = null;
      state.user = emptyUserObject;
      state.refreshTokenData = null;
      state.expiresDateTime = null;
      state.loginAs = null;
      state.isLoading = false;
    },
    signOutSuccessOne(state) {},
    signOutFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errors = action.payload;
    },
    // switchEnvironment(state, action: PayloadAction<BackendEnvType>) {
    //   state.backendEnv = action.payload;
    //   // Update backendUrl or any other related properties as needed
    // },
    setPushNotificationToken(state, action: PayloadAction<string>) {
      state.expoPushToken = action.payload;
    },
    setLoginAs(state, action: PayloadAction<string | null>) {
      state.loginAs = action.payload;
    },
    setIsIntercomLoggedIn(state, action: PayloadAction<boolean>) {
      state.isIntercomLoggedIn = action.payload;
    },
    setOnboardedStatus(state, action: PayloadAction<boolean>) {
      state.user.featureFlags.onboarded = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  // switchEnvironment,
  setPushNotificationToken,
  setLoginAs,
  setIsIntercomLoggedIn,
  setOnboardedStatus,
} = authSlice.actions;

export default authSlice.reducer;
