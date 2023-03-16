import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NormalHeaders from '../../components/comancomponents/NormalHeaders'

const ChangePassword = ({navigation}) => {
  return (
    <View>
    <NormalHeaders text='Change Password' onPress={() =>navigation.goBack()}/>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({})