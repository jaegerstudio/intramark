/**
 * This component is responsible for performing login functionality.
 */
import "./login.css"
import React, { Component } from "react";
import axios from "axios";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import {FORGOT_PASSWORD, LOGIN} from "../../config";

class Login extends Component {

  constructor(props) {
    super(props)

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      this.props.history.push({
        pathname: '/'
      });
    }

    this.state = {
      validated: false,
      success: '',
      formFields: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      },
      showForgotPassword: false,
    }
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    this.setState({validated: true});
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    if (this.state.showForgotPassword) {
      const body = {email: this.state.formFields.email};
      axios.post(FORGOT_PASSWORD, body).then(() => {
        this.setState({
          validated: false,
          success: 'You will receive an email with the new password for your account (be sure to check spam folders).',
          formFields: {
            email: '',
            password: ''
          },
          errors : {
            email: '',
            password: ''
          },
          showForgotPassword: false,
        });
        setTimeout(() => {
          this.props.handleClose();
        }, 3000);
      }).catch(error => {
        if (error.response && error.response.status === 412) {
          this.setState({
            errors: {
              email: "Account associated with provided email doesn't exist or not approved."
            }
          });
        }
      })
    } else {
      const body = this.state.formFields;
      axios.post(LOGIN, body).then(response => {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        this.setState({
          validated: false,
          formFields: {
            email: '',
            password: ''
          },
          errors : {
            email: '',
            password: ''
          },
          showForgotPassword: false,
        })
        this.props.handleClose();
        this.props.history.push({
          pathname: '/intramark'
        });
      }).catch(error => {
        if (error.response && error.response.status === 401) {
          this.setState({
            errors: {
              password: "Username and/or password is incorrect or account is not yet approved."
            }
          });
        }
      })
    }
  }

  handleFormFieldChange(input, event) {
    let formFields = this.state.formFields;
    formFields[input] = event.target.value;
    this.setState({formFields})
  }

  openForgotPassword = () => {
    this.setState({showForgotPassword: true});
  }

  render() {
    return (
      <>
        <Modal
          show={this.props.showLogin}
          onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.showForgotPassword ? 'Forgot Password' :  'Welcome Back'}</Modal.Title>
          </Modal.Header>
          <Form noValidate onSubmit={this.handleSubmit} validated={this.state.validated}>
            <Modal.Body>
              <Form.Group controlId="login.email">
                <Form.Control
                  type="email"
                  placeholder="email@example.com"
                  required
                  onChange={(event => this.handleFormFieldChange('email', event))}
                  isInvalid={!!this.state.errors.email}
                  value={this.state.formFields.email}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.email || 'Please enter email'}
                </Form.Control.Feedback>
              </Form.Group>
              {!this.state.showForgotPassword && (
                <>
                  <Form.Group controlId="login.password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      onChange={(event => this.handleFormFieldChange('password', event))}
                      value={this.state.formFields.password}
                      isInvalid={!!this.state.errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.password || "Please enter password."}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Row>
                    <Col sm={12}>
                      <a className={'text-underline'} role={'button'} onClick={this.openForgotPassword}>Forgot Password?</a>
                    </Col>
                  </Row>
                </>
              )}
              {this.state.success && (
                <Row className={'mt-3'}>
                  <Col sm={12}>
                    <span className={'text-success'}>{this.state.success}</span>
                  </Col>
                </Row>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant={'primary'} type={'submit'}>{this.state.showForgotPassword ? 'SUBMIT' : 'LOGIN'}</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    )
  }
}

export default Login
