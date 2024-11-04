// components/Transactions.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Transactions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ini adalah riwayat transaksi Anda.</Text>
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
  },
});

export default Transactions;
