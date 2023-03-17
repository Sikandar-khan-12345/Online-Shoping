import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../components/comancomponents/Headers'

const Cart = () => {
  // const [radioButtons, setRadioButtons] = useState([
  //   {
  //     id: '1', // acts as primary key, should be unique and non-empty string
  //     label: 'Work',
  //     value: 'Work',
  //   },
  //   {
  //     id: '2',
  //     label: 'Home',
  //     value: 'Home',
  //   },
  // ]);

  // const onPressRadioButton = radioButtonsArray => {
  //   setRadioButtons(radioButtonsArray);
  // };
  return (
    <View>
      <Headers title="Cart" />

      {/* <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              containerStyle={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                top: 15,
                marginVertical: 10,
              }}
              borderSize={2}
              buttonColor  = 'red'
            /> */}
    
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})