import { useFonts } from "expo-font";
import BottomNav from "./src/bottomNav";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "./src/constants/navigationConstants";
import FlightDetail from "./src/pages/flightDetail";

const Stack = createStackNavigator();

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.bottomNav}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={ROUTES.bottomNav} component={BottomNav} />
        <Stack.Screen name={ROUTES.flightDetail} component={FlightDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
