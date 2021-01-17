import React, { useRef } from 'react';
import { FlatList, Text } from 'react-native';
import { Container, ContainerHeader, ContainerBody, Button, Item } from './SectionList.styles';

const data = [
    { id: 'packsAndMenu', name: 'Sugestões', products: [] },
    { id: 'categoryBebidas', name: 'diogo', products: [] },
    { id: 'categorySnacks', name: 'Manuel', products: [] },
    { id: 'categoryDrinks', name: 'diogo', products: [] },
    { id: 'categoryCafe', name: 'Maria', products: [] },
    { id: 'categoryAguas', name: 'diogo', products: [] },
];

const SectionList = () => {
    const listRef = useRef(null);

    const getItemLayout = (data, index) => ({ length: 20, offset: 50 * index, index });

    const scrollToIndex = () => {
        //let randomIndex = Math.floor(Math.random(Date.now()) * data.length);
        listRef.current.scrollToOffset({ offset: 20 });
    };

    return (
        <Container>
            <ContainerHeader>
                <Button onPress={scrollToIndex} title="Scroll to Index" />
            </ContainerHeader>
            <ContainerBody>
                <FlatList
                    style={{ flex: 1 }}
                    ref={listRef}
                    data={data}
                    renderItem={({ item, index }) => (
                        <Item key={index}>
                            <Text>{item.name}</Text>
                        </Item>
                    )}
                />
            </ContainerBody>
        </Container>
    );
};

export default SectionList;
