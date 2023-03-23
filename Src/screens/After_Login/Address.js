import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ViewContainer from '../../components/HOC/ViewContainer';
import UiButton from '../../components/UI/UiButton';
import Headers from '../../components/comancomponents/Headers';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';
import CheckBox from '@react-native-community/checkbox';
import Clickable from '../../components/HOC/Clickble';
import {IconPath} from '../../Assets';
import SimpleToast from 'react-native-simple-toast';

const Address = ({navigation}) => {
  const [AddressList, setAddressList] = useState([]);
  const [isSelected, setSelection] = useState(true);

  useEffect(() => {
    getAddress();
  }, [useIsFocused()]);

  const getAddress = async () => {
    let token = await AsyncStorage.getItem('Token');
    token = await JSON.parse(token);
    let obj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/shopeen/address',
        obj,
      );
      let res = await result.json();
      let resdata = await res;

      setAddressList(resdata.massage);

      console.log('===Addres-Get-Api-AddressList===>', AddressList);
    } catch (error) {
      console.log('===Addres-Get-Api-Error===>', error);
    }
  };

  const AddressDelete = async item => {
    let token = await AsyncStorage.getItem('Token');
    token = await JSON.parse(token);

    try {
      let Data = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      let result = await fetch(
        `https://charming-calf-pea-coat.cyclic.app/api/shopeen/address/${item._id}`,
        Data,
      );
      let res = await result.json();
      let resdata = await res.message;

      if (resdata) {
        SimpleToast.show(
          `Deleted ${item.firstName} ${item.lastName}  ID ${item._id}`,
          SimpleToast.SHORT,
        );
        getAddress();
      }

      console.log('==Addres-Get-Api-resdata==>', resdata);
    } catch (error) {
      console.log('===Address-Delete-Api-error===>', error);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.FlatListMainContainer}>
        <Paragraph>
          {item.firstName} {item.lastName}
        </Paragraph>
        <Paragraph paddingVertical={15} size={15} color={Colors.darkgray}>
          {item.locality}
        </Paragraph>
        <View style={styles.checkboxContainer}>
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Paragraph color={isSelected ? Colors.black : Colors.gray}>
              Use as shipping address
            </Paragraph>
          </View>
          <Clickable
            style={styles.deleteIconMainContainer}
            onPress={() => AddressDelete(item)}>
            <Image source={IconPath.delete} style={styles.deleteIcon} />
          </Clickable>
        </View>
      </View>
    );
  };

  return (
    <ViewContainer>
      <Headers
        title="Shipping Address"
        type="Icon"
        onPress={() => navigation.goBack()}
      />
      <FlatList renderItem={renderItem} data={AddressList} />
      <UiButton
        text="Add New Address"
        style={{width: '100%'}}
        onPress={() => navigation.navigate('AddAddress')}
      />
    </ViewContainer>
  );
};

export default Address;

const styles = StyleSheet.create({
  FlatListMainContainer: {
    width: '95%',
    height: 120,
    borderWidth: 1,
    borderColor: Colors.gray + 50,
    marginVertical: 10,
    alignSelf: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    bottom: 10,
    right: 5,
    // borderWidth: 1,
    justifyContent: 'space-between',
  },
  deleteIcon: {
    width: '60%',
    height: '60%',
    tintColor: Colors.red,
  },
  deleteIconMainContainer: {
    width: 30,
    height: 30,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    right: '100%',
  },
});
