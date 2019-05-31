import React from 'react'
import { Modal } from 'antd';
import Form from './Form.js';
import "antd/dist/antd.css";

function FormModal(props){
	return(
		<React.Fragment>
			<Modal
				title="New Car"
				visible={props.visible}
				onOk={props.handleSubmit}
				onCancel={props.onCancel}
				okText="Create Car"
			>
      <Form
        handleChange = {props.handleChange}
        formValues = {props.formValues}
      />
			</Modal>			
		</React.Fragment>
	)
}

export default FormModal