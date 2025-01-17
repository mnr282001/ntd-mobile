import React from 'react';
import { View, StyleSheet } from 'react-native';
import StandupSummary from '../../components/StandupSummary';

export default function StandupScreen() {
  return (
    <View style={styles.container}>
      <StandupSummary />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
});
