import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const bgs = ['#134074', '#0b2545', '#eef4ed'];

import { data } from '../utils';

import { ContainerSlider, Slide } from './Home.styles';
import { useEffect } from 'react';

const Home = () => {

    const translateX = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: ({ contentOffset: {x}}) => {
            translateX.value = x;
        },
    });

    const colors = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            translateX.value,
            bgs.map((_,i) => width * i),
            bgs.map((bg) => bg),
        ),
    }));

    return (
        <SafeAreaView>
            <Animated.ScrollView 
                style={[colors, {height}]}
                onScroll={onScroll}
                scrollEventThrottle={16}
                horizontal 
                pagingEnabled 
                showsHorizontalScrollIndicator>
                {data.map(data => (
                   <View key={data.id} style={{ 
                       width: width - 104, 
                       height: height/2, 
                       marginHorizontal: 52,
                       marginVertical: height/ 4,
                       borderWidth:1,
                       backgroundColor: 'lightblue',
                       }}>
                       <Text>{data.name}</Text>
                   </View> 
                ))}

            </Animated.ScrollView>
        </SafeAreaView>
    )
};

export default Home;