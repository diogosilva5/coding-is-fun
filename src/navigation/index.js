import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import TutorialScreen from '../screens/tutorial';
import PanGestureScreen from '../screens/pan-gesture';
import AccordionScreen from '../screens/accordion';
import SliderScreen from '../screens/slider';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tutorial" component={TutorialScreen} />
            <Stack.Screen
                name="PanGesture"
                options={{ headerShown: false }}
                component={PanGestureScreen}
            />
            <Stack.Screen name="Slider" component={SliderScreen} />
            <Stack.Screen name="Accordion" component={AccordionScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
