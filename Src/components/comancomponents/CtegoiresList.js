import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Paragraph from '../UI/Paragraph';
import {useIsFocused} from '@react-navigation/native';
import Clickable from '../HOC/Clickble';
import Colors from '../../constents/Colors';
import Loader from '../UI/Loader';

const CtegoiresList = ({onPress = () => {}}) => {
  
  const [loaded, setloaded] = useState(true)
  const [ApiData, setApiData] = useState([]);
  useEffect(() => {
    GetCategories();
    
  }, [useIsFocused]);

  const GetCategories = async () => {
    try {
      let Results = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories',
      );
      let res = await Results.json();

      // console.log('===>Res===>',res);

      let ResData = await res;
      let Data = ResData.Categories;
     

      setApiData(Data);

      // console.log('====ResData===>', Data);
    } catch (err) {
      console.log('==Error===>', err);
    }
    setloaded(false)
  };

  const renderItem = ({item}) => {
    return (
      <Clickable style={styles.fltcontainer} onPress={onPress}>
        <View style={styles.ImgContainer}>
          <Image
            source={{uri: item.Image}}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
        <Paragraph size={11} style={{fontWeight: 'bold'}}>
          {item.title ? item.title : item.titel}
        </Paragraph>
      </Clickable>
    );
  };
  return (
    <View>
      <Loader loading = {loaded}/>
      <FlatList renderItem={renderItem} data={ApiData} horizontal />
    </View>
  );
};

export default CtegoiresList;

const styles = StyleSheet.create({
  fltcontainer: {
    width: 80,
    height: 80,
    // borderWidth: 1,
    borderRadius: 40,
    // margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 13,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  ImgContainer: {
    width: '70%',
    height: '70%',
    borderWidth: 0.5,
    borderColor: Colors.gray,
    borderRadius: 35,
  },
});
