import React, { useContext } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import WebView from 'react-native-webview';

import { AuthContext } from 'src/AuthContext';
import { FontArizona } from 'src/components/common/Typography';
import { IS_ANDROID } from 'src/constants';

interface Props {
  isLoading: boolean;
  screen: any;
  moduleId: number;
  setLoading(isLoading: boolean): void;
  onError(): void;
}
export const ModuleOverviewContent: React.FC<Props> = ({
  isLoading = true,
  screen,
  setLoading,
  moduleId,
  onError,
}: Props) => {
  const { globalState } = useContext(AuthContext);
  const token = globalState.authToken;
  const backendAPIEndpoint = globalState.backendUrl;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={styles.pageContainer}>
        <View renderToHardwareTextureAndroid={true}>
          <Text style={styles.overviewTitle}>Overview</Text>

          <WebView
            //web view issue with android can be fixed by setting androidLayerType to software
            androidLayerType={IS_ANDROID ? 'software' : 'none'}
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{
              display: isLoading ? 'none' : 'flex',
            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            onLoad={() => {
              setLoading(false);
            }}
            onHttpError={onError}
            source={{
              uri: `${backendAPIEndpoint}/education/learning_modules/${moduleId}?screen=${screen.sequence}`,
              headers: {
                Authorization: 'Bearer' + ' ' + token,
              },
            }}
            style={{
              height: Dimensions.get('screen').height / 4,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ModuleOverviewContent;

const styles = StyleSheet.create({
  pageContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },

  overviewTitle: {
    color: '#006271',
    fontSize: 18,
    paddingBottom: 10,
    fontFamily: FontArizona.BOLD,
  },
});
