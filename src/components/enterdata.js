import { Avatar, Button, Card, Col, Form, Input, Row, Space, Spin, Typography } from 'antd';
import { useState } from 'react';
import { StarOutlined, StarFilled } from "@ant-design/icons"

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

    const [isLoading, setLoading] = useState(false);

    return <Space direction="vertical">
        <Form
            labelCol={{
                span: 8
            }}

            wrapperCol={{
                span: 8
            }}
        >
            <Title level={4}>Create Insurance</Title>
            <Form.Item
                label="Water / Cement Ratio"
            >
                <Input placeholder={wcr} defaultValue={wcr} onChange={v => setWcr(+v.nativeEvent.target.value)}></Input>
            </Form.Item>
            <Form.Item
                label="Aggregate / Cement Ratio"
            >
                <Input placeholder={acr} defaultValue={acr} onChange={v => setAcr(v.nativeEvent.target.value)}></Input>
            </Form.Item>

            <Form.Item
                label="Minimum Concrete Strength"
            >
                <Input placeholder={concrStrength} defaultValue={concrStrength} onChange={v => setCncrStr(v.nativeEvent.target.value)}></Input>
            </Form.Item>

            <Form.Item
                label="Poure Rating"
            >
                <Input defaultValue={pourStar} placeholder={pourStar} onChange={v => setPourStar(v.nativeEvent.target.value)}></Input>
            </Form.Item>

            <Form.Item
                label="Expected Failure Cost"
            >
                <Input placeholder={pourRev} defaultValue={pourRev} onChange={v => setPourRev(v.nativeEvent.target.value)}></Input>
            </Form.Item>
            <Form.Item
                label="Pour Quality Certificate"
                >
            <Card>
                <Row align="center">
                    <Col span={8}>
                <Avatar size={64} src={`${process.env.PUBLIC_URL}/profile.png`} />
                    </Col>
                    <Col span={16}>
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarOutlined />
                <br />
                Max Mustermann
                    </Col>
                </Row>
                </Card>
            </Form.Item>
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

        <Button block type="primary" onClick={() => {
            setLoading(true);
            onSubmit({
                wcr, acr, long, lat, req_strength: concrStrength,
                pour_star: pourStar, pour_revenue: pourRev
        })}
        }
        
        style={{
            marginBottom: "50px"
        }}>
            {isLoading ? <Spin /> : "Submit"}
        </Button>

    </Space>
}
