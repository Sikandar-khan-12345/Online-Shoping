import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import FormContainer from '../../components/HOC/FormContainer';
import {IconPath, ImagePath} from '../../Assets';
import ViewContainer from '../../components/HOC/ViewContainer';
import Input from '../../components/UI/Input';
import Paragraph from '../../components/UI/Paragraph';
import Clickable from '../../components/HOC/Clickble';
import Colors from '../../constents/Colors';
import UiButton from '../../components/UI/UiButton';
import {isValidForm, validators} from '../../constents/Validation';
import Headers from '../../components/comancomponents/Headers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginApi } from '../../api/ApiLink';


const Login = ({navigation}) => {
  const [loaded, setloaded] = useState(false)
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState({});
  const [IMG, setIMG] = useState(IconPath.offEye);

  const LoginWithValidation = async () => {
    setloaded(true)
    const Form = {
      Email: validators.checkEmail('Email', email),
      Password: validators.checkPassword('Password', password),
    };
    seterror(Form);
    if (isValidForm(Form)) {
      try {
        let body = {
          email: email,
          password: password,
        };
        let Data = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body),
        };

        let results = await fetch(
          LoginApi,
          Data,
        );
        let res = await results.json();
        let resdata = await res;

        if (resdata.status == true) {
           await AsyncStorage.setItem('Token', JSON.stringify(resdata.token));
          navigation.navigate('ButtomTab');
        }

        console.log('=====resdata=====>', resdata);
      } catch (error) {
        alert('Sorry! Login Api Error')
        console.log('===Login-API-Error===>', error);
      }
    }
    setloaded(false)
  };
  const ImgFUnction = () => {
    let chenge = IMG == IconPath.offEye ? IconPath.onEye : IconPath.offEye;

    setIMG(chenge);
  };
  return (
    <ViewContainer>
      <Headers title="Login" type="Icon" onPress={() => navigation.goBack()} />
      <FormContainer>
        <View style={styles.imgContainer}>
          <Image source={ImagePath.AppIcon} style={styles.img} />
        </View>
        <Input
          placeholder={'Enter Phone Number or Email'}
          onChange={setemail}
          error={error?.Email}
        />

        <View>
          <Input
            placeholder={'Password'}
            onChange={setpassword}
            error={error?.Password}
            keyboardType="number-pad"
            secureTextEntry={IMG == IconPath.offEye ? true : false}
          />
          <Clickable
            style={{position: 'absolute', right: '15%', top: 20}}
            onPress={() => ImgFUnction()}>
            <Image source={IMG} style={styles.eye} />
          </Clickable>
        </View>
        <Clickable style={{alignSelf: 'flex-end', right: 38}}>
          <Paragraph color={Colors.lightGray}>Forgot Password</Paragraph>
        </Clickable>
        <UiButton text="Sign in" onPress={() => LoginWithValidation()} loading = {loaded}/>
        <Paragraph textAlign="center">OR</Paragraph>
        <UiButton
          text="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Paragraph textAlign="center">
          Not a member? <Paragraph color={Colors.purple}>Join now</Paragraph>
        </Paragraph>
      </FormContainer>
    </ViewContainer>
  );
};

export default Login;

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
  eye: {
    width: 22,
    height: 22,
  },
});
