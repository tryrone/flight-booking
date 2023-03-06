import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/home";
import Tickets from "./pages/tickets";
import Profile from "./pages/profile";
import CustomText from "./components/CustomText";
import Colors from "./constants/Colors";
import Fonts from "./constants/Fonts";
import { HomeSvg, ProfileSvg, TicketSvg } from "../assets/svg";

const Tab = createBottomTabNavigator();

type ComponentLabelProps = {
  focused: boolean;
  text: string;
};

const RenderComponentLabel = ({
  focused,
  text,
}: ComponentLabelProps): JSX.Element => {
  return (
    <CustomText
      color={focused ? Colors?.primary : Colors?.inactiveIcon}
      fontWeight={focused ? "500" : "500"}
      fontFamily={Fonts?.PoppinsSemiBold}
      top={4}
      fontSize={12}
    >
      {text}
    </CustomText>
  );
};

type ComponentIconProps = {
  focused: boolean;
  activeIcon: JSX.Element;
  inacitveIcon: JSX.Element;
};

const RenderComponetIcon = ({
  focused,
  activeIcon,
  inacitveIcon,
}: ComponentIconProps): JSX.Element => {
  return focused ? activeIcon : inacitveIcon;
};

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.inactiveIcon,
        lazy: true,
        tabBarStyle: [
          {
            display: "flex",
            height: 80,
            borderTopColor: Colors?.white,
            borderTopWidth: 0,
            position: "relative",
            paddingTop: 15,
          },
          null,
        ],
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) =>
            RenderComponentLabel({ focused, text: "Home" }),
          tabBarIcon: ({ focused }) =>
            RenderComponetIcon({
              focused,
              activeIcon: <HomeSvg style={{ color: Colors?.primary }} />,
              inacitveIcon: <HomeSvg style={{ color: Colors?.inactiveIcon }} />,
            }),
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarLabel: ({ focused }) =>
            RenderComponentLabel({ focused, text: "Tickets" }),
          tabBarIcon: ({ focused }) =>
            RenderComponetIcon({
              focused,
              activeIcon: <TicketSvg style={{ color: Colors?.primary }} />,
              inacitveIcon: (
                <TicketSvg style={{ color: Colors?.inactiveIcon }} />
              ),
            }),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) =>
            RenderComponentLabel({ focused, text: "Profile" }),
          tabBarIcon: ({ focused }) =>
            RenderComponetIcon({
              focused,
              activeIcon: <ProfileSvg style={{ color: Colors?.primary }} />,
              inacitveIcon: (
                <ProfileSvg style={{ color: Colors?.inactiveIcon }} />
              ),
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
