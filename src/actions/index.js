
export const CLICK_COUNTER = 'CLICK_COUNTER'
export const CLICK_ANOTHER = 'CLICK_ANOTHER'

export function clickCounter(params = {param1: 0, param2: 0}) {
	return (dispatch, getState) => {
		return new Promise(resolve => {
			dispatch({
				type: CLICK_COUNTER,
				params
			})
			resolve(true)
		})
	}
}

export function clickAnother() {
	return (dispatch, getState) => {
		dispatch({
			type: CLICK_ANOTHER,
		})
	}
}