import axios from "axios";
import moment from "moment";
import { Component } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { CONTACT_US } from "../../config";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    const currentDate = moment(new Date()).format('yyyy-MM-DD')
    console.log(props)
    this.state = {
      validated: false,
      minDate: currentDate,
      success: "",
      formFields: {
        reason: props.selectFeedback ? 'Provide feedback' : 'Schedule a product intro call',
        firstName: '',
        lastName: '',
        email: '',
        linkedIn: '',
        message: '',
        date: '',
        time: '',
      }
    }
  }

  handleFormFieldChange(input, event) {
    let formFields = this.state.formFields;
    formFields[input] = event.target.value;
    this.setState({formFields})
  }

  handleContactUs = (event) => {
    const form = event.currentTarget;
    this.setState({validated: true});
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    const formFields = this.state.formFields;
    if (formFields.reason === 'Schedule a product intro call') {
      formFields.message = moment(formFields.date, 'yyyy-MM-DD').format("MM/DD/yyyy") +
        " " + moment(formFields.time, "HH:mm").format('hh:mm A') + " (ET)";
    }

    axios.post(CONTACT_US, formFields).then(() => {
      this.setState({
        success: "Request submitted successfully!"
      });
      setTimeout(() => {
        this.props.handleClose();
      }, 3000);
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <Modal show={this.props.showContactUs} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Form validated={this.state.validated} onSubmit={this.handleContactUs} noValidate>
          <Modal.Body>
            <Row className={'mb-3'}>
              <Col sm={12}>
                Fill out the form below and we’ll reply as soon as we can.
              </Col>
            </Row>
            <Form.Group controlId="contactUs.select">
              <Form.Control
                required
                as="select"
                value={this.state.formFields.reason}
                onChange={(event => this.handleFormFieldChange('reason', event))}>
                <option value={'Schedule a product intro call'}>Schedule a product intro call</option>
                <option value={'Request access to Mark history library'}>Request access to Mark history library</option>
                <option value={'Provide feedback'}>Provide feedback</option>
                <option value={'Forgot password'}>Forgot password</option>
                <option value={'Technical difficulty'}>Technical difficulty</option>
                <option value={'General inquiry'}>General inquiry</option>
              </Form.Control>
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="contactUs.firstName">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    required
                    onChange={(event => this.handleFormFieldChange('firstName', event))}
                    value={this.state.formFields.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter first name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="contactUs.lastName">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    required
                    onChange={(event => this.handleFormFieldChange('lastName', event))}
                    value={this.state.formFields.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter last name.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="contactUs.email">
              <Form.Control
                type="email"
                placeholder="email@example.com"
                required
                onChange={(event => this.handleFormFieldChange('email', event))}
                value={this.state.formFields.email}
              />
              <Form.Control.Feedback type="invalid">
                Please enter email.
              </Form.Control.Feedback>
            </Form.Group>
            {this.state.formFields.reason === 'Request access to Mark history library' && (
              <Form.Group controlId="contactUs.linkedIn">
                <Form.Control
                  type="url"
                  placeholder="LinkedIn"
                  required
                  onChange={(event => this.handleFormFieldChange('linkedIn', event))}
                  value={this.state.formFields.linkedIn}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter LinkedIn.
                </Form.Control.Feedback>
              </Form.Group>
            )}
            {this.state.formFields.reason === 'Schedule a product intro call'
              ? (
                <Row>
                  <Col>
                    <Form.Group controlId="contactUs.date">
                      <Form.Control
                        type="date"
                        required
                        min={this.state.minDate}
                        onChange={(event => this.handleFormFieldChange('date', event))}
                        value={this.state.formFields.date}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please select a date.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="contactUs.time">
                      <Form.Control
                        type="time"
                        required
                        onChange={(event => this.handleFormFieldChange('time', event))}
                        value={this.state.formFields.time}
                      />
                      <Form.Text id="timeHelpBlock" muted>
                        The time is in Eastern Timezone.
                      </Form.Text>
                      <Form.Control.Feedback type="invalid">
                        Please enter time.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              )
              : (
                <Form.Group controlId="contactUs.message">
                  <Form.Control
                    as="textarea"
                    required
                    placeholder="Write your message here"
                    onChange={(event => this.handleFormFieldChange('message', event))}
                    value={this.state.formFields.message}
                    rows={3} />
                </Form.Group>
              )
            }
            {this.state.success && (
              <Row className={'mt-3'}>
                <Col sm={12}>
                  <span className={'text-success'}>{this.state.success}</span>
                </Col>
              </Row>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Row className={'w-100 text-center'}>
              <Col sm={12}>
                <Button variant={'primary'} type={"submit"}>
                  SEND
                </Button>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Text id="timeHelpBlock" muted>
                  We will not share your information with third parties.
                </Form.Text>
              </Col>
            </Row>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default ContactUs;
