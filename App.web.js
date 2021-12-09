import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {CardList} from './src/components/CardList/CardList';
import {Section} from './src/components/Section/Section';
import {Colors} from './src/contants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [canShowCardList, setCanShowCardList] = useState(false);
  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  useEffect(() => {
    const storeData = async value => {
      try {
        await AsyncStorage.setItem('@cardDescription', value);
      } catch (e) {
        // saving error
      }
    };
    storeData('This is a AsyncStorage description');
    setCanShowCardList(true);
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: Colors.black,
            maxWidth: 600,
            margin: 'auto',
          }}>
          <Section title="Web Cards">Here is the web version.</Section>
          {canShowCardList ? <CardList /> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
