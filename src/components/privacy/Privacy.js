import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import './privacy.css';
import ContactUs from "../contact-us/ContactUs";
import Header from "../header/Header";

class Privacy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showContactUs: false
    }
  }

  openContactUs = () => {
    this.setState({showContactUs: true})
  }

  handleContactUsClose = () => {
    this.setState({showContactUs: false})
  }

  render() {
    return (
      <>
        <Header />
        <section className={'pb-5'}>
          <Row>
            <Col>
              <h2 className={'pt-5 pb-3'}>Privacy Notice</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5'}>
              <h6>Privacy Policy</h6>
              At Intramark we value our customers and maintaining customer trust and confidence is our highest
              priority. While it is necessary that we obtain accurate and current information about our customers in
              order to provide the highest level of customer service, we are dedicated to protecting the privacy and
              confidentiality of our customer’s information. Intramark will never sell your personal information to
              anyone. We will not use or distribute your personal information in any way without issuing prior
              notification to you. We promise that we will uphold the privacy policies and procedures as set forth
              below.
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-5'}>
              <h6>Information we collect about our Customers</h6>
              We collect personal information about you from the following sources:
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>Information we receive from you on applications, forms or otherwise (whether written or electronic);and</span>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>Information about your transactions with us, our affiliates or others.</span>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                &quot;Cookies&quot; are small text files consisting of encrypted information assigned to a computer’s browser.
                Cookies do not collect or transmit your personal information. For users of the non-public areas of our
                website that require a User ID or password, Intramark may use cookies to identify you so that you do
                not have to input your password multiple times as you navigate our site. Intramark may also use cookies
                for administrative purposes, such as to maintain security on our site.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-5'}>
              <h6>Information we may share about our Customers</h6>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>Intramark will not sell personal information regarding our current or former customers.</span>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Intramark may share personal information about our current and former customers with our affiliated
                companies and service providers. (Intramark affiliated companies include our subsidiaries, foreign
                correspondents and branch offices.) In either case, your personal information will remain subject to the
                strictest confidentiality protections.
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                To the extent that we may engage unaffiliated companies to assist in providing services on our web
                site, such providers will be subject to stringent contractual requirements to maintain the confidentiality
                of any personal information they may obtain in connection with the performance of their services for us.
                We will make every effort to make sure that they receive the minimum amount of personal information
                necessary and will be allowed to retain that information only for as long as necessary in order to provide
                such services. Such service providers will only be allowed to use personal information in the course of
                providing services to Intramark and only for the purposes that we authorize.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-5'}>
              <h6>Information we may disclose</h6>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                We may disclose information about current or former customers in order to cooperate with legal or
                regulatory authorities or pursuant to a court order or subpoena.
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                We may also disclose personal information as necessary to perform credit checks, collect debts,
                enforce our legal rights or otherwise protect our interests and property.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-5'}>
              <h6>Security</h6>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>Intramark is committed to protecting your personal information and privacy.</span>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Only authorized Intramark employees or agents will have access to your personal information. All of
                our employees, affiliates and service providers are held to the highest standards of privacy and security.
                Paper documents are stored in a locked room. Electronic information is password protected and only
                accessible by authorized employees. Only authorized employees have access and any unauthorized
                dissemination of nonpublic personal information will lead to disciplinary action, up to and including
                termination of employment.
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className={'privacy-policy pl-5 pr-5 pt-2'}>
              <span>
                If this privacy policy changes you will be notified through the Intramark web site or in other appropriate ways. If you have questions relating to this policy, please
                <strong className={'text-success'} role={'button'} onClick={this.openContactUs}> Contact Us </strong>
                or your representative.
              </span>
            </Col>
          </Row>
          {this.state.showContactUs && (
            <ContactUs showContactUs={this.state.showContactUs} handleClose={this.handleContactUsClose} />
          )}
        </section>
      </>
    );
  }
}

export default Privacy;