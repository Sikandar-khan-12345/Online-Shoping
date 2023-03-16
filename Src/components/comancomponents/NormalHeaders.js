import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import Colors from '../../constents/Colors';
import {IconPath} from '../../Assets';
import Paragraph from '../UI/Paragraph';
import Clickable from '../HOC/Clickble';

const NormalHeaders = ({text = 'Shipping Address', onPress = () => {}}) => {
  return (
    <View>
      <View style={styles.header}>
        <Clickable style={styles.backContainer} onPress={onPress}>
          <Image source={IconPath.back} style={styles.back} />
        </Clickable>
        <View>
          <Paragraph color={Colors.white} style={{fontWeight: 'bold'}}>
            {text}
          </Paragraph>
        </View>
      </View>
    </View>
  );
};

export default NormalHeaders;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.purple,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backContainer: {
    width: '20%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    width: 20,
    height: 22,
    tintColor: Colors.white,
  },
});
