import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotesList from '../../components/NotesList';

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <NotesList day="today" />
      <NotesList day="yesterday" />
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
