import { useState, usestate } from 'react';
import React from 'react';
import { ImageBackground, StyleSheet, Image, Text, View, TextInput, Button } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import youlose from './youlose';
import youwin from './youwin';


const fetchFonts = () => {
  return Font.loadAsync({
  'TitanOne-Regular': require('../blackjack/assets/fonts/TitanOne-Regular.ttf'),
    });
  };


export default function ({ history }) {
    
    let money = 100
    const [moneyuserbet, moneybet] = useState(0);
    let moneyuserbet1 = parseInt(moneyuserbet)
    
    money -= moneyuserbet1
    
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
      <ImageBackground source={require('../blackjack/assets/background.jpeg')} style={styles.background}>
        <Image source={require('../blackjack/assets/curtain.png')} style={styles.background2}/>
        <Image source={require('../blackjack/assets/dealer.png')} style={styles.background3}/>
      </ImageBackground>
      <TextInput
        style={styles.input}
        placeholder="Bet..."
        placeholderTextColor='#8d8d8d'
        onChangeText={(val) => moneybet(val)}
      />
      <View style={styles.buttonone}>
          <Button title='Place bet' color='#ffffff' onPress={() => history.push("/game", {money, moneyuserbet1})} />
      </View>

      <Text style={styles.moneytext}>${money}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

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
    top: 500,
    left: 98,
    fontFamily: 'TitanOne-Regular',
    color: '#F2F726',
  },
  input: {
    height: 40,
    margin: 100,
    borderWidth: 1,
    top: 500,
    backgroundColor: '#f4f4f4',
    fontSize: 26,
    textAlign: 'center'
  },
  buttonone: {
    top: 420,
    marginRight: 100,
    marginLeft: 100,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor:'#003BD2',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#fff',
  }
});
