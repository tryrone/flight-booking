import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

const Container = styled.Pressable<{ value: boolean }>`
  height: 20px;
  width: 40px;
  border-radius: 20px;
  background-color: ${({ value }) =>
    value ? Colors?.primary : Colors?.light_blue_2};
  align-items: center;
  padding: 1px;
`;

const Ball = styled.View<{
  value: boolean;
}>`
  height: 17px;
  width: 17px;
  border-radius: ${17 / 2}px;
  background-color: ${Colors?.white};
  align-self: ${({ value }) => (value ? "flex-end" : "flex-start")};
`;

const CustomSwitch = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const ballValue = useRef(new Animated.Value(-10)).current;

  const ballstyle = {
    left: ballValue,
  };

  useEffect(() => {
    if (switchValue) {
      Animated.timing(ballValue, {
        toValue: 10,
        useNativeDriver: false,
        duration: 500,
      }).start();
    } else {
      Animated.timing(ballValue, {
        toValue: -10,
        useNativeDriver: false,
        duration: 500,
      }).start();
    }
  }, [switchValue]);

  return (
    <Container onPress={() => setSwitchValue(!switchValue)} value={switchValue}>
      <Animated.View style={ballstyle}>
        <Ball value={switchValue} />
      </Animated.View>
    </Container>
  );
};

export default CustomSwitch;
