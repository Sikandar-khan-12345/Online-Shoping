import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import FormContainer from '../../components/HOC/FormContainer';
import {ImagePath} from '../../Assets';
import ViewContainer from '../../components/HOC/ViewContainer';
import Input from '../../components/UI/Input';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';
import UiButton from '../../components/UI/UiButton';
import {isValidForm, validators} from '../../constents/Validation';
import Headers from '../../components/comancomponents/Headers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const SignUp = ({navigation}) => {
  const [loaded, setloaded] = useState(false)
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [gender, setgender] = useState('');
  const [error, seterror] = useState({});

  // useEffect(() => {
  //   checkSignUpToken();
  // }, [useIsFocused()]);

  // const checkSignUpToken = async() => {
  //   let SignUpTokenData = await AsyncStorage.getItem('SignUp')

  //   if(SignUpTokenData){
  //     navigation.navigate('ButtomTab');

  //   }
  // };

  const SignUpWithValidation = async () => {
    setloaded(true)
 
    const Form = {
      FirstName: validators.checkRequire('First Name', firstname),
      LastName: validators.checkRequire('Last Name', lastname),
      Email: validators.checkEmail('Email', email),
      Password: validators.checkPassword('Password', password),
      Gender: validators.checkRequire('Gender', gender),
    };
    seterror(Form);
    if (isValidForm(Form)) {
      try {
        let body = {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          gender: gender,
        };
        let Data = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body),
        };
        let results = await fetch(
          'https://charming-calf-pea-coat.cyclic.app/api/shopeen/signup',
          Data,
        );

        let res = await results.json();
        let resdata = await res;

        if (resdata.status == true) {
          // await AsyncStorage.setItem('SignUp', JSON.stringify(resdata.token));
          navigation.navigate('ButtomTab');
        }

        console.log('===Signup-resdata===>', resdata);
      } catch (error) {
        alert('Sorry! SignUp Api Error')
        console.log('==SignUp-Api-Error', error);
      }
    }

    setloaded(false)
  };
  return (
    <ViewContainer>
      <Headers
        title="Sign Up"
        type="Icon"
        onPress={() => navigation.goBack()}
      />
      <FormContainer>
        <View style={styles.imgContainer}>
          <Image source={ImagePath.AppIcon} style={styles.img} />
        </View>
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
          placeholder={'Enter Phone Number or Email'}
          onChange={setemail}
          error={error?.Email}
        />
        <Input
          placeholder={'Password'}
          onChange={setpassword}
          error={error?.Password}
        />

        <Input
          placeholder={'Gender'}
          onChange={setgender}
          error={error?.Gender}
        />

        <UiButton text="Sign Up" onPress={() => SignUpWithValidation()} loading = {loaded} />
        <Paragraph textAlign="center">
          I have Alrdy Account?{' '}
          <Paragraph
            color={Colors.purple}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Paragraph>
        </Paragraph>
      </FormContainer>
    </ViewContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  imgContainer: {
    width: '100%',
    height: 160,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
