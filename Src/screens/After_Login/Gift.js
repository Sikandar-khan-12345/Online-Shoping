import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NormalHeaders from '../../components/comancomponents/NormalHeaders'

const Gift = ({navigation}) => {
  return (
    <View>
      <NormalHeaders text='Gift' onPress={() =>navigation.goBack()}/>
    </View>
  )
}

export default Gift

const styles = StyleSheet.create({})