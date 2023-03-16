import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NormalHeaders from '../../components/comancomponents/NormalHeaders'
import ViewContainer from '../../components/HOC/ViewContainer'
import UiButton from '../../components/UI/UiButton'

const Address = ({navigation}) => {
  return (
    <ViewContainer>
      <NormalHeaders  onPress={() =>navigation.goBack()}/>
      <UiButton text='Add New Address' style={{width:'100%'}} onPress={() =>navigation.navigate('AddAddress')}/>
    </ViewContainer>
  )
}

export default Address

const styles = StyleSheet.create({})