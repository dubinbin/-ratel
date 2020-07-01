import React from 'react'
import { Row, Col } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };

export default class LeftModuleBoard extends React.Component {

    render() {
        return (
            <div>
               <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                </Row>
            </div>
        )
    }
}