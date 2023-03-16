import {StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import FormContainer from '../../components/HOC/FormContainer';
import {ImagePath} from '../../Assets';
import ViewContainer from '../../components/HOC/ViewContainer';
import NormalHeaders from '../../components/comancomponents/NormalHeaders';
import Input from '../../components/UI/Input';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';
import UiButton from '../../components/UI/UiButton';
import {isValidForm, validators} from '../../constents/Validation';

const SignUp = ({navigation}) => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [number, setnumber] = useState('');
  const [error, seterror] = useState({});

  const SignUpWithValidation = () => {
    const Form = {
      FirstName: validators.checkRequire('First Name', firstname),
      LastName: validators.checkRequire('Last Name', lastname),
      Email: validators.checkEmail('Email', email),
      Password: validators.checkPassword('Password', password),
      Number: validators.checkPhoneNumber('Phone Number', number),
    };
    seterror(Form);
    if (isValidForm(Form)) {
      navigation.navigate('Dashboard');
    }
  };
  return (
    <ViewContainer>
      <NormalHeaders text="Sign Up" onPress={() => navigation.goBack()} />
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
          placeholder={'Phone Number'}
          onChange={setnumber}
          error={error?.Number}
        />

        <UiButton text="Sign Up" onPress={() => SignUpWithValidation()} />
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
