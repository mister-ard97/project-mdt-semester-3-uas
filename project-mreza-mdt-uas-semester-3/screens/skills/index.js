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

export default function SkillsScreen({ navigation }) {
  const [portofolio, setPortofolio] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await JSON.stringify(dataPortofolio);
      setPortofolio(JSON.parse(response));
    }
    fetchData();
  }, []);
  const RenderFrontendList = () => {
    return portofolio.skills.hardskill.frontend.list.map((item, idx) => {
      return (
        <View
          style={{
            elevation: 0,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            padding: 8,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: item.icon,
            }}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text
            style={{
              fontFamily: 'Sunflower-Medium',
              textAlign: 'justify',
              marginTop: 8,
            }}>
            {item.name}
          </Text>
        </View>
      );
    });
  };
  const RenderBackendList = () => {
    return portofolio.skills.hardskill.backend.list.map((item, idx) => {
      return (
        <View
          style={{
            elevation: 0,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            padding: 8,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: item.icon,
            }}
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text
            style={{
              fontFamily: 'Sunflower-Medium',
              textAlign: 'justify',
              marginTop: 8,
            }}>
            {item.name}
          </Text>
        </View>
      );
    });
  };

  const RenderSoftskillList = () => {
    return portofolio.skills.softskill.list.map((item, idx) => {
      return (
        <View
          style={{
            elevation: 0,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            padding: 8,
            marginBottom: 24
          }}>
          <Text
            style={{
              fontFamily: 'Sunflower-Bold',
              color: '#79B4B7',
            }}>
            - {item}
          </Text>
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
      <ProfileWelcome styles={styles} portofolio={portofolio} />
      {/* Hardskill and Softskill */}
      <View style={skillsStyles.cardStyle}>
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
            Skills
          </Text>
          <Text
            style={{
              fontFamily: 'Sunflower-Medium',
              textAlign: 'justify',
            }}>
            {portofolio.skills.description}
          </Text>
        </View>
      </View>

      <View style={skillsStyles.cardStyle}>
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
            Hard skill
          </Text>
          {/* Hardskill Frontend Section */}
          <Text
            style={{
              fontFamily: 'Sunflower-Bold',
              fontSize: 16,
              color: '#79B4B7',
              marginBottom: 8,
            }}>
            ~ Frontend
          </Text>
          <Text
            style={{
              fontFamily: 'Sunflower-Medium',
              textAlign: 'justify',
            }}>
            {portofolio.skills.hardskill.frontend.description}
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
            }}>
            <RenderFrontendList />
          </View>
          {/* End Hardskill Frontend Section */}

          {/* Hardskill Backend Section */}
          <Text
            style={{
              fontFamily: 'Sunflower-Bold',
              fontSize: 16,
              color: '#79B4B7',
              marginBottom: 8,
              marginTop: 24,
            }}>
            ~ Backend
          </Text>
          <Text
            style={{
              fontFamily: 'Sunflower-Medium',
              textAlign: 'justify',
            }}>
            {portofolio.skills.hardskill.backend.description}
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
            }}>
            <RenderBackendList />
          </View>
          {/* End Hardskill Backend Section */}
        </View>
      </View>

       {/* Softskill Section */}
      <View style={skillsStyles.lastCardStyle}>
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
            Soft skill
          </Text>
          <Text
            style={{
              fontFamily: 'Sunflower-Medium',
              textAlign: 'justify',
            }}>
            {portofolio.skills.softskill.description}
          </Text>

          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              marginTop: 8,
            }}>
            <RenderSoftskillList />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const skillsStyles = StyleSheet.create({
  cardStyle: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#79B4B7',
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    marginBottom: 30,
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
  lastCardStyle: {
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
