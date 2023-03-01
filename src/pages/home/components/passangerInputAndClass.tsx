import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import CustomText from "../../../components/CustomText";
import Fonts from "../../../constants/Fonts";
import {
  ChevronDownSvg,
  ProfileCircleSvg,
  SettingsSvg,
} from "../../../../assets/svg";

const InputWrap = styled.View<{ mt?: number; width?: string }>`
  border-radius: 10px;
  border: 1px solid ${Colors.border_color};
  padding-horizontal: 12px;
  padding-vertical: 20px;
  width: ${({ width }) => width || "100%"};
  position: relative;
  margin-top: ${({ mt }) => mt || 0}px;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

type PassangerInputAndClassProps = {
  mt?: number;
  type: PassengerInputEnum;
  width?: string;
};

export enum PassengerInputEnum {
  Passenger = "Passenger",
  Class = "Class",
}

const PassangerInputAndClass = ({
  mt,
  type,
  width,
}: PassangerInputAndClassProps) => {
  return type === PassengerInputEnum.Passenger ? (
    <InputWrap width={width} mt={mt}>
      <View
        style={{
          position: "absolute",
          top: -7,
          left: 26,
          paddingHorizontal: 8,
          backgroundColor: Colors?.white,
        }}
      >
        <CustomText
          fontFamily={Fonts.PoppinsRegular}
          fontSize={12}
          color={Colors?.dark_grey_2}
          fontWeight="400"
        >
          Passenger
        </CustomText>
      </View>

      <Row>
        <ProfileCircleSvg style={{ position: "relative", top: -2 }} />
        <CustomText
          fontFamily={Fonts.PoppinsMedium}
          fontSize={14}
          left={5}
          color={Colors?.black}
          fontWeight="400"
        >
          1 Passenger
        </CustomText>
      </Row>
    </InputWrap>
  ) : (
    <InputWrap width={width} mt={mt}>
      <View
        style={{
          position: "absolute",
          top: -7,
          left: 26,
          paddingHorizontal: 8,
          backgroundColor: Colors?.white,
        }}
      >
        <CustomText
          fontFamily={Fonts.PoppinsRegular}
          fontSize={12}
          color={Colors?.dark_grey_2}
          fontWeight="400"
        >
          Class
        </CustomText>
      </View>

      <Row>
        <SettingsSvg style={{ position: "relative", top: -2 }} />
        <CustomText
          fontFamily={Fonts.PoppinsMedium}
          fontSize={14}
          left={5}
          color={Colors?.black}
          fontWeight="400"
        >
          Economy
        </CustomText>
      </Row>

      <ChevronDownSvg style={{ color: Colors?.greyPlaceholderTextColor }} />
    </InputWrap>
  );
};

export default PassangerInputAndClass;
