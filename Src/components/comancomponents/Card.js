import {FlatList, StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import Paragraph from '../UI/Paragraph';
import { IconPath } from '../../Assets';
import Colors from '../../constents/Colors';

const Card = () => {
  const Data1 = [
    {
      img: require('../../Assets/images/f7.jpg'),
      p: '-63%',
    },
    {
      img: require('../../Assets/images/f8.jpg'),
      p: '-67%',
    },
    {
      img: require('../../Assets/images/f9.jpg'),
      p: '-61%',
    },
    {
      img: require('../../Assets/images/f4.jpg'),
      p: '-66%',
    },

    {
      img: require('../../Assets/images/f3.jpg'),
      p: '-60%',
    },

    {
      img: require('../../Assets/images/f5.jpg'),
      p: '-65%',
    },
    {
      img: require('../../Assets/images/f2.jpg'),
      p: '-67%',
    },
    {
      img: require('../../Assets/images/f6.jpg'),
      p: '-55%',
    },
  ];
  const renderItem1 = ({item}) => {
    return (
      <View style={styles.fltcontainer1}>
        <Image source={item.img} style={styles.img1} resizeMode="contain" />
        <View style={styles.heartcontainer}>
          <Image source={IconPath.wishlist} style={styles.heart} />
        </View>
        <View style={styles.persentcontainer}>
          <Paragraph
            size={13}
            color={Colors.purple}
            style={{fontWeight: 'bold'}}>
            {item.p}
          </Paragraph>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList renderItem={renderItem1} data={Data1} horizontal />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  fltcontainer1: {
    width: 200,
    height: 250,
    // borderWidth:1,
    margin: 10,
    backgroundColor: Colors.gray + 50,
    borderRadius: 10,
  },
  img1: {
    width: '100%',
    height: '80%',
  },
  persentcontainer: {
    position: 'absolute',
    left: 10,
    top: 10,
    // borderWidth: 1,
    backgroundColor: Colors.white,
    width: 40,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartcontainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    // borderWidth: 1,
    width: 30,
    height: 30,
    backgroundColor: Colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  heart: {
    width: '80%',
    height: '80%',
  },
});
