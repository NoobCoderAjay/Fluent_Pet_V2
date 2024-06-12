// import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// import _ from 'lodash';
// import React, { useContext, useEffect, useState } from 'react';
// import { StyleSheet, TouchableOpacity, View } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import { Navigator } from '@navigation/constants';

// import { AuthContext } from 'src/AuthContext';
// import {
//   BaseIcon,
//   HomeIcon,
//   Landing,
//   Module,
//   SpeechBubbleIcon,
// } from 'src/assets/icons';
// import { Caption2 } from 'src/components/common/Text';
// import { TAB_BAR_HEIGHT } from 'src/constants';
// import { useFeatureFlags, useIsKeyboardShown } from 'src/hooks';
// import { Colors } from 'src/theme/Colors';
// import { SCREEN_WIDTH, Size, SizeV2 } from 'src/theme/Size';

// interface Route {
//   key: string;
//   name: string;
//   params?: object | undefined;
// }

// // interface TabBarState {
// //   history: { key: string; type: string }[];
// //   index: number;
// //   key: string;
// //   routeNames: string[];
// //   routes: Route[];
// //   stale: boolean;
// //   type: string;
// // }

// // interface BottomTabBarOptions {
// //   state: TabBarState;
// //   descriptors: any;
// //   navigation: any;
// // }

// const TabBar: React.FC<BottomTabBarProps> = ({
//   state,
//   descriptors,
//   navigation,
// }) => {
//   const { globalState } = useContext(AuthContext);

//   const { isAlpha } = useFeatureFlags(globalState.user);
//   const insets = useSafeAreaInsets();
//   const isKeyboardShown = useIsKeyboardShown();
//   const [shouldHideTabBar, setShouldHideTabBar] = useState<boolean>(true);

//   const NUMBER_OF_TABS = isAlpha ? 5 : 3;
//   const TAB_BAR_HORIZONTAL_PADDING = isAlpha ? SizeV2.XL : SizeV2.X4_L;
//   const TAB_BUTTON_WIDTH =
//     (SCREEN_WIDTH - 2 * TAB_BAR_HORIZONTAL_PADDING) / NUMBER_OF_TABS;

//   useEffect(() => {
//     isKeyboardShown
//       ? setShouldHideTabBar(true)
//       : _.delay(() => setShouldHideTabBar(false), SHOW_TAB_BAR_DELAY_IN_MS);
//   }, [isKeyboardShown]);

//   const renderIcon = (name: string, color: Colors) => {
//     switch (name) {
//       case Navigator.BASE:
//         return <BaseIcon color={color} size={ICON_SIZE} />;
//       case Navigator.ACTIVITY:
//         return <SpeechBubbleIcon color={color} size={ICON_SIZE} />;
//       case Navigator.HOUSEHOLD:
//         return <HomeIcon color={color} size={ICON_SIZE} />;
//       case Navigator.LANDING_NAV:
//         return <Landing color={color} size={ICON_SIZE} />;
//       case Navigator.MODULE_NAV:
//         return <Module color={color} size={ICON_SIZE} />;
//       default:
//         null;
//     }
//   };

//   const renderButton = (route: Route, index: number) => {
//     const { options } = descriptors[route.key];
//     const isFocused = state.index === index;
//     const color = isFocused ? Colors.PRIMARY_DARK : Colors.SECONDARY_LIGHT;

//     const onPress = () => {
//       const event = navigation.emit({
//         type: 'tabPress',
//         target: route.key,
//         canPreventDefault: true,
//       });

//       if (!isFocused && !event.defaultPrevented) {
//         // The `merge: true` option makes sure that the params inside the tab screen are preserved
//         navigation.navigate({ name: route.name, merge: true } as any);
//       }
//     };

//     return (
//       <TouchableOpacity
//         style={[styles.tabButton, { width: TAB_BUTTON_WIDTH }]}
//         key={route.name}
//         accessibilityRole="button"
//         accessibilityState={isFocused ? { selected: true } : {}}
//         accessibilityLabel={options.tabBarAccessibilityLabel}
//         onPress={onPress}>
//         {renderIcon(route.name, color)}
//         <Caption2 v2 color={color} style={styles.label}>
//           {route.name.replace('Nav', '')}
//         </Caption2>
//       </TouchableOpacity>
//     );
//   };

//   if (shouldHideTabBar) {
//     return <></>;
//   } else {
//     return (
//       <View
//         style={[
//           styles.tabBar,
//           {
//             marginBottom: insets.bottom,
//             paddingHorizontal: TAB_BAR_HORIZONTAL_PADDING,
//           },
//         ]}>
//         {state.routes.map(renderButton)}
//       </View>
//     );
//   }
// };

// const SHOW_TAB_BAR_DELAY_IN_MS = 50;

// const ICON_SIZE = SizeV2.L;

// const styles = StyleSheet.create({
//   tabBar: {
//     height: TAB_BAR_HEIGHT,
//     borderTopWidth: 1,
//     borderColor: Colors.GREY,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   tabButton: {
//     paddingTop: SizeV2.S,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingBottom: Size.X2_S,
//   },
//   label: {
//     marginTop: SizeV2.X2_S,
//   },
// });

// export default TabBar;
