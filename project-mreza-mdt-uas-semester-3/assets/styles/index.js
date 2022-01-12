import React from 'react';
import { StyleSheet } from 'react-native';

// stylesheet untuk global fungsinya untuk reusable style

const styles = StyleSheet.create({
  welcomeCard: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#79B4B7',
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    marginBottom: 32,
    marginHorizontal: 8,
    elevation: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    height: 160,
    marginTop: -90,
  },
  imageWelcomeCard: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: -50,
    borderWidth: 2,
    borderColor: '#bebebe',
  },
  aboutMeCard: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#79B4B7',
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    marginBottom: 32,
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
  experienceCard: {
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

export default styles;
