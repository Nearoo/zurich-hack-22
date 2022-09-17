import { Button, Card, Form, Input, Space, Typography } from 'antd';
import { useState } from 'react';

import { DropdownSimple, SimpleMap } from './simple';
const { Title } = Typography;


export const EnterData = ({onSubmit}) => {

    const [wcr, setWcr] = useState(0.5);
    const [acr, setAcr] = useState(4.5);
    const [concrStrength, setCncrStr] = useState(49.05);
    const [long, setLong] = useState(100);
    const [lat, setLat] = useState(50);
    const [pourRev, setPourRev] = useState(50_000);
    const [pourStar, setPourStar] = useState(4);

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
                label="Water / Cement Ratio"
            >
                <Input placeholder={wcr} onChange={v => setWcr(+v.nativeEvent.target.value)}></Input>
            </Form.Item>
            <Form.Item
                label="Aggregat / Cement Ratio"
            >
                <Input placeholder={acr} onChange={v => setAcr(v.nativeEvent.target.value)}></Input>
            </Form.Item>

            <Form.Item
                label="Minimum Concrete Strength"
            >
                <Input placeholder={concrStrength} onChange={v => setCncrStr(v.nativeEvent.target.value)}></Input>
            </Form.Item>

            <Form.Item
                label="Poure Rating"
            >
                <Input placeholder={pourStar} onChange={v => setPourStar(v.nativeEvent.target.value)}></Input>
            </Form.Item>

            <Form.Item
                label="Expected Failure Cost"
            >
                <Input placeholder={pourRev} onChange={v => setPourRev(v.nativeEvent.target.value)}></Input>
            </Form.Item>
            <Card>Hello</Card>
            {/* <Form.Item
                label="Concrete Type"
            >
                <DropdownSimple title="Hello" items={["a", "b"]} onSelect={console.log} />
            </Form.Item> */}
            <Form.Item
                label="Construction Site Location"
            >
                <SimpleMap onChange={({long, lat}) => [setLong(long), setLat(lat)]}/>
            </Form.Item>
        </Form>

        <Button block type="primary" onClick={() => onSubmit({
            wcr, acr, long, lat, req_strength: concrStrength,
            pour_star: pourStar, pour_revenue: pourRev

        })}>
            Submit
        </Button>

    </Space>
}
