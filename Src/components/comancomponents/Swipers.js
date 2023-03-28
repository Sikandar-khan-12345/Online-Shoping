import {StyleSheet,View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import Clickable from '../HOC/Clickble';

const Swipers = ({SwipersImages}) => {
  return (
    <Clickable style={styles.swiper}>
      <Swiper autoplay={true}>
        {SwipersImages &&
          SwipersImages.map((item, index) => {
            return (
              <Image
                source={{uri:item.Image}}
                style={styles.s}
                resizeMode="contain"
                key={{uri:item.Image}}
              />
            );
          })}
      </Swiper>
    </Clickable>
  );
};

export default Swipers;

const styles = StyleSheet.create({
  swiper: {
    width: '100%',
    height: 250,
    // borderWidth:1
  },
  s: {
    width: '100%',
    height: '100%',
  },
});
