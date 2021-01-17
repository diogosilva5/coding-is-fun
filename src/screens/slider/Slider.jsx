import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';

import { layout } from '~/utils';
import { movies } from '../../data';

const ITEM_WIDTH = layout.width * 0.72;
const ITEM_HEIGHT = layout.height * 0.6;

const SPACING = 10;

const ITEM_SPACING = (layout.width - ITEM_WIDTH) / 2;

const Slider = () => {
    const translateX = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: ({ contentOffset: { x } }) => {
            translateX.value = x;
        },
    });

    return (
        <View style={styles.container}>
            <Animated.ScrollView
                style={styles.slider}
                onScroll={onScroll}
                horizontal
                scrollEventThrottle={16}
                pagingEnabled
                showsHorizontalScrollIndicator={false}>
                {movies.map(movie => {
                    movie.name === null ? (
                        <View style={{ width: ITEM_SPACING, borderWidth: 1 }} />
                    ) : (
                        <View key={movie.id} style={styles.item}>
                            <Animated.View
                                style={{
                                    marginHorizontal: SPACING,
                                    padding: SPACING * 2,
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    borderRadius: 34,
                                }}></Animated.View>
                            <Text>{movie.name}</Text>
                        </View>
                    );
                })}
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: layout.width - 100,
    },
    slider: {
        flex: 1,
    },
    item: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderWidth: 1,
    },
});

export default Slider;
