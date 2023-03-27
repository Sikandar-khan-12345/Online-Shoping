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
import { GET } from '../../backend/Backend';

const Dashboard = ({navigation}) => {
  const [loaded, setloaded] = useState(true);
  const [btnloder, setbtnloder] = useState(false);
  const [WesternDressApiData, setWesternDressApiData] = useState([]);
  const [StylishKurtiApiData, setStylishKurtiApiData] = useState([]);
  const [TrendingKurtiApiData, setTrendingKurtiApiData] = useState([]);
  const [SpecialSareeApiData, setSpecialSareeApiData] = useState([]);
  const [FashionSareeApiData, setFashionSareeApiData] = useState([]);
  const [TopSellingKurtiApiData, setTopSellingKurtiApiData] = useState([]);
  const [LongKurtiApiData, setLongKurtiApiData] = useState([]);
  const [TopSareeApiData, setTopSareeApiData] = useState([]);
  const [WomensSareeApiData, setWomensSareeApiData] = useState([]);
  const [DressForUApiData, setDressForUApiData] = useState([]);
  const [WesternDressWomenApiData, setWesternDressWomenApiData] = useState([]);
  const [BridalWeddingApiData, setBridalWeddingApiData] = useState([]);
  const [StellarStylesApiData, setStellarStylesApiData] = useState([]);
  const [NewArrivalsApiData, setNewArrivalsApiData] = useState([]);
  useEffect(() => {
    GetWesternDress();
    GetStylishKurti();
    GetTrendingKurti();
    GetSpecialSaree();
    GetFashionSaree();
    GetTopSelling();
    GetLongKurti();
    GetTopSaree();
    GetWomenSaree();
    GetDressForU();
    GetWesternDressWomen();
    GetBridalWedding();
    GetStellerStyles();
    GetNewArrivals();
  }, [useIsFocused]);

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

  const GetTrendingKurti = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/TKC',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.TrendingKurtiCollections[0].Productlist;

      setTrendingKurtiApiData(ApiData);
      // console.log('===TrendinKurti-Api-resdata======>', TrendingKurtiApiData);
    } catch (error) {
      console.log('====TrendinKurti-API-Error====>', error);
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

  const GetFashionSaree = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/FSC',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.FashionSareeCollections[0].Productlist;

      setFashionSareeApiData(ApiData);
      // console.log('===FashionSaree-Api-resdata======>', FashionSareeApiData);
    } catch (error) {
      console.log('====FashionSaree-API-Error====>', error);
    }
    setloaded(false);
  };

  const GetTopSelling = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/TSK',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.TopSellingKurti[0].Productlist;

      setTopSellingKurtiApiData(ApiData);
      // console.log(
      //   '===TopSellingKurti-Api-resdata======>',
      //   TopSellingKurtiApiData,
      // );
    } catch (error) {
      console.log('====TopSellingKurti-API-Error====>', error);
    }
    setloaded(false);
  };

  const GetLongKurti = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/LKC',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.LongKurtiCollections[0].Productlist;

      setLongKurtiApiData(ApiData);
      // console.log(
      //   '===TopSellingKurti-Api-resdata======>',
      //   LongKurtiApiData,
      // );
    } catch (error) {
      console.log('====LongKurti-API-Error====>', error);
    }
    setloaded(false);
  };
  const GetTopSaree = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/TSC',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.TopSareeCollectins[0].Productlist;

      setTopSareeApiData(ApiData);
      // console.log(
      //   '===TopSellingKurti-Api-resdata======>',
      //   TopSareeApiData,
      // );
    } catch (error) {
      console.log('====TopSaree-API-Error====>', error);
    }
    setloaded(false);
  };

  const GetWomenSaree = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/WSC',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.WomenSareecollections[0].Productlist;

      setWomensSareeApiData(ApiData);
      // console.log(
      //   '===WomensSaree-Api-resdata======>',
      //   WomensSareeApiData,
      // );
    } catch (error) {
      console.log('====WomensSaree-API-Error====>', error);
    }
    setloaded(false);
  };

  const GetDressForU = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/DFU',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.Dressesforyou[0].Productlist;

      setDressForUApiData(ApiData);
      // console.log(
      //   '===DressForU-Api-resdata======>',
      //   DressForUApiData,
      // );
    } catch (error) {
      console.log('====DressForU-API-Error====>', error);
    }
    setloaded(false);
  };

  const GetWesternDressWomen = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/WDFW',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.WesternDressesForWomen[0].Productlist;

      setWesternDressWomenApiData(ApiData);
      // console.log(
      //   '===WesternDressWomen-Api-resdata======>',
      //   WesternDressWomenApiData,
      // );
    } catch (error) {
      console.log('====WseternDressWomen-API-Error====>', error);
    }
    setloaded(false);
  };

  const GetBridalWedding = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/BWC',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.BridalWeddingCollection[0].Productlist;

      setBridalWeddingApiData(ApiData);
      // console.log(
      //   '===BridalWedding-Api-resdata======>',
      //   BridalWeddingApiData,
      // );
    } catch (error) {
      console.log('====BridalWedding-API-Error====>', error);
    }
    setloaded(false);
  };
  const GetNewArrivals = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/NAT',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.NewArrivalsTrousers[0].Productlist;

      setNewArrivalsApiData(ApiData);
      // console.log(
      //   '===NewArrivals-Api-resdata======>',
      //   NewArrivalsApiData,
      // );
    } catch (error) {
      console.log('====NewArrivals-API-Error====>', error);
    }
    setloaded(false);
  };

  const GetStellerStyles = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/SSF',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.StellarStylesForHim[0].Productlist;

      setStellarStylesApiData(ApiData);
      // console.log(
      //   '===StellarStyles-Api-resdata======>',
      //   StellarStylesApiData,
      // );
    } catch (error) {
      console.log('====StellarStyles-API-Error====>', error);
    }
    setloaded(false);
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

        <Collection
          title="Trending Kurti Collection"
          onPress={() =>
            navigation.navigate('ShowAll', {data: TrendingKurtiApiData})
          }
        />
        <Card data={TrendingKurtiApiData} />
        <Swipers SwipersImages={SwipersImages1} />

        <Collection
          title="Special Saree Collection"
          onPress={() =>
            navigation.navigate('ShowAll', {data: SpecialSareeApiData})
          }
        />
        <Card data={SpecialSareeApiData} />

        <Collection
          title="Fashion Saree Collection"
          onPress={() =>
            navigation.navigate('ShowAll', {data: FashionSareeApiData})
          }
        />

        <Card data={FashionSareeApiData} />
        <Swipers SwipersImages={SwipersImages2} />

        <Collection
          title="Top Selling Kurti"
          onPress={() =>
            navigation.navigate('ShowAll', {data: TopSellingKurtiApiData})
          }
        />

        <Card data={TopSellingKurtiApiData} />

        <Collection
          title="Long Kurti Collection"
          onPress={() =>
            navigation.navigate('ShowAll', {data: LongKurtiApiData})
          }
        />

        <Card data={LongKurtiApiData} />

        <Swipers SwipersImages={SwipersImages1} />

        <Collection
          title="Top Saree Collection"
          onPress={() =>
            navigation.navigate('ShowAll', {data: TopSareeApiData})
          }
        />

        <Card data={TopSareeApiData} />

        <Collection
          title=" Womens Saree Collection"
          onPress={() =>
            navigation.navigate('ShowAll', {data: WomensSareeApiData})
          }
        />
        <Card data={WomensSareeApiData} />
        <Swipers SwipersImages={SwipersImages2} />

        <Collection
          title="Dresses for you"
          onPress={() =>
            navigation.navigate('ShowAll', {data: DressForUApiData})
          }
        />
        <Card data={DressForUApiData} />

        <Collection
          title="Western Dresses For Women"
          onPress={() =>
            navigation.navigate('ShowAll', {data: WesternDressWomenApiData})
          }
        />
        <Card data={WesternDressWomenApiData} />

        <Collection
          title="Bridal Wedding Collections"
          onPress={() =>
            navigation.navigate('ShowAll', {data: BridalWeddingApiData})
          }
        />
        <Card data={BridalWeddingApiData} />

        <Collection title="Branded Jeans Collections" />
        <Collection
          title="Steller Styles For Him"
          onPress={() =>
            navigation.navigate('ShowAll', {data: StellarStylesApiData})
          }
        />
        <Card data={StellarStylesApiData} />

        <Collection
          title="New Arrivals Trousers"
          onPress={() =>
            navigation.navigate('ShowAll', {data: NewArrivalsApiData})
          }
        />
        <Card data={NewArrivalsApiData} />
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
