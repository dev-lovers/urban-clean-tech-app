import { StackNavigationOptions } from "@react-navigation/stack";

// const defaultWhiteColor = "#ffffff";
// const defaultBlackColor = "#000000";

const stackOptions: StackNavigationOptions = {
  headerShown: false,
  //   headerStyle: {
  //     backgroundColor: defaultBlackColor,
  //   },
  headerTitleAlign: "center",
  //   headerTintColor: defaultWhiteColor,
  headerTitleStyle: {
    textAlign: "center",
    // color: defaultWhiteColor,
  },
};

export default stackOptions;
