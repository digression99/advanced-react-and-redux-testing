import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from 'reducers'; // absolute file import.
import {BrowserRouter, Route} from 'react-router-dom';
import Root from 'Root';

import App from 'components/App';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            {/*<App />*/}
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Root>,
    // <Provider store={createStore(reducers, {})}>
    //     <App />
    // </Provider>,
    document.querySelector('#root'));