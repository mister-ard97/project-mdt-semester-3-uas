import React from 'react';
import { View, Text, Image } from 'react-native';

const ProfileWelcome = ({
  portofolio,
  styles
}) => {
   return (
    <View style={styles.welcomeCard}>
        <View>
          <Image
            style={styles.imageWelcomeCard}
            source={{
              uri: portofolio.my_image,
            }}
          />
          <View
            style={{
              alignSelf: 'center',
              marginTop: 10,
              textAlign: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Sunflower-Bold',
                fontSize: 16,
                color: '#79B4B7',
                marginBottom: 8,
              }}>
              {portofolio.greeting_text}
            </Text>
            <Text
              style={{
                fontFamily: 'Sunflower-Bold',
                fontSize: 18,
              }}>
              {portofolio.name}
            </Text>
            <Text
              style={{
                fontFamily: 'Sunflower-Medium',
              }}>
              {portofolio.status}
            </Text>
             <Text
              style={{
                fontFamily: 'Sunflower-Medium',
              }}>
              NIM: {portofolio.nim}
            </Text>
          </View>
        </View>
      </View>
  )
}

export default ProfileWelcome