import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from '../Card/Card';

const NUM_CARDS = 5;

export const CardList = () => {
  return (
    <View style={styles.cardList}>
      { Array.from({length: NUM_CARDS}).map((item, index) => <Card title={`Card ${index + 1}`} key={String(index)}/>)}
    </View>
  );
};

const styles = StyleSheet.create({
  cardList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
