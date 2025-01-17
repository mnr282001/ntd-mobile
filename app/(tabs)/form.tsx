import React from 'react';
import { View, StyleSheet } from 'react-native';
import NotesForm from '../../components/NotesForm';

export default function FormScreen() {
  return (
    <View style={styles.container}>
      <NotesForm />
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
