import {StyleSheet, View, Image, Share, Alert, FlatList} from 'react-native';
import React, {useState} from 'react';
import ScrollContainer from '../../components/HOC/ScrollContainer';
import Colors from '../../constents/Colors';
import {IconPath} from '../../Assets';
import Clickable from '../../components/HOC/Clickble';
import ViewContainer from '../../components/HOC/ViewContainer';
import UiButton from '../../components/UI/UiButton';
import Paragraph from '../../components/UI/Paragraph';
import Input from '../../components/UI/Input';
import Swiper from 'react-native-swiper';

const CardDetails = ({route, navigation}) => {
  const CardList = route?.params?.data;
  const [LikeChenge, setLikeChenge] = useState(IconPath.unlike);
  const [colorss, setcolorss] = useState(Colors.gray);
  const [count, setcount] = useState(1);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: CardList[0]?.name,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const Like = () => {
    let chenge =
      LikeChenge == IconPath.unlike ? IconPath.like : IconPath.unlike;

    setLikeChenge(chenge);
  };
  const Add = () => {
    if (count < 20) {
      a = count + 1;
      setcount(a);
    }
  };
  const Sub = () => {
    if (count > 1) {
      a = count - 1;
      setcount(a);
    }
  };
  const data = [
    {
      size: 'S',
      color: Colors.gray + 50,
    },
    {
      size: 'M',
      color: Colors.gray + 50,
    },
    {
      size: 'L',
      color: Colors.gray + 50,
    },
    {
      size: 'XL',
      color: Colors.gray + 50,
    },
    {
      size: 'XXL',
      color: Colors.gray + 50,
    },
  ];

  const ColorsChenge = index => {
    // let arr = [...data];
    // arr[index].color =
    //   arr[index].color == Colors.gray + 50 ? Colors.purple : Colors.gray + 50;
    //   setcolorss(arr)

    let color = colorss == Colors.purple ? Colors.gray + 50 : Colors.purple;
    setcolorss(color);
  };
  const renderItem = ({item, index}) => {
    return (
      <Clickable
        style={{
          width: 40,
          height: 40,
          // borderWidth: 1,
          margin: 7,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colorss,
        }}
        onPress={() => ColorsChenge(index)}>
        <Paragraph>{item.size}</Paragraph>
      </Clickable>
    );
  };

  return (
    <ViewContainer>
      <ScrollContainer>
        <View style={styles.ImhMainContainer}>
          <View style={{width: '100%', height: 400, borderWidth: 0}}>
            <Swiper autoplay={true} showsPagination={false}>
              <Image
                source={CardList[0]?.img}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
              <Image
                source={CardList[0]?.img}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
              <Image
                source={CardList[0]?.img}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
            </Swiper>
          </View>
          <View style={{position: 'absolute', top: 15, right: 2}}>
            <Clickable style={styles.IconContainer} onPress={() => Like()}>
              <Image source={LikeChenge} style={styles.HeartIcon} />
            </Clickable>
            <Clickable style={styles.IconContainer} onPress={() => onShare()}>
              <Image source={IconPath.share} style={styles.HeartIcon} />
            </Clickable>
          </View>
          <Clickable
            style={styles.BackContainer}
            onPress={() => navigation.goBack()}>
            <Image source={IconPath.back} style={styles.BackIcon} />
          </Clickable>
        </View>
        <View style={styles.TextMainCOntainer}>
          <View style={styles.TextMainWhiteCOntainer}>
            <Paragraph size={20} style={styles.txt}>
              DRESSES WESTERN GEORGETTE ...
            </Paragraph>

            <View style={styles.persentPriceMainContainer}>
              <Paragraph color={Colors.purple} style={styles.txt}>
                {CardList[0]?.price}
                {'  '}
                <Paragraph
                  style={{textDecorationLine: 'line-through'}}
                  color={Colors.darkgray}>
                  {CardList[0]?.half}
                </Paragraph>{' '}
              </Paragraph>

              <View style={styles.persentContainer}>
                <Paragraph size={13} color={Colors.purple} style={styles.txt}>
                  {CardList[0]?.p}
                </Paragraph>
              </View>
            </View>
            <View style={styles.persentPriceMainContainer}>
              <Paragraph size={14} color={Colors.darkgray}>
                Sold By:{' '}
                <Paragraph color={Colors.purple} style={styles.txt}>
                  {CardList[0]?.sold}
                </Paragraph>
              </Paragraph>
              <Paragraph size={14} color={Colors.darkgray}>
                Status:{' '}
                <Paragraph color={Colors.green} style={styles.txt}>
                  {CardList[0]?.status}
                </Paragraph>{' '}
              </Paragraph>
            </View>
            <View style={styles.persentPriceMainContainer}>
              <Paragraph size={14} color={Colors.darkgray}>
                COD:{' '}
                <Paragraph color={Colors.green} style={styles.txt}>
                  {CardList[0]?.cod}
                </Paragraph>
              </Paragraph>
              <Paragraph size={14} color={Colors.darkgray}>
                Shipping:{' '}
                <Paragraph color={Colors.purple} style={styles.txt}>
                  {CardList[0]?.shipping}
                </Paragraph>{' '}
              </Paragraph>
            </View>

            <Paragraph style={[styles.txt, {paddingVertical: 15}]}>
              Select Your Size
            </Paragraph>

            <View>
              <FlatList renderItem={renderItem} data={data} horizontal />
            </View>
            <Paragraph style={[styles.txt, {paddingVertical: 15}]}>
              Select Colors
            </Paragraph>
            <View style={styles.ColorSelectImages}>
              <Image
                source={CardList[0]?.img}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
            </View>
            <Paragraph style={[styles.txt, {paddingVertical: 15}]}>
              Quantity
            </Paragraph>
            <View style={styles.IncMainContainer}>
              <Clickable style={styles.IncContainer} onPress={() => Sub()}>
                <Paragraph size={48} bottom={15}>
                  -
                </Paragraph>
              </Clickable>
              <Paragraph size={20} style={styles.txt} color={Colors.darkgray}>
                {count}
              </Paragraph>
              <Clickable style={styles.IncContainer} onPress={() => Add()}>
                <Paragraph size={40} bottom={7} color={Colors.darkgray}>
                  +
                </Paragraph>
              </Clickable>
            </View>
            <Paragraph style={styles.txt}>Check Delivery</Paragraph>
            <Input placeholder={'Enter Pincode'} style={styles.inp} />
          </View>
        </View>
      </ScrollContainer>
      <View style={styles.btnMainContainer}>
        <View style={[styles.btnContainer, {left: 5}]}>
          <UiButton text="Buy now" style={{width: '87%'}} />
        </View>
        <View style={[styles.btnContainer, {right: 5}]}>
          <UiButton
            text="Add to Cart"
            style={styles.btn}
            textColor={Colors.purple}
          />
        </View>
      </View>
    </ViewContainer>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  ImhMainContainer: {
    width: '85%',
    height: 400,
    // borderWidth:1,
    alignSelf: 'center',
    backgroundColor: Colors.lightGray + 50,
  },
  HeartIcon: {
    width: '60%',
    height: '60%',
    tintColor: Colors.purple,
  },
  IconContainer: {
    backgroundColor: Colors.white,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 5,
  },
  BackContainer: {
    position: 'absolute',
    top: 30,
    left: 0,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackIcon: {
    width: '60%',
    height: '60%',
  },
  TextMainCOntainer: {
    // borderWidth: 1,
    width: '100%',
    height: 650,
    backgroundColor: Colors.gray + 40,
  },
  TextMainWhiteCOntainer: {
    // borderWidth:1,
    width: '100%',
    height: 650,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: Colors.white,
    marginVertical: 10,
    // padding:20
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  btn: {
    width: '87%',
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.purple,
  },
  btnMainContainer: {
    borderWidth: 0.5,
    borderColor: Colors.gray,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnContainer: {
    width: '50%',
    borderWidth: 0,
    height: 100,
  },
  persentPriceMainContainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  persentContainer: {
    borderWidth: 1,
    width: '15%',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: Colors.gray,
  },
  txt: {
    fontWeight: 'bold',
  },
  ColorSelectImages: {
    borderWidth: 2,
    borderColor: Colors.purple,
    width: '30%',
    height: 100,
    backgroundColor: Colors.gray + 60,
    marginVertical: 7,
    left: 10,
  },
  IncContainer: {
    // borderWidth: 1,
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray + 70,
  },
  IncMainContainer: {
    height: 50,
    width: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 10,
  },
  inp: {
    width: '100%',
    marginVertical: 10,
  },
});
