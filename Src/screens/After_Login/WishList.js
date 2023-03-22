import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Headers from '../../components/comancomponents/Headers';
import {ImagePath} from '../../Assets';
import Colors from '../../constents/Colors';
import Paragraph from '../../components/UI/Paragraph';

const WishList = () => {
  return (
    <View>
      <Headers title="Wishlist" />
      <View style={styles.WishListContainer}>
        <Image source={ImagePath.EmptyWishlist} style={styles.WishListImg} />
        <Paragraph size={22} color={Colors.darkgray} top={10}>
          WishList is Empty
        </Paragraph>
      </View>
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({
  WishListContainer: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  WishListImg: {
    width: '50%',
    height: '50%',
  },
});
