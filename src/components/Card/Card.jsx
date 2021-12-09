import React, { useEffect, useLayoutEffect, useState } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Card = ({title}) => {
  const [description, setDescription] = useState('');

  useLayoutEffect(()=>{
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@cardDescription')
        if(value) {
          setDescription(value)
        }

      } catch(e) {
        // error reading value
      }
    }
    getData();
  }, [])

  return (
    <View style={styles.card}>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'gray',
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    minHeight: 160,
    padding: 16,
    flexBasis: Platform.OS === 'web' ? '50%' : '100%',
  },
});
