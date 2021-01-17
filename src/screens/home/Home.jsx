import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Button title="Tutorial" onPress={() => navigation.navigate('Tutorial')} />
                <Button title="PanGesture" onPress={() => navigation.navigate('PanGesture')} />
                <Button title="Slider" onPress={() => navigation.navigate('Slider')} />
                <Button title="Accordion" onPress={() => navigation.navigate('Accordion')} />
                <Button title="ReduxToolkit" onPress={() => navigation.navigate('ReduxToolkit')} />
            </View>
        </SafeAreaView>
    );
};

export default Home;
