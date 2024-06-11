import axios from "axios";
import * as Application from "expo-application";
import React, { useEffect, useState } from "react";
import { Alert, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Auth0, { Credentials, useAuth0 } from "react-native-auth0";

import { RootState } from "../../store";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/slices/authSlice";
import { IS_IOS, packageName } from "../constants";
import { Size } from "../theme/Size";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Body } from "../common/Text";
import { Button } from "../common";
import { BackendEnvType } from "../lib/environment";
import { result } from "lodash";

const auth0ClientId = "AIrOPMfqW9CSVaKxJPsPR8sG2NdUGggY";
const auth0domain = "auth.fluent.pet";

const auth0 = new Auth0({
  domain: auth0domain,
  clientId: auth0ClientId,
});

const appId = Application.applicationId;
const redirectUrl = IS_IOS
  ? `${appId}://${auth0domain}/ios/${appId}/callback`
  : `${packageName}://${auth0domain}/android/${packageName}/callback`;

interface Token {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  token_type: string;
}

interface TokenData {
  grant_type: "authorization_code";
  client_id: string;
  code: string;
  redirect_uri: string;
  code_verifier: string;
}

export interface RefreshTokenData {
  grant_type: "refresh_token";
  client_id: string;
  refresh_token: string;
  redirect_uri: string;
  code_verifier: string;
}

export class AuthenticationError extends Error {
  data: Response;

  constructor(message: string, data: Response) {
    super(message);
    this.name = "AuthenticationError";
    this.data = data;
  }
}

export async function fetchAccessToken(data: TokenData | RefreshTokenData) {
  const formBody = Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
  const tokenResponse = await fetch(`https://${auth0domain}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formBody,
  });

  if (tokenResponse.ok) {
    const token = (await tokenResponse.json()) as Token;
    const userInfoResponse = await fetch(`https://${auth0domain}/userinfo`, {
      headers: { Authorization: `Bearer ${token.access_token}` },
    });
    const userInfo = await userInfoResponse.json();

    let refreshTokenData: RefreshTokenData | null = null;
    if (token.refresh_token) {
      refreshTokenData = {
        ...data,
        refresh_token: token.refresh_token,
        grant_type: "refresh_token",
      };
    }

    return {
      authToken: token.access_token,
      userInfo,
      refreshTokenData,
      expiresIn: token.expires_in * 1000,
    };
  } else {
    console.log(`tokenResponse error: ${JSON.stringify(tokenResponse)}`);
    throw new AuthenticationError(
      "Failed to fetch access token",
      tokenResponse
    );
  }
}

export async function signOut(token: string) {
  await fetch(`https://${auth0domain}/v2/logout`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log("Logged out.");
}
console.log("step-2");
export default function Auth0Login() {
  const dispatch = useDispatch();
  const globalState = useSelector((state: RootState) => state.auth);
  const { authorize } = useAuth0();
  const [auth0Result, setAuth0Result] = useState<Credentials | null>(null);

  const handleLogin = async () => {
    dispatch(signInStart());
    try {
      console.log("Initiating Auth0 authorization");
      const result: Credentials | undefined = await authorize({
        scope: "openid profile email offline_access",
        audience: "https://app.fluent.pet",
        redirectUrl,
        additionalParameters: {
          prompt: "login",
        },
      });

      setAuth0Result(result!);
    } catch (e) {
      console.error(e);
      dispatch(signInFailure("Unknown error occurred."));
    }
  };
  console.log(redirectUrl);
  useEffect(() => {
    const handleAuth0Result = async () => {
      if (auth0Result) {
        try {
          const { authToken, userInfo, refreshTokenData, expiresIn } =
            await fetchAccessToken({
              grant_type: "authorization_code",
              client_id: auth0ClientId,
              code: auth0Result.code,
              redirect_uri: redirectUrl,
              code_verifier: auth0Result.codeVerifier,
            });

          console.log("Access token:", authToken);
          if (__DEV__ && globalState.backendEnv === BackendEnvType.LOCAL) {
            try {
              await axios.post(`${globalState.backendUrl}/api/v1/users`, {
                email: userInfo.email,
                name: userInfo.name,
              });
            } catch (e) {
              Alert.alert(`Failed to create user after local signup: ${e}.`);
            }
          }

          const avatar = userInfo.picture.replace("=s96-c", "=s400-c");

          dispatch(
            signInSuccess({
              userInfo,
              authToken,
              avatar,
              refreshTokenData,
              expiresIn,
            })
          );
        } catch (e: any) {
          const error: AuthenticationError = e;
          if (error.name === "AuthenticationError") {
            const status: number = error.data.status;
            if (status === 401) {
              Alert.alert("Your login has expired, Please log in again. (401)");
            } else {
              Alert.alert(
                `We had a problem with your session. Please log in again. (${status})`
              );
              dispatch(signInFailure(`Authentication error: ${status}`));
            }
          } else {
            dispatch(signInFailure("Unknown error occurred."));
          }
        }
      }
    };

    handleAuth0Result();
  }, [auth0Result]);
  return (
    <>
      <View style={styles.errorTextContainer}>
        {globalState.errors && (
          <Body color={Colors.RED}>{globalState.errors}</Body>
        )}
      </View>
      <Button label="LOGIN" marginBottom={Size.X4_L} onPress={handleLogin} />
    </>
  );
}

const styles = StyleSheet.create({
  errorTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: Size.X3_L,
  },
});
