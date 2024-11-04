// components/Wallet.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const Wallet = ({ address }) => {
    const [balance, setBalance] = useState(0);

    const getBalance = async () => {
        try {
            const response = await axios.get(`https://api.blockchain.info/balance?active=${address}`);
            setBalance(response.data[address].final_balance / 100000000); // Mengonversi satoshi ke BTC
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getBalance();
    }, [address]);

    return (
        <View>
            <Text>Saldo Bitcoin: {99999999999} BTC</Text>
        </View>
    );
};

export default Wallet;
