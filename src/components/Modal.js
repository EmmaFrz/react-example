import React from 'react';
import { Modal } from 'antd';
import "antd/dist/antd.css";

function ModalDetails(props){
	return(
		<React.Fragment>
			<Modal
				title="Car Details"
				visible={props.visible}
				onOk={props.onOk}
				onCancel={props.onCancel}
			>
				<p>Brand: {props.data.brand}</p>
				<p>Year: {props.data.year}</p>
				<p>Origin: {props.data.origin}</p>
				<p>Max Speed: {props.data.max_speed}</p>
				<p>State: {props.data.state}</p>
				<p>Description: {props.data.description}</p>
				<p>Color: {props.data.colors}</p>
				<p>Doors: {props.data.doors}</p>
			</Modal>
		</React.Fragment>
	)
}

export default ModalDetails