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

export default function ({history, location }) {
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

  let testv = '../blackjack/assets/background.jpeg'
    
 

  return (
    <View>
        <ImageBackground source={require(testv)} style={styles.background}>
            <Image source={require('../blackjack/assets/curtain.png')} style={styles.background2}/>
            <Image source={require('../blackjack/assets/dealer.png')} style={styles.background3}/>
        </ImageBackground>

      <View style={styles.buttonone}>
          <Button title='HIT' color='#ffffff' onPress={() => history.push()} />
      </View>
      <View style={styles.buttontwo}>
          <Button title='STAND' color='#ffffff' onPress={() => history.push()} />
      </View>
      <Text style={styles.moneytext}>${JSON.stringify(location.state.money)}</Text>
      <Text style={styles.moneytext2}>${JSON.stringify(location.state.moneyuserbet1)}</Text>
        
        <View style={[styles.container, {flexDirection: "row"}, {alignSelf: 'center'}]}>
            <View style={[styles.cards, {backgroundColor: 'blue'}]}></View>
            <View style={[styles.cards, {backgroundColor: 'powderblue'}]}></View>
            <View style={[styles.cards, {backgroundColor: 'blue'}]}></View>
            <View style={[styles.cards, {backgroundColor: 'powderblue'}]}></View>
            <View style={[styles.cards, {backgroundColor: 'blue'}]}></View>
            <View style={[styles.cards, {backgroundColor: 'powderblue'}]}></View>
            <View style={[styles.cards, {backgroundColor: 'blue'}]}></View>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {

    },
    background: {
      position: 'absolute',
      width: 1000,
      height: 500,
      left: -590,
      top: 0,
    },
    background2: {
      flex: 1.8,
      resizeMode: 'cover',
      width: 400,
      height: null,
      left: 578,
      top: 0,
    },
    background3: {
      flex: 1,
      overflow: 'visible',
      width: 910,
      height: null,
      left: 315,
      top: 50,
    },
    moneytext: {
      position: 'absolute',
      fontSize: 70,
      elevation: 10,
      top: 400,
      left: 98,
      fontFamily: 'TitanOne-Regular',
      color: '#F2F726',
    },
    moneytext2: {
        position: 'absolute',
        fontSize: 70,
        elevation: 10,
        top: 465,
        left: 98,
        fontFamily: 'TitanOne-Regular',
        color: '#DF0000',
      },
    buttonone: {
      top: 700,
      marginRight: 200,
      marginLeft: 10,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor:'#003BD2',
      borderRadius: 40,
      borderWidth: 1,
      borderColor: '#fff',
    },
    buttontwo: {
        top: 630,
        marginRight: 10,
        marginLeft: 200,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor:'#CD0000',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff',
      },
    cards: {
        width: 55,
        height: 75, 
        top: 480,
    }
  });