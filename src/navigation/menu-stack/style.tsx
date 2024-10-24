import { RouteProp, ParamListBase } from "@react-navigation/native";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface MenuItem {
  id: number;
  icon: string;
  name: string;
  title: string;
  component: React.ComponentType;
}

// const defaultWhiteColor = "#ffffff";
// const defaultBlackColor = "#000000";

const findScreenByRoute = (
  menu: MenuItem[],
  name: string
): MenuItem | undefined => {
  return menu.find((item) => item.name === name);
};

const screenOptions = (
  route: RouteProp<ParamListBase, string>,
  menu: MenuItem[]
): BottomTabNavigationOptions => {
  const screen = findScreenByRoute(menu, route.name);

  return {
    headerShown: false,
    tabBarStyle: {},
    tabBarIconStyle: {},
    tabBarIcon: ({ size, color }) => (
      <MaterialCommunityIcons
        name={screen ? screen.icon : "help-circle"}
        size={size}
        color={color}
      />
    ),
    tabBarShowLabel: false,
  };
};

export default screenOptions;
