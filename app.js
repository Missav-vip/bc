// App.js
import React from 'react';
import { View } from 'react-native';
import Wallet from './components/Wallet';

const App = () => {
    const address = 'alamat_bitcoin_anda'; // Ganti dengan alamat Bitcoin yang valid

    return (
        <View>
            <Wallet address={address} />
        </View>
    );
};

export default App;
