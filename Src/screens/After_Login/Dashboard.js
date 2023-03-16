import {Image, StatusBar, StyleSheet,View, FlatList} from 'react-native';
import React from 'react';
import ScrollContainer from '../../components/HOC/ScrollContainer';
import Colors from '../../constents/Colors';
import {IconPath, ImagePath} from '../../Assets';
import Paragraph from '../../components/UI/Paragraph';
import CtegoiresList from '../../components/comancomponents/CtegoiresList';
import Headers from '../../components/comancomponents/Headers';
import Swipers from '../../components/comancomponents/Swipers';
import Card from '../../components/comancomponents/Card';

const Dashboard = () => {
  const Data2 = [
    {
      img: require('../../Assets/images/secf1.jpg'),
      p: '-57%',
    },
    {
      img: require('../../Assets/images/secf2.jpg'),
      p: '-51%',
    },
    {
      img: require('../../Assets/images/secf3.jpg'),
      p: '-51%',
    },

    {
      img: require('../../Assets/images/secf4.jpg'),
      p: '-43%',
    },

    {
      img: require('../../Assets/images/secf5.jpg'),
      p: '-52%',
    },
    {
      img: require('../../Assets/images/secf6.jpg'),
      p: '-60%',
    },

    {
      img: require('../../Assets/images/secf7.jpg'),
      p: '-64%',
    },

    {
      img: require('../../Assets/images/secf8.jpg'),
      p: '-44%',
    },

    {
      img: require('../../Assets/images/secf9.jpg'),
      p: '-53%',
    },

    {
      img: require('../../Assets/images/secf10.jpg'),
      p: '-58%',
    },
  ];

  const renderItem2 = ({item}) => {
    return (
      <View style={styles.fltcontainer1}>
        <Image source={item.img} style={styles.img1} resizeMode="contain" />
        <View style={styles.heartcontainer}>
          <Image source={IconPath.wishlist} style={styles.heart} />
        </View>
        <View style={styles.persentcontainer}>
          <Paragraph
            size={13}
            color={Colors.purple}
            style={{fontWeight: 'bold'}}>
            {item.p}
          </Paragraph>
        </View>
      </View>
    );
  };
  const SwipersImages1 = [
    {
      img: ImagePath.s1,
    },
    {
      img: ImagePath.s2,
    },
  ];
  const SwipersImages2 = [
    {
      img: ImagePath.secs1,
    },
    {
      img: ImagePath.secs2,
    },
    {
      img: ImagePath.secs3,
    },
  ];
  return (
    <ScrollContainer style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.purpledark} />

      <Headers />
      <View>
        <CtegoiresList />
      </View>

      <Swipers SwipersImages={SwipersImages1} />
      <View style={styles.ShowAllContainer}>
        <Paragraph style={{fontWeight: 'bold'}}>
          Western dress collection
        </Paragraph>
        <Paragraph color={Colors.lightGray}>Show All</Paragraph>
      </View>
      <View>
        <Card/>
      </View>

      <Swipers SwipersImages={SwipersImages2} />
      <View style={styles.ShowAllContainer}>
        <Paragraph style={{fontWeight: 'bold'}}>
          Stylish Kurti Collection
        </Paragraph>
        <Paragraph color={Colors.lightGray}>Show All</Paragraph>
      </View>
      <FlatList renderItem={renderItem2} data={Data2} horizontal />
      {/* <Card /> */}
    </ScrollContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  ShowAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    // padding: 5,
    marginVertical: 15,
  },
  fltcontainer1: {
    width: 200,
    height: 250,
    // borderWidth:1,
    margin: 10,
    backgroundColor: Colors.gray + 50,
    borderRadius: 10,
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
    width: '80%',
    height: '80%',
  },
});
