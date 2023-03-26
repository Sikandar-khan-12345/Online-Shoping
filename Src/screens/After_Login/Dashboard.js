import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScrollContainer from '../../components/HOC/ScrollContainer';
import Colors from '../../constents/Colors';
import {IconPath, ImagePath} from '../../Assets';
import CtegoiresList from '../../components/comancomponents/CtegoiresList';
import Headers from '../../components/comancomponents/Headers';
import Swipers from '../../components/comancomponents/Swipers';
import Card from '../../components/comancomponents/Card';
import Collection from '../../components/comancomponents/Collection';
import ViewContainer from '../../components/HOC/ViewContainer';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../components/UI/Loader';

const Dashboard = ({navigation}) => {
  const [loaded, setloaded] = useState(true);
  const [WesternDressApiData, setWesternDressApiData] = useState([]);
  const [StylishKurtiApiData, setStylishKurtiApiData] = useState([]);
  const [SpecialSareeApiData, setSpecialSareeApiData] = useState([]);
  useEffect(() => {
    GetWesternDress();
    GetStylishKurti();
    GetSpecialSaree();
  }, [useIsFocused()]);

  const GetWesternDress = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/WDC',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.Westerndresscollections[0].Productlist;

      setWesternDressApiData(ApiData);
      // console.log('===WesternDress-Api-resdata======>', WesternDressApiData);
    } catch (error) {
      console.log('====WesternDress-API-Error====>', error);
    }
    setloaded(false);
  };

  const GetStylishKurti = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/SKC',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.StylishKurtiCollections[0].Productlist;

      setStylishKurtiApiData(ApiData);
      // console.log('===StylishKurti-Api-resdata======>', StylishKurtiApiData);
    } catch (error) {
      console.log('====StylishKurti-API-Error====>', error);
    }
    setloaded(false);
  };

  const GetSpecialSaree = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/SSC',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.Specialsareecollections[0].Productlist;

      setSpecialSareeApiData(ApiData);
      // console.log('===SpecialSaree-Api-resdata======>', SpecialSareeApiData);
    } catch (error) {
      console.log('====SpecialSaree-API-Error====>', error);
    }
    setloaded(false);
  };

  const Data2 = [
    {
      img: require('../../Assets/images/secf1.jpg'),
      p: '-57%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹450',
      half: '₹1999',
      rating: IconPath.rating,
    },
    {
      img: require('../../Assets/images/secf2.jpg'),
      p: '-51%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹550',
      half: '₹1999',
      rating: IconPath.rating,
    },
    {
      img: require('../../Assets/images/secf3.jpg'),
      p: '-51%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹987',
      half: '₹1999',
      rating: IconPath.rating,
    },

    {
      img: require('../../Assets/images/secf4.jpg'),
      p: '-43%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹587',
      half: '₹1999',
      rating: IconPath.rating,
    },

    {
      img: require('../../Assets/images/secf5.jpg'),
      p: '-52%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹880',
      half: '₹1999',
      rating: IconPath.rating,
    },
    {
      img: require('../../Assets/images/secf6.jpg'),
      p: '-60%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹1099',
      half: '₹1999',
      rating: IconPath.rating,
    },

    {
      img: require('../../Assets/images/secf7.jpg'),
      p: '-64%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹586',
      half: '₹1999',
      rating: IconPath.rating,
    },

    {
      img: require('../../Assets/images/secf8.jpg'),
      p: '-44%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹799',
      half: '₹1999',
      rating: IconPath.rating,
    },

    {
      img: require('../../Assets/images/secf9.jpg'),
      p: '-53%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹986',
      half: '₹1999',
      rating: IconPath.rating,
    },

    {
      img: require('../../Assets/images/secf10.jpg'),
      p: '-58%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹788',
      half: '₹1999',
      rating: IconPath.rating,
    },
  ];
  const Data1 = [
    {
      img: require('../../Assets/images/f2.jpg'),
      p: '-67%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹682',
      half: '₹1999',
      rating: IconPath.rating,
      sold: 'SHOPPEEN',
      status: 'In-Stock',
      cod: 'Available',
      shipping: 'Free',
    },
    {
      img: require('../../Assets/images/f3.jpg'),
      p: '-60%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹985',
      half: '₹1999',
      rating: IconPath.rating,
      sold: 'SHOPPEEN',
      status: 'In-Stock',
      cod: 'Available',
      shipping: 'Free',
    },
    {
      img: require('../../Assets/images/f5.jpg'),
      p: '-63%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹720',
      half: '₹1999',
      rating: IconPath.rating,
      sold: 'SHOPPEEN',
      status: 'In-Stock',
      cod: 'Available',
      shipping: 'Free',
    },
    {
      img: require('../../Assets/images/f7.jpg'),
      p: '-63%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹460',
      half: '₹1999',
      rating: IconPath.rating,
      sold: 'SHOPPEEN',
      status: 'In-Stock',
      cod: 'Available',
      shipping: 'Free',
    },
    {
      img: require('../../Assets/images/f8.jpg'),
      p: '-67%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹789',
      half: '₹1999',
      rating: IconPath.rating,
      sold: 'SHOPPEEN',
      status: 'In-Stock',
      cod: 'Available',
      shipping: 'Free',
    },
    {
      img: require('../../Assets/images/f9.jpg'),
      p: '-61%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹764',
      half: '₹1999',
      rating: IconPath.rating,
      sold: 'SHOPPEEN',
      status: 'In-Stock',
      cod: 'Available',
      shipping: 'Free',
    },
    {
      img: require('../../Assets/images/f4.jpg'),
      p: '-66%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹637',
      half: '₹1999',
      rating: IconPath.rating,
      sold: 'SHOPPEEN',
      status: 'In-Stock',
      cod: 'Available',
      shipping: 'Free',
    },

    {
      img: require('../../Assets/images/f6.jpg'),
      p: '-55%',
      Icon: IconPath.unlike,
      name: 'DRESSES WESTERN ...',
      price: '₹666',
      half: '₹1999',
      rating: IconPath.rating,
      sold: 'SHOPPEEN',
      status: 'In-Stock',
      cod: 'Available',
      shipping: 'Free',
    },
  ];

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
    <ViewContainer>
      <StatusBar backgroundColor={Colors.purpledark} />
      <Loader loading={loaded} />

      <Headers title="DashBord" />
      <ScrollContainer style={{flex: 1}}>
        <View>
          <CtegoiresList
          // onPress={() => navigation.navigate('CardDetails', {data: Data1})}
          />
        </View>

        <Swipers SwipersImages={SwipersImages1} />

        <Collection
          title="Western dress collection"
          onPress={() =>
            navigation.navigate('ShowAll', {data: WesternDressApiData})
          }
        />

        <Card data={WesternDressApiData} />

        <Swipers SwipersImages={SwipersImages2} />

        <Collection
          title="Stylish Kurti Collection"
          onPress={() =>
            navigation.navigate('ShowAll', {data: StylishKurtiApiData})
          }
        />
        <Card data={StylishKurtiApiData} />

        <Collection title="Trending Kurti Collection" />
        {/* <Card data={Data1} /> */}
        <Swipers SwipersImages={SwipersImages1} />

        <Collection
          title="Special Saree Collection"
          onPress={() =>
            navigation.navigate('ShowAll', {data: SpecialSareeApiData})
          }
        />
        <Card data={SpecialSareeApiData} />

        <Collection title="Fashion Saree Collection" />

        {/* <Card data={Data1} /> */}
        <Swipers SwipersImages={SwipersImages2} />

        <Collection title="Top Selling Kurti" />

        {/* <Card data={Data2} /> */}

        <Collection title="Long Kurti Collection" />

        {/* <Card data={Data1} /> */}

        <Swipers SwipersImages={SwipersImages1} />

        <Collection title="Top Saree Collection" />

        {/* <Card data={Data2} /> */}

        <Collection title=" Womens Saree Collection" />
        {/* <Card data={Data1} /> */}
        <Swipers SwipersImages={SwipersImages2} />

        <Collection title="Dresses for you" />
        {/* <Card data={Data2} /> */}

        <Collection title="Western Dresses For Women" />
        {/* <Card data={Data1} /> */}

        <Collection title="Bridal Wedding Collections" />
        {/* <Card data={Data2} /> */}

        <Collection title="Branded Jeans Collections" />
        <Collection title="Steller Styles For Him" />
        {/* <Card data={Data1} /> */}

        <Collection title="New Arrivals Trousers" />
      </ScrollContainer>
    </ViewContainer>
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
