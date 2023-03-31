import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Headers from '../../components/comancomponents/Headers';
import { useIsFocused } from '@react-navigation/native';
import ViewContainer from '../../components/HOC/ViewContainer';
import Paragraph from '../../components/UI/Paragraph';
import Colors from '../../constents/Colors';
import Loader from '../../components/UI/Loader';
import { IconPath } from '../../Assets';
import Clickable from '../../components/HOC/Clickble';
import { GetCategoriseDataApi } from '../../api/ApiLink';

const Categoires = ({ navigation }) => {
  const [ApiData, setApiData] = useState([]);
  const [Loaded, setLoaded] = useState(true);
  useEffect(() => {
    GetCategoriseData();
  }, [useIsFocused()]);

  const GetCategoriseData = async () => {
    try {
      let Results = await fetch(
        GetCategoriseDataApi,
      );

      let res = await Results.json();
      let ResData = await res;

      let Data = ResData.Categories;
      

      setApiData(Data);

      // console.log('==ApiData===>', ApiData);
    } catch (err) {
      alert('Sorry! Categories Api Error');
      console.log('==ERROR==>', err);
    }
    setLoaded(false);
  };

  const renderItemTItle = ({ item }) => {
    return (
      <Clickable
        onPress={() => navigation.navigate('ProductsList', { data: item })}>
        <Paragraph style={{ paddingVertical: 10, fontWeight: '500' }}>
          {item.title}
        </Paragraph>
      </Clickable>
    );
  };

  const renderItem = ({ item }) => {
    // console.log('==>Item===>', item.data);
    return (
      <View style={styles.FlatListMainContainer}>
        <View style={styles.ImgMainContainer}>
          <View style={styles.txtContainer}>
            <Paragraph left={20} size={18} style={{ fontWeight: 'bold' }}>
              {item.title}
            </Paragraph>
            <Image
              source={IconPath.NextArrow}
              style={{ width: 15, height: 15, left: 25, top: 7 }}
            />
          </View>
          <View style={styles.ImgContainer}>
            <Image
              source={{ uri: item.Image }}
              style={styles.img}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.ListContainer}>
          <FlatList renderItem={renderItemTItle} data={item.data} />
        </View>
      </View>
    );
  };
  return (
    <ViewContainer>
      <Headers title="Categories" />
      <Loader loading={Loaded} />
      <FlatList renderItem={renderItem} data={ApiData} />
    </ViewContainer>
  );
};

export default Categoires;

const styles = StyleSheet.create({
  FlatListMainContainer: {
    width: '100%',
    margin: 5,
    // borderWidth: 1,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: Colors.white,
  },
  ImgMainContainer: {
    width: '95%',
    height: 100,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.purple + 50,
    borderRadius: 20,
  },
  txtContainer: {
    width: '60%',
    justifyContent: 'center',
  },
  ImgContainer: {
    width: '40%',
    height: '100%',
    // borderWidth: 1,
    alignItems: 'center',
  },
  img: {
    width: '70%',
    height: '100%',
    borderRadius: 50,
  },
  ListContainer: {
    width: '100%',
    // borderWidth:1,
    borderRadius: 20,
    top: 5,
    backgroundColor: Colors.gray + 40,
    padding: 15,
  },
});
