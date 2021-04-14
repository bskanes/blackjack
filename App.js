import { StatusBar } from 'expo-status-bar';
import { useState, usestate } from 'react';
import React from 'react';
import { ImageBackground, StyleSheet, Image, Text, View, TextInput, Button } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NativeRouter, Switch, Route, } from 'react-router-native'
import game from './game';
import youlose from './youlose';
import youwin from './youwin';
import home from './home';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/game" component={game} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}