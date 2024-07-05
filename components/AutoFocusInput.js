import React, { useRef, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from "../assets/style";

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Focus otomatis"
        placeholderTextColor="#007aff"
      />
    </View>
  );
};

export default AutoFocusInput;