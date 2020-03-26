import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
import { FormCheck } from 'react-bootstrap';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Avatar from 'react-avatar';
import "react-datepicker/dist/react-datepicker.css";
 

export function Input(props) {
    return (
        <>
            <b><p style={{ margin: 0 }}>{props.label}{props.required && <span style={{ color: "red" }}>*</span>}</p></b>
            <input type={props.type}
                className={props.className}
                value={props.value}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onClick={props.onClick}
                disabled={props.disabled}
            >
            </input>
            <span style={{ margin: 0, color: "red", fontSize: "15px" }}>{props.error}{props.error && props.label}</span>
        </>
    )
}

export function TextArea(props) {
    return (
        <>
            <b><p style={{ margin: 0 }}>{props.label}{props.required && <span style={{ color: "red" }}>*</span>}</p></b>
            <textarea
                rows="4"
                type={props.type}
                className={props.className}
                value={props.value}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onClick={props.onClick}
                disabled={props.disabled}>
            </textarea>
            <span style={{ margin: 0, color: "red", fontSize: "15px" }}>{props.error}{props.error && props.label}</span>
        </>
    )
}

export function SingleSelect(props) {
    return (
        <>
            <b><p style={{ margin: 0 }}>{props.label}{props.required && <span style={{ color: "red" }}>*</span>}</p></b>
            <Select options={props.options}
                isSearchable={true}
                isClearable={true}
                isDisabled={props.disabled}
                onChange={props.onChange}
                value={props.value}
            />
            <span style={{ margin: 0, color: "red", fontSize: "15px" }}>{props.error}{props.error && props.label}</span>
        </>
    )
}

export function Date(props) {
    return (
        <>
            <b><p style={{ margin: 0 }}>{props.label}{props.required && <span style={{ color: "red" }}>*</span>}</p></b>
            <DatePicker 
            selected={props.startDate}
            onChange={props.onChange}
            name={props.name}
            placeholderText={props.placeholder}
            />
            <span style={{ margin: 0, color: "red", fontSize: "15px" }}>{props.error}{props.error && props.label}</span>
        </>
    )
}

export default function PrimaryContact(props) {
    return (
        <div>
            <Form.Row>
                <Col>
                    <Input className="form-control" name="firstname" label="First Name" required placeholder="Enter First Name" onChange={props.onChange} error={props.ferror}></Input>
                </Col>
                <Col>
                    <Input className="form-control" name="lastname" label="Last Name" required placeholder="Enter Last Name" onChange={props.onChange} error={props.lerror}></Input>
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Col>
                    <Input className="form-control" name="email" label="Email" required placeholder="Enter Email" onChange={props.onChange} error={props.emailerror}></Input>
                </Col>
                <Col>
                    <Input className="form-control" name="phone" value={props.phonevalue} label="Phone" required placeholder="Enter Phone" onChange={props.onChange} error={props.phoneerror}></Input>
                </Col>
            </Form.Row>
        </div>
    )
}


export function SecondaryComponant(props) {
    return (
        <div>
            <Form.Row>
                <Col>
                    <Input className="form-control" name="sfirstname" label="First Name" onChange={props.onChange} placeholder="First Name" error={props.fserror}></Input>
                </Col>
                <Col>
                    <Input className="form-control" name="slastname" label="Last Name" onChange={props.onChange} placeholder="Last Name" error={props.lserror}></Input>
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Col>
                    <Input className="form-control" name="semail" label="Email" onChange={props.onChange} placeholder="Enter Email" error={props.semailerror}></Input>
                </Col>
                <Col>
                    <Input className="form-control" name="sphone" value={props.sphonevalue} label="Phone" onChange={props.onChange} placeholder="Enter Contact Number" error={props.sphoneerror}></Input>
                </Col>
            </Form.Row>
        </div>
    )
}

export function BusinessAddress(props) {
    const countryoptions = [{ value: "CA", label: "Canada" },
    { value: "US", label: "United State" }]
    return (
        <div>
            <Form.Row>
                <Col>
                    <Input className="form-control" name="address" label="Address" onChange={props.onChange} required placeholder="Enter Address" error={props.address_error}></Input>
                </Col>
                <Col>
                    <Input className="form-control" name="address2" label="Address line 2" onChange={props.onChange} placeholder="Enter Address" ></Input>
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Col>
                    <Input className="form-control" name="city" label="City" onChange={props.onChange} required placeholder="Enter City" error={props.city_error}
                    ></Input>
                </Col>
                <Col>
                    <SingleSelect options={countryoptions} name="country" label="Country" required error={props.country_error} onChange={props.onSelectCUChange}
                    />
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Col>
                    <SingleSelect options={props.options} disabled={!props.country} onChange={props.onSelectSPChange} label={props.country ? props.country.value === "CA" ? "state" : "province" : "state/province"} required error={props.country && props.state_provision_error} />
                </Col>
                <Col>
                    <Input className="form-control" value={props.postalvalues} name="postal" label="Postal" onChange={props.onChange} required placeholder="Enter Postal Code" error={props.postal_error}></Input>
                </Col>
            </Form.Row>
        </div>
    )
}

export function BillingAddress(props) {
    const countryoptions = [{ value: "CA", label: "Canada" },
    { value: "US", label: "United State" }]
    return (
        <div>
            <Form.Row>
                <Col>
                    <Input className="form-control" name="saddress" onChange={props.onChange} disabled={props.isChecked} label="Address" value={props.addressvalue} required placeholder="Enter Address" error={props.saddress_error}></Input>
                </Col>
                <Col>
                    <Input className="form-control" name="saddress2" disabled={props.isChecked} onChange={props.onChange} label="Address line 2" value={props.address2value} placeholder="Enter Address"></Input>
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Col>
                    <Input className="form-control" name="scity" label="City" disabled={props.isChecked} onChange={props.onChange} value={props.cityvalue} required placeholder="Enter City" error={props.scity_error}></Input>
                </Col>
                <Col>
                    <SingleSelect options={countryoptions} onChange={props.onSelectCUChange} value={props.countryvalue} name="scountry" disabled={props.isChecked} label="Country" required error={props.country_error} />
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Col>
                    <SingleSelect options={props.options} disabled={!props.countryvalue || props.isChecked} onChange={props.onSelectSPChange} value={props.spvalue} name="sstate_provision" label={props.scountry ? props.scountry.value === "CA" ? "state" : "province" : "state/province"} required error={props.countryvalue && props.sstate_provision_error} />
                </Col>
                <Col>
                    <Input className="form-control" label="Postal" name="spostal" value={props.postalvalue} onChange={props.onChange} disabled={props.isChecked} required placeholder="Enter Postal Code" error={props.spostal_error}></Input>
                </Col>
            </Form.Row>
        </div>
    )
}
export function FirstComponant(props) {
    return (
        <>
            <Form.Row>
                <Col>
                    <Input className="form-control" name="compnyName" label="Company Name" onChange={props.onChange} required placeholder="Company Name" error={props.compnyName_error}></Input>
                </Col>
                <Col>
                    <Input className="form-control" name="compnyWebsiteAddress" label="Company Website Address" onChange={props.onChange} required placeholder="e.g. www.abc.com" error={props.compnyWebsiteAddress_error}></Input>
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Col>
                    <SingleSelect options={props.personoptions} onChange={props.onSelectSalesPersonChange} label="Salesperson" required error={props.salesperson_error} />
                </Col>
                <Col>
                    <SingleSelect options={props.induoption} onChange={props.onSelectIndusCateChange} label="Industry Category" required error={props.industryCategory_error} />
                </Col>
            </Form.Row>
        </>
    )
}

export function Campaign(props) {
    return (
        <>
            <Form.Row>
                <Col>
                    <SingleSelect
                        name="salesperson"
                        label="Sales Person"
                        required
                    />
                </Col>

                <Col>
                    <SingleSelect
                        name="advertiser"
                        label="Advertiser"
                        required
                    />
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Col>
                    <Input
                        className="form-control"
                        name="title "
                        label="Title "
                        required
                        placeholder="Title" >
                    </Input>
                </Col>
                <Col>
                    <Input
                        className="form-control"
                        name="preferredlandingpageurl "
                        label="Preferred Landing Page URL "
                        required
                        placeholder="e.g www.abc.com" >
                    </Input>
                </Col>
            </Form.Row>
            <br />
            <Form.Row>
                <Col>
                    <Input
                        className="form-control"
                        name="price "
                        label="Price"
                        required
                        placeholder="Price" >
                    </Input>
                </Col>
                <Col>
                    <TextArea
                        className="form-control"
                        name="description "
                        label="Description"
                        required
                        placeholder="Description" >
                    </TextArea>
                </Col>
            </Form.Row>
        </>
    )
}


export function Distribution(props) {
    return (
        <div>
            <Form.Row>
                <Col>
                    <SingleSelect
                        name="targetmarket"
                        label="Target Market"
                        required
                    />
                </Col>
                <Col>
                    <Input
                        className="form-control"
                        name="views  "
                        label="Views "
                        required
                        placeholder="Minimum Value is 2500" >
                    </Input>
                </Col>
                
                </Form.Row>
                <br />
                <Form.Row>
                <Col>
                    <Date
                    className="form-control"
                        selected={props.startDate}
                        onChange={props.onChange}
                        name="startdate"
                        label="Start Date"
                        placeholder="DD-MM-YYYY"
                        required
                    />
                </Col>
                 <Col></Col>
                </Form.Row>
                <br/>
                <Form.Row>
                <Col>
                <Date
                    className="form-control"
                        selected={props.startDate}
                        onChange={props.onChange}
                        name="enddate"
                        label="Select End Date "
                        placeholder="DD-MM-YYYY"
                        required
                    />
                </Col>
                <Col>
                <Avatar name={"O R"} size={50} round="50px" />
                </Col>
                <Col>
                <SingleSelect
                        name="select"
                        label="Select"
                        required
                    />
                </Col>
                <Col>
                <Input
                        className="form-control"
                        name="duration  "
                        label="Duration "
                        required
                        placeholder="Enter The Duration" >
                    </Input>
                </Col>
                </Form.Row>
            
        </div>
    )
}


Input.defaultProps = {
    type: "text",
    name: "name",
    placeholder: "Enter a Value",
    isRequired: false,
    className: ""
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string
}
