import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

class Onepackage extends React.Component {
	constructor() {
		super()
		this.state = {}
	}	

	componentWillMount() {

	}

	jump() {
		this.props.history.push('/')
	}

	render() {
		return (
			<div className="counter block">
				这是另一个页面
				<button onClick={this.jump.bind(this)}>点击切换页面</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Onepackage)