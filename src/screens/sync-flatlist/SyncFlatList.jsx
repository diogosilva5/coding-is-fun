import React, { useEffect, useState, useRef } from 'react';
import {
    StatusBar,
    FlatList,
    Image,
    Animated,
    Text,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Easing,
    SafeAreaViewBase,
    SafeAreaView,
} from 'react-native';
const { width, height } = Dimensions.get('screen');

const API_KEY = '563492ad6f91700001000001bb87864588b24e1eb6dc95b3100b8d57';
const API_URL =
    'https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20';

const IMAGE_SIZE = 80;
const SPACING = 10;

const fetchImagesFromPexels = async () => {
    const data = await fetch(API_URL, {
        headers: {
            Authorization: API_KEY,
        },
    });

    const { photos } = await data.json();
    return photos;
};

export default () => {
    // Refs
    const topRef = useRef(null);
    const bottomRef = useRef(null);

    // State
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // On mount/changes
    useEffect(() => {
        const fetchImages = async () => {
            const images = await fetchImagesFromPexels();
            setImages(images);
        };
        fetchImages();
    }, []);

    // Functions
    const scrollToActiveIndex = index => {
        setActiveIndex(index);

        topRef?.current?.scrollToOffset({
            offset: index * width,
            animated: true,
        });

        if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
            bottomRef?.current?.scrollToOffset({
                offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
                animated: true,
            });
        }
    };

    if (!images) {
        return <Text>Loading...</Text>;
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <FlatList
                ref={topRef}
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                onMomentumScrollEnd={ev => {
                    scrollToActiveIndex(
                        Math.floor(ev.nativeEvent.contentOffset.x / width),
                    );
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width, height }}>
                            <Image
                                source={{ uri: item.src.portrait }}
                                style={[StyleSheet.absoluteFillObject]}
                            />
                        </View>
                    );
                }}
            />
            <FlatList
                ref={bottomRef}
                data={images}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                style={{ position: 'absolute', bottom: 80 }}
                contentContainerStyle={{ paddingHorizontal: SPACING }}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
                            <Image
                                source={{ uri: item.src.portrait }}
                                style={{
                                    width: IMAGE_SIZE,
                                    height: IMAGE_SIZE,
                                    borderRadius: 12,
                                    marginRight: SPACING,
                                    borderWidth: 2,
                                    borderColor:
                                        activeIndex === index ? 'white' : 'transparent',
                                }}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </SafeAreaView>
    );
};
