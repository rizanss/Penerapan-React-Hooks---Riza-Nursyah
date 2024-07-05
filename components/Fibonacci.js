import React, { useState, useMemo } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from "../assets/style";

const calculateFibonacci = (num) => {
  if (num <= 1) return num;
  return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
};

const Fibonacci = () => {
  const [num, setNum] = useState(0);

  const fibValue = useMemo(() => calculateFibonacci(num), [num]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Masukkan angka"
        keyboardType="numeric"
        onChangeText={(text) => setNum(parseInt(text) || 0)}
      />
      <Text style={styles.teks}>Fibonacci dari {num} adalah {fibValue}</Text>
    </View>
  );
};

export default Fibonacci;
