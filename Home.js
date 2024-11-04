// components/Home.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Dompet Bitcoin</Text>
      <Button title="Lihat Dompet" onPress={() => navigation.navigate('Wallet')} />
      <Button title="Lihat Transaksi" onPress={() => navigation.navigate('Transactions')} />
      <Button title="Pengaturan" onPress={() => navigation.navigate('Settings')} />
      <Button title="Daftar" onPress={() => navigation.navigate('Register')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;
