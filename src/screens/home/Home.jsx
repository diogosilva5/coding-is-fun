import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const screens = [
    { id: 1, name: 'Tutorial', icon: 'color-palette-outline' },
    { id: 2, name: 'PanGesture', icon: 'hand-right-outline' },
    { id: 3, name: 'Slider', icon: 'albums-outline' },
    { id: 4, name: 'Accordion', icon: 'caret-down-circle-outline' },
    { id: 5, name: 'ReduxToolkit', icon: 'save-outline' },
    { id: 6, name: 'SectionList', icon: 'folder-open-outline' },
    { id: 7, name: 'Form', icon: 'folder-open-outline' },
    { id: 8, name: 'Carousel', icon: 'folder-open-outline' },
    { id: 9, name: 'SyncFlatList', icon: 'folder-open-outline' },
];

import {
    SafeContainer,
    Container,
    ContainerItem,
    ButtonItem,
    ButtonText,
} from './Home.styles';

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeContainer>
            <Container>
                <FlatList
                    numColumns={2}
                    keyExtractor={item => item.id}
                    style={{ flex: 1 }}
                    data={screens}
                    renderItem={({ item }) => (
                        <ContainerItem>
                            <ButtonItem onPress={() => navigation.navigate(item.name)}>
                                <Ionicons name={item.icon} size={24} color="black" />
                                <ButtonText>{item.name}</ButtonText>
                            </ButtonItem>
                        </ContainerItem>
                    )}
                />
            </Container>
        </SafeContainer>
    );
};

export default Home;
