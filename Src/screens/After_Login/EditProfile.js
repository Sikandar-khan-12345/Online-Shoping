import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import NormalHeaders from '../../components/comancomponents/NormalHeaders';
import ViewContainer from '../../components/HOC/ViewContainer';
import { ImagePath } from '../../Assets';
import Input from '../../components/UI/Input';
import UiButton from '../../components/UI/UiButton';

const EditProfile = ({navigation}) => {
  return (
    <ViewContainer>
      <NormalHeaders text="Edit Profile" onPress={() => navigation.goBack()} />
      <View style={styles.imgContainer}>
        <Image source={ImagePath.AppIcon} style={styles.img} />
      </View>
      <Input placeholder={'Please Enter YOur First Name'}/>
      <Input placeholder={'Please Enter YOur Last Name'}/>

      <UiButton text='Update Profile'/>

    </ViewContainer>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  imgContainer: {
    width: '100%',
    height: 160,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
