import React from 'react';
import { Layout } from 'antd';
import MainLayout from './MainLayout.js';


function DasboardLayout(props){
	return(
		<React.Fragment>
      <Layout>
         <Layout.Sider collapsible collapsed={props.collapsed} onCollapse={props.onCollapse}>
         </Layout.Sider>
         <MainLayout>
          	{props.children}
         </MainLayout>  
      </Layout>  
     </React.Fragment>
	)
}

export default DasboardLayout