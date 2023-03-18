import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Paragraph from '../UI/Paragraph';
import {IconPath} from '../../Assets';
import Colors from '../../constents/Colors';
import Clickable from '../HOC/Clickble';

const Card = ({data = [], horizontal = true}) => {
  const [LikeCHenge, setLikeCHenge] = useState(IconPath.unlike);

  const ImageChengeFUnction = () => {
    let Chenge =
      LikeCHenge == IconPath.unlike ? IconPath.like : IconPath.unlike;

    setLikeCHenge(Chenge);
  };
  const renderItem1 = ({item}) => {
    return (
      <View style={styles.fltcontainer1}>
        <Image source={item.img} style={styles.img1} resizeMode="contain" />
        <Clickable
          style={styles.heartcontainer}
          onPress={() => ImageChengeFUnction()}>
          <Image source={LikeCHenge} style={styles.heart} />

        </Clickable>
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
      <FlatList renderItem={renderItem1} data={data} horizontal={horizontal} />
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
    width: '65%',
    height: '65%',
  },
});
