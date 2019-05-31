import React from 'react';
import List from '../components/List.js';
import axios from 'axios'; 
import Modal from '../components/Modal.js';
import {Button,notification, Icon } from 'antd';
import FormModal from '../components/formModal.js';
import DashboardLayout from '../components/DashboardLayout.js';
import PageLoading from '../components/PageLoading.js';

class Dashboard extends React.Component{
  
  state = {
    cars:[],
    form:[],
    isVisible:false,
    detail:[],
    modalForm:false,
    collapsed:false,
    loading:true,
    error:null,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  handleDetailModalOk = (e) => {
    this.setState({
      isVisible:false,
      detail:[],
    })
  };

  handleDetailModalCancel = (e) => {
    this.setState({
      error:null,
      isVisible:false,
      modalForm:false,
      detail:[],    
    })
  };

  handleDetailClick = (e) => {
    axios.get(`http://127.0.0.1:8000/api/cars/${e.target.value}`)
    .then( res => {
        this.setState({
          isVisible:true,
          detail:res.data.car

        })
    })
    .catch(err =>{
      this.setState({
        error:err.response
      })
    })
  };


  allData = () => {
    this.setState({
      loading:true,
      error:null
    })
    axios.get('http://127.0.0.1:8000/api/cars')
    .then( res => {
      this.setState({
        cars:res.data.cars.data,
        loading:false,
      })
    })
    .catch(err =>{
      this.setState({
        loading:false,
        error:{
          statusText:err.message,
          data:{
            message:"Internal Server Error"
          }
        }
      })
    })
  };

  handleDeleteClick = (e) => {
    this.setState({
      loading:true,error:null,
    })
    axios.delete(`http://127.0.0.1:8000/api/cars/delete/${e.target.value}`)
    .then( res => {
        this.allData();
    })
    .catch(err => {
      this.setState({
        loading:false,
        error:err.response
      })
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading:true,error:null
    })
    axios.post('http://127.0.0.1:8000/api/cars/create',{
     ...this.state.form
    })
    .then( res => {
      console.log(res.data)
        this.setState({
          modalForm:false,
          form:[],
        })
        this.allData();
    })
    .catch( err => {
      console.log(err.response)
      this.setState({
        loading:false,
        error:err.response
      })
    })
  };

  handleChange = (e) => {
    this.setState({
      form : {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
      error:null
    })
  };

  handleFormModal = (e) => {
    this.setState({
      modalForm:true
    })
  };

  handleSwitchChange = (e) =>{
    console.log(e)
  };

  componentDidMount(){
    this.allData();
  };
  
  render(){
    if (this.state.loading) {
      return(
        <PageLoading/>
      )
    }

    return(
      <DashboardLayout collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Button type="primary" style={{margin: '0px 0px 15px 0px' }} onClick={this.handleFormModal}>New Car</Button>
          <List 
            items={this.state.cars}
            handleDetailClick={this.handleDetailClick}
            handleDeleteClick={this.handleDeleteClick}
            handleSwitchChange={this.handleSwitchChange}
          />
          <Modal
            visible = {this.state.isVisible}
            onOk = {this.handleDetailModalOk}
            onCancel = {this.handleDetailModalCancel}
            data = {this.state.detail}
          />
          <FormModal
            visible = { this.state.modalForm }
            handleSubmit = {this.handleSubmit}
            handleChange = {this.handleChange}
            onOk = {this.handleDetailModalOk}
            onCancel = {this.handleDetailModalCancel}
            formValues= {this.state.form}
            isLoading = {this.state.loading}
          />
        </div>
      </DashboardLayout>         
    )
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.error) {
      return(
          this.state.error && notification.open({
          message: this.state.error.statusText,
          description:this.state.error.data.message,
          icon: <Icon type="frown" style={{color:'red'}}/>,
      })        
      )
    }
  }
}

export default Dashboard;
