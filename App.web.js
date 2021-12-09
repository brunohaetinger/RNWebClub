import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {CardList} from './src/components/CardList/CardList';
import {Section} from './src/components/Section/Section';
import {Colors} from './src/contants/Colors';

const App = () => {
  const [canShowCardList, setCanShowCardList] = useState(false);

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
    <SafeAreaView style={styles.background}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.background}>
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

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.black,
    height: '100%',
  },
});

export default App;
