// components/NotesList.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { format } from 'date-fns';

export default function NotesList({ day }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await 
axios.get(`http://localhost:3000/notes/${day}`);
        const notesData = Array.isArray(response.data) 
          ? response.data 
          : (response.data.notes || []);
        setNotes(notesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notes:', error);
        setError('Failed to fetch notes');
        setLoading(false);
      }
    };

    fetchNotes();
  }, [day]);

  const dayDisplay = day === 'today' ? 'Today' : day === 'yesterday' ? 
'Yesterday' : day;

  const renderNote = ({ item }) => (
    <View style={styles.noteItem}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteContent}>{item.content}</Text>
      <Text style={styles.noteTimestamp}>
        {format(new Date(item.created_at), 'PPpp')}
      </Text>
    </View>
  );

  if (loading) {
    return <Text style={styles.loadingText}>Loading notes...</Text>;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{dayDisplay}'s Notes</Text>
      <FlatList
        data={notes}
        renderItem={renderNote}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notes for this day</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  noteItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noteContent: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  noteTimestamp: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
  },
});
