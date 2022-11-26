import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/Root/Root";
import "./index.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Contact} from "./components/Contact/Contact";
import Item from './components/Item/Item';
import {PersistGate} from "redux-persist/integration/react";

import {Provider} from "react-redux";
import store, {persister} from './redux/store'
import Cart from './components/Cart/Cart';



ReactDOM.render((
    <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
    <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Root}/>
        <Route path='/contact' component={Contact}/>
            <Route path='/item/:id' component={Item}/>
            {
                // @ts-ignore
                <Route path='/cart' component={Cart}/>
            }
        </Switch>
    </BrowserRouter>
        </PersistGate>
    </Provider>
), document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
