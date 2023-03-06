import React from "react";
import SafeAreaWrap from "../../components/SafeAreaWrap";
import Colors from "../../constants/Colors";
import styled from "styled-components/native";
import CustomText from "../../components/CustomText";
import Fonts from "../../constants/Fonts";
import { ScrollView, View } from "react-native";
import { BellSvg } from "../../../assets/svg";
import DestinationForm from "./components/destinationForm";
import PopularFlights from "./components/popularFlights";
import { ScreenDefaultProps } from "../../utils";
import { map } from "../../../assets/images";
import CardSafeAreaWrap from "./cardSafeArea";

const BlueBg = styled.View`
  height: 40%;
  width: 100%;
  background-color: ${Colors?.primary};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
`;

const SpacedRow = styled.View<{
  mt?: number;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ mt }) => mt || 0}px;
`;

const NotificationWrap = styled.View`
  height: 35px;
  width: 35px;
  border-radius: ${35 / 2}px
  border-width: 1px;
  border-color: ${Colors?.white}
  background-color: rgba(225,225,225,0.1);
  justify-content: center;
  align-items: center;
`;

const FullImageBg = styled.ImageBackground`
  height: 100%;
  width: 100%;
`;

const ImageBackgroundCard = styled.ImageBackground<{ bgColor?: string }>`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor || Colors?.white};
`;

const Home = () => {
  return (
    <CardSafeAreaWrap bg={Colors.light_grey_2} safeAreaBg={Colors.primary}>
      <BlueBg>
        <FullImageBg source={map} resizeMode="cover" />
      </BlueBg>

      <View style={{ paddingHorizontal: 20 }}>
        <SpacedRow style={{ marginBottom: 20 }} mt={20}>
          <View>
            <CustomText
              color={Colors?.white}
              fontSize={13}
              fontWeight="400"
              fontFamily={Fonts.PoppinsSemiBold}
            >
              Good Morning, Aryo
            </CustomText>
            <CustomText
              color={Colors?.white}
              fontSize={20}
              fontWeight="500"
              top={5}
              fontFamily={Fonts.PoppinsSemiBold}
            >
              Where Are You Going?
            </CustomText>
          </View>

          <NotificationWrap>
            <BellSvg style={{ color: Colors.white }} />
          </NotificationWrap>
        </SpacedRow>
        <ScrollView showsVerticalScrollIndicator={false}>
          <DestinationForm />
          <PopularFlights />
        </ScrollView>
      </View>
    </CardSafeAreaWrap>
  );
};

export default Home;
