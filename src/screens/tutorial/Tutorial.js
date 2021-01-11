import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';

import { tutorial } from '../../data';
import { layout } from '../../utils';

const CARD_WIDTH = layout.width * 0.7;
const CARD_HEIGHT = layout.height * 0.5;

const Tutorial = () => {
    const translateX = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: ({ contentOffset: { x } }) => {
            translateX.value = x;
        },
    });

    const colors = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            translateX.value,
            tutorial.map((_, i) => CARD_WIDTH * i),
            tutorial.map(item => item.color),
        ),
    }));

    return (
        <View style={{ flex: 1 }}>
            <Animated.ScrollView
                style={[styles.slider, colors]}
                onScroll={onScroll}
                scrollEventThrottle={16}
                horizontal
                pagingEnabled
                decelerationRate={'fast'}
                showsHorizontalScrollIndicator={false}>
                {tutorial.map(item => {
                    return (
                        <View key={item.id} style={[styles.cardStyle]}>
                            <Image style={{ flex: 1 }} resizeMode="contain" source={item.img} />
                        </View>
                    );
                })}
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    slider: {
        flex: 1,
        height: layout.height,
    },
    cardStyle: {
        width: CARD_WIDTH,
        marginVertical: (layout.height - CARD_HEIGHT) / 4,
        marginHorizontal: (layout.width - CARD_WIDTH) / 2,
        height: CARD_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 15,
        overflow: 'hidden',
    },
});

export default Tutorial;
