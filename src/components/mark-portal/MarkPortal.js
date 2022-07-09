import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import moment from "moment";
import { Component } from "react";
import { Button, Col, Row, Tab, Table, Tabs } from "react-bootstrap";
import { CURRENT_PERIOD, HISTORICAL } from "../../config";
import ContactUs from "../contact-us/ContactUs";
import Header from "../header/Header";
import './markportal.css'
import { CSVDownload } from "react-csv";
import ReactDOM, {unmountComponentAtNode} from "react-dom";

class MarkPortal extends Component {
  constructor(props) {
    super(props);

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.token) {
      this.props.history.push({
        pathname: '/'
      });
    }
    this.state = {
      showContactUs: false,
      activeKey: 'current',
      currentPeriod: {
        dayData: [],
        monthData: [],
        weekData: [],
      },
      historical: {
      }
    }
    this.handle = null;
  }

  componentDidMount() {
    this.getCurrentPeriod();
    if (this.state.activeKey === 'current') {
      this.handle = setInterval(() => {
        this.getCurrentPeriod();
      }, 30000);
    } else {
      this.getHistoricalPeriod();
      clearInterval(this.handle)
      this.handle = null;
    }
  }

  getCurrentPeriod = () => {
    axios.get(CURRENT_PERIOD).then(response => {
      this.setState({currentPeriod: response.data});
    })
  }

  getHistoricalPeriod = () => {
    axios.get(HISTORICAL).then(response => {
      let historicalData = response.data.histData;
      historicalData = historicalData.sort((a, b) => b.Marks_Date > a.Marks_Date ? 1 : -1);
      const result = historicalData.reduce((r, a) => {
        r[a.Marks_Date] = r[a.Marks_Date] || [];
        r[a.Marks_Date].push(a);
        return r;
      }, Object.create(null));
      this.setState({historical: result});
    })
  }

  openContactUs = () => {
    this.setState({showContactUs: true})
  }

  handleContactUsClose = () => {
    this.setState({showContactUs: false})
  }

  downloadData = () => {
    const exportData = [];

    if (this.state.activeKey === 'current') {
      exportData.push(['Intraday']);
      exportData.push(['Date', 'Time_Stamp_EDT', 'Mark_Type', 'Mark_Period', 'Security_Symbol', 'Mark_Direction', 'Mark_Price', 'Confidence_Level'])
      this.state.currentPeriod.dayData.forEach((data) => {
        exportData.push([
          moment(data['Marks_Date']).format('MM/DD/yyyy'),
          data['Time_Stamp_EDT'],
          data['Mark_Type'],
          moment(data['Mark_Period']).format('MM/DD/yyyy'),
          data['Security_Symbol'],
          data['Mark_Direction'],
          data['Mark_Price'],
          data['Confidence_Level']
        ]);
      });
      exportData.push([]);

      exportData.push(['Intraweek']);
      exportData.push(['Date', 'Time_Stamp_EDT', 'Mark_Type', 'Mark_Period', 'Security_Symbol', 'Mark_Direction', 'Mark_Price', 'Confidence_Level'])
      this.state.currentPeriod.weekData.forEach((data) => {
        exportData.push([
          moment(data['Marks_Date']).format('MM/DD/yyyy'),
          data['Time_Stamp_EDT'],
          data['Mark_Type'],
          moment(data['Mark_Period']).format('MM/DD/yyyy'),
          data['Security_Symbol'],
          data['Mark_Direction'],
          data['Mark_Price'],
          data['Confidence_Level']
        ]);
      });
      exportData.push([]);

      exportData.push(['Intramonth']);
      exportData.push(['Date', 'Time_Stamp_EDT', 'Mark_Type', 'Mark_Period', 'Security_Symbol', 'Mark_Direction', 'Mark_Price', 'Confidence_Level'])
      this.state.currentPeriod.monthData.forEach((data) => {
        exportData.push([
          moment(data['Marks_Date']).format('MM/DD/yyyy'),
          data['Time_Stamp_EDT'],
          data['Mark_Type'],
          moment(data['Mark_Period']).format('MM/DD/yyyy'),
          data['Security_Symbol'],
          data['Mark_Direction'],
          data['Mark_Price'],
          data['Confidence_Level']
        ]);
      });
    } else {
      exportData.push(['Date', 'Time_Stamp_EDT', 'Mark_Type', 'Mark_Period', 'Security_Symbol', 'Mark_Direction', 'Mark_Price', 'Confidence_Level'])
      Object.keys(this.state.historical).forEach((data) => {
        exportData.push([moment(data).format('dddd, MMM DD, yyyy')])
        this.state.historical[data].forEach((historicalData) => {
          exportData.push([
            moment(historicalData['Marks_Date']).format('MM/DD/yyyy'),
            historicalData['Time_Stamp_EDT'],
            historicalData['Mark_Type'],
            moment(historicalData['Mark_Period']).format('MM/DD/yyyy'),
            historicalData['Security_Symbol'],
            historicalData['Mark_Direction'],
            historicalData['Mark_Price'],
            historicalData['Confidence_Level']
          ]);
        });
        exportData.push([]);
      });
    }

    const currentDate = Date.now();
    const element = (
      <div>
        <CSVDownload data={exportData} filename={`current_period_data_${currentDate}.csv`} target="_self" />
      </div>
    );
    ReactDOM.render(element, document.getElementById('download'));
    unmountComponentAtNode(document.getElementById('download'));
  }

  setActiveTab = (key) => {
    if (key === 'historical') {
      this.getHistoricalPeriod();
      clearInterval(this.handle)
      this.handle = null;
    } else {
      this.handle = setInterval(() => {
        this.getCurrentPeriod();
      }, 30000);
    }
    this.setState({activeKey: key})
  }

  render() {
    const currentPeriodTitle = <div className={'mt-1'}>Current Period</div>
    const historicalPeriodTitle = <div className={'mt-1'}>Historical</div>
    const downloadTitle = <FontAwesomeIcon role={"button"} onClick={this.downloadData} icon={faDownload} className={'mt-2'}/>
    const feedbackTitle = <Button onClick={this.openContactUs}>Feedback</Button>
    return (
      <>
        <Header />
        <section className={'pb-5 pt-4'}>
          <Row className={'pl-5 pr-5'}>
            <Col sm={12}>
              <Tabs
                defaultActiveKey="current"
                activeKey={this.state.activeKey}
                onSelect={(eventKey) => this.setActiveTab(eventKey)}
              >
                <Tab eventKey="current" title={currentPeriodTitle}>
                  <Row>
                    <Col sm={12}>
                      <Table responsive>
                        <thead className={'sticky-header'}>
                          <tr>
                            <th className={'sticky-header'}>Date</th>
                            <th className={'sticky-header'}>Time_Stamp_EDT</th>
                            <th className={'sticky-header'}>Mark_Type</th>
                            <th className={'sticky-header'}>Mark_Period</th>
                            <th className={'sticky-header'}>Security_Symbol</th>
                            <th className={'sticky-header'}>Mark_Direction</th>
                            <th className={'sticky-header'}>Mark_Price</th>
                            <th className={'sticky-header'}>Confidence_Level</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className={"sub-heading"}>
                            <td colSpan={8} className={'pl-4'}>Intraday</td>
                          </tr>
                          {this.state.currentPeriod.dayData.length ? (
                            this.state.currentPeriod.dayData.map((data, index) => {
                              return (
                                <tr key={index}>
                                  <td>{moment(data['Marks_Date']).format('MM/DD/yyyy')}</td>
                                  <td>{data['Time_Stamp_EDT']}</td>
                                  <td>{data['Mark_Type']}</td>
                                  <td>{moment(data['Mark_Period']).format('MM/DD/yyyy')}</td>
                                  <td>{data['Security_Symbol']}</td>
                                  <td>{data['Mark_Direction']}</td>
                                  <td>{data['Mark_Price']}</td>
                                  <td>{data['Confidence_Level']}</td>
                                </tr>
                              )
                            })
                          ) : (
                            <tr>
                              <td>
                                No Marks have been generated
                              </td>
                            </tr>
                          )}
                          <tr className={"sub-heading"}>
                            <td colSpan={8} className={'pl-4'}>Intraweek</td>
                          </tr>
                          {this.state.currentPeriod.weekData.length ? (
                            this.state.currentPeriod.weekData.map((data, index) => {
                              return (
                                <tr key={index}>
                                  <td>{moment(data['Marks_Date']).format('MM/DD/yyyy')}</td>
                                  <td>{data['Time_Stamp_EDT']}</td>
                                  <td>{data['Mark_Type']}</td>
                                  <td>{moment(data['Mark_Period']).format('MM/DD/yyyy')}</td>
                                  <td>{data['Security_Symbol']}</td>
                                  <td>{data['Mark_Direction']}</td>
                                  <td>{data['Mark_Price']}</td>
                                  <td>{data['Confidence_Level']}</td>
                                </tr>
                              )
                            })
                          ) : (
                            <tr>
                              <td>
                                No Marks have been generated
                              </td>
                            </tr>
                          )}
                          <tr className={"sub-heading"}>
                            <td colSpan={8} className={'pl-4'}>Intramonth</td>
                          </tr>
                          {this.state.currentPeriod.monthData.length ? (
                            this.state.currentPeriod.monthData.map((data, index) => {
                              return (
                                <tr key={index}>
                                  <td>{moment(data['Marks_Date']).format('MM/DD/yyyy')}</td>
                                  <td>{data['Time_Stamp_EDT']}</td>
                                  <td>{data['Mark_Type']}</td>
                                  <td>{moment(data['Mark_Period']).format('MM/DD/yyyy')}</td>
                                  <td>{data['Security_Symbol']}</td>
                                  <td>{data['Mark_Direction']}</td>
                                  <td>{data['Mark_Price']}</td>
                                  <td>{data['Confidence_Level']}</td>
                                </tr>
                              )
                            })
                          ) : (
                            <tr>
                              <td>
                                No Marks have been generated
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="historical" title={historicalPeriodTitle}>
                  <Row>
                    <Col sm={12}>
                      <Table responsive>
                        <thead>
                        <tr>
                          <th>Date</th>
                          <th>Time_Stamp_EDT</th>
                          <th>Mark_Type</th>
                          <th>Mark_Period</th>
                          <th>Security_Symbol</th>
                          <th>Mark_Direction</th>
                          <th>Mark_Price</th>
                          <th>Confidence_Level</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(this.state.historical).map((data, index) => {
                          return (
                            <>
                              <tr className={"sub-heading"} key={index}>
                                <td colSpan={8} className={'pl-4'}>{moment(data).format('dddd, MMM DD, yyyy')}</td>
                              </tr>
                              {this.state.historical[data].map((historicalData, i) => {
                                return(
                                  <tr key={i}>
                                    <td>{moment(historicalData['Marks_Date']).format('MM/DD/yyyy')}</td>
                                    <td>{historicalData['Time_Stamp_EDT']}</td>
                                    <td>{historicalData['Mark_Type']}</td>
                                    <td>{moment(historicalData['Mark_Period']).format('MM/DD/yyyy')}</td>
                                    <td>{historicalData['Security_Symbol']}</td>
                                    <td>{historicalData['Mark_Direction']}</td>
                                    <td>{historicalData['Mark_Price']}</td>
                                    <td>{historicalData['Confidence_Level']}</td>
                                  </tr>
                                )
                              })}
                            </>
                          )
                        })}
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Tab>
                <Tab title={downloadTitle} tabClassName={'ml-3'} />
                <Tab title={feedbackTitle}/>
              </Tabs>
            </Col>
          </Row>
          <div id="download"/>
        </section>
        {this.state.showContactUs && (
          <ContactUs showContactUs={this.state.showContactUs} handleClose={this.handleContactUsClose} selectFeedback={true} />
        )}
      </>
    );
  }
}

export default MarkPortal;
