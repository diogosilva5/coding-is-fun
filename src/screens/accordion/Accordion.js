import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
} from 'react-native-reanimated';

import { categories } from '../../data';

const Accordion = () => {
    const offset = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: offset.value,
            opacity: interpolate(offset.value, [160, 250], [0, 1]),
            borderBottomLeftRadius: interpolate(offset.value, [160, 250], [0, 12]),
            borderBottomRightRadius: interpolate(offset.value, [160, 250], [0, 12]),
        };
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            offset.value = withTiming(offset.value === 0 ? 250 : 0);
                        }}
                        style={[styles.box]}
                    />

                    <Animated.View style={[styles.boxt, animatedStyle]}>
                        {categories.map(category => (
                            <View style={styles.item}>
                                <Text>{category.item}</Text>
                            </View>
                        ))}
                    </Animated.View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box: {
        width: 200,
        height: 50,
        borderWidth: 1,
    },
    boxt: {
        backgroundColor: 'red',
        width: 200,
    },
    item: {
        height: 50,
    },
});

export default Accordion;
