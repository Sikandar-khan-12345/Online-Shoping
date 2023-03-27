import AsyncStorage from '@react-native-async-storage/async-storage';
import SimpleToast from 'react-native-simple-toast';
import { useSelector } from 'react-redux';
import { print } from '../Constants/print';
// import {strings} from '../Constants/language';

// DEMO
export const BASE_URL = 'https://newstagenode.spurexperiences.com';
export const API = `${BASE_URL}/v1`;
export const MOBILEAPI = `https://newstagenode.spurexperiences.com/mobile/v1/`;

export const statusMessage = {
  400: 'Invalid request format.',
  401: 'Invalid API Key.',
  403: 'The request is forbidden.',
  404: 'The specified resource could not be found.',
  405: 'You tried to access the resource with an invalid method.',
  500: 'We had a problem with our server. Try again later.',
  503: "We're temporarily offline for maintenance. Please try again later.",
};
export const setToken = async (t) => {
  await AsyncStorage.setItem('TOKEN', t);
  print(t);
};
export const getToken = async () => {
  const token = await AsyncStorage.getItem('TOKEN');
  print(token);
  return token;
};
export const setDeviceToken = async (t) => {
  await AsyncStorage.setItem('DeviceToken', t);
  print(t);
};
export const getDeviceToken = async () => {
  const token = await AsyncStorage.getItem('DeviceToken');
  print(token);
  return token;
};
export const getUserData = async (field = null) => {
  const userDataRes = await AsyncStorage.getItem('userData');
  if (!field) {
    return JSON.parse(userDataRes);
  } else {
    const userData = JSON.parse(userDataRes);
    return userData[field];
  }
};
const responseBack = (data, msg, status) => {
  return {
    data, msg, status
  }
}
export const logoutHandler = async () => {
  await AsyncStorage.removeItem('userData');
  await AsyncStorage.removeItem('TOKEN');
  await AsyncStorage.removeItem('userType');
  return;
};
const printAPIDetails = (token, url, body) => {
  // print every api data on console for test purpose you can comment in live build
  print('TOKEN : ', token);
  print('URL : ', url);
  print('BODY : ', body);
  return;
};
export const POST = async (
  route,
  body = {},
  onSuccess = () => { },
  onError = () => { },
  onFail = () => {
    SimpleToast.show('Check Network, Try Again.', SimpleToast.SHORT);
  },
) => {
  const deviceToken = await getDeviceToken();
  try {
    const res = await fetch(route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'requestfrom': 'apps',
        'device-token': deviceToken,
      },
      body,
    });
    if (res.status !== 200) {
      const resteXT = await res.text();
      onError({ data: null, msg: statusMessage[res.status], status: 'error' });
      return { data: null, msg: statusMessage[res.status], status: 'error' };
    }
    const resJSON = await res.json();
    console.log("🚀 ~ file: Backend.js:92 ~ resJSON", resJSON)
    if (resJSON.response === 'success') {
      onSuccess(resJSON);
      return {
        ...resJSON,
      };
    } else {
      onError(resJSON);
      return {
        ...resJSON,
      };
    }
  } catch (error) {
    console.log(error);
    onFail({ data: null, msg: 'Network Error', status: 'error' });
    return { data: null, msg: 'Network Error', status: 'error' };
  }
};
export const POST_FORMDATA = async (
  route,
  body = {},
  onSuccess = () => { },
  onError = () => { },
  onFail = () => {
    SimpleToast.show('Check Network, Try Again.', SimpleToast.SHORT);
  },
) => {
  try {
    const token = await getToken();
    const deviceToken = await getDeviceToken();
    printAPIDetails('NO TOKEN', route, body);
    const res = await fetch(route, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
        'requestfrom': 'apps',
        'device-token': deviceToken,
        // 'Accept-Language': strings.getLanguage(),
      },
      body,
    });
    console.log('here 2', res);
    console.log(res.status);
    if (res.status !== 200) {
      const resText = await res.text();
      console.log('==>', resText);
      // console.log(res.status, statusMessage[res.status]);
      SimpleToast.show(
        `Try Again, ${statusMessage[res.status]}`,
        SimpleToast.SHORT,
      );
      onError({ data: null, msg: statusMessage[res.status], status: 'error' });
      return { data: null, msg: statusMessage[res.status], status: 'error' };
    }
    const resJSON = await res?.json();
    if (resJSON.response === 'success') {
      onSuccess(resJSON);
      return {
        ...resJSON,
      };
    } else {
      onError(resJSON);
      return {
        ...resJSON,
      };
    }
  } catch (error) {
    console.log('FAIL111', error);
    onFail({ data: null, msg: 'Network Error', status: 'error' });
    return { data: null, msg: 'Network Error', status: 'error' };
  }
};
export const GET = async (
  route,
  onSuccess = () => { },
  onError = () => { },
  onFail = () => {
    SimpleToast.show('Check Network, Try Again.', SimpleToast.SHORT);
  },
) => {
  // console.log('LANG', strings.getLanguage());
  const deviceToken = await getDeviceToken();

  printAPIDetails('NO TOKEN', route, 'No Body');
  try {
    const res = await fetch(route, {
      headers: {
        'Content-Type': 'application/json',
        'requestfrom': 'apps',
        'device-token': deviceToken,
        // 'Accept-Language': strings.getLanguage(),
      },
      method: 'GET',
    });
    // console.log(res.status);
    if (res.status !== 200) {
      // SimpleToast.show(
      //   `Try Again, ${statusMessage[res.status]}`,
      //   SimpleToast.SHORT,
      // );
      const resText = await res.text();
      // console.log(resText);
      onError({ data: null, msg: statusMessage[res.status], status: 'error' });
      return { data: null, msg: statusMessage[res.status], status: 'error' };
    }
    const resJSON = await res.json();
    if (resJSON.response === 'success') {
      // console.log(route, resJSON.msg);
      onSuccess(resJSON);
      return {
        ...resJSON,
      };
    } else {
      // console.log(route, resJSON.msg);
      onError(resJSON);
      return {
        ...resJSON,
      };
    }
  } catch (error) {
    onFail({ data: null, msg: 'Network Error', status: 'error' });
    return { data: null, msg: 'Network Error', status: 'error' };
  }
};
export const POST_WITH_TOKEN = async (
  route,
  body = {},
  onSuccess = () => { },
  onError = () => { },
  onFail = () => {
    SimpleToast.show('Check Network, Try Again.', SimpleToast.SHORT);
  },
) => {

  try {
    const token = await getToken();
    const deviceToken = await getDeviceToken();
    printAPIDetails(token, route, body, '>>>>>>>>>>');
    const res = await fetch(route, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'requestfrom': 'apps',
        'device-token': deviceToken,
        // 'Accept-Language': strings.getLanguage(),
      },
      body,
      method: 'POST',
    });
    if (res.status !== 200) {
      const resText = await res?.text();
      onError({ data: null, msg: statusMessage[res.status], status: 'error' });
      return { data: null, msg: statusMessage[res.status], status: 'error' };
    }

    const resJSON = await res.json();
    if (resJSON.response == 'success') {
      onSuccess(resJSON);
      return {
        ...resJSON,
      };
    }
    else {
      onError(resJSON);
      return {
        ...resJSON,
      };
    }
  } catch (error) {
    // console.log(route);
    onFail({ data: null, msg: 'Network Error', status: 'error' });
    return { data: null, msg: 'Network Error', status: 'error' };
  }
};
export const GET_WITH_TOKEN = async (
  route,
  onSuccess = () => { },
  onError = () => { },
  onFail = () => {
    SimpleToast.show('Check Network, Try Again.', SimpleToast.SHORT);
  },
  headers = {},
  status = () => { },
) => {
  try {
    // console.log(route);
    const token = await getToken();
    const deviceToken = await getDeviceToken();
    printAPIDetails(token, route, 'NO BODY');
    const res = await fetch(route, {
      headers: {
        'Content-Type': 'application/json',
        'requestfrom': 'apps',
        Authorization: `Bearer ${token}`,
        'device-token': deviceToken,
        // 'Accept-Language': strings.getLanguage(),
        ...headers,
      },
      method: 'GET',
    });
    // console.log('-----------------');
    // console.log('-----------------');
    if (res.status !== 200) {
      // console.log(res.status, route);
      const resText = await res.text();
      // console.log(resText);
      // SimpleToast.show(
      //   `Try Again, ${statusMessage[res.status]}`,
      //   SimpleToast.SHORT,
      // );
      onError({ data: null, msg: statusMessage[res.status], status: 'error' });
      status(res.status);
      return { data: null, msg: statusMessage[res.status], status: 'error' };
    }
    const resJSON = await res.json();
    if (resJSON.status === 'success') {
      status(res.status);
      onSuccess(resJSON);
      return {
        ...resJSON,
      };
    } else {
      // console.log('Error', resJSON);
      status(res.status);
      onError(resJSON);
      return {
        ...resJSON,
      };
    }
  } catch (error) {
    // console.log(error);
    onFail({ data: null, msg: 'Network Error', status: 'error', error });
    return { data: null, msg: 'Network Error', status: 'error' };
  }
};
export const DELETE_WITH_TOKEN = async (
  route,
  onSuccess = () => { },
  onError = () => { },
  onFail = () => {
    SimpleToast.show('Check Network, Try Again.', SimpleToast.SHORT);
  },
  headers = {},
) => {
  // console.log(route);
  try {
    const token = await getToken();
    const deviceToken = await getDeviceToken();
    printAPIDetails(token, route, null);
    const res = await fetch(route, {
      headers: {
        'Content-Type': 'application/json',
        'requestfrom': 'apps',
        Authorization: `Bearer ${token}`,
        'device-token': deviceToken,
        // 'Accept-Language': strings.getLanguage(),
        ...headers,
      },
      method: 'DELETE',
    });
    if (res.status !== 200) {
      SimpleToast.show(
        `Try Again, ${statusMessage[res.status]}`,
        SimpleToast.SHORT,
      );
      onError({ data: null, msg: statusMessage[res.status], status: 'error' });
      return { data: null, msg: statusMessage[res.status], status: 'error' };
    }
    const resJSON = await res.json();
    if (resJSON.status === 'success') {
      onSuccess(resJSON);
      return {
        ...resJSON,
      };
    } else {
      onError(resJSON);
      return {
        ...resJSON,
      };
    }
  } catch (error) {
    onFail({ data: null, msg: 'Network Error', status: 'error', error });
    return { data: null, msg: 'Network Error', status: 'error' };
  }
};


// export const request=()=>{
//   return {
//     get:(url,onSuccess=()=>{},onError=()=>{},onFail=()=>{})=>{
//       printAPIDetails('NO TOKEN', url, body);
//     try {
//       const res = await fetch(url, {
//         headers: {
//           'Content-Type': 'application/json',
//           // 'Accept-Language': strings.getLanguage(),
//         },
//         method: 'GET',
//       });
//       if (res.status !== 200) {
//         return onErrorFound(res,onError);
//       }
//       const resJSON = await res.json();
//       if (resJSON.status === 'success') {
//         onSuccess(resJSON);
//         return resJSON;
//       } else {
//         onError(resJSON);
//         return resJSON;
//       }
//     } catch (error) {
//       const errorResponse=responseBack(null,'Network Failed!','error')
//       onFail(errorResponse);
//       return errorResponse;
//     }
//     }
//   }

// }

function onErrorFound(res, onError) {
  const errorResponse = responseBack(null, statusMessage[res.status], 'error');
  onError(errorResponse);
  return errorResponse;
}