import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'user' && password === 'pass') {
      Alert.alert('Login Successful', `Welcome, ${username}!`);
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    
      <ThemedView style={styles.outerContainer}>
        <ThemedView style={styles.innerContainer}>
          <ThemedText type="title">모두의족보</ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            함께하는 시험공부
          </ThemedText>
          <View style={styles.container}>
            <Text style={styles.label}>아이디</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Text style={styles.label}>패스워드</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Button title="Login" onPress={handleLogin} />
          </View>
        </ThemedView>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  subtitle: {
    marginBottom: 16,
  },
});
