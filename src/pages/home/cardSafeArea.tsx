/* eslint-disable react-native/no-inline-styles */
import { View, SafeAreaView, ViewStyle } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { map } from "../../../assets/images";

const ImageBackgroundCard = styled.ImageBackground<{ bgColor?: string }>`
  height: 40%;
  width: 100%;
  flex: 1;
  background-color: ${({ bgColor }) => bgColor || Colors?.white};
`;

type SafeAreaProp = {
  children: React.ReactNode;
  style?: ViewStyle;
  bg?: string;
  height?: string;
  width?: string;
  safeAreaBg?: string;
};

const CardSafeAreaWrap = ({
  children,
  style,
  bg = Colors.white,
  height = "100%",
  width = "100%",
  safeAreaBg = Colors.white,
}: SafeAreaProp): JSX.Element => {
  return (
    <ImageBackgroundCard bgColor={safeAreaBg} source={map} resizeMode="cover">
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: bg,
            height,
            width,
            ...style,
          }}
        >
          {children}
        </View>
      </SafeAreaView>
    </ImageBackgroundCard>
  );
};

export default CardSafeAreaWrap;
