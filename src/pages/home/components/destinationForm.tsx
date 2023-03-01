import React from "react";
import styled from "styled-components/native";
import { ArrowDownSvg, ArrowUpSvg } from "../../../../assets/svg";
import Button from "../../../components/Button";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";
import DestinationDateInput from "./destinationDateInput";
import DestinationInput, { DestinationInputEnum } from "./destinationInput";
import PassangerInputAndClass, {
  PassengerInputEnum,
} from "./passangerInputAndClass";

const Wrap = styled.View`
  width: 100%;
  background-color: ${Colors?.white};
  margin-top: 20px;
  border-radius: 20px;
  padding: 16px;
`;

const FromToWrap = styled.View`
  height: 55px;
  width: 55px;
  border-radius: ${55 / 2}px;
  background-color: ${Colors.primary};
  z-index: 3;
  align-self: flex-end;
  margin-right: 20px;
  margin-top: -10px;
  margin-bottom: -40px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SpacedRow = styled.View<{
  mt?: number;
}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ mt }) => mt || 0}px;
`;

const FromToBadge = (): JSX.Element => {
  return (
    <FromToWrap>
      <ArrowUpSvg style={{ position: "relative", left: 2 }} />
      <ArrowDownSvg style={{ position: "relative", right: 2 }} />
    </FromToWrap>
  );
};

const DestinationForm = () => {
  return (
    <Wrap>
      <DestinationInput mt={12} />
      <FromToBadge />
      <DestinationInput mt={20} type={DestinationInputEnum.TO} />
      <DestinationDateInput mt={20} />
      <SpacedRow mt={20}>
        <PassangerInputAndClass
          type={PassengerInputEnum.Passenger}
          width="47%"
        />
        <PassangerInputAndClass type={PassengerInputEnum.Class} width="47%" />
      </SpacedRow>

      <Button
        text="Search Flight"
        textColor={Colors.white}
        bgColor={Colors.primary}
        style={{ marginTop: 20 }}
        borderRadius="15px"
        fontFamily={Fonts.PoppinsMedium}
        fontWeight="500"
      />
    </Wrap>
  );
};

export default DestinationForm;
