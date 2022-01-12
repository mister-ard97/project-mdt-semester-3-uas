import React from 'react';
import { Button, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

// Drawer navigator content
import DrawerContent from './drawerNavigator/drawerContent';

// splashscreen component
import SplashScreen from '../components/splash/index';

// screen
import HomeScreen from '../screens/home/index';
import AboutScreen from '../screens/about/index';
import WorkExperienceScreen from '../screens/experience/index';
import SkillsScreen from '../screens/skills/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// AllStackNavigator adalah Stack.Navigator yang membungkus semua screen yang ada diaplikasi
// Karena ada dua jenis Screen yang pertama yang tidak memiliki BottomTabNavigator yaitu splash screen dan yang kedua adalah screen Home, About Me, Experience dan Skills
// Maka saya buat untuk dua Stack.Screen yang terpisah
// Stack Screen Pertama hanya berisi component SplashScreen yaitu Komponen pertama yang dipanggil
// Stack Screen Kedua berisi semua screen yang ada di aplikasi

const AllStackNavigator = () => {
  return (
    <Stack.Navigator initialScreen="SplashScreen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={AppBottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

// AppBottomTabNavigator adalah Tab.Navigator yang membungkus Tab.Screen yang nantinya akan muncul navigasi di bagian bawah, apabila kita membuat Tab.Screen untuk home maka nanti akan muncul menu home di menu bawah atau Bottom Tab Navigatior. Begitu juga dengan halaman About Me, Experience dan Skills
// Karena saya ingin menampilkan 4 menu, maka perlu membuat 4 Tab.Screen dengan component yang mengarah ke Screennya masing masing
// Contoh Home componentnya HomeScreen, About Me componentnya AboutScreen, Experience componentnya WorkExperienceScreen dan Skills componentnya SkillsScreen

// Dan juga masing masing Tab.Screen bisa dikostumisasi icon menunya. Untuk pengaturannya bisa dengan props TabBarIcon dengan mengirim component Icon.
// Icon yang saya gunakan adalah Ionicons

const AppBottomTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#79B4B7',
        tabBarInactiveTintColor: '#316B83',
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderColor: '#79B4B7',
          borderWidth: 2,
          borderRadius: 6,
          height: 55,
          shadowColor: '#b2b2b2',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
        },
        tabBarLabelStyle: {
          paddingBottom: 3,
          fontFamily: 'Sunflower-Bold',
          fontSize: 12,
        },
      })}>
      <Tab.Screen
        name="Welcome"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <View style={{ marginRight: 10 }}>
                <Ionicons name="ios-apps" color={'#ffffff'} size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontFamily: 'Sunflower-Bold',
            color: '#ffffff',
            marginVertical: 'auto',
          },
          headerStyle: {
            backgroundColor: '#79B4B7',
            borderBottomWidth: 0
          },
        }}
      />
      <Tab.Screen
        name="About Me"
        component={AboutScreen}
        options={{
          tabBarLabel: 'About Me',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" color={color} size={size} />
          ),

          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <View style={{ marginRight: 10 }}>
                <Ionicons name="ios-apps" color={'#ffffff'} size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontFamily: 'Sunflower-Bold',
            color: '#ffffff',
            marginVertical: 'auto',
          },
          headerStyle: {
            backgroundColor: '#79B4B7',
            borderBottomWidth: 0
          },
        }}
      />
      <Tab.Screen
        // name="Work Experience"
        name="Experience"
        component={WorkExperienceScreen}
        options={{
          // tabBarLabel: 'Work Experience',
          tabBarLabel: 'Experience',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-school" color={color} size={size} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <View style={{ marginRight: 10 }}>
                <Ionicons name="ios-apps" color={'#ffffff'} size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontFamily: 'Sunflower-Bold',
            color: '#ffffff',
            marginVertical: 'auto',
          },
          headerStyle: {
            backgroundColor: '#79B4B7',
            borderBottomWidth: 0
          },
        }}
      />
      <Tab.Screen
        // name="Work Experience"
        name="Skills"
        component={SkillsScreen}
        options={{
          tabBarLabel: 'Skills',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-ribbon" color={color} size={size} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <View style={{ marginRight: 10 }}>
                <Ionicons name="ios-apps" color={'#ffffff'} size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerTitleStyle: {
            fontFamily: 'Sunflower-Bold',
            color: '#ffffff',
            marginVertical: 'auto',
          },
          headerStyle: {
            backgroundColor: '#79B4B7',
            borderBottomWidth: 0
          },
        }}
      />
    </Tab.Navigator>
  );
};

// Karena semua page dapat mengakses Drawer Navigator maka kita perlu membungkus screen dengan Drawer.Navigator dengan route pertama kali atau initialRouteNamenya adalah SplashScreen
// karena ada tiga jenis navigator maka dua navigator yaitu Stack dan Drawer headerShownnya harus dibuat false, jadi headerShown true hanya berasal dari bottomTabNavigator

const RootStackNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      initialRouteName="SplashScreen"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{ swipeEnabled: true }}
        name="Home"
        component={AllStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default RootStackNavigator;
