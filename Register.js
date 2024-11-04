// components/Register.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pendaftaran</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Kata Sandi" secureTextEntry />
      <Button title="Daftar" onPress={() => alert('Pendaftaran Berhasil')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Register;
