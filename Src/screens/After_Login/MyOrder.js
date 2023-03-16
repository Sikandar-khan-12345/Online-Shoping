import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NormalHeaders from '../../components/comancomponents/NormalHeaders'

const MyOrder = ({navigation}) => {
  return (
    <View>
      <NormalHeaders text='My Order' onPress={() =>navigation.goBack()}/>
    </View>
  )
}

export default MyOrder

const styles = StyleSheet.create({})