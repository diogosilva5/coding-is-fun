import React from 'react';
import { Provider } from 'react-redux';
import store from '~/store';

import AppContainer from './src/AppContainer';

export default function App() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}
