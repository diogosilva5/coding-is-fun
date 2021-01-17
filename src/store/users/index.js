import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        { id: 1, name: 'Diogo' },
        { id: 2, name: 'Godinho' },
    ],
    isLoading: false,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => {
            //Remove User Reducer
        },
    },
});

export const { addUser, removeUser } = usersSlice.actions;

export const teste = data => dispatch => {
    console.log('sttg');
    dispatch(addUser(data));
};

export const stateUsers = state => state.users;

export default usersSlice.reducer;
