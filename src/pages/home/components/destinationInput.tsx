import { View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import CustomText from "../../../components/CustomText";
import Fonts from "../../../constants/Fonts";
import { PlaneSvg, SmallArrowDownSvg } from "../../../../assets/svg";

const InputWrap = styled.View<{ mt?: number }>`
  border-radius: 10px;
  border: 1px solid ${Colors.border_color};
  padding-horizontal: 12px;
  padding-vertical: 14px;
  width: 100%;
  position: relative;
  margin-top: ${({ mt }) => mt || 0}px;
  z-index: 2;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Line = styled.View`
  height: 2px;
  width: 95%;
  background-color: ${Colors?.black};
`;

type DestinationInputProps = {
  mt?: number;
  type?: DestinationInputEnum;
};

export enum DestinationInputEnum {
  FROM = "FROM",
  TO = "TO",
}

const DestinationInput = ({
  mt,
  type = DestinationInputEnum.FROM,
}: DestinationInputProps) => {
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
          {type === DestinationInputEnum.FROM ? "From" : "To"}
        </CustomText>
      </View>

      <Row>
        <View style={{ width: 20 }}>
          <PlaneSvg />
          <Row>
            <Line />
            {type === DestinationInputEnum.TO && (
              <SmallArrowDownSvg
                style={{
                  position: "relative",
                  top: -10,
                  left: -5,
                }}
              />
            )}
          </Row>
        </View>
        <View style={{ marginLeft: 12 }}>
          <View>
            <CustomText
              fontFamily={Fonts.PoppinsSemiBold}
              fontSize={16}
              fontWeight="600"
            >
              Ngurah Rai{"  "}
              <CustomText
                fontFamily={Fonts.PoppinsRegular}
                fontSize={14}
                color={Colors?.dark_grey_2}
                fontWeight="400"
              >
                DPS
              </CustomText>
            </CustomText>

            <CustomText
              fontFamily={Fonts.PoppinsRegular}
              color={Colors?.dark_grey_2}
              top={2}
              fontSize={12}
              fontWeight="400"
            >
              Bandar Udaea International Ngurah Rai
            </CustomText>
          </View>
        </View>
      </Row>
    </InputWrap>
  );
};

export default DestinationInput;
