import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/screens/home';
import TutorialScreen from '~/screens/tutorial';
import PanGestureScreen from '~/screens/pan-gesture';
import AccordionScreen from '~/screens/accordion';
import SliderScreen from '~/screens/slider';
import ReduxToolkitScreen from '~/screens/redux-toolkit';
import SectionListScreen from '~/screens/section-list';
import FormScreen from '~/screens/form';
import CarouselScreen from '~/screens/carousel';

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
            <Stack.Screen
                name="Slider"
                options={{ headerShown: false }}
                component={SliderScreen}
            />
            <Stack.Screen name="Accordion" component={AccordionScreen} />
            <Stack.Screen name="ReduxToolkit" component={ReduxToolkitScreen} />
            <Stack.Screen name="SectionList" component={SectionListScreen} />
            <Stack.Screen name="Form" component={FormScreen} />
            <Stack.Screen name="Carousel" component={CarouselScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
