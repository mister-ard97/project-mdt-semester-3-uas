import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

// Data yang digunakan pada aplikasi saya formatnya adalah json. Mengapa saya memilih format data json untuk menyimpan data portofolio? karena menurut saya data json dapat diubah secara cepat. hanya dengan membuat file json lalu kita bisa fetch datanya sesuai kebutuhan. Apabila menggunakan database perlu adanya library untuk melakukan request ke API lalu ke Database, jadi untuk mempersingkat waktu development saya memilih data json untuk menyimpan data portofolio

import dataPortofolio from '../../data/me_portofolio.json';

// styles saya buat seperti ini karena yang pertama style dengan property yang sama bisa digunakan kembali seperti style card Cerita Singkat dan Pengalaman Singkat akan digunakan kembali di screen About Me dan Experience
import styles from '../../assets/styles/index';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileWelcome from '../../components/ProfileWelcome';
import CustomButton from '../../components/CustomButton';

export default function HomeScreen({ navigation }) {
  // data portofolio saya buat null karena perlu adanya fetch data terlebih dahulu
  const [portofolio, setPortofolio] = useState(null);

  // useEffect adalah lifecycle method mirip dengan componentdidmount di react yang akan berjalan ketika awal screen diakses
  
  // parameter dari method useEffect adalah callback function atau function yang akan dijalankan pertama kali mau seperti apa, apakah mengambil data dari database namun di sini, saya gunakan untuk fetch data json yang berada di foleder data 
  
  // Dan parameter kedua adalah state yang akan dilihat. maksud state yang akan dilihat adalah ketika ada perubahan lokal state maka useeffectnya akan jalan kembali. Namun jika hanya ingin jalan sekali saja tanpa melihat lokal state maka berikan array kosong ([]) pada parameter kedua
  useEffect(() => {
    async function fetchData() {
      const response = await JSON.stringify(dataPortofolio);
      setPortofolio(JSON.parse(response));
    }
    fetchData();
  }, []);

  // Untuk merender komponen yang berada di cerita singkat
  const RenderShortEducationList = () => {
    return portofolio.experience.education.data.map((item, idx) => {
      return (
        <View
          key={item.education_place_name}
          style={{
            borderLeftWidth: 2,
            borderStyle: 'dashed',
            paddingHorizontal: 8,
            borderColor: '#79B4B7',
            flexDirection: 'row',
            marginTop: idx === 0 ? 0 : 16,
          }}>
          <Image
            style={{
              height: 75,
              width: 75,
              alignSelf: 'center',
              marginRight: 8,
            }}
            source={{
              uri: item.image,
            }}
          />
          <View>
            <Text
              style={{
                fontFamily: 'Sunflower-Medium',
                textAlign: 'justify',
              }}>
              {item.education_place_name}
            </Text>

            <Text
              style={{
                fontFamily: 'Sunflower-Medium',
                textAlign: 'justify',
              }}>
              {item.year}
            </Text>
          </View>
        </View>
      );
    });
  };

  // Untuk merender komponen yang berda di pengalaman singkat
  const RenderShortWorkList = () => {
    return portofolio.experience.work.data.map((item, idx) => {
      return (
        <View
          key={item.workplace_name}
          style={{
            borderLeftWidth: 2,
            borderStyle: 'dashed',
            paddingHorizontal: 8,
            borderColor: '#79B4B7',
            flexDirection: 'row',
            marginTop: idx === 0 ? 0 : 16,
            
          }}>
          <Image
            style={{
              height: 75,
              width: 75,
              alignSelf: 'center',
              marginRight: 8,
            }}
            source={{
              uri: item.image,
            }}
          />
          <View>
            <Text
              style={{
                fontFamily: 'Sunflower-Medium',
                textAlign: 'justify',
              }}>
              {item.workplace_name}
            </Text>

            <Text
              style={{
                fontFamily: 'Sunflower-Medium',
                textAlign: 'justify',
              }}>
              {item.job_title}
            </Text>

            <Text
              style={{
                fontFamily: 'Sunflower-Medium',
                textAlign: 'justify',
              }}>
              {item.year}
            </Text>
          </View>
        </View>
      );
    });
  };
  if (!portofolio) {
    return <View />;
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: '#79B4B7',
      }}>
      <View
        style={{
          backgroundColor: '#79B4B7',
          alignSelf: 'stretch',
          height: 150,
          position: 'relative',
        }}
      />
      
      <ProfileWelcome styles={styles} portofolio={portofolio}/>
      {/* About Me Short Code */}
      <View style={styles.aboutMeCard}>
        <View
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              fontFamily: 'Sunflower-Bold',
              fontSize: 16,
              color: '#79B4B7',
              marginBottom: 8,
            }}>
            Cerita Singkat
          </Text>
          <Text
            style={{
              fontFamily: 'Sunflower-Medium',
              textAlign: 'justify',
            }}>
            {portofolio.about.short_description}
          </Text>
          <View
            style={{
              marginTop: 16,
              alignSelf: 'end',
            }}>
            <CustomButton
              text="Halaman About Me"
              icon={
                <Ionicons
                  name="arrow-forward-outline"
                  color={'#ffffff'}
                  size={12}
                />
              }
              onPress={() => navigation.navigate('About Me')}
            />
          </View>
        </View>
      </View>
      <View style={styles.experienceCard}>
        <View
          style={{
            padding: 8,
          }}>
          <Text
            style={{
              fontFamily: 'Sunflower-Bold',
              fontSize: 16,
              color: '#79B4B7',
              marginBottom: 8,
            }}>
            Pengalaman Singkat
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 8,
            }}>
            <Ionicons
              name={portofolio.experience.education.icon}
              color={'#79B4B7'}
              size={16}
            />
            <Text
              style={{
                fontFamily: 'Sunflower-Bold',
                fontSize: 16,
                color: '#79B4B7',
                marginLeft: 8,
              }}>
              {portofolio.experience.education.name}
            </Text>
          </View>

          {<RenderShortEducationList />}

          {/* Work Experience Section*/}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16,
              marginBottom: 8,
              
            }}>
            <Ionicons
              name={portofolio.experience.work.icon}
              color={'#79B4B7'}
              size={16}
            />
            <Text
              style={{
                fontFamily: 'Sunflower-Bold',
                fontSize: 16,
                color: '#79B4B7',
                marginLeft: 8,
              }}>
              {portofolio.experience.work.name}
            </Text>
          </View>

          {<RenderShortWorkList />}
          <View
            style={{
              marginTop: 16,
              alignSelf: 'end',
            }}>
            <CustomButton
              text="Halaman Experience"
              icon={
                <Ionicons
                  name="arrow-forward-outline"
                  color={'#ffffff'}
                  size={12}
                />
              }
              onPress={() => navigation.navigate('Experience')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
