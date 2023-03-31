import SimpleToast from 'react-native-simple-toast';
export const statusMessage = {
  400: 'Invalid request format.',
  401: 'Invalid API Key.',
  403: 'The request is forbidden.',
  404: 'The specified resource could not be found.',
  405: 'You tried to access the resource with an invalid method.',
  500: 'We had a problem with our server. Try again later.',
  503: "We're temporarily offline for maintenance. Please try again later.",
};
export const GETDATA = async (
  apiRoute,
  onSuccess = () => { },
  onError = () => { },
  onFail = () => {
    SimpleToast.show('Check Network, Try Again.', SimpleToast.SHORT);
  },
) => {
  try {
    const res = await fetch(apiRoute, {
      headers: {
        'Content-Type': 'application/json',
        // 'requestfrom': 'apps',
        // 'device-token': deviceToken,
        //  'Accept-Language': strings.getLanguage(),
      },
      method: 'GET',
    });
    // console.log(res.status);
    if (!res.status) {
      SimpleToast.show(
        `Try Again, ${statusMessage[res.status]}`,
        SimpleToast.SHORT,
      );
      const resText = await res.text();
      // console.log(resText);
      onError({ data: null, status: 'error' });
      return { data: null, status: 'error' };
    }
    const resJSON = await res.json();
    if (resJSON.status) {
      console.log("==>==>==>==>", resJSON);
      onSuccess(resJSON);
      return {
        resJSON,
      };
    } else {
      // console.log(route, resJSON.msg);
      onError(resJSON);
      return {
        ...resJSON,
      };
    }
  } catch (error) {
    onFail({ data: null,status: error });
    return { data: null,status: error };
  }
};

//   try {
//     let result = await fetch(apiRoute);

//     let res = await result.json();
//     let {Deshbord} = await res;
//     let ApiData = Deshbord;
//     console.log('resul==::>', ApiData);
//     return {...ApiData};

//     if (resJSON.status) {
//       // console.log(route, resJSON.msg);
//       onSuccess(resJSON);
//       return {
//         ...resJSON,
//       };
//     } else {
//       // console.log(route, resJSON.msg);
//       onError(resJSON);
//       return {
//         ...resJSON,
//       };
//     }
//     // setDashBoardCard(ApiData);

//     // setWesternDressApiData(Deshbord[0].Productlist);
//     // setStylishKurtiApiData(Deshbord[1].Productlist);
//     // setTrendingKurtiApiData(Deshbord[2].Productlist);
//     // setSpecialSareeApiData(Deshbord[3].Productlist);
//     // setFashionSareeApiData(Deshbord[4].Productlist);
//     // setTopSellingKurtiApiData(Deshbord[5].Productlist);
//     // setLongKurtiApiData(Deshbord[6].Productlist);
//     // setTopSareeApiData(Deshbord[7].Productlist);
//     // setWomensSareeApiData(Deshbord[8].Productlist);
//     // setDressForUApiData(Deshbord[9].Productlist);
//     // setWesternDressWomenApiData(Deshbord[10].Productlist);
//     // setBridalWeddingApiData(Deshbord[11].Productlist);
//     // setStellarStylesApiData(Deshbord[12].Productlist);
//     // setNewArrivalsApiData(Deshbord[13].Productlist);

//     // console.log('===DashBoardCard-Api-resdata======>', ApiData);
//   } catch (error) {
//     console.log('====DashBoardCard-API-Error====>', error);
//   }
