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
      <Text style={{alignSelf: 'center', top: 200 }}>{cardnumber}</Text>
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

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,
  27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];

let randomnums = [];
  
let total = 52;

while (total >= 1) {
  let cardnumber = Math.floor(Math.random() * total) + 1;
  if (cardnumber == 1) { 
    randomnums.push(nums[0])
  };
  if (cardnumber == 2) { 
    randomnums.push(nums[1])
  };
  if (cardnumber == 3) { 
    randomnums.push(nums[2])
  };
  if (cardnumber == 4) { 
    randomnums.push(nums[3])
  };
  if (cardnumber == 5) { 
    randomnums.push(nums[4])
  };
  if (cardnumber == 6) { 
    randomnums.push(nums[5])
  };
  if (cardnumber == 7) { 
    randomnums.push(nums[6])
  };
  if (cardnumber == 8) { 
    randomnums.push(nums[7])
  };
  if (cardnumber == 9) { 
    randomnums.push(nums[8])
  };
  if (cardnumber == 10) { 
    randomnums.push(nums[9])
  };
  if (cardnumber == 11) { 
    randomnums.push(nums[10])
  };
  if (cardnumber == 12) { 
    randomnums.push(nums[11])
  };
  if (cardnumber == 13) { 
    randomnums.push(nums[12])
  };
  if (cardnumber == 14) { 
    randomnums.push(nums[13])
  };
  if (cardnumber == 15) { 
    randomnums.push(nums[14])
  };
  if (cardnumber == 16) { 
    randomnums.push(nums[15])
  };
  if (cardnumber == 17) { 
    randomnums.push(nums[16])
  };
  if (cardnumber == 18) { 
    randomnums.push(nums[17])
  };
  if (cardnumber == 19) { 
    randomnums.push(nums[18])
  };
  if (cardnumber == 20) { 
    randomnums.push(nums[19])
  };
  if (cardnumber == 21) { 
    randomnums.push(nums[20])
  };
  if (cardnumber == 22) { 
    randomnums.push(nums[21])
  };
  if (cardnumber == 23) { 
    randomnums.push(nums[22])
  };
  if (cardnumber == 24) { 
    randomnums.push(nums[23])
  };
  if (cardnumber == 25) { 
    randomnums.push(nums[24])
  };
  if (cardnumber == 26) { 
    randomnums.push(nums[25])
  };
  if (cardnumber == 27) { 
    randomnums.push(nums[26])
  };
  if (cardnumber == 28) { 
    randomnums.push(nums[27])
  };
  if (cardnumber == 29) { 
    randomnums.push(nums[28])
  };
  if (cardnumber == 30) { 
    randomnums.push(nums[29])
  };
  if (cardnumber == 31) { 
    randomnums.push(nums[30])
  };
  if (cardnumber == 32) { 
    randomnums.push(nums[31])
  };
  if (cardnumber == 33) { 
    randomnums.push(nums[32])
  };
  if (cardnumber == 34) { 
    randomnums.push(nums[33])
  };
  if (cardnumber == 35) { 
    randomnums.push(nums[34])
  };
  if (cardnumber == 36) { 
    randomnums.push(nums[35])
  };
  if (cardnumber == 37) { 
    randomnums.push(nums[36])
  };
  if (cardnumber == 38) { 
    randomnums.push(nums[37])
  };
  if (cardnumber == 39) { 
    randomnums.push(nums[38])
  };
  if (cardnumber == 40) { 
    randomnums.push(nums[39])
  };
  if (cardnumber == 41) { 
    randomnums.push(nums[40])
  };
  if (cardnumber == 42) { 
    randomnums.push(nums[41])
  };
  if (cardnumber == 43) { 
    randomnums.push(nums[42])
  };
  if (cardnumber == 44) { 
    randomnums.push(nums[43])
  };
  if (cardnumber == 45) { 
    randomnums.push(nums[44])
  };
  if (cardnumber == 46) { 
    randomnums.push(nums[45])
  };
  if (cardnumber == 47) { 
    randomnums.push(nums[46])
  };
  if (cardnumber == 48) { 
    randomnums.push(nums[47])
  };
  if (cardnumber == 49) { 
    randomnums.push(nums[48])
  };
  if (cardnumber == 50) { 
    randomnums.push(nums[49])
  };
  if (cardnumber == 51) { 
    randomnums.push(nums[50])
  };
  if (cardnumber == 52) { 
    randomnums.push(nums[51])
  };
  total -= 1
};



let randomnumsnumber = 0
let click = 1 


if (randomnums[0] == 1) {
  let cardvar = '../blackjack/assets/cards/aceclubs.png'
};
if (randomnums[0] == 2) {
  let cardvar = '../blackjack/assets/cards/acespades.png'
};
if (randomnums[0] == 3) {
  let cardvar = '../blackjack/assets/cards/acediamonds.png'
};
if (randomnums[0] == 4) {
  let cardvar = '../blackjack/assets/cards/acehearts.png'
};
if (randomnums[0] == 5) {
  let cardvar = '../blackjack/assets/cards/2clubs.png'
};
if (randomnums[0] == 6) {
  let cardvar = '../blackjack/assets/cards/3clubs.png'
};
if (randomnums[0] == 7) {
  let cardvar = '../blackjack/assets/cards/4clubs.png'
};
if (randomnums[0] == 8) {
  let cardvar = '../blackjack/assets/cards/5clubs.png'
};
if (randomnums[0] == 9) {
  let cardvar = '../blackjack/assets/cards/6clubs.png'
};
if (randomnums[0] == 10) {
  let cardvar = '../blackjack/assets/cards/7clubs.png'
};
if (randomnums[0] == 11) {
  let cardvar = '../blackjack/assets/cards/8clubs.png'
};
if (randomnums[0] == 12) {
  let cardvar = '../blackjack/assets/cards/9clubs.png'
};
if (randomnums[0] == 13) {
  let cardvar = '../blackjack/assets/cards/10clubs.png'
};
if (randomnums[0] == 14) {
  let cardvar = '../blackjack/assets/cards/jackclubs.png'
};
if (randomnums[0] == 15) {
  let cardvar = '../blackjack/assets/cards/queenclubs.png'
};
if (randomnums[0] == 16) {
  let cardvar = '../blackjack/assets/cards/kingclubs.png'
};
if (randomnums[0] == 17) {
  let cardvar = '../blackjack/assets/cards/2spades.png'
};
if (randomnums[0] == 18) {
  let cardvar = '../blackjack/assets/cards/3spades.png'
};
if (randomnums[0] == 19) {
  let cardvar = '../blackjack/assets/cards/4spades.png'
};
if (randomnums[0] == 20) {
  let cardvar = '../blackjack/assets/cards/5spades.png'
};
if (randomnums[0] == 21) {
  let cardvar = '../blackjack/assets/cards/6spades.png'
};
if (randomnums[0] == 22) {
  let cardvar = '../blackjack/assets/cards/7spades.png'
};
if (randomnums[0] == 23) {
  let cardvar = '../blackjack/assets/cards/8spades.png'
};
if (randomnums[0] == 24) {
  let cardvar = '../blackjack/assets/cards/9spades.png'
};
if (randomnums[0] == 25) {
  let cardvar = '../blackjack/assets/cards/10spades.png'
};
if (randomnums[0] == 26) {
  let cardvar = '../blackjack/assets/cards/jackspades.png'
};
if (randomnums[0] == 27) {
  let cardvar = '../blackjack/assets/cards/queenspades.png'
};
if (randomnums[0] == 28) {
  let cardvar = '../blackjack/assets/cards/kingspades.png'
};
if (randomnums[0] == 29) {
  let cardvar = '../blackjack/assets/cards/2diamonds.png'
};
if (randomnums[0] == 30) {
  let cardvar = '../blackjack/assets/cards/3diamonds.png'
};
if (randomnums[0] == 31) {
  let cardvar = '../blackjack/assets/cards/4diamonds.png'
};
if (randomnums[0] == 32) {
  let cardvar = '../blackjack/assets/cards/5diamonds.png'
};
if (randomnums[0] == 33) {
  let cardvar = '../blackjack/assets/cards/6diamonds.png'
};
if (randomnums[0] == 34) {
  let cardvar = '../blackjack/assets/cards/7diamonds.png'
};
if (randomnums[0] == 35) {
  let cardvar = '../blackjack/assets/cards/8diamonds.png'
};
if (randomnums[0] == 36) {
  let cardvar = '../blackjack/assets/cards/9diamonds.png'
};
if (randomnums[0] == 37) {
  let cardvar = '../blackjack/assets/cards/10diamonds.png'
};
if (randomnums[0] == 38) {
  let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
};
if (randomnums[0] == 39) {
  let cardvar = '../blackjack/assets/cards/queendiamonds.png'
};
if (randomnums[0] == 40) {
  let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
};
if (randomnums[0] == 41) {
  let cardvar = '../blackjack/assets/cards/2hearts.png'
};
if (randomnums[0] == 42) {
  let cardvar = '../blackjack/assets/cards/3hearts.png'
};
if (randomnums[0] == 43) {
  let cardvar = '../blackjack/assets/cards/4hearts.png'
};
if (randomnums[0] == 44) {
  let cardvar = '../blackjack/assets/cards/5hearts.png'
};
if (randomnums[0] == 45) {
  let cardvar = '../blackjack/assets/cards/6hearts.png'
};
if (randomnums[0] == 46) {
  let cardvar = '../blackjack/assets/cards/7hearts.png'
};
if (randomnums[0] == 47) {
  let cardvar = '../blackjack/assets/cards/8hearts.png'
};
if (randomnums[0] == 48) {
  let cardvar = '../blackjack/assets/cards/9hearts.png'
};
if (randomnums[0] == 49) {
  let cardvar = '../blackjack/assets/cards/10hearts.png'
};
if (randomnums[0] == 50) {
  let cardvar = '../blackjack/assets/cards/jackhearts.png'
};
if (randomnums[0] == 51) {
  let cardvar = '../blackjack/assets/cards/queenhearts.png'
};
if (randomnums[0] == 52) {
  let cardvar = '../blackjack/assets/cards/kinghearts.png'
};
if (randomnums[1] == 1) {
  let cardvar2 = '../blackjack/assets/cards/aceclubs.png'
};
if (randomnums[1] == 2) {
  let cardvar2 = '../blackjack/assets/cards/acespades.png'
};
if (randomnums[1] == 3) {
  let cardvar2 = '../blackjack/assets/cards/acediamonds.png'
};
if (randomnums[1] == 4) {
  let cardvar2 = '../blackjack/assets/cards/acehearts.png'
};
if (randomnums[1] == 5) {
  let cardvar2 = '../blackjack/assets/cards/2clubs.png'
};
if (randomnums[1] == 6) {
  let cardvar2 = '../blackjack/assets/cards/3clubs.png'
};
if (randomnums[1] == 7) {
  let cardvar2 = '../blackjack/assets/cards/4clubs.png'
};
if (randomnums[1] == 8) {
  let cardvar2 = '../blackjack/assets/cards/5clubs.png'
};
if (randomnums[1] == 9) {
  let cardvar2 = '../blackjack/assets/cards/6clubs.png'
};
if (randomnums[1] == 10) {
  let cardvar2 = '../blackjack/assets/cards/7clubs.png'
};
if (randomnums[1] == 11) {
  let cardvar2 = '../blackjack/assets/cards/8clubs.png'
};
if (randomnums[1] == 12) {
  let cardvar2 = '../blackjack/assets/cards/9clubs.png'
};
if (randomnums[1] == 13) {
  let cardvar2 = '../blackjack/assets/cards/10clubs.png'
};
if (randomnums[1] == 14) {
  let cardvar2 = '../blackjack/assets/cards/jackclubs.png'
};
if (randomnums[1] == 15) {
  let cardvar2 = '../blackjack/assets/cards/queenclubs.png'
};
if (randomnums[1] == 16) {
  let cardvar2 = '../blackjack/assets/cards/kingclubs.png'
};
if (randomnums[1] == 17) {
  let cardvar2 = '../blackjack/assets/cards/2spades.png'
};
if (randomnums[1] == 18) {
  let cardvar2 = '../blackjack/assets/cards/3spades.png'
};
if (randomnums[1] == 19) {
  let cardvar2 = '../blackjack/assets/cards/4spades.png'
};
if (randomnums[1] == 20) {
  let cardvar2 = '../blackjack/assets/cards/5spades.png'
};
if (randomnums[1] == 21) {
  let cardvar2 = '../blackjack/assets/cards/6spades.png'
};
if (randomnums[1] == 22) {
  let cardvar2 = '../blackjack/assets/cards/7spades.png'
};
if (randomnums[1] == 23) {
  let cardvar2 = '../blackjack/assets/cards/8spades.png'
};
if (randomnums[1] == 24) {
  let cardvar2 = '../blackjack/assets/cards/9spades.png'
};
if (randomnums[1] == 25) {
  let cardvar2 = '../blackjack/assets/cards/10spades.png'
};
if (randomnums[1] == 26) {
  let cardvar2 = '../blackjack/assets/cards/jackspades.png'
};
if (randomnums[1] == 27) {
  let cardvar2 = '../blackjack/assets/cards/queenspades.png'
};
if (randomnums[1] == 28) {
  let cardvar2 = '../blackjack/assets/cards/kingspades.png'
};
if (randomnums[1] == 29) {
  let cardvar2 = '../blackjack/assets/cards/2diamonds.png'
};
if (randomnums[1] == 30) {
  let cardvar2 = '../blackjack/assets/cards/3diamonds.png'
};
if (randomnums[1] == 31) {
  let cardvar2 = '../blackjack/assets/cards/4diamonds.png'
};
if (randomnums[1] == 32) {
  let cardvar2 = '../blackjack/assets/cards/5diamonds.png'
};
if (randomnums[1] == 33) {
  let cardvar2 = '../blackjack/assets/cards/6diamonds.png'
};
if (randomnums[1] == 34) {
  let cardvar2 = '../blackjack/assets/cards/7diamonds.png'
};
if (randomnums[1] == 35) {
  let cardvar2 = '../blackjack/assets/cards/8diamonds.png'
};
if (randomnums[1] == 36) {
  let cardvar2 = '../blackjack/assets/cards/9diamonds.png'
};
if (randomnums[1] == 37) {
  let cardvar2 = '../blackjack/assets/cards/10diamonds.png'
};
if (randomnums[1] == 38) {
  let cardvar2 = '../blackjack/assets/cards/jackdiamonds.png'
};
if (randomnums[1] == 39) {
  let cardvar2 = '../blackjack/assets/cards/queendiamonds.png'
};
if (randomnums[1] == 40) {
  let cardvar2 = '../blackjack/assets/cards/kingdiamonds.png'
};
if (randomnums[1] == 41) {
  let cardvar2 = '../blackjack/assets/cards/2hearts.png'
};
if (randomnums[1] == 42) {
  let cardvar2 = '../blackjack/assets/cards/3hearts.png'
};
if (randomnums[1] == 43) {
  let cardvar2 = '../blackjack/assets/cards/4hearts.png'
};
if (randomnums[1] == 44) {
  let cardvar2 = '../blackjack/assets/cards/5hearts.png'
};
if (randomnums[1] == 45) {
  let cardvar2 = '../blackjack/assets/cards/6hearts.png'
};
if (randomnums[1] == 46) {
  let cardvar2 = '../blackjack/assets/cards/7hearts.png'
};
if (randomnums[1] == 47) {
  let cardvar2 = '../blackjack/assets/cards/8hearts.png'
};
if (randomnums[1] == 48) {
  let cardvar2 = '../blackjack/assets/cards/9hearts.png'
};
if (randomnums[1] == 49) {
  let cardvar2 = '../blackjack/assets/cards/10hearts.png'
};
if (randomnums[1] == 50) {
  let cardvar2 = '../blackjack/assets/cards/jackhearts.png'
};
if (randomnums[1] == 51) {
  let cardvar2 = '../blackjack/assets/cards/queenhearts.png'
};
if (randomnums[1] == 52) {
  let cardvar2 = '../blackjack/assets/cards/kinghearts.png'
};
if (click > 1) {
  if (randomnums[2] == 1) {
    let cardvar3 = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[2] == 2) {
    let cardvar3 = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[2] == 3) {
    let cardvar3 = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[2] == 4) {
    let cardvar3 = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[2] == 5) {
    let cardvar3 = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[2] == 6) {
    let cardvar3 = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[2] == 7) {
    let cardvar3 = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[2] == 8) {
    let cardvar3 = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[2] == 9) {
    let cardvar3 = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[2] == 10) {
    let cardvar3 = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[2] == 11) {
    let cardvar3 = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[2] == 12) {
    let cardvar3 = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[2] == 13) {
    let cardvar3 = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[2] == 14) {
    let cardvar3 = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[2] == 15) {
    let cardvar3 = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[2] == 16) {
    let cardvar3 = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[2] == 17) {
    let cardvar3 = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[2] == 18) {
    let cardvar3 = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[2] == 19) {
    let cardvar3 = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[2] == 20) {
    let cardvar3 = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[2] == 21) {
    let cardvar3 = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[2] == 22) {
    let cardvar3 = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[2] == 23) {
    let cardvar3 = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[2] == 24) {
    let cardvar3 = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[2] == 25) {
    let cardvar3 = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[2] == 26) {
    let cardvar3 = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[2] == 27) {
    let cardvar3 = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[2] == 28) {
    let cardvar3 = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[2] == 29) {
    let cardvar3 = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[2] == 30) {
    let cardvar3 = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[2] == 31) {
    let cardvar3 = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[2] == 32) {
    let cardvar3 = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[2] == 33) {
    let cardvar3 = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[2] == 34) {
    let cardvar3 = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[2] == 35) {
    let cardvar3 = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[2] == 36) {
    let cardvar3 = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[2] == 37) {
    let cardvar3 = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[2] == 38) {
    let cardvar3 = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[2] == 39) {
    let cardvar3 = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[2] == 40) {
    let cardvar3 = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[2] == 41) {
    let cardvar3 = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[2] == 42) {
    let cardvar3 = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[2] == 43) {
    let cardvar3 = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[2] == 44) {
    let cardvar3 = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[2] == 45) {
    let cardvar3 = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[2] == 46) {
    let cardvar3 = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[2] == 47) {
    let cardvar3 = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[2] == 48) {
    let cardvar3 = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[2] == 49) {
    let cardvar3 = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[2] == 50) {
    let cardvar3 = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[2] == 51) {
    let cardvar3 = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[2] == 52) {
    let cardvar3 = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[3] == 1) {
    let cardvar4 = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[3] == 2) {
    let cardvar4 = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[3] == 3) {
    let cardvar4 = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[3] == 4) {
    let cardvar4 = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[3] == 5) {
    let cardvar4 = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[3] == 6) {
    let cardvar4 = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[3] == 7) {
    let cardvar4 = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[3] == 8) {
    let cardvar4 = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[3] == 9) {
    let cardvar4 = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[3] == 10) {
    let cardvar4 = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[3] == 11) {
    let cardvar4 = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[3] == 12) {
    let cardvar4 = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[3] == 13) {
    let cardvar4 = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[3] == 14) {
    let cardvar4 = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[3] == 15) {
    let cardvar4 = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[3] == 16) {
    let cardvar4 = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[3] == 17) {
    let cardvar4 = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[3] == 18) {
    let cardvar4 = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[3] == 19) {
    let cardvar4 = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[3] == 20) {
    let cardvar4 = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[3] == 21) {
    let cardvar4 = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[3] == 22) {
    let cardvar4 = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[3] == 23) {
    let cardvar4 = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[3] == 24) {
    let cardvar4 = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[3] == 25) {
    let cardvar4 = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[3] == 26) {
    let cardvar4 = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[3] == 27) {
    let cardvar4 = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[3] == 28) {
    let cardvar4 = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[3] == 29) {
    let cardvar4 = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[3] == 30) {
    let cardvar4 = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[3] == 31) {
    let cardvar3 = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[3] == 32) {
    let cardvar4 = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[3] == 33) {
    let cardvar4 = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[3] == 34) {
    let cardvar4 = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[3] == 35) {
    let cardvar4 = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[3] == 36) {
    let cardvar4 = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[3] == 37) {
    let cardvar4 = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[3] == 38) {
    let cardvar4 = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[3] == 39) {
    let cardvar4 = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[3] == 40) {
    let cardvar4 = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[3] == 41) {
    let cardvar4 = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[3] == 42) {
    let cardvar4 = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[3] == 43) {
    let cardvar4 = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[3] == 44) {
    let cardvar4 = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[3] == 45) {
    let cardvar4 = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[3] == 46) {
    let cardvar4 = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[3] == 47) {
    let cardvar4 = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[3] == 48) {
    let cardvar4 = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[3] == 49) {
    let cardvar4 = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[3] == 50) {
    let cardvar4 = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[3] == 51) {
    let cardva4 = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[3] == 52) {
    let cardvar4 = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 3) {
  if (randomnums[4] == 1) {
    let cardvar5 = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[4] == 2) {
    let cardvar5 = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[4] == 3) {
    let cardvar5 = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[4] == 4) {
    let cardvar5 = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[4] == 5) {
    let cardvar5 = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[4] == 6) {
    let cardvar5 = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[4] == 7) {
    let cardvar5 = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[4] == 8) {
    let cardvar5 = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[4] == 9) {
    let cardvar5 = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[4] == 10) {
    let cardvar5 = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[4] == 11) {
    let cardvar5 = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[4] == 12) {
    let cardvar5 = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[4] == 13) {
    let cardvar5 = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[4] == 14) {
    let cardvar5 = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[4] == 15) {
    let cardvar5 = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[4] == 16) {
    let cardvar5 = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[4] == 17) {
    let cardvar5 = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[4] == 18) {
    let cardvar5 = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[4] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[4] == 20) {
    let cardvar5 = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[4] == 21) {
    let cardvar5 = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[4] == 22) {
    let cardvar5 = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[4] == 23) {
    let cardvar5 = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[4] == 24) {
    let cardvar5 = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[4] == 25) {
    let cardvar5 = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[4] == 26) {
    let cardvar5 = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[4] == 27) {
    let cardvar5 = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[4] == 28) {
    let cardvar5 = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[4] == 29) {
    let cardvar5 = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[4] == 30) {
    let cardvar5 = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[4] == 31) {
    let cardvar5 = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[4] == 32) {
    let cardvar5 = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[4] == 33) {
    let cardvar5 = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[4] == 34) {
    let cardvar5 = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[4] == 35) {
    let cardvar5 = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[4] == 36) {
    let cardvar5 = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[4] == 37) {
    let cardvar5 = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[4] == 38) {
    let cardvar5 = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[4] == 39) {
    let cardvar5 = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[4] == 40) {
    let cardvar5 = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[4] == 41) {
    let cardvar5 = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[4] == 42) {
    let cardvar5 = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[4] == 43) {
    let cardvar5 = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[4] == 44) {
    let cardvar5 = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[4] == 45) {
    let cardvar5 = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[4] == 46) {
    let cardvar5 = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[4] == 47) {
    let cardvar5 = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[4] == 48) {
    let cardvar5 = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[4] == 49) {
    let cardvar5 = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[4] == 50) {
    let cardvar5 = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[4] == 51) {
    let cardva5 = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[4] == 52) {
    let cardvar5 = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};
if (click > 2) {
  if (randomnums[] == 1) {
    let cardvar = '../blackjack/assets/cards/aceclubs.png'
  };
  if (randomnums[] == 2) {
    let cardvar = '../blackjack/assets/cards/acespades.png'
  };
  if (randomnums[] == 3) {
    let cardvar = '../blackjack/assets/cards/acediamonds.png'
  };
  if (randomnums[] == 4) {
    let cardvar = '../blackjack/assets/cards/acehearts.png'
  };
  if (randomnums[] == 5) {
    let cardvar = '../blackjack/assets/cards/2clubs.png'
  };
  if (randomnums[] == 6) {
    let cardvar = '../blackjack/assets/cards/3clubs.png'
  };
  if (randomnums[] == 7) {
    let cardvar = '../blackjack/assets/cards/4clubs.png'
  };
  if (randomnums[] == 8) {
    let cardvar = '../blackjack/assets/cards/5clubs.png'
  };
  if (randomnums[] == 9) {
    let cardvar = '../blackjack/assets/cards/6clubs.png'
  };
  if (randomnums[] == 10) {
    let cardvar = '../blackjack/assets/cards/7clubs.png'
  };
  if (randomnums[] == 11) {
    let cardvar = '../blackjack/assets/cards/8clubs.png'
  };
  if (randomnums[] == 12) {
    let cardvar = '../blackjack/assets/cards/9clubs.png'
  };
  if (randomnums[] == 13) {
    let cardvar = '../blackjack/assets/cards/10clubs.png'
  };
  if (randomnums[] == 14) {
    let cardvar = '../blackjack/assets/cards/jackclubs.png'
  };
  if (randomnums[] == 15) {
    let cardvar = '../blackjack/assets/cards/queenclubs.png'
  };
  if (randomnums[] == 16) {
    let cardvar = '../blackjack/assets/cards/kingclubs.png'
  };
  if (randomnums[] == 17) {
    let cardvar = '../blackjack/assets/cards/2spades.png'
  };
  if (randomnums[] == 18) {
    let cardvar = '../blackjack/assets/cards/3spades.png'
  };
  if (randomnums[] == 19) {
    let cardvar = '../blackjack/assets/cards/4spades.png'
  };
  if (randomnums[] == 20) {
    let cardvar = '../blackjack/assets/cards/5spades.png'
  };
  if (randomnums[] == 21) {
    let cardvar = '../blackjack/assets/cards/6spades.png'
  };
  if (randomnums[] == 22) {
    let cardvar = '../blackjack/assets/cards/7spades.png'
  };
  if (randomnums[] == 23) {
    let cardvar = '../blackjack/assets/cards/8spades.png'
  };
  if (randomnums[] == 24) {
    let cardvar = '../blackjack/assets/cards/9spades.png'
  };
  if (randomnums[] == 25) {
    let cardvar = '../blackjack/assets/cards/10spades.png'
  };
  if (randomnums[] == 26) {
    let cardvar = '../blackjack/assets/cards/jackspades.png'
  };
  if (randomnums[] == 27) {
    let cardvar = '../blackjack/assets/cards/queenspades.png'
  };
  if (randomnums[] == 28) {
    let cardvar = '../blackjack/assets/cards/kingspades.png'
  };
  if (randomnums[] == 29) {
    let cardvar = '../blackjack/assets/cards/2diamonds.png'
  };
  if (randomnums[] == 30) {
    let cardvar = '../blackjack/assets/cards/3diamonds.png'
  };
  if (randomnums[] == 31) {
    let cardvar = '../blackjack/assets/cards/4diamonds.png'
  };
  if (randomnums[] == 32) {
    let cardvar = '../blackjack/assets/cards/5diamonds.png'
  };
  if (randomnums[] == 33) {
    let cardvar = '../blackjack/assets/cards/6diamonds.png'
  };
  if (randomnums[] == 34) {
    let cardvar = '../blackjack/assets/cards/7diamonds.png'
  };
  if (randomnums[] == 35) {
    let cardvar = '../blackjack/assets/cards/8diamonds.png'
  };
  if (randomnums[] == 36) {
    let cardvar = '../blackjack/assets/cards/9diamonds.png'
  };
  if (randomnums[] == 37) {
    let cardvar = '../blackjack/assets/cards/10diamonds.png'
  };
  if (randomnums[] == 38) {
    let cardvar = '../blackjack/assets/cards/jackdiamonds.png'
  };
  if (randomnums[] == 39) {
    let cardvar = '../blackjack/assets/cards/queendiamonds.png'
  };
  if (randomnums[] == 40) {
    let cardvar = '../blackjack/assets/cards/kingdiamonds.png'
  };
  if (randomnums[] == 41) {
    let cardvar = '../blackjack/assets/cards/2hearts.png'
  };
  if (randomnums[] == 42) {
    let cardvar = '../blackjack/assets/cards/3hearts.png'
  };
  if (randomnums[] == 43) {
    let cardvar = '../blackjack/assets/cards/4hearts.png'
  };
  if (randomnums[] == 44) {
    let cardvar = '../blackjack/assets/cards/5hearts.png'
  };
  if (randomnums[] == 45) {
    let cardvar = '../blackjack/assets/cards/6hearts.png'
  };
  if (randomnums[] == 46) {
    let cardvar = '../blackjack/assets/cards/7hearts.png'
  };
  if (randomnums[] == 47) {
    let cardvar = '../blackjack/assets/cards/8hearts.png'
  };
  if (randomnums[] == 48) {
    let cardvar = '../blackjack/assets/cards/9hearts.png'
  };
  if (randomnums[] == 49) {
    let cardvar = '../blackjack/assets/cards/10hearts.png'
  };
  if (randomnums[] == 50) {
    let cardvar = '../blackjack/assets/cards/jackhearts.png'
  };
  if (randomnums[] == 51) {
    let cardva = '../blackjack/assets/cards/queenhearts.png'
  };
  if (randomnums[] == 52) {
    let cardvar = '../blackjack/assets/cards/kinghearts.png'
  };
};

  
