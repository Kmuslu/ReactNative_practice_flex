import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
       <View style={{flex:1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 400, backgroundColor: 'powderblue',flex:1,}} />
          <View style={{width: 50, height: 400, backgroundColor: 'skyblue',flex:1}} />
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: 450, height: 50, backgroundColor: 'steelblue',flex:1}} />
          <View style={{width: 450, height: 50, backgroundColor: 'powderblue',flex:1,}} />
          <View style={{width: 450, height: 50, backgroundColor: 'skyblue',flex:1}} />
      
        </View>
        </View>
      );
  };

export default App;
