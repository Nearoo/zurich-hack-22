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
            ghost={false}><Title level={3} keyboard italic >Concrete Insurance</Title></PageHeader>
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