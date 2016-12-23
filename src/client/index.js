/**
 * Created by jmoor6 on 12/13/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';

renderWithHotReload(App);

module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderWithHotReload(NextApp);
});

function renderWithHotReload(Component) {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('content')
    );
};


console.log("Hello World from the Client!");