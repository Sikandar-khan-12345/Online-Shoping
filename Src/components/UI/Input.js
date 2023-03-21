import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React, {memo} from 'react';
import Paragraph from './Paragraph';
import Colors from '../../constents/Colors';

const Input = ({
  label = 'Input',
  placeholder,
  style,
  onChange = () => {},
  value,
  error,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  return (
    <View
      style={{
        marginTop: 5,
        marginVertical: 8,
        width: '100%',
      }}>
      {/* <Text style={{fontSize: 16, color: Colors.black,paddingLeft:5}}>{label}</Text> */}
      <TextInput
        placeholder={placeholder}
        value={value}
        cursorColor={Colors.red}
        secureTextEntry={secureTextEntry}
        style={{
          padding: 0,
          paddingHorizontal: 10,
          height: 50,
          width: '80%',
          borderWidth: 1,
          borderColor: Colors.lightGray,
        alignSelf: 'center',


          ...style,
        }}
        keyboardType={keyboardType}
        onChangeText={text => onChange(text)}
      />
      <Paragraph size={13} color={Colors.red}left = {'10%'}>
        {error}
      </Paragraph>
    </View>
  );
};

export default memo(Input);

const styles = StyleSheet.create({});
