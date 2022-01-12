import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';
// Di splash screen ini menggunakan Component AppLoading dari library expo-app-loading. Mengapa saya menggunakan library itu karena untuk menunggu font yang di load perlu adanya jeda atau waktu agar font kustom ke load dan bisa digunakan maka saran dari expo adalah menggunakan component loading dari expo-app-loading.
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

// stylesheet
import styles from '../../assets/styles/index';

export default function SplashScreen({ navigation }) {
  // load font dari folder assets, bawaan expo terbatas font familynya
  let [fontsLoaded] = useFonts({
    'Berkshire-Swash': require('../../assets/fonts/BerkshireSwash-Regular.ttf'),
    'Sunflower-Bold': require('../../assets/fonts/Sunflower-Bold.ttf'),
    'Sunflower-Medium': require('../../assets/fonts/Sunflower-Medium.ttf'),
  });

  // objectElement yang isi propertynya adalah property yang akan dianimasikan
  // dalam component ini hanya propery scale saja.
  const [objectElement, setObjectElement] = useState({
    scale: new Animated.Value(1),
  });

  useEffect(() => {
    // ketika font telah ke load, maka akan mereturn Viewnya, namun karena Viewnya adalah Component yang akan dianimasikan, maka kita perlu jalankan animasinya dengan mengubah value pada property stylenya. Yang saya buat adalah membuat kotak yang sebelumnya memiliki scale 1 lalu dianimasikan menjadi 9 dengan durasi waktu animasi selama 3 detik, jadi perubahannya tidak terlalu cepat. Setelah itu baru reset navigation dan diarahkan ke screen home dengan menunggu 2500 milisecond atau 2 setengah detik.  
    if (fontsLoaded) {
      // jalanin animasi
      const animateSplash = async () => {
        await Animated.timing(objectElement.scale, {
          toValue: 9,
          duration: 3000,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }).start();
      };
      animateSplash();
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }, 2500);
    }
  }, [fontsLoaded, objectElement.scale, navigation]);

  const splashAnimationConfig = {
    transform: [{ rotate: '135deg' }, { scale: objectElement.scale }],
  };

  // untuk component yang kita sudah animasikan berjalan, maka perlu dibungkus oleh Component Animated.View. Animated.View berbeda dengan View yang paling membedakan adalah Component yang dibungkus oleh Animated.View bisa kita animasikan seperti kota kecil ke besar

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View  style={stylesSplash.containerSplash}>
        <Text style={stylesSplash.textSplash}>MReza</Text>
        <Animated.View
          style={[
            stylesSplash.boxSplash,
            splashAnimationConfig,
          ]}></Animated.View>
      </View>
    );
  }
}

// styled component untuk splash
const stylesSplash = StyleSheet.create({
  textSplash: {
    position: 'absolute',
    top: hp('49%'),
    left: wp('35%'),
    zIndex: 2,
    fontSize: 30,
    color: '#986D8E',
    fontFamily: 'Berkshire-Swash',
  },
  containerSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#79B4B7',
    padding: 8,
    position: "relative"
  },
  boxSplash: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#ffffff',
  },
});
