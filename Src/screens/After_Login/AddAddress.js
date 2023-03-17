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
import RadioGroup from 'react-native-radio-buttons-group';

const AddAddress = ({navigation}) => {
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Work',
      value: 'Work',
    },
    {
      id: '2',
      label: 'Home',
      value: 'Home',
    },
  ]);

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [number, setnumber] = useState('');
  const [street, setstreet] = useState('');
  const [locality, setlocality] = useState('');
  const [town, settown] = useState('');
  const [pincode, setpincode] = useState('');
  const [state, setstate] = useState('');
  const [error, seterror] = useState({});

  const AddWIthValidation = () => {
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
      navigation.navigate('Address');
    }
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

            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              containerStyle={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                top: 15,
                marginVertical: 10,
              }}
              borderSize={2}
            />
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

        <UiButton onPress={() => AddWIthValidation()} />
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
