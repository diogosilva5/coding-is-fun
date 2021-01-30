import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Alert,
    Button,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import { layout } from '../../utils';

import { Container } from './Form.styles';

const Form = () => {
    const [text, setText] = useState('');
    const [shift, setShift] = useState(false);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : ''}>
            <SafeAreaView
                style={{
                    flex: 1,
                }}>
                <ScrollView
                    contentContainerStyle={{
                        flex: 1,
                    }}>
                    <View style={{ height: '40%', borderWidth: 2 }}></View>
                    <View style={{ height: '40%', borderWidth: 2 }}>
                        <TextInput value="2"></TextInput>
                        <TextInput value="2"></TextInput>
                    </View>

                    <View style={{ height: '20%', borderWidth: 2 }}></View>
                </ScrollView>

                {/*<TextInput
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
            />*/}
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default Form;
