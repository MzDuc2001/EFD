import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTest } from '@hooks';
import tw from 'twrnc';
export const Test = () => {
    const { count, increase } = useTest();
    const onPress = () => {
        increase();
    };

    return (
        <View style={{ margin: 50 }}>
            <Text style={tw` text-red-500`}>{count}</Text>
            <Text style={tw` `}>hello</Text>
            <Button onPress={onPress} title="Press Here"></Button>
        </View>
    );
};
