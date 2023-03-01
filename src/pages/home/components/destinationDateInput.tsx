import { View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import { CalenderSvg } from "../../../../assets/svg";
import CustomText from "../../../components/CustomText";
import Fonts from "../../../constants/Fonts";
import CustomSwitch from "../../../components/CustomSwitch";

const InputWrap = styled.View<{ mt?: number }>`
  border-radius: 10px;
  border: 1px solid ${Colors.border_color};
  padding-horizontal: 12px;
  padding-vertical: 20px;
  width: 100%;
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

type DestinationDateInputProps = {
  mt?: number;
};

const DestinationDateInput = ({ mt }: DestinationDateInputProps) => {
  return (
    <InputWrap mt={mt}>
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
          Date
        </CustomText>
      </View>
      <Row>
        <CalenderSvg />

        <CustomText
          fontFamily={Fonts.PoppinsMedium}
          fontSize={14}
          left={5}
          fontWeight="500"
        >
          04 Jan 2024
        </CustomText>
      </Row>

      <Row>
        <CustomText
          color={Colors?.dark_grey}
          fontFamily={Fonts?.PoppinsRegular}
          fontSize={10}
          right={5}
          fontWeight="400"
        >
          Return?
        </CustomText>
        <CustomSwitch />
      </Row>
    </InputWrap>
  );
};

export default DestinationDateInput;
