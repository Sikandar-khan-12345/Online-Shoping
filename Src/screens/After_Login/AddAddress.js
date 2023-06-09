import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import FormContainer from '../../components/HOC/FormContainer';
import Input from '../../components/UI/Input';
import ViewContainer from '../../components/HOC/ViewContainer';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';
import ScrollContainer from '../../components/HOC/ScrollContainer';
import UiButton from '../../components/UI/UiButton';
import {isValidForm, validators} from '../../constents/Validation';
import Headers from '../../components/comancomponents/Headers';
import RadioForm from 'react-native-simple-radio-button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddAddressApi } from '../../api/ApiLink';

const AddAddress = ({navigation}) => {
  const items = [
    {label: 'Home', value: 'Home'},
    {label: 'Work', value: 'Work'},
  ];
  const [loaded, setloaded] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [value, setvalue] = useState('Home');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [number, setnumber] = useState('');
  const [street, setstreet] = useState('');
  const [locality, setlocality] = useState('');
  const [town, settown] = useState('');
  const [pincode, setpincode] = useState('');
  const [state, setstate] = useState('');
  const [error, seterror] = useState({});

  const AddWIthValidation = async () => {
    setloaded(true)
    let token = await AsyncStorage.getItem('Token');
    token = await JSON.parse(token);
    const form = {
      FirstName: validators.checkRequire('First Name', firstname),
      LastName: validators.checkRequire('Last Name', lastname),
      Number: validators.checkPhoneNumber('Phone Number', number),
      Locality: validators.checkRequire('Lovality', locality),
      Street: validators.checkRequire('Street', street),
      State: validators.checkRequire('State', state),
      Town: validators.checkRequire('TOwn/City', town),
      Postcode: validators.checkRequire('PostCode', pincode),
    };
    seterror(form);

    if (isValidForm(form)) {
      try {
        let body = {
          firstName: firstname,
          lastName: lastname,
          phoneNumber: number,
          streetAddress: street,
          locality: locality,
          townCity: town,
          postCode: pincode,
          state: state,
          addresstype: value,
        };
        // console.log("==========body===body...",body)
        let Data = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        };
        let results = await fetch(
          AddAddressApi,
          Data,
        );
        let res = await results.json();
        let resdata = await res;

        if (resdata.status == true) {
          navigation.navigate('Address');
        }

        console.log('=====resdata=====>', resdata.data);
      } catch (error) {
        alert('Sorry! AddAddress Api Error')
        console.log('==Addres-Api-Error===>', error);
      }
    }
    setloaded(false)
  };

  return (
    <ViewContainer>
      <Headers
        title="Shipping Address"
        type="Icon"
        onPress={() => navigation.goBack()}
      />
      <ScrollContainer>
        <FormContainer style={{flex: 0}}>
          <View style={{marginVertical: 20}}>
            <Input
              placeholder={'First Name'}
              onChange={setfirstname}
              error={error?.FirstName}
            />
            <Input
              placeholder={'Last Name'}
              onChange={setlastname}
              error={error?.LastName}
            />
            <Input
              placeholder={'Phone Number*'}
              onChange={setnumber}
              error={error?.Number}
            />
            <Input
              placeholder={'Street address*'}
              onChange={setstreet}
              error={error?.Street}
            />
            <Input
              placeholder={'Locality'}
              onChange={setlocality}
              error={error?.Locality}
            />
            <View style={styles.InpMainContainer}>
              <View style={styles.InpContainer}>
                <Input placeholder={'Town / City*'} onChange={settown} />
              </View>
              <View style={styles.InpContainer}>
                <Input placeholder={'Pincode*'} onChange={setpincode} />
              </View>
            </View>
            <View style={{marginVertical: 10}}>
              <Input
                placeholder={'State*'}
                onChange={setstate}
                error={error?.State}
              />
            </View>
            <Paragraph style={{paddingLeft: 38}}>Address Type</Paragraph>

            <View style={{alignItems: 'center', top: 20, left: '5%'}}>
              <RadioForm
                radio_props={items}
                initial={value}
                onPress={value => setvalue(value)}
                selectedButtonColor={Colors.purple}
                buttonColor={Colors.smokegrey}
                formHorizontal
                buttonSize={9}
                buttonOuterSize={19}
                labelStyle={{
                  color: Colors.smokegrey,
                  marginLeft: 10,
                  paddingRight: 50,
                }}
              />
            </View>
          </View>
        </FormContainer>
        <View style={styles.SwitchMainContainer}>
          <Paragraph>Use as Billing address</Paragraph>
          <View style={styles.container}>
            <Switch
              trackColor={{false: Colors.gray, true: Colors.primary}}
              thumbColor={isEnabled ? Colors.purple : Colors.white}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <UiButton onPress={() => AddWIthValidation()} loading={loaded} />
      </ScrollContainer>
    </ViewContainer>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  InpMainContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InpContainer: {
    width: '45%',
  },
  hometxt: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },

  container: {
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  SwitchMainContainer: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});
