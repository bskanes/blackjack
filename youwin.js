import { StatusBar } from 'expo-status-bar';
import { useState, usestate } from 'react';
import React from 'react';
import { ImageBackground, StyleSheet, Image, Text, View, TextInput, Button } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
  'TitanOne-Regular': require('../blackjack/assets/fonts/TitanOne-Regular.ttf'),
    });
  };

export default function youwin() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View>
        <Text>
            win
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  });