import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import CustomText from "../../../components/CustomText";
import Fonts from "../../../constants/Fonts";
import Colors from "../../../constants/Colors";
import BookingCard from "./bookingCard";

const SpacedRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Wrap = styled.View`
  width: 100%;
  margin-top: 20px;
`;

const PopularFlights = () => {
  return (
    <Wrap>
      <SpacedRow>
        <CustomText
          fontFamily={Fonts.PoppinsSemiBold}
          fontSize={18}
          fontWeight="600"
        >
          Popular Flight Routes
        </CustomText>
        <CustomText
          fontFamily={Fonts.PoppinsSemiBold}
          fontSize={14}
          fontWeight="500"
          color={Colors.primary}
        >
          See All
        </CustomText>
      </SpacedRow>

      <BookingCard />
    </Wrap>
  );
};

export default PopularFlights;
