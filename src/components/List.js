import React from 'react';
import { Table, Divider, Button } from 'antd';
import "antd/dist/antd.css";


function CarList(props){
	const columns = [
			{
				title:"Id",
				dataIndex:"id",
				key:"id"
			},
			{
				title:"Brand",
				dataIndex:"brand",
				key:"brand"
			},
			{
				title:"Year",
				dataIndex:"year",
				key:"year"
			},
			{
				title:"Origin",
				dataIndex:"origin",
				key:"origin"
			},	
			{
				title:"Speed",
				dataIndex:"max_speed",
				key:"max_speed"
			},		
			{
				title:"State",
				dataIndex:"state",
				key:"state"
			},
			{
		    title: 'Action',
		    key: 'action',
		    render: (text, record) => (
		      <span>
		        <Button type="primary" value={record.id} onClick={props.handleDetailClick}>Details</Button>
		        <Divider type="vertical" />
		        <Button type="danger" value={record.id} onClick={props.handleDeleteClick}>Delete</Button>
		      </span>
	    )
	  }		
	]
	return(
		<React.Fragment>
			<Table columns={columns} dataSource={props.items} rowKey={record => record.id}/>
		</React.Fragment>
	)
}

export default CarList;