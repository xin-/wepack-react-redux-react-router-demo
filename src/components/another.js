import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

class Another extends React.Component {
	constructor() {
		super()
		this.state = {}
	}

	componentWillMount() {
		
	}

	onClick() {
		this.props.another.clickAnother()
		this.props.counter.clickCounter({
			param1: this.props.counter.param1 + 1,
			param2: this.props.counter.param2,
		})
	}

	jump() {
		this.props.history.push('/onepackage')
	}

	render() {
		return (
			<div className="another block">
				<button onClick={this.jump.bind(this)}>点击切换页面</button>
				<button onClick={this.onClick.bind(this)}>把第一个参数加一</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Another)