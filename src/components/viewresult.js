import { Row, Col, Card, Statistic, Typography, Button } from "antd"
const { Title } = Typography;

export const ViewResult = ({onBack, result}) => {
    console.log("Result", result)
    return <>
    <Title level={3}>Insurance Premium</Title>
    <Row style={{marginBottom: "10px"}}>
            <Col span={24}>
                <Card>
                    <Statistic
                        title="One Off Payment"
                        value={result ? result.premium : '-'}
                        prefix="$"
                        valueStyle={{color: "#3f8600"}}
                        precision={2}>
                    </Statistic>
                </Card>
            </Col>
    </Row><Row style={{ marginBottom: "10px" }}>
            <Col span={24}>

                    <Statistic
                        title="Probability For Failure"
                        value={result ? result.pof : "-"}
                        // prefix="P="
                        precision={4}>
                    </Statistic>

                    <Statistic
                        title="Expected strength"
                        value={result ? result.mean_strength : "-"}
                        // prefix="μ="
                        precision={2}>
                    </Statistic>


                    <Statistic
                        title="Strength variance"
                        value={result ? result.variance_strength : "-"}
                        // prefix="σ="
                        precision={2}>
                    </Statistic>

                    
            </Col>
        </Row>
        <Button onClick={() => onBack()} style={{marginBottom: "10px", marginTop: "100px"}}>Back</Button></>
}