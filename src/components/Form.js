import React from 'react';
import { Form, Input, Col, Row } from 'antd';
import "antd/dist/antd.css";

function CarForm(props){
	return(
		<Form onSubmit={props.handleSubmit}>
			<Row>
				<Col span={12}>
					<Form.Item label="Brand">
						<Input name='brand' style={{width:'200px'}} onChange={props.handleChange} value={props.formValues.brand}/>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label="Year">
	    			<Input name='year' style={{width:'200px'}} onChange={props.handleChange} value={props.formValues.year} />
		    	</Form.Item>
		    </Col>
		  </Row>  
		  <Row>
		  	<Col span={12}>
		    	<Form.Item label="Origin">
		    		<Input name='origin' style={{width:'200px'}} onChange={props.handleChange} value={props.formValues.origin} />
		    	</Form.Item>
		    </Col>
		    <Col span={12}>	
		    	<Form.Item label="Max Speed">
		    		<Input name='max_speed' style={{width:'200px'}} onChange={props.handleChange} value={props.formValues.max_speed} />
		    	</Form.Item>
		    </Col>
		   </Row> 
		   <Row>
		    <Col span={12}>
		    	<Form.Item label="State">
		    		<Input name='state' style={{width:'200px'}} onChange={props.handleChange} value={props.formValues.state} />
		    	</Form.Item>
		    </Col>
		    <Col span={12}>	
		    	<Form.Item label="Description">
		    		<Input name='description' style={{width:'200px'}} onChange={props.handleChange} value={props.formValues.description} />
		    	</Form.Item>
		    </Col>	
		   </Row>
		   <Row>
		   	<Col span={12}>
		    	<Form.Item label="Colors">
		    		<Input name='colors' style={{width:'200px'}} onChange={props.handleChange} value={props.formValues.colors} />
		    	</Form.Item>
		    </Col>
		    <Col span={12}>	
		    	<Form.Item label="Doors">
		    		<Input name='doors' style={{width:'200px'}} onChange={props.handleChange} value={props.formValues.doors} />
		    	</Form.Item>
		    </Col>
		  </Row>  
		</Form>
	)
}

export default CarForm;