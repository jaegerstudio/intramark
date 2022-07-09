import {Component} from "react";
import { Button, Col, Nav, Navbar, Row } from "react-bootstrap";
import './footer.css'
import { withRouter } from "react-router-dom";
import { scroller } from "react-scroll";
import ContactUs from "../contact-us/ContactUs";

class Footer extends Component {

  constructor(props) {
    super(props);
    const user = JSON.parse(localStorage.getItem('user'));
    this.state = {
      user: user,
      showContactUs: false
    }
  }

  openMarkPortal = () => {
    this.props.history.push({
      pathname: '/intramark'
    });
  }

  handlePilotScroll = () => {
    this.props.history.push({
      pathname: '/',
    })
    setTimeout(() => {
      scroller.scrollTo('pilot', {
        duration: 800,
        delay: 5,
        smooth: 'easeInOutQuart',
        offset: -90
      })
    }, 400)
  }

  openContactUs = () => {
    this.setState({showContactUs: true})
  }

  handleContactUsClose = () => {
    this.setState({showContactUs: false})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && !prevState.user) {
      this.setState({user: user});
    }
  }

  render() {
    return (
      <section>
        <Navbar bg="dark" expand="lg" variant={"dark"}>
          <span>© 2022 Intramark Inc. All Rights Reserved.</span>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link className={'ml-5 mr-5'} href={'/privacy'}>
                Privacy
              </Nav.Link>
              <Nav.Link className={'ml-5 mr-5'} href={'/terms-of-use'}>
                Terms of Use
              </Nav.Link>
              <Nav.Link className={'ml-5 mr-5'} onClick={this.openContactUs}>
                Contact Us
              </Nav.Link>
              {this.state.user ? (
                <Button variant={'secondary ml-5 mr-3'} onClick={this.openMarkPortal}>
                  Mark Portal
                </Button>
              ) : (
                <Button variant={'secondary ml-5 mr-3'} onClick={this.handlePilotScroll}>
                  Join Free Pilot
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Row className={'disclosure-background'}>
          <Col sm={12} className={"disclosure"}>
            <strong>Disclosures</strong>
          </Col>
          <Col sm={12} className={"disclosure"}>
            No Personalized Advice: Intramark is not in the business of rendering personalized investment advice.
            We cannot know all the relevant facts about you and your individual needs, and we cannot claim or
            represent that any particular services are suitable for you. Accordingly, you agree that any
            recommendation or action taken by a service does not constitute a recommendation that a particular
            security, strategy, or action is suitable for you. If you want personal advice, then you should seek a
            registered investment advisor.
          </Col>
          <Col sm={12} className={"disclosure"}>
            You Bear Responsibility for Your Financial and Investment Decisions: By your use of Intramark services,
            you are agreeing that you bear responsibility for your own investment research and investment
            decisions. You also agree that Intramark, its directors, its employees, and its agents will not be liable for
            any investment decision made or action taken by you and others based on information or any other
            material published through our services.
          </Col>
          <Col sm={12} className={"disclosure"}>
            No Guarantees: You agree that Intramark has not made any guarantees about the results of taking any
            action, whether recommended in this website or not. You recognize that your ultimate success or failure
            will be the result of your own efforts, your particular situation, and innumerable other circumstances
            beyond the control and/or knowledge of Intramark. You also recognize that prior results do not
            guarantee a similar outcome. Thus, the results obtained by others – whether current or former
            customers of Intramark or otherwise – applying the principles set out in this website are no guarantee
            that you or any other person or entity will be able to obtain similar results.
          </Col>
          <Col sm={12} className={"disclosure"}>
            Errors and Omissions: This website is a source of information that is intended, but not promised or
            guaranteed, to be correct, complete, and up-to-date. We have taken reasonable steps to ensure that the
            information contained in this website is accurate, but we cannot represent that this website is free of
            errors. You accept that the information contained on this website may be erroneous and agree to
            conduct due diligence to verify any information obtained from this website and/or resources available
            on it prior to taking any action.
          </Col>
          <Col sm={12} className={"disclosure"}>
            Risk Disclosure: Futures and options trading contains substantial risk and is not for every investor. An
            investor could potentially lose all or more than the initial investment. Risk capital is money that can be
            lost without jeopardizing one&#39;s financial security or lifestyle. Only risk capital should be used for trading
            and only those with sufficient risk capital should consider trading. Past performance is not necessarily
            indicative of future results.
          </Col>
        </Row>
        {this.state.showContactUs && (
          <ContactUs showContactUs={this.state.showContactUs} handleClose={this.handleContactUsClose} />
        )}
      </section>
    );
  }
}

export default withRouter(Footer) ;

