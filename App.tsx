import { useFonts } from "expo-font";
import BottomNav from "./src/bottomNav";
import "react-native-reanimated";
import "react-native-gesture-handler";

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

  return <BottomNav />;
};

export default App;
