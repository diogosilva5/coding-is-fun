import React from 'react';
import { View, Text } from 'react-native';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { snapPoint, clamp } from 'react-native-redash';

import { layout } from '../../utils';

import { Background, ContainerHandler, Handler } from './PanGesture.styles';

const HEIGHT = layout.height - layout.height / 3.8;
const MIN_HEIGHT = 220;
const snapPoints = [-(HEIGHT - MIN_HEIGHT), 0];

const PanGesture = () => {
    const translateY = useSharedValue(0);

    const onGestureEvent = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
            ctx.y = translateY.value;
        },
        onActive: ({ translationY }, ctx) => {
            translateY.value = clamp(ctx.y + translationY, snapPoints[0], snapPoints[1]);
        },
        onEnd: ({ velocityY }) => {
            const dest = snapPoint(translateY.value, velocityY, snapPoints);
            translateY.value = withSpring(dest, { overshootClamping: true });
        },
    });

    const style = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));
    return (
        <View style={{ flex: 1 }}>
            <Background>
                <PanGestureHandler onGestureEvent={onGestureEvent}>
                    <Animated.View
                        style={[
                            {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: 'white',
                                borderBottomLeftRadius: 66,
                                borderBottomRightRadius: 66,
                                height: HEIGHT,
                            },
                            style,
                        ]}>
                        <ContainerHandler></ContainerHandler>
                    </Animated.View>
                </PanGestureHandler>
            </Background>
        </View>
    );
};

export default PanGesture;
