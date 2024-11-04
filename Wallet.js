// components/Wallet.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Wallet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ini adalah halaman Dompet Anda.</Text>
      <Text style={styles.balance}>Saldo: 0.0 BTC</Text>
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
    marginBottom: 10,
  },
  balance: {
    fontSize: 18,
  },
});

export default Wallet;
