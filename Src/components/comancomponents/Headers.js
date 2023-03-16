import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import Paragraph from '../UI/Paragraph';
import Clickable from '../HOC/Clickble';
import { IconPath, ImagePath } from '../../Assets';
import Colors from '../../constents/Colors';

const Headers = () => {
  return (
    <View style={styles.header}>
      <View style={styles.shopingContainer}>
        <Image
          source={ImagePath.shoping}
          style={styles.shoping}
          resizeMode="cover"
        />
        <Paragraph color={Colors.white} size={23} style={styles.txt}>
          Shoping
        </Paragraph>
      </View>
      <View>
        <Clickable style={styles.walletcontainer}>
          <Image source={IconPath.wallet} style={styles.wallet} />
        </Clickable>
      </View>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: Colors.purple,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      shoping: {
        width: 90,
        height: 80,
      },
      shopingContainer: {
        flexDirection: 'row',
        right: 10,
      },
      txt: {
        position: 'relative',
        right: 25,
        fontWeight: 'bold',
      },
      wallet: {
        width: '50%',
        height: '50%',
      },
      walletcontainer: {
        backgroundColor: Colors.white,
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        right: 20,
      },
});
