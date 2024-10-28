import { RouteProp, ParamListBase } from "@react-navigation/native";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface MenuItem {
  id: number;
  icon: string;
  routeName: string;
  title: string;
  component: React.ComponentType;
}

const findScreenByRoute = (
  routeName: string,
  menu: MenuItem[]
): MenuItem | undefined => {
  return menu.find((item) => item.routeName === routeName);
};

const screenOptions = (
  route: RouteProp<ParamListBase, string>,
  menu: MenuItem[]
): BottomTabNavigationOptions => {
  const screen = findScreenByRoute(route.name, menu);

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
    tabBarShowLabel: true,
    tabBarLabel: screen?.title,
  };
};

export default screenOptions;
