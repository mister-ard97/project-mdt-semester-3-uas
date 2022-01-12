import React from 'react';
import { Button, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

// DrawerContent adalah Component dari Drawer Navigation yang isinya bisa dicustom semau kita, pada DrawerContent juga menampilkan 3 menu seperti dengan menu bawah atau BottomTabNavigator
// Dan jangan lupa ada icon close untuk menutup drawer component
export default function DrawerContent({ navigation }) {
  const drawerMenu = [
    {
      name: 'Home',
      onPress: () => {
        navigation.navigate('Welcome');
        navigation.closeDrawer();
      },
      icon: 'home-outline',
    },
    {
      name: 'About Me',
      onPress: () => {
        navigation.navigate('About Me');
        navigation.closeDrawer();
      },
      icon: 'person-outline',
    },
    {
      name: 'Experience',
      onPress: () => {
        navigation.navigate('Experience');
        navigation.closeDrawer();
      },
      icon: 'school-outline',
    },
    {
      name: 'Skills',
      onPress: () => {
        navigation.navigate('Skills');
        navigation.closeDrawer();
      },
      icon: 'ios-ribbon-outline',
    },
  ];

  const RenderDrawerMenu = () => {
    return drawerMenu.map((drawerItem, idx) => {
      return (
        <TouchableOpacity
          style={{
            marginBottom: idx === drawerMenu.length - 1 ? 0 : 16,
          }}
          key={drawerItem.name}
          onPress={drawerItem.onPress}>
          <View style={styles.drawerMenuContainerStyle}>
            <Ionicons name={drawerItem.icon} color={'#79B4B7'} size={20} />
            <Text style={styles.drawerMenuTextStyle}>{drawerItem.name}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View
      style={{
        backgroundColor: '#79B4B7',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      <TouchableOpacity
        style={{
          marginBottom: 8,
          textAlign: 'right',
        }}
        onPress={() => navigation.closeDrawer()}>
        <Ionicons name="ios-close" color={'#ffffff'} size={30} />
      </TouchableOpacity>
      <View style={styles.drawerContainer}>
        <RenderDrawerMenu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 6,
  },
  drawerMenuContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  drawerMenuTextStyle: {
    fontSize: 21,
    fontFamily: 'Sunflower-Bold',
    color: '#79B4B7',
    marginLeft: 8,
  },
});
