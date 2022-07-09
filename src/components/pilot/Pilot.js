import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Component } from "react";
import './pilot.css'
import { Button, Col, Form, Row } from "react-bootstrap";
import { REGISTER } from "../../config";

class Pilot extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      formFields: {
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        companyType: '',
        requestSymbol: '',
        receiveFeedback: true,
        receiveCommunication: true
      },
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        companyType: '',
        requestSymbol: '',
      },
      success: ""
    }

    this.companyTypes = [
      'Hedge Fund', 'Mutual Fund', 'Index Fund/ETF', 'Proprietary Fund', 'Clearing Firm', 'Research Firm', 'Other'
    ]
  }

  clearState = () => {
    this.setState({
      validated: false,
      formFields: {
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        companyType: '',
        requestSymbol: '',
        receiveFeedback: false,
        receiveCommunication: false
      },
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        companyType: '',
        requestSymbol: '',
      },
      success: ""
    })
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    this.setState({validated: true});
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    const body = this.state.formFields
    axios.post(REGISTER, body).then(() => {
      this.clearState();
      this.setState({
        success: "Your Intramark Pilot account is sent for approval. You will receive an email with the password for your account once it is approved (be sure to check spam folders)."
      })
      setTimeout(() => {
        this.clearState();
      }, 10000)
    }).catch(error => {
      if (error.response && error.response.status === 412) {
        this.setState({
          errors: {
            email: "This email already has an account."
          }
        });
      }
    })
  }

  handleFormFieldChange(input, event) {
    let formFields = this.state.formFields;
    if (input === 'receiveFeedback' || input === 'receiveCommunication') {
      formFields[input] = !formFields[input];
    } else {
      formFields[input] = event.target.value;
    }
    this.setState({formFields})
  }

  render() {
    return (
      <section className={'pilot-container'}>
        <Row>
          <Col sm={9} className={'pl-0 pr-0'}>
            <Row>
              <Col sm={4} className={'pr-5'}>
                <h2>Pilot Access</h2>
                <Row className={"pilot-list pt-4"}>
                  <Col sm={1}>
                    <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                  </Col>
                  <Col sm={10}>
                    <span>Real-time intraday, intraweek, and intramonth Marks for one (1) US equity ticker symbol of your choice</span>
                  </Col>
                </Row>
                <Row className={"pilot-list"}>
                  <Col sm={1}>
                    <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                  </Col>
                  <Col sm={10}>
                    <span>Real-time intraday, intraweek, and intramonth Marks for DIA, SPY, IWM</span>
                  </Col>
                </Row>
                <Row className={"pilot-list"}>
                  <Col sm={1}>
                    <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                  </Col>
                  <Col sm={10}>
                    <span>Mark History Library</span>
                  </Col>
                </Row>
              </Col>
              <Col sm={8} className={'mark-datapoint pl-4 pr-4'}>
            <span>
              <span className={'heading-2'}>Mark Datapoints </span>
              <sup className={'heading-sup'}>[1]</sup>
            </span>
                <Row className={"pilot-list pt-4"}>
                  <Col sm={6}>
                    <Row>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>Date and timestamp</span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>Mark type/period (Day, Week, Month)</span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>Security symbol</span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>Mark direction (long/short)</span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>Mark price</span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>Confidence level <sup>[2]</sup></span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>Period close price</span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>Mark return at period close</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={6}>
                    <Row>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>Mark price intraperiod rank <sup>[3]</sup></span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>VWAP</span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>VWAP return at period close</span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>DCA price</span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>DCA return at period close</span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>Mark value creation (VWAP) <sup>[4]</sup></span>
                      </Col>
                    </Row>
                    <Row className={'pt-4'}>
                      <Col sm={1}>
                        <FontAwesomeIcon icon={faChevronRight} color={'green'} />
                      </Col>
                      <Col sm={10}>
                        <span>Mark value creation (DCA) <sup>[5]</sup></span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className={'equity-symbol pt-5'}>
                <span>
                  1. Intramark management and employees do not trade on Marks provided to third-parties;
                  2. High is &gt; 60%, Medium is 60-50%, and Low is &lt; 50% estimated Mark rolling success rate for positive implied return by period close;
                  3. For example, long Mark price is better (lower) than 70% of all intraweek prices;
                  4. Only applies to intraday Marks: Difference between the a) Mark implied return at period close and b) Volume Weighted Average Price (VWAP) implied return at period close;
                  5. Only applies to intraday Marks: Difference between the a) Mark implied return at period close and b) Dollar-Cost Average (DCA) price implied return at period close.
                </span>
              </Col>
            </Row>
          </Col>
          <Col sm={3} className={'pl-5'}>
            <h2>Join Free Pilot</h2>
            <h6>No payment info required.</h6>
            <Row className={'pt-4'}>
              <Col sm={12}>
                <Form
                  onSubmit={this.handleSubmit.bind(this)}
                  validated={this.state.validated}
                  noValidate
                  className={'pilot-form'}
                >
                  <Form.Group controlId="form.firstName">
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
                  <Form.Group controlId="form.lastName">
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
                  <Form.Group controlId="form.email">
                    <Form.Control
                      type="email"
                      placeholder="email@example.com"
                      required
                      onChange={(event => this.handleFormFieldChange('email', event))}
                      value={this.state.formFields.email}
                      isInvalid={!!this.state.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.errors.email || "Please enter email."}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="form.companyName">
                    <Form.Control
                      type="text"
                      placeholder="Company Name"
                      required
                      onChange={(event => this.handleFormFieldChange('companyName', event))}
                      value={this.state.formFields.companyName}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter company name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      as={"select"}
                      placeholder="Company Type"
                      required
                      onChange={(event => this.handleFormFieldChange('companyType', event))}
                      value={this.state.formFields.companyType}>
                      {this.companyTypes.map((companyType, index) => (
                        <option key={index}>{companyType}</option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Please select company type.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="form.requestSymbol" as={Row}>
                    <Form.Label column sm={5} className={'equity-symbol'}>
                      Request Marks for one (1) US equity ticker symbol
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control
                        type="text"
                        placeholder="eg., MSFT"
                        required
                        onChange={(event => this.handleFormFieldChange('requestSymbol', event))}
                        value={this.state.formFields.requestSymbol}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a symbol.
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Group>
                  <Row>
                    <Col className={'submit-btn'}>
                      <Button variant="primary" type="submit">
                        SUBMIT REQUEST
                      </Button>
                    </Col>
                  </Row>
                  {this.state.success && (
                    <Row className={'mt-3'}>
                      <Col sm={12} className={'p-3 success-box'}>
                        <span className={'text-success equity-symbol font-weight-bolder'}>{this.state.success}</span>
                      </Col>
                    </Row>
                  )}
                  <Form.Group controlId="form.receiveFeedback" className={'mt-3 equity-symbol'}>
                    <Form.Check
                      type="checkbox"
                      checked={this.state.formFields.receiveFeedback}
                      label="I am willing to be contacted for feedback on Intramark products and services."
                      onChange={(event => this.handleFormFieldChange('receiveFeedback', event))}
                    />
                  </Form.Group>
                  <Form.Group controlId="form.receiveCommunication" className={'mt-3 equity-symbol'}>
                    <Form.Check
                      type="checkbox"
                      checked={this.state.formFields.receiveCommunication}
                      label="I want to receive communications about Intramark news and updates."
                      onChange={(event => this.handleFormFieldChange('receiveCommunication', event))}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Pilot;
