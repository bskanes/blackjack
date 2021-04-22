import { StatusBar } from 'expo-status-bar';
import { useState, usestate } from 'react';
import React from 'react';
import { ImageBackground, StyleSheet, Image, Text, View, TextInput, Button } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import twoclubs from '../blackjack/assets/cards/2clubs.png'
import threeclubs from '../blackjack/assets/cards/3clubs.png'
import fourclubs from '../blackjack/assets/cards/4clubs.png'
import fiveclubs from '../blackjack/assets/cards/5clubs.png'
import sixclubs from '../blackjack/assets/cards/6clubs.png'
import sevenclubs from '../blackjack/assets/cards/7clubs.png'
import eightclubs from '../blackjack/assets/cards/8clubs.png'
import nineclubs from '../blackjack/assets/cards/9clubs.png'
import tenclubs from '../blackjack/assets/cards/10clubs.png'
import jackclubs from '../blackjack/assets/cards/jackclubs.png'
import queenclubs from '../blackjack/assets/cards/queenclubs.png'
import kingclubs from '../blackjack/assets/cards/kingclubs.png'
import aceclubs from '../blackjack/assets/cards/aceclubs.png'
import twospades from '../blackjack/assets/cards/2spades.png'
import threespades from '../blackjack/assets/cards/3spades.png'
import fourspades from '../blackjack/assets/cards/4spades.png'
import fivespades from '../blackjack/assets/cards/5spades.png'
import sixspades from '../blackjack/assets/cards/6spades.png'
import sevenspades from '../blackjack/assets/cards/7spades.png'
import eightspades from '../blackjack/assets/cards/8spades.png'
import ninespades from '../blackjack/assets/cards/9spades.png'
import tenspades from '../blackjack/assets/cards/10spades.png'
import jackspades from '../blackjack/assets/cards/jackspades.png'
import queenspades from '../blackjack/assets/cards/queenspades.png'
import kingspades from '../blackjack/assets/cards/kingspades.png'
import acespades from '../blackjack/assets/cards/acespades.png'
import twodiamonds from '../blackjack/assets/cards/2diamonds.png'
import threediamonds from '../blackjack/assets/cards/3diamonds.png'
import fourdiamonds from '../blackjack/assets/cards/4diamonds.png'
import fivediamonds from '../blackjack/assets/cards/5diamonds.png'
import sixdiamonds from '../blackjack/assets/cards/6diamonds.png'
import sevendiamonds from '../blackjack/assets/cards/7diamonds.png'
import eightdiamonds from '../blackjack/assets/cards/8diamonds.png'
import ninediamonds from '../blackjack/assets/cards/9diamonds.png'
import tendiamonds from '../blackjack/assets/cards/10diamonds.png'
import jackdiamonds from '../blackjack/assets/cards/jackdiamonds.png'
import queendiamonds from '../blackjack/assets/cards/queendiamonds.png'
import kingdiamonds from '../blackjack/assets/cards/kingdiamonds.png'
import acediamonds from '../blackjack/assets/cards/acediamonds.png'
import twohearts from '../blackjack/assets/cards/2hearts.png'
import threehearts from '../blackjack/assets/cards/3hearts.png'
import fourhearts from '../blackjack/assets/cards/4hearts.png'
import fivehearts from '../blackjack/assets/cards/5hearts.png'
import sixhearts from '../blackjack/assets/cards/6hearts.png'
import sevenhearts from '../blackjack/assets/cards/7hearts.png'
import eighthearts from '../blackjack/assets/cards/8hearts.png'
import ninehearts from '../blackjack/assets/cards/9hearts.png'
import tenhearts from '../blackjack/assets/cards/10hearts.png'
import jackhearts from '../blackjack/assets/cards/jackhearts.png'
import queenhearts from '../blackjack/assets/cards/queenhearts.png'
import kinghearts from '../blackjack/assets/cards/kinghearts.png'
import acehearts from '../blackjack/assets/cards/acehearts.png'



 


const fetchFonts = () => {
  return Font.loadAsync({
  'TitanOne-Regular': require('../blackjack/assets/fonts/TitanOne-Regular.ttf'),
    });
  };

export default function ({history, location }) {
  const [click, setVariable] = useState(1)
  const [cardvar3, setCard] = useState()

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
      <View style={styles.buttonone}>
          <Button title='HIT' color='#ffffff' onPress={() => {setVariable(clicky + 1); {setCard(state1)}}} />
      </View>
      <Text style= {{alignSelf: 'center', top: 200}}>{click}</Text>
      <View style={styles.buttontwo}>
          <Button title='STAND' color='#ffffff' onPress={() => history.push()} />
      </View>
      <Text style={styles.moneytext}>${JSON.stringify(location.state.money)}</Text>
      <Text style={styles.moneytext2}>${JSON.stringify(location.state.moneyuserbet1)}</Text>
        
        <View style={[styles.container, {flexDirection: "row"}, {alignSelf: 'center'}]}>
            
            <View style={[styles.cards, {backgroundColor: 'blue'}]}></View>
            <View style={[styles.cards, {backgroundColor: 'blue'}]}></View>
            <Image source={cardvar} style={styles.cards}/>
            <Image source={cardvar2} style={styles.cards}/>
            <Image source={cardvar3} style={styles.cards}/>
            <View style={[styles.cards, {backgroundColor: 'powderblue'}]}></View>
            <View style={[styles.cards, {backgroundColor: 'blue'}]}></View>
        </View>
    </View>
    
  );
};

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
  if (cardnumber === 1) { 
    randomnums.push(nums[0])
  };
  if (cardnumber === 2) { 
    randomnums.push(nums[1])
  };
  if (cardnumber === 3) { 
    randomnums.push(nums[2])
  };
  if (cardnumber === 4) { 
    randomnums.push(nums[3])
  };
  if (cardnumber === 5) { 
    randomnums.push(nums[4])
  };
  if (cardnumber === 6) { 
    randomnums.push(nums[5])
  };
  if (cardnumber === 7) { 
    randomnums.push(nums[6])
  };
  if (cardnumber === 8) { 
    randomnums.push(nums[7])
  };
  if (cardnumber === 9) { 
    randomnums.push(nums[8])
  };
  if (cardnumber === 10) { 
    randomnums.push(nums[9])
  };
  if (cardnumber === 11) { 
    randomnums.push(nums[10])
  };
  if (cardnumber === 12) { 
    randomnums.push(nums[11])
  };
  if (cardnumber === 13) { 
    randomnums.push(nums[12])
  };
  if (cardnumber === 14) { 
    randomnums.push(nums[13])
  };
  if (cardnumber === 15) { 
    randomnums.push(nums[14])
  };
  if (cardnumber === 16) { 
    randomnums.push(nums[15])
  };
  if (cardnumber === 17) { 
    randomnums.push(nums[16])
  };
  if (cardnumber === 18) { 
    randomnums.push(nums[17])
  };
  if (cardnumber === 19) { 
    randomnums.push(nums[18])
  };
  if (cardnumber === 20) { 
    randomnums.push(nums[19])
  };
  if (cardnumber === 21) { 
    randomnums.push(nums[20])
  };
  if (cardnumber === 22) { 
    randomnums.push(nums[21])
  };
  if (cardnumber === 23) { 
    randomnums.push(nums[22])
  };
  if (cardnumber === 24) { 
    randomnums.push(nums[23])
  };
  if (cardnumber === 25) { 
    randomnums.push(nums[24])
  };
  if (cardnumber === 26) { 
    randomnums.push(nums[25])
  };
  if (cardnumber === 27) { 
    randomnums.push(nums[26])
  };
  if (cardnumber === 28) { 
    randomnums.push(nums[27])
  };
  if (cardnumber === 29) { 
    randomnums.push(nums[28])
  };
  if (cardnumber === 30) { 
    randomnums.push(nums[29])
  };
  if (cardnumber === 31) { 
    randomnums.push(nums[30])
  };
  if (cardnumber === 32) { 
    randomnums.push(nums[31])
  };
  if (cardnumber === 33) { 
    randomnums.push(nums[32])
  };
  if (cardnumber === 34) { 
    randomnums.push(nums[33])
  };
  if (cardnumber === 35) { 
    randomnums.push(nums[34])
  };
  if (cardnumber === 36) { 
    randomnums.push(nums[35])
  };
  if (cardnumber === 37) { 
    randomnums.push(nums[36])
  };
  if (cardnumber === 38) { 
    randomnums.push(nums[37])
  };
  if (cardnumber === 39) { 
    randomnums.push(nums[38])
  };
  if (cardnumber === 40) { 
    randomnums.push(nums[39])
  };
  if (cardnumber === 41) { 
    randomnums.push(nums[40])
  };
  if (cardnumber === 42) { 
    randomnums.push(nums[41])
  };
  if (cardnumber === 43) { 
    randomnums.push(nums[42])
  };
  if (cardnumber === 44) { 
    randomnums.push(nums[43])
  };
  if (cardnumber === 45) { 
    randomnums.push(nums[44])
  };
  if (cardnumber === 46) { 
    randomnums.push(nums[45])
  };
  if (cardnumber === 47) { 
    randomnums.push(nums[46])
  };
  if (cardnumber === 48) { 
    randomnums.push(nums[47])
  };
  if (cardnumber === 49) { 
    randomnums.push(nums[48])
  };
  if (cardnumber === 50) { 
    randomnums.push(nums[49])
  };
  if (cardnumber === 51) { 
    randomnums.push(nums[50])
  };
  if (cardnumber === 52) { 
    randomnums.push(nums[51])
  };
  total -= 1
};


let click = 0
let click2 = 0
let playerhand = 0 
let dealerhand = 0
let gameend = 0

let test = ''
let cardvar = ''
let cardvar2 = ''
let state1 = ''
let cardvar4 = ''
let cardvar5 = ''
let cardvar6 = ''
let cardvar7 = ''
let cardvar8 = ''
let cardvar9 = ''
let cardvar10 = ''
let cardvar12 = ''
let cardvar13 = ''
let cardvar14 = ''
let cardvar15 = ''
randomnums[2] = 1

if (total <= 1) {
  if (randomnums[0] === 1) {
    cardvar = aceclubs
    playerhand += 11
  };
  if (randomnums[0] === 2) {
    cardvar = acespades
    playerhand += 11 
  };
  if (randomnums[0] === 3) {
    cardvar = acediamonds
    playerhand += 11
  };
  if (randomnums[0] === 4) {
    cardvar = acehearts
    playerhand += 11
  };
  if (randomnums[0] === 5) {
    cardvar = twoclubs
    playerhand += 2
  };
  if (randomnums[0] === 6) {
    cardvar = threeclubs
    playerhand += 3
  };
  if (randomnums[0] === 7) {
    cardvar = fourclubs
    playerhand += 4
  };
  if (randomnums[0] === 8) {
    cardvar = fiveclubs
    playerhand += 5
  };
  if (randomnums[0] === 9) {
    cardvar = sixclubs
    playerhand += 6 
  };
  if (randomnums[0] === 10) {
    cardvar = sevenclubs
    playerhand += 7 
  };
  if (randomnums[0] === 11) {
    cardvar = eightclubs
    playerhand += 8 
  };
  if (randomnums[0] === 12) {
    cardvar = nineclubs
    playerhand += 9
  };
  if (randomnums[0] === 13) {
    cardvar = tenclubs
    playerhand += 10
  };
  if (randomnums[0] === 14) {
    cardvar = jackclubs
    playerhand += 10
  };
  if (randomnums[0] === 15) {
    cardvar = queenclubs
    playerhand += 10
  };
  if (randomnums[0] === 16) {
    cardvar = kingclubs
    playerhand += 10
  };
  if (randomnums[0] === 17) {
    cardvar = twospades
    playerhand += 2
  };
  if (randomnums[0] === 18) {
    cardvar = threespades
    playerhand += 3
  };
  if (randomnums[0] === 19) {
    cardvar = fourspades
    playerhand += 4
  };
  if (randomnums[0] === 20) {
    cardvar = fivespades
    playerhand += 5
  };
  if (randomnums[0] === 21) {
    cardvar = sixspades
    playerhand += 6
  };
  if (randomnums[0] === 22) {
    cardvar = sevenspades
    playerhand += 7
  };
  if (randomnums[0] === 23) {
    cardvar = eightspades
    playerhand += 8 
  };
  if (randomnums[0] === 24) {
    cardvar = ninespades
    playerhand += 9 
  };
  if (randomnums[0] === 25) {
    cardvar = tenspades
    playerhand += 10
  };
  if (randomnums[0] === 26) {
    cardvar = jackspades
    playerhand += 10
  };
  if (randomnums[0] === 27) {
    cardvar = queenspades
    playerhand += 10
  };
  if (randomnums[0] === 28) {
    cardvar = kingspades
    playerhand += 10 
  };
  if (randomnums[0] === 29) {
    cardvar = twodiamonds
    playerhand += 2
  };
  if (randomnums[0] === 30) {
    cardvar = threediamonds
    playerhand += 3
  };
  if (randomnums[0] === 31) {
    cardvar = fourdiamonds
    playerhand += 4
  };
  if (randomnums[0] === 32) {
    cardvar = fivediamonds
    playerhand += 5
  };
  if (randomnums[0] === 33) {
    cardvar = sixdiamonds
    playerhand += 6 
  };
  if (randomnums[0] === 34) {
    cardvar = sevendiamonds
    playerhand += 7
  };
  if (randomnums[0] === 35) {
    cardvar = eightdiamonds
    playerhand += 8
  };
  if (randomnums[0] === 36) {
    cardvar = ninediamonds
    playerhand += 9
  };
  if (randomnums[0] === 37) {
    cardvar = tendiamonds
    playerhand += 10
  };
  if (randomnums[0] === 38) {
    cardvar = jackdiamonds
    playerhand += 10
  };
  if (randomnums[0] === 39) {
    cardvar = queendiamonds
    playerhand += 10
  };
  if (randomnums[0] === 40) {
    cardvar = kingdiamonds
    playerhand += 10
  };
  if (randomnums[0] === 41) {
    cardvar = twohearts
    playerhand += 2
  };
  if (randomnums[0] === 42) {
    cardvar = threehearts
    playerhand += 3
  };
  if (randomnums[0] === 43) {
    cardvar = fourhearts
    playerhand += 4
  };
  if (randomnums[0] === 44) {
    cardvar = fivehearts
    playerhand += 5
  };
  if (randomnums[0] === 45) {
    cardvar = sixhearts
    playerhand += 6
  };
  if (randomnums[0] === 46) {
    cardvar = sevenhearts
    playerhand += 7
  };
  if (randomnums[0] === 47) {
    cardvar = eighthearts
    playerhand += 8
  };
  if (randomnums[0] === 48) {
    cardvar = ninehearts
    playerhand += 9
  };
  if (randomnums[0] === 49) {
    cardvar = tenhearts
    playerhand += 10
  };
  if (randomnums[0] === 50) {
    cardvar = jackhearts
    playerhand += 10
  };
  if (randomnums[0] === 51) {
    cardvar = queenhearts
    playerhand += 10
  };
  if (randomnums[0] === 52) {
    cardvar = kinghearts
    playerhand += 10
  };
  if (randomnums[1] === 1) {
    cardvar2 = aceclubs
    playerhand += 11
  };
  if (randomnums[1] === 2) {
    cardvar2 = acespades
    playerhand += 11 
  };
  if (randomnums[1] === 3) {
    cardvar2 = acediamonds
    playerhand += 11
  };
  if (randomnums[1] === 4) {
    cardvar2 = acehearts
    playerhand += 11
  };
  if (randomnums[1] === 5) {
    cardvar2 = twoclubs
    playerhand += 2
  };
  if (randomnums[1] === 6) {
    cardvar2 = threeclubs
    playerhand += 3
  };
  if (randomnums[1] === 7) {
    cardvar2 = fourclubs
    playerhand += 4
  };
  if (randomnums[1] === 8) {
    cardvar2 = fiveclubs
    playerhand += 5
  };
  if (randomnums[1] === 9) {
    cardvar2 = sixclubs
    playerhand += 6 
  };
  if (randomnums[1] === 10) {
    cardvar2 = sevenclubs
    playerhand += 7 
  };
  if (randomnums[1] === 11) {
    cardvar2 = eightclubs
    playerhand += 8 
  };
  if (randomnums[1] === 12) {
    cardvar2 = nineclubs
    playerhand += 9
  };
  if (randomnums[1] === 13) {
    cardvar2 = tenclubs
    playerhand += 10
  };
  if (randomnums[1] === 14) {
    cardvar2 = jackclubs
    playerhand += 10
  };
  if (randomnums[1] === 15) {
    cardvar2 = queenclubs
    playerhand += 10
  };
  if (randomnums[1] === 16) {
    cardvar2 = kingclubs
    playerhand += 10
  };
  if (randomnums[1] === 17) {
    cardvar2 = twospades
    playerhand += 2
  };
  if (randomnums[1] === 18) {
    cardvar2 = threespades
    playerhand += 3
  };
  if (randomnums[1] === 19) {
    cardvar2 = fourspades
    playerhand += 4
  };
  if (randomnums[1] === 20) {
    cardvar2 = fivespades
    playerhand += 5
  };
  if (randomnums[1] === 21) {
    cardvar2 = sixspades
    playerhand += 6
  };
  if (randomnums[1] === 22) {
    cardvar2 = sevenspades
    playerhand += 7
  };
  if (randomnums[1] === 23) {
    cardvar2 = eightspades
    playerhand += 8 
  };
  if (randomnums[1] === 24) {
    cardvar2 = ninespades
    playerhand += 9 
  };
  if (randomnums[1] === 25) {
    cardvar2 = tenspades
    playerhand += 10
  };
  if (randomnums[1] === 26) {
    cardvar2 = jackspades
    playerhand += 10
  };
  if (randomnums[1] === 27) {
    cardvar2 = queenspades
    playerhand += 10
  };
  if (randomnums[1] === 28) {
    cardvar2 = kingspades
    playerhand += 10 
  };
  if (randomnums[1] === 29) {
    cardvar2 = twodiamonds
    playerhand += 2
  };
  if (randomnums[1] === 30) {
    cardvar2 = threediamonds
    playerhand += 3
  };
  if (randomnums[1] === 31) {
    cardvar2 = fourdiamonds
    playerhand += 4
  };
  if (randomnums[1] === 32) {
    cardvar2 = fivediamonds
    playerhand += 5
  };
  if (randomnums[1] === 33) {
    cardvar2 = sixdiamonds
    playerhand += 6 
  };
  if (randomnums[1] === 34) {
    cardvar2 = sevendiamonds
    playerhand += 7
  };
  if (randomnums[1] === 35) {
    cardvar2 = eightdiamonds
    playerhand += 8
  };
  if (randomnums[1] === 36) {
    cardvar2 = ninediamonds
    playerhand += 9
  };
  if (randomnums[1] === 37) {
    cardvar2 = tendiamonds
    playerhand += 10
  };
  if (randomnums[1] === 38) {
    cardvar2 = jackdiamonds
    playerhand += 10
  };
  if (randomnums[1] === 39) {
    cardvar2 = queendiamonds
    playerhand += 10
  };
  if (randomnums[1] === 40) {
    cardvar2 = kingdiamonds
    playerhand += 10
  };
  if (randomnums[1] === 41) {
    cardvar2 = twohearts
    playerhand += 2
  };
  if (randomnums[1] === 42) {
    cardvar2 = threehearts
    playerhand += 3
  };
  if (randomnums[1] === 43) {
    cardvar2 = fourhearts
    playerhand += 4
  };
  if (randomnums[1] === 44) {
    cardvar2 = fivehearts
    playerhand += 5
  };
  if (randomnums[1] === 45) {
    cardvar2 = sixhearts
    playerhand += 6
  };
  if (randomnums[1] === 46) {
    cardvar2 = sevenhearts
    playerhand += 7
  };
  if (randomnums[1] === 47) {
    cardvar2 = eighthearts
    playerhand += 8
  };
  if (randomnums[1] === 48) {
    cardvar2 = ninehearts
    playerhand += 9
  };
  if (randomnums[1] === 49) {
    cardvar2 = tenhearts
    playerhand += 10
  };
  if (randomnums[1] === 50) {
    cardvar2 = jackhearts
    playerhand += 10
  };
  if (randomnums[1] === 51) {
    cardvar2 = queenhearts
    playerhand += 10
  };
  if (randomnums[1] === 52) {
    cardvar2 = kinghearts
    playerhand += 10
  };
  
  

  if (randomnums[2] === 1) {
    if (click > 1) { 
      if (click2 === 0) {
      state1 = aceclubs
      playerhand += 11}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 11
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 2) {
    if (click > 1) { 
      if (click2 === 0) {
      state1 = acespades
    playerhand += 11}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 11
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 3) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = acediamonds
    playerhand += 11}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 11
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 4) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = acehearts
    playerhand += 11}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 11
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 5) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = twoclubs
    playerhand += 2}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 2
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 6) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = threeclubs
    playerhand += 3}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 3
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 7) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = fourclubs
    playerhand += 4}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 4
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 8) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = fiveclubs
    playerhand += 5}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 5
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 9) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = sixclubs
    playerhand += 6}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 6
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 10) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = sevenclubs
    playerhand += 7}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 7
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 11) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = eightclubs
    playerhand += 8}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 8
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 12) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = nineclubs
    playerhand += 9}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 9
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 13) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = tenclubs
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 14) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = jackclubs
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 15) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = queenclubs
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 16) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = kingclubs
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 17) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = twospades
    playerhand += 2}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 2
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 18) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = threespades
    playerhand += 3}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 3
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 19) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = fourspades
    playerhand += 4}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 4
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 20) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = fivespades
    playerhand += 5}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 5
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 21) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = sixspades
    playerhand += 6}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 6
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 22) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = sevenspades
    playerhand += 7}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 7
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 23) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = eightspades
    playerhand += 8}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 8
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 24) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = ninespades
    playerhand += 9}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 9
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 25) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = tenspades
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 26) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = jackspades
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 27) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = queenspades
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 28) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = kingspades
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 29) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = twodiamonds
    playerhand += 2}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 2
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 30) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = threediamonds
    playerhand += 3}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 3
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 31) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = fourdiamonds
    playerhand += 4}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 4
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 32) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = fivediamonds
    playerhand += 5}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 5
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 33) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = sixdiamonds
    playerhand += 6}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 6
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 34) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = sevendiamonds
    playerhand += 7}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 7
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 35) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = eightdiamonds
    playerhand += 8}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 8
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 36) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = ninediamonds
    playerhand += 9}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 9
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 37) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = tendiamonds
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 38) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = jackdiamonds
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 39) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = queendiamonds
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 40) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = kingdiamonds
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 41) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = twohearts
    playerhand += 2}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 2
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 42) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = threehearts
    playerhand += 3}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 3
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 43) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = fourhearts
    playerhand += 4}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 4
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 44) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = fivehearts
    playerhand += 5}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 5
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 45) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = sixhearts
    playerhand += 6}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 6
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 46) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = sevenhearts
    playerhand += 7}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 7
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 47) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = eighthearts
    playerhand += 8}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 8
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 48) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = ninehearts
    playerhand += 9}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 9
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 49) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = tenhearts
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 50) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = jackhearts
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 51) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = queenhearts
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
  if (randomnums[2] === 52) {
    if (click > 1) { 
      if (click2 === 0) {
    state1 = kinghearts 
    playerhand += 10}
    };
    if (click2 === 1) {
      if (dealerhand < playerhand) {
        dealerhand += 10
        if (dealerhand > 21) {
          gameend += 1
        };
      } else {gameend += 1
      };
    };
  };
};