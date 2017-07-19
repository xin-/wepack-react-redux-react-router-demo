import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { CLICK_COUNTER, CLICK_ANOTHER } from '../actions'
import { routerReducer } from 'react-router-redux'

//=======> counter reducer
const init_counter = {
	param1: 0,
	param2: 0,
	result: 0,
}
const handler_counter = {}
handler_counter[CLICK_COUNTER] = (state, action) => {
	return Object.assign({}, state, {
		param1: action.param1,
		param2: action.param2,
		result: Number(action.params.param1) + Number(action.params.param2),
	})
}
//<======= counter reducer

/*------------------------*/

//=======> another reducer
const init_another = {
	cishu: 0
}
const handler_another = {}
handler_another[CLICK_ANOTHER] = (state, action) => {
	return Object.assign({}, state, {
		cishu: state.cishu + 1
	})
}
//<======= another reducer

const counter = handleActions(handler_counter, init_counter)
const another = handleActions(handler_another, init_another)

export default combineReducers({
	counter,
	another,
	router: routerReducer,
})
