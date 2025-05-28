import React from 'react';
import { View, Text } from 'react-native';

export default function Box({ hexCode, colorName }) {
  return (
    <View style={{ backgroundColor: hexCode, padding: 20, borderRadius: 8, marginVertical: 5 }}>
      <Text style={{ color: 'white', fontWeight: 'bold',fontSize:20 }}>{colorName}</Text>
    </View>
  );
}

