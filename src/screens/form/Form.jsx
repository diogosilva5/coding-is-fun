import React, { useState, useEffect } from 'react';
import { SafeAreaView, Alert, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import { Container } from './Form.styles';

const Form = () => {
    const [text, setText] = useState('');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TextInput
                name="email"
                left={
                    <TextInput.Icon
                        name={() => (
                            <Ionicons name="albums-outline" size={24} color="blue" />
                        )}
                        onPress={() => {}}
                    />
                }
                mode="outlined"
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
            />
        </SafeAreaView>
    );
};

export default Form;
