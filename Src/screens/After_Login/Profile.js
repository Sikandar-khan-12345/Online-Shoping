import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import LocalHeader from '../../components/comancomponents/LocalHeader';
import {IconPath, ImagePath} from '../../Assets';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';
import ViewContainer from '../../components/HOC/ViewContainer';
import Clickable from '../../components/HOC/Clickble';

const Profile = ({navigation}) => {
  const Data = [
    {
      Icon: IconPath.login,
      name: 'Login',
      next: IconPath.next,
    },
    {
      Icon: IconPath.user,
      name: 'My Profile',
      next: IconPath.next,
    },
    {
      Icon: IconPath.key,
      name: 'Chenge Password',
      next: IconPath.next,
    },
    {
      Icon: IconPath.order,
      name: 'My Order',
      next: IconPath.next,
    },
    {
      Icon: IconPath.gift,
      name: 'My Gift',
      next: IconPath.next,
    },
    {
      Icon: IconPath.save,
      name: 'Manage Address',
      next: IconPath.next,
    },
    {
      Icon: IconPath.exit,
      name: 'Sign Out',
      next: IconPath.next,
    },
  ];
  const renderItem = ({item}) => {
    return (
      <Clickable style={styles.FlatMainContainer}>
        <View style={styles.icon}>
          <Image source={item.Icon} style={styles.Icon} />
        </View>
        <View style={styles.name}>
          <Paragraph style={{fontWeight: 'bold'}}>{item.name}</Paragraph>
        </View>
        {/* <View style={styles.icon}>
          <Image source={item.next} style={styles.Icon} />
        </View> */}
      </Clickable>
    );
  };
  return (
    <ViewContainer style={{backgroundColor: Colors.white, flex: 1}}>
      <LocalHeader />
      <View style={styles.AppIconMainContainer}>
        <View style={styles.imgContainer}>
          <Image source={ImagePath.AppIcon} style={styles.AppIcon} />
        </View>
        <View style={styles.txtContainer}>
          <Paragraph size={20} style={styles.txt}>
            Sikandar
          </Paragraph>
          <Paragraph color={Colors.lightGray} style={styles.txt} size={15}>
            9610382647
          </Paragraph>
        </View>
      </View>
      <View style={{top: -15}}>
        <FlatList renderItem={renderItem} data={Data} />
      </View>
      <View style={{top: 55}}>
        <Clickable
          style={styles.NextIconContainer}
          onPress={() => navigation.navigate('Login')}>
          <Image source={IconPath.next} style={styles.NextIcon} />
        </Clickable>
        <Clickable
          style={[styles.NextIconContainer, {bottom: 370}]}
          onPress={() => navigation.navigate('EditProfile')}>
          <Image source={IconPath.next} style={styles.NextIcon} />
        </Clickable>
        <Clickable
          style={[styles.NextIconContainer, {bottom: 310}]}
          onPress={() => navigation.navigate('ChangePassword')}>
          <Image source={IconPath.next} style={styles.NextIcon} />
        </Clickable>
        <Clickable
          style={[styles.NextIconContainer, {bottom: 250}]}
          onPress={() => navigation.navigate('MyOrder')}>
          <Image source={IconPath.next} style={styles.NextIcon} />
        </Clickable>
        <Clickable
          style={[styles.NextIconContainer, {bottom: 190}]}
          onPress={() => navigation.navigate('Gift')}>
          <Image source={IconPath.next} style={styles.NextIcon} />
        </Clickable>
        <Clickable
          style={[styles.NextIconContainer, {bottom: 130}]}
          onPress={() => navigation.navigate('Address')}>
          <Image source={IconPath.next} style={styles.NextIcon} />
        </Clickable>
        <Clickable
          style={[styles.NextIconContainer, {bottom: 70}]}
          onPress={() => navigation.navigate('SignUp')}>
          <Image source={IconPath.next} style={styles.NextIcon} />
        </Clickable>
      </View>
    </ViewContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  AppIcon: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  AppIconMainContainer: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  txtContainer: {
    marginLeft: 10,
  },
  imgContainer: {
    marginLeft: 20,
  },
  txt: {
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  FlatMainContainer: {
    width: '85%',
    alignSelf: 'center',
    height: 50,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.gray,
    margin: 5,
    flexDirection: 'row',
  },
  icon: {
    width: '20%',
    height: 50,
    // borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    width: '80%',
    height: 50,
    // borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
  },

  Icon: {
    width: 20,
    height: 20,
  },
  NextIconContainer: {
    width: '20%',
    height: 50,
    // borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 430,
    right: 20,
  },
  NextIcon: {
    width: 20,
    height: 20,
  },
});
