import React, { Component } from 'react'
import './App.css';

import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import Swal from 'sweetalert2'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            users: [{}],
            local_email: null,
            local_password: null,
            error: null,
            flag: ""
        }
    }

    setvalue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        Axios.post(`http://localhost:8080/pub/login`, { email: this.state.local_email, password: this.state.local_password })
            .then(response => response)
            .then(data => {
                if (data.data.success) {
                    localStorage.token = data.data.data.token;
                    localStorage.firstname = data.data.data.personData.firstName;
                    localStorage.lastname = data.data.data.personData.lastName;
                    localStorage.email = data.data.data.personData.email;
                    localStorage.roll = data.data.data.personData.roleCode;
                    localStorage.passwordStatus = data.data.data.personData.passwordStatus;
                    localStorage.companyName = data.data.data.personData.company.companyName;
                    localStorage.userId = data.data.data.personData.id;
                    localStorage.createdByPerson = data.data.data.personData.createdByPerson;
                    localStorage.companyType = data.data.data.personData.companyType;
                    this.props.history.replace("/Dashbord")

                }
            }
            )
            .catch(error => {
                this.setState({ error: error })
                //console.log(error.response)
                Swal.fire({
                    icon: 'error',
                    text: error.response.data.errorMessage,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    timer: 1500,
                    position: 'top-end',
                })
            });
    }

    render() {
        
        return (

            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <h2 className="active"> Sign In </h2>

                    <div className="fadeIn first">
                        <img alt="login_logo" src="https://img.icons8.com/bubbles/500/000000/user.png" id="icon" />
                    </div>


                    <form>
                        <input className="input-text" type="text" id="login" className="fadeIn second" name="local_email" onChange={(e) => this.setvalue(e)} placeholder="example@seeradio.com" autoComplete="off" />
                        <input type="password" id="password" className="fadeIn third" name="local_password" onChange={(e) => this.setvalue(e)} placeholder="******" autoComplete="off" />
                        <input type="button" className="fadeIn fourth" value="Log In" onClick={() => this.login()} />
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
            </div>

        )
    }
}
