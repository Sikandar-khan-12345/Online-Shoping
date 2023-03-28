import {StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScrollContainer from '../../components/HOC/ScrollContainer';
import Colors from '../../constents/Colors';
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
  const [DashBoardCard, setDashBoardCard] = useState([]);

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

  const [Swiper1ApiData, setSwiper1ApiData] = useState([]);
  const [Swiper2ApiData, setSwiper2ApiData] = useState([]);
  const [Swiper3ApiData, setSwiper3ApiData] = useState([]);
  const [Swiper4ApiData, setSwiper4ApiData] = useState([]);
  const [Swiper5ApiData, setSwiper5ApiData] = useState([]);
  const [Swiper6ApiData, setSwiper6ApiData] = useState([]);

  useEffect(() => {
    GetDashboardCard();
    GetAllSwiper();
  }, [useIsFocused]);

  const GetDashboardCard = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/Deshbord',
      );

      let res = await result.json();
      let resdata = await res;

      let ApiData = resdata.Deshbord;
      // setDashBoardCard(ApiData);
      // console.log('===Dashboard All Card Api', DashBoardCard);

      setWesternDressApiData(ApiData[0].Productlist);
      setStylishKurtiApiData(ApiData[1].Productlist);
      setTrendingKurtiApiData(ApiData[2].Productlist);
      setSpecialSareeApiData(ApiData[3].Productlist);
      setFashionSareeApiData(ApiData[4].Productlist);
      setTopSellingKurtiApiData(ApiData[5].Productlist);
      setLongKurtiApiData(ApiData[6].Productlist);
      setTopSareeApiData(ApiData[7].Productlist);
      setWomensSareeApiData(ApiData[8].Productlist);
      setDressForUApiData(ApiData[9].Productlist);
      setWesternDressWomenApiData(ApiData[10].Productlist);
      setBridalWeddingApiData(ApiData[11].Productlist);
      setStellarStylesApiData(ApiData[12].Productlist);
      setNewArrivalsApiData(ApiData[13].Productlist);

      // console.log('===DashBoardCard-Api-resdata======>', ApiData);
    } catch (error) {
      console.log('====DashBoardCard-API-Error====>', error);
    }
    setloaded(false);
  };

  const GetAllSwiper = async () => {
    try {
      let result = await fetch(
        'https://charming-calf-pea-coat.cyclic.app/api/AllCategories/allSwaiper',
      );
      let res = await result.json();
      let resdata = await res;

      let Data = resdata.allSwaiper;

      setSwiper1ApiData(Data[0].Swaiper1);
      setSwiper2ApiData(Data[1].Swaiper2);
      setSwiper3ApiData(Data[2].Swaiper3);
      setSwiper4ApiData(Data[3].Swaiper4);
      setSwiper5ApiData(Data[4].Swaiper5);
      setSwiper6ApiData(Data[5].Swaiper6);

      console.log('====All Swiper resdata===>', Data);
    } catch (error) {
      alert('Swiper1 Api Error');
      console.log('===Swiper1 API Error ==>', error);
    }
  };

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

        <Swipers SwipersImages={Swiper1ApiData} />

        <Collection
          title="Western dress collection"
          onPress={() =>
            navigation.navigate('ShowAll', {data: WesternDressApiData})
          }
        />

        <Card data={WesternDressApiData} />

        <Swipers SwipersImages={Swiper2ApiData} />

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
        <Swipers SwipersImages={Swiper3ApiData} />

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
        <Swipers SwipersImages={Swiper4ApiData} />

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

        <Swipers SwipersImages={Swiper5ApiData} />

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
        <Swipers SwipersImages={Swiper6ApiData} />

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
