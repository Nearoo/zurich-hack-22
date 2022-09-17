import { Row, Col, Card, Statistic, Typography, Button } from "antd"
const { Title } = Typography;

export const ViewResult = ({onBack}) => {
    return <>
    <Title level={3}>Insurance Premium</Title>
    <Row style={{marginBottom: "10px"}}>
            <Col span={24}>
                <Card>
                    <Statistic
                        title="One Off Payment"
                        value={7.56}
                        prefix="$"
                        valueStyle={{color: "#3f8600"}}>
                    </Statistic>
                </Card>
            </Col>
    </Row><Row style={{ marginBottom: "10px" }}>
            <Col span={24}>
                    <Statistic
                        title="Cost in case of Failure"
                        value={56000}
                        prefix="$">
                    </Statistic>

                    <Statistic
                        title="Probability For Failure"
                        value={0.0024}
                        prefix="P=">
                    </Statistic>
            </Col>
        </Row>
        <Button onClick={() => onBack()} style={{marginBottom: "10px", marginTop: "100px"}}>Back</Button></>
}