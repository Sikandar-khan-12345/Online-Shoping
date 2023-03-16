import {StyleSheet,View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const Swipers = ({SwipersImages}) => {
  return (
    <View style={styles.swiper}>
      <Swiper autoplay={true}>
        {SwipersImages &&
          SwipersImages.map((item, index) => {
            return (
              <Image
                source={item.img}
                style={styles.s}
                resizeMode="cover"
                key={item.img}
              />
            );
          })}
      </Swiper>
    </View>
  );
};

export default Swipers;

const styles = StyleSheet.create({
  swiper: {
    width: '100%',
    height: 250,
  },
  s: {
    width: '100%',
    height: '100%',
  },
});
