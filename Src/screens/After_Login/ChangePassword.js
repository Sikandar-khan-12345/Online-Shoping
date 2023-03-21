import {StyleSheet,View, Image} from 'react-native';
import React, {useState} from 'react';
import FormContainer from '../../components/HOC/FormContainer';
import {IconPath, ImagePath} from '../../Assets';
import ViewContainer from '../../components/HOC/ViewContainer';
import Input from '../../components/UI/Input';
import Paragraph from '../../components/UI/Paragraph';
import Clickable from '../../components/HOC/Clickble';
import UiButton from '../../components/UI/UiButton';
import {isValidForm, validators} from '../../constents/Validation';
import Headers from '../../components/comancomponents/Headers';

const ChangePassword = ({navigation}) => {
  const [password, setpassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const [error, seterror] = useState({});
  const [IMG, setIMG] = useState(IconPath.offEye);
  const [IMG1, setIMG1] = useState(IconPath.offEye);

  const LoginWithValidation = () => {
    const Form = {
      ConfirmPassword: validators.checkPassword(
        'Confirm Password',
        Confirmpassword,
      ),
      Password: validators.checkPassword('Password', password),
    };
    seterror(Form);
    if (isValidForm(Form)) {
      navigation.navigate('Profile');
    }
  };
  const ImgFUnction = () => {
    let chenge = IMG == IconPath.offEye ? IconPath.onEye : IconPath.offEye;

    setIMG(chenge);
  };
  const ImgFUnction1 = () => {
    let chenge1 = IMG1 == IconPath.offEye ? IconPath.onEye : IconPath.offEye;

    setIMG1(chenge1);
  };
  return (
    <ViewContainer>
      <Headers
        title="Change Password"
        type="Icon"
        onPress={() => navigation.goBack()}
      />
      <FormContainer>
        <View style={styles.imgContainer}>
          <Image source={ImagePath.AppIcon} style={styles.img} />
        </View>

        <View>
          <Input
            placeholder={'Password'}
            onChange={setpassword}
            error={error?.Password}
            keyboardType="number-pad"
            secureTextEntry={IMG == IconPath.offEye ? true : false}
          />
          <Input
            placeholder={'Confirm Paasword'}
            onChange={setConfirmpassword}
            error={error?.ConfirmPassword}
            keyboardType="number-pad"
            secureTextEntry={IMG1 == IconPath.offEye ? true : false}
          />
          <Clickable
            style={{position: 'absolute', right: '15%', top: 20}}
            onPress={() => ImgFUnction()}>
            <Image source={IMG} style={styles.eye} />
          </Clickable>
          <Clickable
            style={{position: 'absolute', right: '15%', top: '62%'}}
            onPress={() => ImgFUnction1()}>
            <Image source={IMG1} style={styles.eye} />
          </Clickable>
        </View>

        <Paragraph textAlign='center'>
          Must Contain 8 Characters,{'\n'}
          Minimum One Uppercase{'\n'}
          Minimum One Lowercase{'\n'}
          Minimum One Number{'\n'}
          Minimum One Special Case Character{'\n'}
        </Paragraph>

        <UiButton text="Submit" onPress={() => LoginWithValidation()} />
      </FormContainer>
    </ViewContainer>
  );
};

export default ChangePassword;

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
