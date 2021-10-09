import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Link,Switch,Route} from 'react-router-dom';
import Select from './select';
import { createStore} from 'redux';
import {Provider} from 'react-redux';
import combineReducer from './redux/combineReducer';
const store = createStore(combineReducer);

ReactDOM.render(
  <Provider store={store}>
    <header ><h1>header</h1> </header>
    <BrowserRouter>
       <Link to='/'></Link>
       <Link to='/select'></Link>
       <Switch>
          <Route exact path='/'> <App /> </Route>
          <Route path='/select'> <Select/> </Route>
       </Switch>
    </BrowserRouter>
    
  </Provider>,
  document.getElementById('root')
);

