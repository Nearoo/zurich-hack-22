import { Button, Form, Input, Space, Typography } from 'antd';
import { useState } from 'react';

import { DropdownSimple, SimpleMap } from './simple';
const { Title } = Typography;


export const EnterData = ({onSubmit}) => {

    return <Space direction="vertical">
        <Form
            labelCol={{
                span: 8
            }}

            wrapperCol={{
                span: 8
            }}
        >
            <Title level={4}>Insure Concrete Delivery</Title>
            <Form.Item
                label="Concrete Type"
            >
                <DropdownSimple title="Hello" items={["a", "b"]} onSelect={console.log} />
            </Form.Item>
            <Form.Item
                label="Construction Site Location"
            >
                <SimpleMap />
            </Form.Item>
            <Form.Item
                label="Concrete Type"
            >
                <Input placeholder="Hello There!!"></Input>
            </Form.Item>
        </Form>

        <Button block type="primary" onClick={onSubmit}>
            Submit
        </Button>

    </Space>
}
