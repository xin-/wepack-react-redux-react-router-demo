import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

class Counter extends React.Component {
	constructor() {
		super()
		this.state = {}
	}	

	componentWillMount() {
		console.log(this.props)
	}

	onClick() {
		this.props.actions.clickCounter({
			param1: this.refs.param1.value,
			param2: this.refs.param2.value,
		}).then(() => {
			this.refs.result.value = this.props.counter.result
		})
	}

	jump() {
		this.props.history.push('/another')
	}

	render() {
		return (
			<div className="counter block">
				<button onClick={this.jump.bind(this)}>点击切换页面</button>
				<input ref="param1" type="text"/><br/>
				+<br/>
				<input ref="param2" type="text"/><br/>
				=<br/>
				<input ref="result" defaultValue={this.props.counter.result} type="text"/><br/>
				<button onClick={this.onClick.bind(this)}>运算</button>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {...state}
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)