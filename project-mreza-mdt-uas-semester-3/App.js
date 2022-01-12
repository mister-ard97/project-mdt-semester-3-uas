import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// root navigation yang isinya drawer, bottomtab, and stack
import RootStackNavigator from './navigation/rootNavigator';

// NOTE: APABILA TIDAK KE LOAD WAKTU PERTAMA KALI BUKA, HARAP REFRESH KEMBALI. TERIMA KASIH :)

// NavigaionContainer berfungsi untuk mengatur navigasi pada aplikasi. 
// RootStackNavigator adalah Navigator yang berisi gabungan dari Stack, BottomTabNavigator dan DrawerNavigation, semua digabung menjadi satu agar props navigation dapat digunakan salah satu function yang digunakan adalah untuk berpindah halaman.
 
export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  )
}