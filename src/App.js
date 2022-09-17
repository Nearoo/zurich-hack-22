import React from 'react';
import { Layout, PageHeader, Space } from 'antd';
import './App.css';

import { Col, Row } from 'antd';

import { Typography } from 'antd';

import { Body } from './components/body'

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;


const App = () => (
  
      <Layout>
        <Space direction="vertical">
          <PageHeader
            title="Concrete Concrete"
            ghost={false}/>
          <Content>
          <Row>
            <Col span={2}></Col>
            <Col span={20}><Body /></Col>
            <Col span={2}></Col>
          </Row>
          </Content>
        </Space>
    </Layout>
);

export default App;