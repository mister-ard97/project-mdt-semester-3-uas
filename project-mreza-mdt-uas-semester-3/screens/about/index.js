import React, { useState, useEffect } from 'react';

// Ada yang berbeda di layar about me. yang pertama adalah penambahan card sosial media. Untuk mengakses external link yang perlu dilakukan adalah dengan menggunakan method Linking dari react-native

// Linking berfungsi untuk membuka external link mirip dengan tag a pada html yaitu membuka external link. Yang membedakan adalah untuk membuka external link perlu menggunakan method openURL dengan parameter external linknya. 
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Linking
} from 'react-native';
import styles from '../../assets/styles/index';

import dataPortofolio from '../../data/me_portofolio.json';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileWelcome from '../../components/ProfileWelcome';

export default function AboutScreen({ navigation }) {
  const [portofolio, setPortofolio] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await JSON.stringify(dataPortofolio);
      setPortofolio(JSON.parse(response));
    }
    fetchData();
  }, []);
  const RenderEducationList = () => {
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
      {/* About Me */}
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
            Tentang Saya
          </Text>
          <Text
            style={{
              fontFamily: 'Sunflower-Medium',
              textAlign: 'justify',
            }}>
            {portofolio.about.short_description}
          </Text>

          <Text
            style={{
              fontFamily: 'Sunflower-Medium',
              textAlign: 'justify',
              marginTop: 16
            }}>
            {portofolio.about.description}
          </Text>
        </View>
      </View>

      {/* Social Media */}
      <View style={aboutMeStyles.socialMediaCard}>
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
            Sosial Media
          </Text>
          <Text
            style={{
              fontFamily: 'Sunflower-Medium',
              textAlign: 'justify',
            }}>
            {portofolio.about.social.title}
          </Text>
          <View
            style={{
              marginTop: 16,
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}>
            {portofolio.about.social.list.map((socialItem) => {
              return (
                <TouchableOpacity key={socialItem.name} onPress={() => Linking.openURL(socialItem.url)}>
                  <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}
                  >
                  <Ionicons
                      name={socialItem.icon}
                      color={socialItem.color}
                      size={32}
                  />
                  <Text
                  style={{
                    fontFamily: 'Sunflower-Medium',
                    color: socialItem.color
                  }}
                  >
                  {socialItem.name}
                  </Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const aboutMeStyles = StyleSheet.create({
  socialMediaCard: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#79B4B7',
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    marginBottom: 100,
    marginHorizontal: 8,
    elevation: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
});
