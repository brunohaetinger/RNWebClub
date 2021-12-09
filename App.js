import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {CardList} from './src/components/CardList/CardList';
import {Section} from './src/components/Section/Section';
import {Colors} from './src/contants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [canShowCardList, setCanShowCardList] = useState(false);
  useEffect(() => {
    const storeData = async value => {
      try {
        await AsyncStorage.setItem('@cardDescription', value);
      } catch (e) {
        // saving error
        console.log(e);
      }
    };
    storeData('This is a AsyncStorage description');
    setCanShowCardList(true);
  }, []);

  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: Colors.black,
          }}>
          <Section title="Mobile cards">Mobile cards</Section>
          {canShowCardList ? <CardList /> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
