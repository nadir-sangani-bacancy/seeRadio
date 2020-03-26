import React, { Component } from 'react'
import PrimaryContact, {BusinessAddress, BillingAddress, FirstComponant, SecondaryComponant } from './input'
import './App.css';
import Axios from 'axios';
import { indusryformate, personsformate, getcountryformate, phoneval } from './helper';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import { FormRow } from 'react-bootstrap/Form';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
export default class ClientContract extends Component {


  constructor() {
    super()
    this.state = {
      // state variables
      compnyName: "",
      salesperson: "",
      compnyWebsiteAddress: "",
      industryCategory: "",

      firstname: "",
      lastname: "",
      email: "",
      phone: "",

      sfirstname: "",
      slastname: "",
      semail: "",
      sphone: "",

      address: "",
      address2: "",
      city: "",
      country: "",
      state_provision: "",
      postal: "",

      saddress: "",
      saddress2: "",
      scity: "",
      scountry: "",
      sstate_provision: "",
      spostal: "",
      //error state variable
      compnyName_error: "",
      compnyWebsiteAddress_error: "",
      salesperson_error: "",
      industryCategory_error: "",

      firstname_error: "",
      lastname_error: "",
      email_error: "",
      phone_error: "",

      sfirstname_error: "",
      slastname_error: "",
      semail_error: "",
      sphone_error: "",

      address_error: "",
      address2_error: "",
      city_error: "",
      country_error: "",
      state_provision_error: "",
      postal_error: "",

      saddress_error: "",
      saddress2_error: "",
      scity_error: "",
      scountry_error: "",
      sstate_provision_error: "",
      spostal_error: "",

      value: "",
      isChecked: false,

      persons: "",
      industry: "",
      bulist: "",
      bilist: "",
      // select option values
      salespersonOptions: [{ value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }]

    }
  }

  getdata() {
    const { company, primarycontact, secondarycontact, businessaddress, billingaddress, addflag } = this.state

    const sendData = {
      companyName: this.state.companyName,
      companyWebsite: this.state.compnyWebsiteAddress,
      personID: localStorage.userId,
      sosID: this.state.salesperson.value,
      companyType: localStorage.companyType,
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      secondaryContact: {
        firstName: this.state.sfirstname,
        lastName: this.state.slastname,
        email: this.state.semail,
        phone: this.state.sphone,
      },
      contactAddress: {
        business: {
          address: this.state.address,
          address2: this.state.address2,
          city: this.state.city,
          postal: this.state.postal,
          country: this.state.country.value,
          state: this.state.state_provision.value,
          provinceID: this.state.state_provision.value,
        },
        billing: {
          address: this.state.saddress,
          address2: this.state.saddress2,
          city: this.state.scity,
          postal: this.state.spostal,
          country: this.state.scountry.value,
          state: this.state.sstate_provision.value,
          provinceID: this.state.sstate_provision.value,
        }
      },
      addressType: this.state.isChecked ? "businessaddress" : "",
      useSame: this.state.isChecked,
      roleCode: localStorage.roll,
      createdByPerson: localStorage.createdByPerson,
    };
    return sendData;
  }

  nextButton = () => {
    let flag = true;
    let company_primary = ['compnyName', 'compnyWebsiteAddress', 'salesperson', 'industryCategory', 'firstname', 'lastname',
      'email', 'phone', 'address', 'address2', 'city', 'country', 'state_provision', 'postal']
    let secondary_con = ['saddress', 'saddress2', 'scity', 'scountry',
      'sstate_provision', 'spostal']
    let con = ['sfirstname', 'slastname', 'semail', 'sphone',]
    let nameregex = /^[A-Za-z]{2,20}$/
    let emailregex = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/
    let postalregex = /^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] ?\d[A-Z]\d)$/
    let webregxe = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/

    company_primary.map(a => {
      if (this.state[a] === "") { this.setState({ [a + '_error']: "Please Enter " })
       flag = false }
      else {
        if (!nameregex.test(this.state.firstname)) { this.setState({ firstname_error: "Invalid " })
         flag = false }
        if (!nameregex.test(this.state.lastname)) { this.setState({ lastname_error: "Invalid " })
         flag = false }
        if (!emailregex.test(this.state.email)) { this.setState({ email_error: "Invalid " })
         flag = false }
        if (!postalregex.test(this.state.postal)) { this.setState({ postal_error: "Invalid " })
         flag = false }
        if (!postalregex.test(this.state.spostal)) { this.setState({ spostal_error: "Invalid " })
         flag = false }
        if (!webregxe.test(this.state.compnyWebsiteAddress)) { this.setState({ compnyWebsiteAddress_error: "Invalid " })
         flag = false }
      }
    })

    secondary_con.map(b => {
      if (this.state[b] === "") {
        this.setState({ [b + '_error']: "Please Enter " })
        flag = false
      }
    })
    con.map(c => {
      if (this.state.sfirstname || this.state.slastname || this.state.semail || this.state.sphone) {
        if (this.state[c] === "") {
          this.setState({ [c + '_error']: "Please Enter " })
          flag = false
        } else {
          if (!nameregex.test(this.state.sfirstname)) { this.setState({ sfirstname_error: "Invalid " })
           flag = false }
          if (!nameregex.test(this.state.slastname)) { this.setState({ slastname_error: "Invalid " })
           flag = false }
          if (!emailregex.test(this.state.semail)) { this.setState({ semail_error: "Invalid " })
           flag = false }
        }
      } else {
        this.setState({ [c + '_error']: "" })
      }
    })

    if (this.state.isChecked === true) {
      this.setState({
        saddress_error: "", saddress2_error: "", scity_error: "", scountry_error: "", sstate_provision_error: "", spostal_error: ""
      })
    }
    if (flag) {
      let data = this.getdata();
      Axios.get("http://localhost:8080/api/company/client", {
        headers: {
          'x-token': localStorage.token
        },data
      }).then(response => response)
        .then(response => {
          alert("data send success")
        })
        .catch(error => error)

    }
  }

  setValue = (e) => {
    if (e.target.name === "phone" || e.target.name === "sphone") {
      this.setState({
        [e.target.name]: phoneval(e.target.value),
        [e.target.name + '_error']: "",
      })
    }
    else if (e.target.name === "postal" || e.target.name === "spostal") {
      this.setState({
        [e.target.name]: e.target.value.toUpperCase(),
        [e.target.name + '_error']: "",
      })
    }
    else {
      this.setState({
        [e.target.name]: e.target.value,
        [e.target.name + '_error']: "",
      })
    }

    if (this.state.isChecked === true) {
      this.setState({}, () => {
        this.setState({
          saddress: this.state.address,
          saddress2: this.state.address2,
          scity: this.state.city,
          scountry: this.state.country,
          sstate_provision: this.state.state_provision,
          spostal: this.state.postal
        })
      })
    }
  }


  setselectValue = (e, a, b) => {
    //console.log(e)
    if (e) {
      if (a === "business") {
        this.setState({
          [b]: e,
          [b + '_error']: "",
        })
        if (b === "country") {
          Axios.get(`http://localhost:8080/pub/states/${e.value}`)
            .then(response => response)
            .then(response => {
              this.setState({ bulist: getcountryformate(response.data.data) })
            })
            .catch(error => error)
        }
      }
      if (a === "firstComp") {
        this.setState({
          [b]: e,
          [b + '_error']: "",
        })
      }
      if (a === "billing" || this.state.isChecked) {
        this.setState({
          ["s" + b]: e,
          ["s" + b + '_error']: "",
        })
        if (b === "country") {
          Axios.get(`http://localhost:8080/pub/states/${e.value}`)
            .then(response => response)
            .then(response => {
              this.setState({ bilist: getcountryformate(response.data.data) })
            })
            .catch(error => error)
        }
      }
    }
    else {
      if (a === "business") {
        this.setState({
          [b]: "",
        })
      }
      if (a === "billing" || this.state.isChecked) {
        this.setState({
          ["s" + b]: ""
        })
      }
    }
  }

  checkBoxhandler = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    })
    if (this.state.isChecked === true) {
      this.setState({
        saddress: "", saddress2: "", scity: "", scountry: "", sstate_provision: "", spostal: "",
      })
    } else {
      this.setState({
        saddress: this.state.address, saddress2: this.state.address2, scity: this.state.city, scountry: this.state.country,
        sstate_provision: this.state.state_provision, spostal: this.state.postal,
        saddress_error: "", saddress2_error: "", scity_error: "", scountry_error: "", sstate_provision_error: "", spostal_error: ""
      })
    }
  }

  componentDidMount() {
    Axios.get("http://localhost:8080/api/company/persons", {
      headers: {
        'x-token': localStorage.token
      }
    }).then(response => response)
      .then(response => {
        this.setState({ persons: personsformate(response.data.data) })
      })
      .catch(error => error)

    Axios.get("http://localhost:8080/api/wholesalepricing/getIndustries", {
      headers: {
        'x-token': localStorage.token
      }
    }).then(response => response)
      .then(response => {
        this.setState({ industry: indusryformate(response.data.data) })
      })
      .catch(error => error)
  }

  render() {
    return (
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <Row>
            <Col>
              <br /><br />
              <ul className="nav nav-tabs border-bottom-0 mb-3 d-flex align-items-center justify-content-center" id="myTab">
                <li className="nav-item"><button className="nav-link active" disabled>Step 1</button></li>
                <li className="nav-item"><button className="nav-link " disabled>Step 2</button></li>
                <li className="nav-item"><button className="nav-link " disabled>Step 3</button></li>
              </ul>
              <br /><br />
            </Col>
          </Row>
          <Row>
            <h5 style={{ color: "#0275d8" }}>Add New Advertiser</h5>
          </Row>
          <div className="bg-white rounded shadow-sm p-3">
            <Form>
              {/* first componant */}
              <FirstComponant
                compnyName_error={this.state.compnyName_error} compnyWebsiteAddress_error={this.state.compnyWebsiteAddress_error}
                salesperson_error={this.state.salesperson_error} industryCategory_error={this.state.industryCategory_error}
                onChange={(e) => this.setValue(e)}
                personoptions={this.state.persons}
                induoption={this.state.industry}
                onSelectSalesPersonChange={(e) => this.setselectValue(e, "firstComp", "salesperson")}
                onSelectIndusCateChange={(e) => this.setselectValue(e, "firstComp", "industryCategory")}
              />

              <br />
              {/* primary contact componant */}
              <div style={{ backgroundColor: "#D3D3D3" }}>
                <p ><b>Primary Contact</b></p>
              </div>
              <br />
              <PrimaryContact
                ferror={this.state.firstname_error} lerror={this.state.lastname_error} emailerror={this.state.email_error}
                phoneerror={this.state.phone_error}
                onChange={(e) => this.setValue(e)}
                phonevalue={this.state.phone}
              />
              <br />

              {/* //secondary code will goes here */}
              <div style={{ backgroundColor: "#D3D3D3" }}>
                <p ><b>Secondary Contact (Billing-Optional)</b></p>
              </div>
              <br />
              <SecondaryComponant
                fserror={this.state.sfirstname_error} lserror={this.state.slastname_error} semailerror={this.state.semail_error} sphoneerror={this.state.sphone_error}
                onChange={(e) => this.setValue(e)}
                sphonevalue={this.state.sphone}
              />
              <br />

              {/* business address */}
              <div style={{ backgroundColor: "#D3D3D3" }}>
                <p ><b>Business Address</b></p>
              </div>
              <br />

              <BusinessAddress
                address_error={this.state.address_error} city_error={this.state.city_error}
                country_error={this.state.country_error} state_provision_error={this.state.state_provision_error}
                postal_error={this.state.postal_error}
                options={this.state.bulist}
                country={this.state.country}
                addressvalues={this.state.address} address2values={this.state.address2} cityvalues={this.state.city}
                postalvalues={this.state.postal} spvalues={this.state.state_provision}
                onChange={(e) => this.setValue(e)}
                onSelectCUChange={(e) => this.setselectValue(e, "business", "country")}
                onSelectSPChange={(e) => this.setselectValue(e, "business", "state_provision")}
              />
              <br />

              {/* billing address */}
              <div style={{ backgroundColor: "#D3D3D3" }}>
                <p><b>Billing Address{" "}<input type="checkbox" onChange={() => this.checkBoxhandler()} />Same as Business Address</b></p>
              </div>
              <br />

              <BillingAddress
                saddress_error={this.state.saddress_error} scity_error={this.state.scity_error} country_error={this.state.scountry_error}
                sstate_provision_error={this.state.sstate_provision_error} spostal_error={this.state.spostal_error}
                isChecked={this.state.isChecked}
                onChange={(e) => this.setValue(e)}
                scountry={this.state.scountry}
                addressvalue={this.state.saddress} address2value={this.state.saddress2} cityvalue={this.state.scity}
                postalvalue={this.state.spostal}
                spvalue={this.state.sstate_provision} countryvalue={this.state.scountry}
                options={this.state.bilist}
                onSelectCUChange={(e) => this.setselectValue(e, "billing", "country")}
                onSelectSPChange={(e) => this.setselectValue(e, "billing", "state_provision")}
              />
              <br />
              <Form.Row>
                <Col></Col> <Col></Col> <Col></Col> <Col></Col> <Col></Col>
                <Col>
                  <Button size="lg" variant="secondary">Cancel</Button>
                </Col><Col>
                  <Button size="lg" onClick={() => this.nextButton()}>Next ⇻</Button>
                </Col>
              </Form.Row>
            </Form>
          </div>
        </Container>
      </div>
    )
  }
}
