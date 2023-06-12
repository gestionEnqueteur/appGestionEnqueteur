import { View } from "react-native";
import { Text } from "react-native-paper";
import React from 'react';
import { View, Text } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './components/modals/Store';





export default function TrainASaisiScreen() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleIncrement = () => {
    // Dispatch de l'action d'incrémentation
    dispatch(increment());
  };

  const handleDecrement = () => {
    // Dispatch de l'action de décrémentation
    dispatch(decrement());
  };

  return (
    <View>
      <Text>La liste des trains à saisir</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
    </View>
  )
}
