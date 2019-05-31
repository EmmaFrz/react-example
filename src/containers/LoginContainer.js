import React from 'react';
import Login from '../components/Login.js';
import PageLoading from '../components/PageLoading.js';
import { notification, Icon } from 'antd'

class LoginContainer extends React.Component{

	state = {
		loading:false,
		error:null
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			loading:true
		})
		if (e.target.username.value === "admin" && e.target.password.value === "abc") {
			this.setState({
				loading:false,
				error:null
			})
			this.props.history.push('/dashboard')
		}else{
			this.setState({
				loading:false,
				error:'User or password is incorrrect'
			})
		}
	};

	render(){
		return(
			<div>
				{this.state.loading && <PageLoading/>}
				{this.state.error && notification.open({
    			message: 'Login Error',
    			description:this.state.error,
    			icon: <Icon type="frown" style={{color:'red'}}/>,
  			})}
				<Login handleSubmit={this.handleSubmit} isValid={this.state.login}/>
			}
			</div>
		)
	}
}

export default LoginContainer;