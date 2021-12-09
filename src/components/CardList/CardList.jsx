import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from '../Card/Card';

export const CardList = () => {
  return (
    <View style={styles.cardList}>
      <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" />
      <Card title="Card 4" />
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
