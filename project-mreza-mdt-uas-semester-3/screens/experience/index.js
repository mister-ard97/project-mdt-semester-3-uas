import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import dataPortofolio from '../../data/me_portofolio.json';
import styles from '../../assets/styles/index';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileWelcome from '../../components/ProfileWelcome';

export default function WorkExperienceScreen({ navigation }) {
  const [portofolio, setPortofolio] = useState(null);
  // selectedEducationId dan selectedWorkPlaceId adalah lokal state yang berfungsi menampilkan komponen yang dipilih lihat selengkapnya untuk menampilkan component view yang berisikan informasi lengkap dari pengalaman tersebut.
  const [selectedEducationId, setSelectedEducationId] = useState(-1);
  const [selectedWorkPlaceId, setSelectedWorkplaceId] = useState(-1);
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
        <>
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

              <TouchableOpacity onPress={() => setSelectedEducationId(idx)}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 8
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Sunflower-Medium',
                      textAlign: 'justify',
                      color: '#79B4B7'
                    }}>
                    Lihat Selengkapnya
                  </Text>
                  <View style={{
                    alignSelf: 'center',
                    marginLeft: 8
                  }}>
                     <Ionicons
                    name="arrow-forward-outline"
                    color={'#79B4B7'}
                    size={12}
                  />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {selectedEducationId === idx && (
            <View
              style={{
                padding: 8,
                margin: 8,
                backgroundColor: '#79B4B7',
                borderRadius: 6,
              }}>
              <Text
                style={{
                  fontFamily: 'Sunflower-Medium',
                  textAlign: 'justify',
                  color: '#ffffff',
                }}>
                {item.description}
              </Text>
            </View>
          )}
        </>
      );
    });
  };
  const RenderWorkList = () => {
    return portofolio.experience.work.data.map((item, idx) => {
      return (
       <>
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

            <TouchableOpacity onPress={() => setSelectedWorkplaceId(idx)}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 8
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Sunflower-Medium',
                      textAlign: 'justify',
                      color: '#79B4B7'
                    }}>
                    Lihat Selengkapnya
                  </Text>
                  <View style={{
                    alignSelf: 'center',
                    marginLeft: 8
                  }}>
                     <Ionicons
                    name="arrow-forward-outline"
                    color={'#79B4B7'}
                    size={12}
                  />
                  </View>
                </View>
              </TouchableOpacity>
          </View>
        </View>

        {selectedWorkPlaceId === idx && (
            <View
              style={{
                padding: 8,
                margin: 8,
                backgroundColor: '#79B4B7',
                borderRadius: 6,
              }}>
              <Text
                style={{
                  fontFamily: 'Sunflower-Medium',
                  textAlign: 'justify',
                  color: '#ffffff',
                }}>
                {item.description}
              </Text>
            </View>
          )}
       </>
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
      <View style={styles.experienceCard}>
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
            Pengalaman Saya
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

          {<RenderEducationList />}

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

          {<RenderWorkList />}
        </View>
      </View>
    </ScrollView>
  );
}

