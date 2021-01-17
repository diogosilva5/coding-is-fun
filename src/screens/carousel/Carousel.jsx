import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Dimensions,
    View,
    Text,
} from 'react-native';

import { dummy } from '~/data';

const { width, height } = Dimensions.get('screen');

import { ContainerCarousel } from './Carousel.styles';

const Carousel = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 0.4, borderWidth: 1 }}>
                <ScrollView
                    style={styles.scroll}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}>
                    {dummy.map((item, index) => (
                        <View style={styles.card}>
                            <Text>{item.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        width: width - 60,
        marginHorizontal: 30,
        overflow: 'visible',
    },
    card: {
        width: width - 80,
        height: 300,
        marginHorizontal: 10,
        backgroundColor: 'red',
        borderRadius: 24,
        padding: 24,
    },
});

export default Carousel;
