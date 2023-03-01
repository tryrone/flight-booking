import { Animated, Easing, View } from "react-native";
import type { EasingFunction } from "react-native";
import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

const Dot = styled.View`
  height: 8px;
  width: 8px;
  border-radius: ${8 / 2}px;
  background-color: ${Colors.primary};
`;

const Wave = styled(Animated.View)`
  height: 20px;
  width: 20px;
  border-radius: ${20 / 2}px;
  background-color: #b8ccfa;
  position: absolute;
`;

const WaveContainer = ({ delay }) => {
  const waveScaleRef = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const waveOpacityRef = useRef(new Animated.Value(1)).current;

  const animatedStyle = {
    // scale: waveScaleRef,
    opacity: waveOpacityRef,
    transform: [
      {
        scaleX: waveScaleRef.x,
      },
      {
        scaleY: waveScaleRef.y,
      },
    ],
  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(waveScaleRef, {
        toValue: 1,
        duration: 2000,
        easing: Easing.out(Easing.ease),
        delay,
        useNativeDriver: true,
      })
    ).start();

    ///opacity
    Animated.loop(
      Animated.timing(waveOpacityRef, {
        toValue: 0,
        duration: 2000,
        delay,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return <Wave style={animatedStyle} />;
};

const BookingCard = () => {
  return (
    <View style={{ marginTop: 20 }}>
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
          return <WaveContainer key={index} delay={index * 400} />;
        })}

        <Dot />
      </View>
    </View>
  );
};

export default BookingCard;
