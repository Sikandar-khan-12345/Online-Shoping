import {StyleSheet, View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import ViewContainer from '../../components/HOC/ViewContainer';
import Headers from '../../components/comancomponents/Headers';
import Paragraph from '../../components/UI/Paragraph';
import Clickable from '../../components/HOC/Clickble';
import Colors from '../../constents/Colors';
import {IconPath} from '../../Assets';

const ProductsList = ({route, navigation}) => {
  const [LikeCHenge, setLikeCHenge] = useState(IconPath.unlike);
  const ImageChengeFUnction = index => {
    let chenge =
      LikeCHenge == IconPath.unlike ? IconPath.like : IconPath.unlike;
    setLikeCHenge(chenge);
  };
  const ProductsData = route?.params?.data
  console.log('ProductsData', ProductsData);

  const renderItem = ({item, index}) => {
    return (
      <Clickable
        style={styles.FlatMainContainer}
        onPress={() => navigation.navigate('CardDetails', {data: item})}>
        <View style={styles.ImageMainContainer}>
          <Image
            source={{uri: item.Image[0]}}
            style={styles.img}
            resizeMode="cover"
          />
        </View>
        <Clickable
          style={styles.heartcontainer}
          onPress={() => ImageChengeFUnction(item, index)}>
          <Image source={LikeCHenge} style={styles.heart} />
        </Clickable>
        <View style={styles.persentcontainer}>
          <Paragraph
            size={13}
            color={Colors.purple}
            style={{fontWeight: 'bold'}}>
            {item.disPrsent}
          </Paragraph>
        </View>

        <View style={{marginVertical: 5, marginHorizontal: 15}}>
          <Paragraph color={Colors.darkgray} size={13}>
            {item.title}
          </Paragraph>
          <Paragraph color="green" style={{fontWeight: 'bold'}}>
            {item.disPrice}
            {'  '}
            <Paragraph
              style={{textDecorationLine: 'line-through'}}
              color={Colors.darkgray}>
              {item.sellingPrice}
            </Paragraph>
          </Paragraph>
          <View style={styles.rattingMainContainer}>
            <Image source={IconPath.rating} style={styles.ratting} />
            <Image source={IconPath.rating} style={styles.ratting} />
            <Image source={IconPath.rating} style={styles.ratting} />
            <Image source={IconPath.rating} style={styles.ratting} />
            <Image source={IconPath.rating} style={styles.ratting} />
          </View>
        </View>
      </Clickable>
    );
  };
  return (
    <ViewContainer>
      <Headers
        title={ProductsData.title}
        type="Icon"
        onPress={() => navigation.goBack()}
      />
      <View style={{flex: 1}}>
        <FlatList renderItem={renderItem} data={ProductsData.Productlist} numColumns={2} />
      </View>
    </ViewContainer>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  FlatMainContainer: {
    width: '45%',
    height: 330,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    borderRadius: 10,
    margin: 5,
    left: 7,
    backgroundColor: Colors.white,
    elevation: 10,
  },
  heartcontainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    // borderWidth: 1,
    width: 30,
    height: 30,
    backgroundColor: Colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  heart: {
    width: '65%',
    height: '65%',
  },
  persentcontainer: {
    position: 'absolute',
    left: 10,
    top: 10,
    // borderWidth: 1,
    backgroundColor: Colors.white,
    width: 40,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratting: {
    width: 13,
    height: 13,
    tintColor: Colors.orrenge,
  },
  ImageMainContainer: {
    borderWidth: 0,
    backgroundColor: Colors.gray + 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 220,
  },
  rattingMainContainer: {
    flexDirection: 'row',
    marginVertical: 3,
    borderWidth: 0,
    width: '55%',
    justifyContent: 'space-between',
    left: 5,
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
