import { View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";
import { PlaneSvg, SmallPlaneSvg } from "../../../../assets/svg";
import CustomText from "../../../components/CustomText";
import Fonts from "../../../constants/Fonts";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../../constants/navigationConstants";

const Dot = styled.View`
  height: 7px;
  width: 7px;
  border-radius: ${7 / 2}px;
  background-color: ${Colors.primary};
`;

const Wave = styled(MotiView)`
  height: 20px;
  width: 20px;
  border-radius: ${20 / 2}px;
  background-color: #87a7f5;
  position: absolute;
`;

const PaperWrapper = styled.Pressable<{
  mt?: number;
  mb?: number;
}>`
  background-color: ${Colors.white};
  border-width: 1px;
  border-color: ${Colors.border_color};
  border-radius: 10px;
  margin-top: ${({ mt }) => mt || 0}px;
  margin-bottom: ${({ mb }) => mb || 0}px;
  padding-vertical: 20px;
  padding-horizontal: 16px;
`;

const SpacedRow = styled.View<{
  mt?: number;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ mt }) => mt || 0}px;
  width: 100%;
`;

const Row = styled.View<{
  mt?: number;
  mb?: number;
}>`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ mt }) => mt || 0}px;
  margin-bottom: ${({ mb }) => mb || 0}px;
`;

const Line = styled.View`
  height: 1px;
  width: 100%;
  border: 1px dashed ${Colors?.grey_4};
`;

const FloatingPlane = styled(SmallPlaneSvg)`
  position: absolute;
  align-self: center;
  top: -7px;
`;

const Circle = styled.View`
  height: 30px;
  width: 30px;
  border-width: 1px;
  background-color: ${Colors?.light_grey_2};
  border-color: ${Colors.border_color};
  border-radius: ${30 / 2}px;
`;

const SonarDot = (): JSX.Element => {
  return (
    <View
      style={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        height: 20,
        width: 20,
      }}
    >
      {[...Array(3).keys()].map((index: number) => {
        return (
          <Wave
            from={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            transition={{
              type: "timing",
              duration: 2000,
              easing: Easing.out(Easing.ease),
              loop: true,
              delay: index * 400,
            }}
            key={index}
          />
        );
      })}

      <Dot />
    </View>
  );
};

const BookingDestinationRow = (): JSX.Element => {
  return (
    <SpacedRow>
      <View>
        <CustomText
          fontFamily={Fonts.PoppinsSemiBold}
          fontSize={14}
          fontWeight="500"
        >
          HLP
        </CustomText>
        <CustomText
          fontFamily={Fonts.PoppinsRegular}
          fontSize={11}
          color={Colors.greyPlaceholderTextColor}
          top={2}
          fontWeight="400"
        >
          DKI Jakarta
        </CustomText>
      </View>

      <View>
        <CustomText
          fontFamily={Fonts.PoppinsSemiBold}
          fontSize={12}
          align="center"
          fontWeight="500"
        >
          Flight Time
        </CustomText>
        <CustomText
          fontFamily={Fonts.PoppinsSemiBold}
          fontSize={11}
          align="center"
          color={Colors.primary}
          top={2}
          fontWeight="400"
        >
          1h 45m
        </CustomText>
      </View>

      <View>
        <CustomText
          fontFamily={Fonts.PoppinsSemiBold}
          fontSize={14}
          align="right"
          fontWeight="500"
        >
          BTH
        </CustomText>
        <CustomText
          fontFamily={Fonts.PoppinsRegular}
          fontSize={11}
          align="right"
          color={Colors.greyPlaceholderTextColor}
          top={2}
          fontWeight="400"
        >
          Kepulauan Riau
        </CustomText>
      </View>
    </SpacedRow>
  );
};

const BookingTime = (): JSX.Element => {
  return (
    <SpacedRow mt={20}>
      <Row>
        <CustomText
          fontSize={14}
          fontFamily={Fonts.PoppinsSemiBold}
          fontWeight="600"
          right={5}
        >
          10:00 AM
        </CustomText>
        <SonarDot />
      </Row>

      <View style={{ width: "40%", position: "relative" }}>
        <Line />
        <FloatingPlane
          style={{
            transform: [{ rotateZ: "45deg" }],
          }}
        />
      </View>

      <Row>
        <SonarDot />
        <CustomText
          fontSize={14}
          fontFamily={Fonts.PoppinsSemiBold}
          fontWeight="600"
          left={5}
        >
          11:45 AM
        </CustomText>
      </Row>
    </SpacedRow>
  );
};

const TicketRow = (): JSX.Element => {
  return (
    <Row mt={20} style={{ position: "relative", left: -32 }}>
      <Circle />
      <View style={{ width: "100%" }}>
        <Line />
      </View>
      <Circle />
    </Row>
  );
};

const AirlineAndPrice = (): JSX.Element => {
  return (
    <SpacedRow mt={10}>
      <CustomText
        fontFamily={Fonts.PoppinsMedium}
        fontSize={16}
        fontWeight="500"
      >
        Garuda Indonesia
      </CustomText>
      <CustomText
        fontFamily={Fonts.PoppinsMedium}
        fontSize={16}
        color={Colors.primary}
        fontWeight="600"
      >
        $140
      </CustomText>
    </SpacedRow>
  );
};

const BookingCard = () => {
  const navigation: never | any = useNavigation();
  return (
    <PaperWrapper
      onPress={() => navigation.navigate(ROUTES.flightDetail)}
      mt={20}
      mb={150}
    >
      <BookingDestinationRow />
      <BookingTime />
      <TicketRow />
      <AirlineAndPrice />
    </PaperWrapper>
  );
};

export default BookingCard;
