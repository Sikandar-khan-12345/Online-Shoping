import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {IconPath} from '../../Assets';
import Colors from '../../constents/Colors';
import Paragraph from '../../components/UI/Paragraph';
import Clickable from '../../components/HOC/Clickble';
import Headers from '../../components/comancomponents/Headers';

const ShowAll = ({route, navigation}) => {
  const CardList = route?.params?.data;

  // console.log('===ShowAll====>', CardList);
  const [LikeCHenge, setLikeCHenge] = useState(IconPath.unlike);

  const ImageChengeFUnction = index => {
    let chenge =
      LikeCHenge == IconPath.unlike ? IconPath.like : IconPath.unlike;

    setLikeCHenge(chenge);
  };

  const renderItem1 = ({item, index}) => {
    return (
      <Clickable style={styles.fltcontainer1}>
        <View
          style={{
            borderWidth: 0,
            backgroundColor: Colors.gray + 50,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 220,
          }}>
          <Image
            source={{uri: item.Image[0]}}
            style={styles.img1}
            resizeMode="contain"
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
            -{item.disPrsent}
          </Paragraph>
        </View>

        <View style={{marginVertical: 5, marginHorizontal: 15}}>
          <View style={{height: 18}}>
            <Paragraph color={Colors.darkgray} size={13}>
              {item.title}
            </Paragraph>
          </View>
          <Paragraph color="green" style={{fontWeight: 'bold'}}>
            {item.disPrice}
            {'  '}
            <Paragraph
              style={{textDecorationLine: 'line-through'}}
              color={Colors.darkgray}>
              {item.sellingPrice}
            </Paragraph>
          </Paragraph>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 3,
              borderWidth: 0,
              width: '70%',
              justifyContent: 'space-between',
            }}>
            <Image
              source={IconPath.rating}
              style={{width: 13, height: 13, tintColor: Colors.orrenge}}
            />
            <Image
              source={IconPath.rating}
              style={{width: 13, height: 13, tintColor: Colors.orrenge}}
            />
            <Image
              source={IconPath.rating}
              style={{width: 13, height: 13, tintColor: Colors.orrenge}}
            />
            <Image
              source={IconPath.rating}
              style={{width: 13, height: 13, tintColor: Colors.orrenge}}
            />
            <Image
              source={IconPath.rating}
              style={{width: 13, height: 13, tintColor: Colors.orrenge}}
            />
          </View>
        </View>
      </Clickable>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Headers
        type="Icon"
        title="Western dress collection"
        onPress={() => navigation.goBack()}
      />
      <View style={{flex: 1, marginVertical: 25}}>
        <FlatList renderItem={renderItem1} data={CardList} numColumns={2} />
      </View>
    </View>
  );
};

export default ShowAll;

const styles = StyleSheet.create({
  fltcontainer1: {
    width: 160,
    height: 290,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    margin: 5,
    borderRadius: 10,
    left: 10,
    marginVertical: 5,
  },
  img1: {
    width: '100%',
    height: '100%',
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
});
