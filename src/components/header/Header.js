/**
 * This component is responsible for showing header along with all possible navigation.
 * This header is added to ApplicationContainer component which is root component for all pages that will be displayed after login.
 */
import "./header.css"
import {Component} from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { scroller } from "react-scroll";
import {withRouter} from "react-router-dom";
import ContactUs from "../contact-us/ContactUs";
import Login from "../login/Login";

class Header extends Component {
  constructor(props) {
    super(props);
    const user = JSON.parse(localStorage.getItem('user'));
    this.state = {
      user: user,
      showLogin: false,
      showContactUs: false,
      headerLinks: [
        {id: 'product', link: '/dashboard', name: 'Product Use Cases'},
        {id: 'faqs', link: '/vendors', name: 'FAQs'},
        {id: 'contact-us', link: '/raw-materials', name: 'Contact Us'},
        {id: 'login', link: '/food-items', name: 'Login'},
      ],
    }
  }

  handleScroll = () => {
    this.props.history.push({
      pathname: '/',
    })
    setTimeout(() => {
      scroller.scrollTo('product', {
        duration: 800,
        delay: 5,
        smooth: 'easeInOutQuart',
        offset: -90
      })
    }, 400)
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

  invalidateSession = () => {
    localStorage.removeItem('user');
    this.props.history.push({
      pathname: '/'
    });
    window.location.reload();
  }

  openMarkPortal = () => {
    this.props.history.push({
      pathname: '/intramark'
    });
  }

  openLogin = () => {
    this.setState({showLogin: true})
  }

  openContactUs = () => {
    this.setState({showContactUs: true})
  }

  handleLoginClose = () => {
    this.setState({showLogin: false})
  }

  handleContactUsClose = () => {
    this.setState({showContactUs: false})
  }

  render() {
    return (
      <Navbar bg="#0D142E" bg-color="#0D142E" expand="lg" variant={"dark"} sticky={"top"} className="header-main">
        <Navbar.Brand href="/" className={"mr-5"}>
          <img className={"ml-2 mr-5 logo-image"} src="./assets/intramark_logo.png">
          </img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={this.handleScroll} className={'ml-5 mr-5'}>
              Product Use Cases
            </Nav.Link>
            <Nav.Link className={'ml-5 mr-5'} href={'/faq'}>
              FAQs
            </Nav.Link>
            <Nav.Link className={'ml-5 mr-5'} onClick={this.openContactUs}>
              Contact Us
            </Nav.Link>
            {this.state.user ? (
              <Nav.Link className={'ml-5 mr-5'} onClick={this.invalidateSession}>
                Sign Out
              </Nav.Link>
            ) : (
              <Nav.Link className={'ml-5 mr-5'} onClick={this.openLogin}>
                Login
              </Nav.Link>
            )}
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

        {this.state.showLogin && (
          <Login showLogin={this.state.showLogin} handleClose={this.handleLoginClose} {...this.props} />
        )}
        {this.state.showContactUs && (
          <ContactUs showContactUs={this.state.showContactUs} handleClose={this.handleContactUsClose} />
        )}
      </Navbar>
    );
  }
}

export default withRouter(Header) ;
