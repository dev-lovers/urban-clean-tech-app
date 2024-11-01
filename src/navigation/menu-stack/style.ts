import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export const tabNavigationOptions: BottomTabNavigationOptions = {
  headerShown: false,
  // headerTitleAlign: "center",
  // headerStyle: {
  //   backgroundColor: "#ffffff",
  // },
  // headerTintColor: "#000000",
  // headerTitleStyle: {
  //   fontWeight: "bold",
  // },
  tabBarStyle: {
    // backgroundColor: "#ffffff",
    paddingBottom: 5,
    height: 60,
  },
  tabBarItemStyle: {
    paddingVertical: 5,
  },
  // tabBarActiveTintColor: "tomato",
  // tabBarInactiveTintColor: "gray",
  // tabBarActiveBackgroundColor: "#000000",
  // tabBarInactiveBackgroundColor: "#000000",
  tabBarShowLabel: true,
  tabBarHideOnKeyboard: true,
};

export const tabScreenOptions: BottomTabNavigationOptions = {
  tabBarIconStyle: {
    width: 24,
    height: 24,
  },
  tabBarLabelPosition: "below-icon",
};
