import React, { Component } from 'react';
import { Button, Container, Row, Col, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './Pagination'
import './App.css'


class CampaignTable extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      Modaldata: "",
      show: false
    }
  }

  componentDidMount() {
    let data = {
      "limit": 20,
      "orderby": "startDate",
      "offset": 0,
      "soaID": localStorage.personid
    }

    Axios.post("http://localhost:8080/api/campaign/getAllCampaigns", data, {
      headers: {
        'x-token': localStorage.token
      }
    }).then(response => response)
      .then(response => {
        this.setState({
          data: response.data.data.rows
        })
      })
      .catch(error => error)

  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  getModal = (a) => {
    console.log(a)
    Axios.get(`http://localhost:8080/api/person/get/${a}`, {
      headers: {
        'x-token': localStorage.token
      }
    }).then(response => response)
      .then(response => {
        this.setState({
          Modaldata: response.data.data,
          show: true
        })
        //console.log("advertiser", response.data.data)
      })
      .catch(error => error)
  }

  render() {
    let columns = [
      {
        Header: "ID",
        accessor: "clientCampaignNumber"
      },
      {
        Header: "Title/Details",
        accessor: "title",
        Cell: ({ row }) => (<>
          <Link to={{ pathname: `/campaign-detail/${row._original.id}`, state: { data: row } }}>
            {row.title.replace(/-[a-z]+/, "")}
          </Link><br />
          {row._original.description}</>
        ),
      },
      {
        Header: "Advertiser",
        accessor: "statusWithPerson.firstName"
      },
      {
        Header: "Action Required By",
        accessor: "statusWithPerson.firstName",
        Cell: ({ row }) => (<>
          <Link to="#" onClick={() => this.getModal(row._original.statusWithPerson.id)}>
            {row._original.statusWithPerson.firstName}{" "}{row._original.statusWithPerson.lastName}
          </Link><br />
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => {
              const label = { "SRA": "See Radio Administrator", "SOA": "Sales Organization Administrator", "Advertiser": "Advertiser", "SOS": "Salesperson", "SRAM": "See Radio Account Manager" }
              return (
                <Tooltip {...props}>
                  {label[row._original.statusWithPerson.roleCode]}
                </Tooltip>
              )
            }}
          >
            <a>({row._original.statusWithPerson.roleCode})</a>
          </OverlayTrigger>
        </>
        ),
      },
      {
        Header: "Next Action Due By",
        accessor: "statusDueDate",
        Cell: ({ row }) => (<>
          {(new Date(row.statusDueDate)).toLocaleDateString('en-US', "dd-mmm-yyyy")}<br />
          <span className="badge badge-danger">Overdue</span>
        </>
        )

      },
      {
        Header: "Start",
        accessor: "startDate"
      },
      {
        Header: "Finish",
        accessor: "endDate",
      }
    ];
    return (<>
      <div style={{ marginTop: "30px" }}>
        <Container>
          <Row>
            <Col>
              <Button variant="dark">Search Filter</Button>
            </Col>
            <Col>
              <h4 style={{ marginTop: "10px" }}>Active Campaigns/Orders</h4>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col style={{ marginTop: "20px" }}>
              <ReactTable data={this.state.data} columns={columns} minRows={10}
                defaultPageSize={10} PaginationComponent={Pagination}
              />
            </Col>
          </Row>
        </Container>
      </div>
      {this.state.Modaldata && <Modal show={this.state.show} onHide={() => this.handleClose()} centered>
        <Modal.Header closeButton style={{ color: "white", backgroundColor: "#2d9af3" }}>
          <Modal.Title>{this.state.Modaldata.person.firstName}{" "}{this.state.Modaldata.person.lastName}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div>
            <div className="row mb-1">
              <div className="col-lg-4 col-sm-6">
                <h6 className="text-black fw-700"><b>Company Name</b></h6>
                <p className="fw-600 text-black  mb-4">{this.state.Modaldata.companyData.companyName}</p>
              </div>
              <div className="col-lg-4 col-sm-6">
                <h6 className="text-black fw-700"><b>Role</b></h6>
                <p className="fw-600 text-black  mb-4">{this.state.Modaldata.person.roleCode}</p>
              </div>
            </div>
            <h4 className="text-graylight fw-700 border-bottom pb-2 mb-3">Contact Information</h4>
            <div className="row mb-4 mb-lg-5">
              <div className="col-xl-4 col-lg-5 mb-3 mb-lg-0">
               <h6 className="text-black fw-700"><b>Address</b></h6>
                <p className="text-black fw-700">{this.state.Modaldata.person.Address.address}</p>
                <p className="fw-600 text-black mb-0">{this.state.Modaldata.person.Address.address2}</p>
                <p className="fw-600 text-black mb-0">{this.state.Modaldata.person.Address.city}</p>
                <p className="fw-600 text-black mb-0">{this.state.Modaldata.person.Address.postal}</p>
                <p className="fw-600 text-black mb-0">{this.state.Modalstate}</p>
                <p className="fw-600 text-black mb-0">{this.state.Modalcountry}</p>
              </div>
              <div className="col-xl-4 col-lg-5 mb-3 mb-lg-0">
                <h6 className="text-black fw-700"><b>Email</b></h6>
                <p className="fw-600 text-black mb-4 ">{this.state.Modaldata.person.email}</p>
                <h6 className="text-black fw-700"><b>Phone</b></h6>
                <p className="fw-600 text-black mb-0">{this.state.Modaldata.person.phone}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.handleClose()}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      }
    </>
    );
  }
}

export default CampaignTable;