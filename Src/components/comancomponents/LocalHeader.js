import {StyleSheet,View} from 'react-native';
import React from 'react';
import Paragraph from '../UI/Paragraph';
import Colors from '../../constents/Colors';

const Headers = ({text = 'Profile'}) => {
  return (
    <View style={styles.header}>
      <View style={styles.shopingContainer}>
        <Paragraph color={Colors.white} size={20}>
          {text}
        </Paragraph>
      </View>

    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: Colors.purple,
        justifyContent: 'center',
      },
    
      shopingContainer: {
        left: 15,
      },
   
  
});
