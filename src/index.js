import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { ConnectedRouter, routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import reducers from './reducers'
import Counter from './components/counter'
import Another from './components/another'
import Onepackage from './components/onepackage'
import { Router, Route, Switch, browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import './style.scss'

const loggerMiddleware = createLogger({
	level: 'info',
    logger: console,
    collapsed: true
})
const history = createHistory()

const store = createStore(
	reducers,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware,
		routerMiddleware(history)
	)
)

let rootElement = document.getElementById('app')
render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={Counter} />
		    	<Route exact path="/another" component={Another} />
		    	<Route exact path="/onepackage" component={Onepackage} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	rootElement
)
//Route 上面的exact 表示准确的匹配路由 否则将所有可以匹配的都匹配




// import _ from 'lodash'
// import './style.scss'
// import Icon from 'assets/dd.png'

// // var req = require.context('./', true, /^*\.js$/)
// // console.log(req)

// function component() {
// 	var ele = document.createElement('div')

// 	ele.className = 'hello'
// 	ele.innerHTML = _.join(['Hello', 'webpack', 'ca'], ' ')
	
// 	var myIcon = new Image();
// 	myIcon.src = Icon;
// 	ele.appendChild(myIcon);

// 	return ele
// }

// document.body.appendChild(component()) 

