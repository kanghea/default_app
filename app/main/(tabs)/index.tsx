import { Image, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';

import React, { useState } from 'react';

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 검증 로직을 추가하세요.
    if (username === 'user' && password === 'pass') {
      Alert.alert('Login Successful', `Welcome, ${username}!`);
      // 로그인 성공 시, 다음 화면으로 이동하는 로직을 추가합니다.
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
      <ThemedView className='flex justify-center items-center'>
        <ThemedView className='flex top-52'> 
          
          <ThemedText type="title">
            모두의족보
          </ThemedText>
          <ThemedText type='subtitle' style={styles.stepContainer}>
              함께하는 시험공부
          </ThemedText>
            
          <ThemedView>
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
      </ThemedView>
  
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});