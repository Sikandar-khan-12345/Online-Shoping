import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Headers from '../../components/comancomponents/Headers';
import {ImagePath} from '../../Assets';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';

const Cart = () => {
  return (
    <View>
      <Headers title="Cart" />
      <View style={styles.CartListContainer}>
        <Image source={ImagePath.EmptyCart} style={styles.CartListImg} />
        <Paragraph size={22} color={Colors.darkgray} top={20}>
          Cart is Empty
        </Paragraph>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  CartListContainer: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CartListImg: {
    width: '50%',
    height: '50%',
  },
});
