/**
 * This component is main landing page when we open this application.
 */
import './main.css'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { scroller } from "react-scroll";
import ContactUs from "../contact-us/ContactUs";
import Header from "../header/Header";
import Pilot from "../pilot/Pilot";
import Product from "../products/Product";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showContactUs: false
    }
  }

  handleContactUsClose = () => {
    this.setState({showContactUs: false})
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

  render() {
    const previousIcon = <FontAwesomeIcon icon={faChevronLeft} color={'#021052dd'} />
    const nextIcon = <FontAwesomeIcon icon={faChevronRight} color={'#021052dd'} />
    return (
      <>
        <Header />
        <section className={'main-container'}>
          <Container fluid={"sm pt-5 pb-5"}>
            <Row className={"justify-content-center ml-0 mr-0"}>
              <p className={"logo-name"}/>
            </Row>
            <Row className={"text-center mt-5 pb-5"}>
              <Col sm={6} className={"mt-4"}>
                <h2 className={'text-justify'}>Whether entering, exiting or adjusting equity positions</h2>
                <br/>
                <p className={'text-justify'}>
                  See <span className={'mark-name'} onClick={this.handlePilotScroll}>Mark</span>, our proprietary, fully automated signal engine that assist US equity asset managers in the
                  buy/sell decision making process across intraday, intraweek, and intramonth durations. Mark signal
                  quality does not depend on curve-fitting or market conditions. Join the Free Pilot and experience
                  the Mark product first-hand.
                </p>
                <Row>
                  <Col sm={12}>
                    <Button variant={"primary mt-3 mr-2"} size={'lg'} onClick={this.handlePilotScroll}>
                      Join Free Pilot
                    </Button>
                  </Col>
                  <Col sm={3} />
                  <Col sm={6}>
                    <div className={'button-subtitle'}>
                      <strong>No payment info required.</strong> <br />
                      Join Free Pilot for real-time intraday, intraweek, and intramonth Marks; and access  to Mark history library.
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <Carousel prevIcon={previousIcon} nextIcon={nextIcon}>
                  <Carousel.Item>
                    <Image src={"/daily-data.svg"} alt={"Daily Data"} className={"main-image"}/>
                    <Carousel.Caption className={'mt-5'}>
                      <p>SPY Long Mark price for day of Feb 26 was better than 86% of all respective intraday prices and 10 bps better than VWAP.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={"/weekly-data.svg"} alt={"Weekly Data"} className={"main-image"}/>
                    <Carousel.Caption className={'mt-5'}>
                      <p>SPY Short Mark price for week of April 11 was better than 90% of all respective intraweek prices and 20 bps better than VWAP.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src={"/monthly-data.svg"} alt={"Monthly Data"} className={"main-image"}/>
                    <Carousel.Caption className={'mt-5'}>
                      <p>SPY Long Mark price for month of May was better than 75% of all respective intramonth prices.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <Row>
                  <Col className={'button-subtitle'}>
                    <strong className={'text-success'} role={'button'} onClick={this.handlePilotScroll}>Join Free Pilot</strong> for Mark history library (no payment info required). Past performance is not necessarily indicative of future results.
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container fluid={"sm pt-5 pb-5"}>
            <Row >
              <Col sm={12}>
                <div className={'product'}>
                  <Product />
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid={'sm pt-5 pb-5'}>
            <Row>
              <Col sm={12}>
                <div className={'pilot'}>
                  <Pilot />
                </div>
              </Col>
            </Row>
          </Container>
          {this.state.showContactUs && (
            <ContactUs showContactUs={this.state.showContactUs} handleClose={this.handleContactUsClose} />
          )}
        </section>
      </>
    )
  }
}

export default Main
