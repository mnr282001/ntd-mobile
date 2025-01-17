import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <Tabs screenOptions={{
      headerStyle: { backgroundColor: '#f4f4f4' },
      headerTintColor: '#333',
      tabBarActiveTintColor: '#007bff',
      tabBarInactiveTintColor: '#666',
    }}>
      <Tabs.Screen 
        name="notes" 
        options={{
          title: 'Notes',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" size={24} color={color} />
          )
        }} 
      />
      <Tabs.Screen 
        name="form" 
        options={{
          title: 'Create Note',
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={24} color={color} />
          )
        }} 
      />
      <Tabs.Screen 
        name="standup" 
        options={{
          title: 'Standup',
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar" size={24} color={color} />
          )
        }} 
      />
    </Tabs>
  );
}
