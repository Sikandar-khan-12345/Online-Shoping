import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Paragraph from '../UI/Paragraph';
import {IconPath} from '../../Assets';
import Colors from '../../constents/Colors';
import Clickable from '../HOC/Clickble';
import {useIsFocused} from '@react-navigation/native';

const Card = ({data = [], horizontal = true, onPress = () => {}}) => {
  const [LikeCHenge, setLikeCHenge] = useState(IconPath.unlike);
  const [CartData, setCartData] = useState(data);

  const ImageChengeFUnction = index => {
    let chenge =
      LikeCHenge == IconPath.unlike ? IconPath.like : IconPath.unlike;
    setLikeCHenge(chenge);
  };
  const renderItem1 = ({item, index}) => {
    return (
      <Clickable style={styles.fltcontainer1} onPress={onPress}>
        <View
          style={{
            borderWidth: 0,
            backgroundColor: Colors.gray + 50,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 220,
          }}>
          <Image source={item.img} style={styles.img1} resizeMode="contain" />
        </View>
        <Clickable
          style={styles.heartcontainer}
          onPress={() => ImageChengeFUnction(item, index)}>
          <Image source={LikeCHenge} style={styles.heart} />
          {/* <Image source={item.Icon} style={styles.heart} /> */}
        </Clickable>
        <View style={styles.persentcontainer}>
          <Paragraph
            size={13}
            color={Colors.purple}
            style={{fontWeight: 'bold'}}>
            {item.p}
          </Paragraph>
        </View>


        
        <View style={{marginVertical: 5, marginHorizontal: 15}}>
          <Paragraph color={Colors.darkgray} size={13}>
            {item.name}
          </Paragraph>
          <Paragraph color="green" style={{fontWeight: 'bold'}}>
            {item.price}
            {'  '}
            <Paragraph
              style={{textDecorationLine: 'line-through'}}
              color={Colors.darkgray}>
              {item.half}
            </Paragraph>
          </Paragraph>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 3,
              borderWidth: 0,
              width: '55%',
              justifyContent: 'space-between',
              left: 5,
            }}>
            <Image
              source={item.rating}
              style={{width: 13, height: 13, tintColor: Colors.orrenge}}
            />
            <Image
              source={item.rating}
              style={{width: 13, height: 13, tintColor: Colors.orrenge}}
            />
            <Image
              source={item.rating}
              style={{width: 13, height: 13, tintColor: Colors.orrenge}}
            />
            <Image
              source={item.rating}
              style={{width: 13, height: 13, tintColor: Colors.orrenge}}
            />
            <Image
              source={item.rating}
              style={{width: 13, height: 13, tintColor: Colors.orrenge}}
            />
          </View>
        </View>
      </Clickable>
    );
  };
  return (
    <View>
      <FlatList
        renderItem={renderItem1}
        data={CartData}
        horizontal={horizontal}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  fltcontainer1: {
    width: 200,
    height: 290,
    borderWidth: 0.5,
    borderColor: Colors.gray,

    margin: 10,
    // backgroundColor: Colors.gray + 50,
    borderRadius: 10,
  },
  img1: {
    width: '100%',
    height: '100%',
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
    width: '65%',
    height: '65%',
  },
});
