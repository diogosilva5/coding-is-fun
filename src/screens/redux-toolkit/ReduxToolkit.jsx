import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { stateUsers, addUser, removeUser, teste } from '~/store/users';

import { Container } from './ReduxToolkit.styles';

const ReduxToolkit = () => {
    const dispatch = useDispatch();

    // Store props
    const state = useSelector(stateUsers);

    return (
        <Container>
            {state.users.map(user => (
                <Text>{user.name}</Text>
            ))}
            <Button
                title="nova pessoa"
                onPress={() => {
                    dispatch(teste({ id: Math.floor(Math.random() * 100) + 1, name: 'Manuel' }));
                }}
            />
        </Container>
    );
};

export default ReduxToolkit;
