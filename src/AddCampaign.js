import React, { Component } from 'react'
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import PrimaryContact, { Campaign, Distribution } from './input'


export default class AddCampaign extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#f8f9fa" }}>
                <Container>
                    <Row>
                        <h5 style={{ color: "#0275d8", marginTop: "60px" }}>Add New Campaign</h5>
                    </Row>
                    <div className="bg-white rounded shadow-sm p-3">
                        {/* {/* Campaign */}
                        <div style={{ backgroundColor: "#D3D3D3" }}>
                            <p ><b>Campaign</b></p>
                        </div>
                        <br />
                        <Form>
                            <Campaign />
                            <br />
                            {/* {/* Distribution */}
                            <div style={{ backgroundColor: "#D3D3D3" }}>
                                <p ><b>Distribution</b></p>
                            </div>
                            <br />
                            <Distribution />
                            <br/>
                            <Form.Row>
                                <Col></Col> <Col></Col> <Col></Col> <Col></Col> <Col></Col>
                                <Col>
                                    <Button size="lg" variant="secondary">Cancel</Button>
                                </Col><Col>
                                    <Button size="lg">Next ⇻</Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </div>
                </Container>
            </div>
        )
    }
}