import {StyleSheet, View} from 'react-native';
import React from 'react';
import Paragraph from '../UI/Paragraph';
import Colors from '../../constents/Colors';
import Clickable from '../HOC/Clickble';
import UiButton from '../UI/UiButton';

const Collection = ({title = '', loading = false, onPress = () => {}}) => {
  return (
    <View style={styles.ShowAllContainer}>
      <Paragraph style={{fontWeight: 'bold'}} size={15}>
        {title}
      </Paragraph>
      <Clickable onPress={onPress}>
        <Paragraph color={Colors.smokegrey} size = {13}>Show All</Paragraph>
      </Clickable>

      {/* <UiButton
        text="Show All"
        style={styles.btn}
        textColor={Colors.smokegrey}
        txtSize={13}
        loading={loading}
        onPress = {onPress}
      /> */}
    </View>
  );
};

export default Collection;

const styles = StyleSheet.create({
  ShowAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
  },
  btn: {
    width: '100%',
    // height:20,
    padding: 0,
    backgroundColor: Colors.white,
    // borderWidth:1,
    marginVertical: 0,
  },
});
