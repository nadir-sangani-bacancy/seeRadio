import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './8_end-green.png';
import voice from './radio.png';
import image from './photo.png';
import Axios from 'axios';


class campaignDetail extends Component {

    constructor() {
        super()
        this.state = {
            persons: ""
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:8080/api/campaign/${this.props.match.params.id}`, {
            headers: {
                'x-token': localStorage.token
            }
        }).then(response => response)
            .then(response => {
                this.setState({ persons: response.data.data })
            })
            .catch(error => error)

    }

    render() {
        return (<>{this.state.persons &&
            <div style={{ backgroundColor: "#f8f9fa" }}>
                <Container>
                    <br /><br />
                    <Row>
                        <Col>
                            <h5>Advertiser</h5>
                            <b>{this.state.persons.statusByPerson.firstName}</b>
                        </Col>
                        <Col>
                            <h5>Campaign Name</h5>
                            <b>{this.state.persons.title.replace(/-[a-z]+/, "")}</b>
                        </Col>
                        <Col>
                            <h5>Campaign Number</h5>
                            <b>{this.state.persons.clientCampaignNumber}</b>
                        </Col>
                        <Col>
                            <h5>Sales Organization</h5>
                            <b>{this.state.persons.SalesOrgCompany.companyName}</b>
                        </Col>
                    </Row>
                    <div style={{ marginTop: "20px" }} className="bg-white rounded shadow-sm p-3">
                        <Row>
                            <Col>
                                <h6>Status</h6>
                                <b>Adata</b>
                            </Col>
                            <Col>
                                <h6>Action required by</h6>
                                <b>{this.state.persons.statusByPerson.firstName} {" "} {this.state.persons.statusByPerson.lastName}</b>
                            </Col>
                            <Col>
                                <h6>Next Action Due By</h6>                            
                                <b>{this.state.persons.statusDueDate}</b>
                            </Col>
                            <Col></Col>
                        </Row>
                        <hr /><br /><br />
                        <Row>
                            <Col><h5><b>Information</b></h5><hr /></Col>
                        </Row>
                        <Row>
                            <Col>
                                <p style={{ backgroundColor: "#D3D3D3" }}><b>Account Manager Assigned</b></p>
                                <b>{this.state.persons.statusByPerson.firstName} {" "} {this.state.persons.statusByPerson.lastName}</b>
                            </Col>
                            <Col>
                                <p style={{ backgroundColor: "#D3D3D3" }}><b>Sales Organization</b></p>
                                <b>{this.state.persons.SalesOrgCompany.companyName}</b>
                            </Col>
                            <Col></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <p style={{ backgroundColor: "#D3D3D3" }}><b>Sales Person Assigned</b></p>
                                <b>{this.state.persons.SalesOrgCompany.Market.name}</b>
                            </Col>
                            <Col>
                                <p style={{ backgroundColor: "#D3D3D3" }}><b>Graphic Designer Assigned</b></p>
                                <b></b>
                            </Col>
                            <Col></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <p style={{ backgroundColor: "#D3D3D3" }}><b>Distribution Partner Company Assigned</b></p>
                                <b>{this.state.persons.distPartner}</b>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <br /><br /><br />
                        <Row>
                            <Col><h5><b>Production Progress</b></h5><hr /></Col>
                        </Row>
                        <Row>
                            <Col>
                                <img style={{ width: "30%" }} src={logo} />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <p style={{ backgroundColor: "#D3D3D3" }}><b>Script File</b> <a href={this.state.persons.CampaignAssets[1].assetUrl} style={{ marginLeft: "8px" }} > ⮟ Download</a></p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <div style={{ border: "1px solid green" }}>
                                    <br />
                                    <Row>
                                        <div style={{ marginLeft: "15px" }}>
                                            <img style={{ height: "70px", width: "70px" }} src={image} />
                                        </div>
                                        <div style={{ marginLeft: "10px" }}>
                                            <Col>
                                                <p><b>File Name : {this.state.persons.CampaignAssets[1].assetOrignalName}</b></p>
                                                <p><b>File Upload by : {this.state.persons.CampaignAssets[1].uploadedByPerson.firstName}{" "}{this.state.persons.CampaignAssets[1].uploadedByPerson.lastName}</b></p>
                                                <p><b>Upload Date : {this.state.persons.CampaignAssets[1].createdAt.replace(/T[0-9 a-z A-Z : .]+/, "")}</b></p>
                                            </Col>
                                        </div>
                                    </Row>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <p style={{ backgroundColor: "#D3D3D3" }}><b>Voice File</b> <a style={{ marginLeft: "8px" }} href={this.state.persons.CampaignAssets[0].assetUrl}> ⮟ Download</a></p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <div style={{ border: "1px solid green" }}>
                                    <br />
                                    <Row>
                                        <div style={{ marginLeft: "15px" }}>
                                            <img style={{ height: "70px", width: "70px" }} src={voice} />
                                        </div>
                                        <div style={{ marginLeft: "10px" }}>
                                            <Col>
                                                <p><b>File Name : {this.state.persons.CampaignAssets[0].assetOrignalName}</b></p>
                                                <p><b>File Upload by : {this.state.persons.CampaignAssets[0].uploadedByPerson.firstName}{" "}{this.state.persons.CampaignAssets[1].uploadedByPerson.lastName}</b></p>
                                                <p><b>Upload Date : {this.state.persons.CampaignAssets[0].createdAt.replace(/T[0-9 a-z A-Z : .]+/, "")}</b></p>
                                            </Col>
                                        </div>
                                    </Row>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                        <br /><br /><br />
                        <Row>
                            <Col><h5><b>Campaign</b></h5><hr /></Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5><b>Description</b></h5>
                                <p>{this.state.persons.title.replace(/[a-z  A-Z ]+-/, "")}</p>
                            </Col>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <br /><br />
                        <Row>
                            <Col>
                                <h5><b>Preferred Landing Website URL</b></h5>
                                <p><a href={this.state.persons.landingpageURL}>{this.state.persons.landingpageURL} </a></p>
                            </Col>
                            <Col>
                                <h5><b>Ad Package Purchased</b></h5>
                                <p>{this.state.persons.CampaignInventories[0].viewsPurchased}</p>
                            </Col>
                            <Col></Col>
                        </Row>
                        <br /><br />
                        <Row>
                            <Col>
                                <h5><b>Target Market</b></h5>
                                <p>{this.state.persons.targetMarket}</p>
                            </Col>
                            <Col>
                                <h5><b>Campaign Dates</b></h5>
                                <p>{this.state.persons.CampaignInventories[0].createdAt.replace(/T[0-9 a-z A-Z : .]+/, "")} TO {this.state.persons.CampaignInventories[0].updatedAt.replace(/T[0-9 a-z A-Z : .]+/, "")}</p>
                            </Col>
                            <Col></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col></Col><Col></Col><Col></Col><Col></Col>
                            <Col>
                                <Button size="lg" variant="secondary">Cancel</Button>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </div>
        }
        </>
        );
    }
}

export default campaignDetail;

{/* campaign-detail <p>{this.props.match.params.id}</p> */ }