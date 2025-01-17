// components/StandupSummary.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } 
from 'react-native';
import axios from 'axios';
import { format } from 'date-fns';

export default function StandupSummary() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchStandupSummary = async () => {
    setLoading(true);
    try {
      const today = format(new Date(), 'yyyy-MM-dd');
      const response = await 
axios.post(`http://localhost:3000/summaries/standup-summary?date=${today}`);
      
      console.log(response.data);
      setSummary(response.data.summary);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching standup summary:', error);
      Alert.alert('Error', 'Failed to generate standup summary');
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Standup Summary</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={fetchStandupSummary}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Generating...' : 'Generate Summary'}
        </Text>
      </TouchableOpacity>

      {summary && (
        <ScrollView style={styles.summaryContainer}>
          <Text style={styles.summaryText}>{summary}</Text>
        </ScrollView>
      )}
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
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  summaryContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    maxHeight: 300,
  },
  summaryText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
