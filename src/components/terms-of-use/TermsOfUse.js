import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../header/Header";
import './terms-of-use.css';

class TermsOfUse extends Component {

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
              <h2 className={'pt-5 pb-3'}>Terms of Use</h2>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Introduction</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                The www.intramark.io website (the “Website”) is operated by Intramark. This page (together with the
                documents referred to on it) tells you the terms of use (the “Terms of Use”) on which all users may
                make use of the Website, whether as a guest or a customer. Please read these Terms of Use carefully
                before you start to use the Website.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                By using the Website, you indicate that you accept these Terms of Use, Privacy, and Disclosures and
                that you agree to abide by them. If you do not agree to these Terms of Use, please do not use the
                Website or our services.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Information About Us</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>Intramark Inc. is a Delaware corporation. We can be contacted by email at contactus@intramark.io.</span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Accessing The Website</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Access to the Website is permitted on a temporary basis, and we reserve the right to withdraw or
                amend the service we provide on the Website without notice. We will not be liable if for any reason the
                Website is unavailable at any time or for any period.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                From time to time, we may restrict access to some parts of the Website, or the entire Website to
                different groups of customers.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                If you choose, or you are provided with, a username or password or any other piece of information as
                part of our security procedures, you must treat such information as confidential and you must not
                disclose it to any third party. We have the right to disable any such username or password whether
                chosen by you or allocated by us, at any time, if in our opinion you have failed to comply with any of the
                provisions of these Terms of Use.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                You are responsible for making all arrangements necessary for you to have access to the Website. You
                are also responsible for ensuring that all persons who access the Website through your Internet
                connection (using your username or password) are aware of these Terms of Use, and that they comply
                with them.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Intellectual Property Rights</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                We are the owner or the licensee of all intellectual property rights in the Website, and in the material
                published on it, including (without limitation) all content and analysis accessible through the Website or
                any associated software. Those works are protected by copyright and other intellectual property laws
                and treaties around the world. All such rights are reserved.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Intramark and the Intramark logo are trademarks of Intramark Inc.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                You may print off a reasonable number of copies, and may download extracts, of any page(s) from the Website.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                You must not modify the paper or digital copies of any materials you have printed off or downloaded
                in any way, and you must not use any illustrations, photographs, video or audio sequences or any
                graphics separately from any accompanying text without our prior consent.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Our status (and that of any identified contributors) as the authors of material on the Website must
                always be acknowledged.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                If you print off, copy or download any part of the Website in breach of these Terms of Use, your right
                to use the Website will cease immediately and you must, at our option, return or destroy any copies of
                the materials you have made.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Reliance On Information and Content</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Our service consists of collating and distilling various publicly available sources of information and
                other third party sources and providing digests of this information to customers. Content provided to
                customers through our service and Website is general in nature and is not tailored to the needs of any
                particular customer.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Investment Advice</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                You may not regard any information or any opinion expressed in any information received through our
                service, content or Website as a recommendation of any particular security, portfolio of securities,
                transaction or other investment instrument. This information is provided solely to facilitate customers in
                making their own investment decisions and professional advice should be sought regarding the
                suitability of any investment before investing. None of the members of the Intramark team of content
                providers are advising in respect of the nature, potential, value or suitability of any particular
                investment.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                You understand and agree that, although Intramark requires employees to disclose any conflicting
                personal interest they (or their immediate family) may have in a company, it obtains content from a
                wide variety of sources which may not have similar disclosure obligations in place. You understand and
                agree that at the time of providing content, one or more content contributors or their affiliates may
                have an interest in the companies or investments written about.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Our services and Website content should not be construed as an offer by you to buy, sell or a
                recommendation or solicitation to buy or sell, or otherwise deal or refrain from dealing in any particular
                investment.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Content</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Intramark compiles the information and content provided through our services on the basis of publicly
                available information and other third party sources it believes to be reliable. While reasonable care is
                taken in preparing the information provided through the services and contained on the Website, and in
                selecting third party sources, the information is of a general nature and is not intended to be relied
                upon. No warranties or representation express or implied are given or liability accepted by Intramark or
                its affiliates or any directors or employees in relation to the accuracy, fairness or completeness of the
                information contained herein.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                All information provided to you through our services or Website content is provided only as of the
                date published, and may be superseded by subsequent events or for other reasons. Intramark may also
                provide links to previously published content and it is your responsibility to ensure that you are viewing
                the most recent information.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Information provided through our services or on the Website is subject to change. We may amend,
                update, suspend or delete any information in the content without notice at any time and at our sole discretion.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                The Website Changes Regularly We aim to update the Website regularly, and may change the content
                at any time. If the need arises, we may suspend access to the Website, or close it indefinitely.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Our Liability</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                The material displayed on the Website is provided without any guarantees, conditions or warranties as
                to its accuracy. To the extent permitted by law, we, other members of our group of companies and third
                parties connected to us hereby expressly exclude:
              </span>
            </Col>

            <Col sm={12} className={'terms-of-use pl-5 pr-5'}>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    all conditions, warranties and other terms which might otherwise be implied by statute,
                    common law or the law of equity; and/or
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    any liability for any direct, indirect or consequential loss or damage incurred by any user in
                    connection with the Website or in connection with the use, inability to use, or results of the
                    use of the Website, any websites linked to them and any materials posted on them,
                    including, without limitation any liability for: (a) loss of income or revenue; (b) loss of
                    business; (c) loss of profits or contracts; (d) loss of anticipated savings; (e) loss of data; (f)
                    loss of goodwill; (g) wasted management or office time; or (h) any other loss or damage of
                    any kind, however arising and whether caused by tort (including negligence), breach of
                    contract or otherwise, even if foreseeable.
                  </span>
                </Col>
              </Row>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Nothing in this section affects our liability for death or personal injury arising from our negligence, nor
                our liability for fraudulent misrepresentation, nor any other liability which cannot be excluded or limited
                under applicable law.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Information About You And Your Visits To The Website</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                We process information about you in accordance with our Privacy Policy. By using the Website, you
                consent to such processing and you warrant that all information provided by you is accurate.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Third Party Content</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                We will not be responsible, or liable to any third party, for the content or accuracy of any materials
                provided by third parties (“Third Party Content”) and posted on the Website through, for example,
                Twitter feeds or analysis tools.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                We do not endorse any Third Party Content posted on the Website. We operate a ‘notice and takedown’
                policy on the Website and if you believe that any content on the Website contains a
                defamatory statement or infringes your intellectual property rights please notify us immediately by
                e-mailing contactus@intramark.io. Once we have received this notification we will use all reasonable
                endeavours to remove the content within a reasonable period of time.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Viruses, Hacking And Other Offences</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                You must not misuse the Website or any software used by or in connection with the Website by
                knowingly introducing viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware
                or any other harmful programs or similar computer code designed to adversely affect the operation of
                any computer software or hardware. You must not attempt to gain unauthorized access to the Website,
                in particular non-public areas, the server on which the Website is stored or any server, computer or
                database connected to the Website. You must not attack the Website via a denial-of-service attack or a
                distributed denial-of service attack.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                By breaching this provision, you may commit a criminal offence and we may report any such breach to
                the relevant law enforcement authorities and we will co-operate with those authorities by disclosing
                your identity to them. In the event of such a breach, your right to use the Website will cease immediately.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or
                other technologically harmful material that may infect your computer equipment, computer programs,
                data or other proprietary material due to your use of the Website or to your downloading of any
                material posted on it, or on any website linked to it.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Prohibited Uses</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                You may use the Website only for lawful purposes. You may not use the Website:
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5'}>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    in any way that breaches any applicable local, national or international law or regulation;
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    in any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect;
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    for the purpose of harming or attempting to harm minors in any way;
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    to transmit, or procure the sending of, any unsolicited or unauthorised advertising or
                    promotional material or any other form of similar solicitation (spam);
                    or
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    to transmit any data, send or upload any material that contains viruses, Trojan horses,
                    worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or
                    similar computer code designed to adversely affect the operation of any computer software or hardware.
                  </span>
                </Col>
              </Row>
            </Col>

            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-3'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                You also agree not to:
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5'}>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    reproduce, duplicate, copy or re-sell any part of any the Website in contravention of the
                    provisions of these Terms of Use;
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    frame or mirror any part of the Website or any software used by or in conjunction with the
                    Website without our prior written consent;
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    use any robot, spider, site search/retrieval application, or other manual or automatic
                    device or process to download, retrieve, index, data-mine or in any way reproduce or
                    circumvent the navigational structure or presentation of the Website or its contents;
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    modify, adapt, sub-licence, translate, sell, reverse engineer, decompile or disassemble any
                    portion of the Website or any software used by or in conjunction with the Website; or
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    not to access without authority, interfere with, damage or disrupt: (a) any part of the
                    Website; (b) any equipment or network on which the Website are stored; (c) any software
                    used in the provision of the Website; or (d) any equipment or network or software owned or
                    used by any third party.
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Suspension And Termination</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                We will determine, in our discretion, whether there has been a breach of these Terms of Use through
                your use of the Website. When a breach of these Terms of Use has occurred, we may take such action as
                we deem appropriate.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-3'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Failure to comply with these Terms of Use constitutes a material breach of the terms upon which you
                are permitted to use the Website, and may result in our taking appropriate action, including all or any of
                the following:
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5'}>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    immediate, temporary or permanent withdrawal of your right to use the Website;
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    issue of a warning to you;
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    legal proceedings against you for reimbursement of all costs on an indemnity basis
                    (including, but not limited to, reasonable administrative and legal costs) resulting from the
                    breach;
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    further legal action against you; or
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    disclosure of such information to law enforcement authorities as we reasonably feel is necessary.
                  </span>
                </Col>
              </Row>
              <Row>
                <Col sm={11} className={'terms-of-use pl-5 pr-5 pt-2'}>
                  <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
                  <span>
                    We exclude liability for actions taken in response to breaches of these Terms of Use. The
                    responses described in these Terms of Use are not limited, and we may take any other
                    action we reasonably deem appropriate.
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Indemnity</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                You agree to indemnify us and keep us indemnified (including our directors, officers, agents, and
                employees) against all losses, costs, charges, demands, proceedings, damages, actions, expenses and
                claims howsoever incurred by us as a result of your use of the Website or a breach by you of any of
                these Terms of Use.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Linking To The Website</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                You may link to the Website home page, provided you do so in a way that is fair and legal and does not
                damage our reputation or take advantage of it, but you must not establish a link in such a way as to
                suggest any form of association, approval or endorsement on our part where none exists.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                You must not establish a link from any website that is not owned by you.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                The Website must not be framed on any other site, nor may you create a link to any part of the
                Website other than the Website home page. We reserve the right to withdraw linking permission
                without notice. You agree to cease such linking if, in our sole opinion, the website from which you are
                linking impacts upon our goodwill or reputation.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                If you wish to make any use of material on the Website other than that set out above, please address your request to contactus@intramark.io.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Links From The Website</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Where the Website contains links to other sites and resources provided by third parties, these links are
                provided for your information only. We have no control over the contents of those sites or resources,
                and accept no responsibility for them or for any loss or damage that may arise from your use of them.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Jurisdiction And Applicable Law</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                These Terms of Use and any claim arising from, or related to, a visit to the Website although we retain
                the right to bring proceedings against you for breach of these conditions are governed by the State of
                Delaware.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Variations</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                We may revise these Terms of Use at any time by amending this page. You are expected to check this
                page from time to time to take notice of any changes we made, as they are binding on you. Some of the
                provisions contained in these Terms of Use may also be superseded by provisions or notices published
                elsewhere on the Website.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Notices</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                All notices given by you to us should be sent to us to contactus@intramark.io. Subject to and as
                otherwise specified in these Terms of Use we may give notice to you at either the email or postal
                address you provide to us during the registration process.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Notice will be deemed received and properly served immediately when posted on the Website, 24
                hours after an email is sent, or three days after the date of posting of any letter. In proving the service of
                any notice, it will be sufficient to prove, in the case of a letter, that such letter was properly addressed,
                stamped and placed in the post and, in the case of an email that such email was sent to the specified
                email address of the addressee.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Waiver</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                If we fail to insist upon strict performance of any of your obligations under any of these Terms of Use,
                or if we fail to exercise any of the rights or remedies to which we are entitled under these Terms of Use,
                this shall not constitute a waiver of such rights or remedies and shall not relieve you from compliance
                with such obligations. A waiver by us of any default shall not constitute a waiver of any subsequent
                default. No waiver by us of any of your obligations under these Terms of Use shall be effective unless it
                is expressly stated to be a waiver and is communicated to you in writing in accordance with the
                “Notices” section above.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Severability</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                If any of these Terms of Use are determined by any competent authority to be invalid, unlawful or
                unenforceable to any extent, such term, condition or provision will to that extent be severed from the
                remaining terms, conditions and provisions which will continue to be valid to the fullest extent
                permitted by law.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Entire Agreement</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                These Terms of Use and any document expressly referred to in them and other terms accepted by you
                in connection with your use of the Website represent the entire agreement between you and us in
                relation to their subject matter and supersede any prior agreement, understanding or arrangement
                between you and us, whether oral or in writing.
              </span>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                Both you and us acknowledge that neither you nor us has relied on any representation, undertaking or
                promise given by the other or be implied from anything said or written in negotiations between you and
                us except as expressly stated in these Terms of Use.
              </span>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-5'}>
              <h6 className={'font-weight-bolder'}>Your Concerns</h6>
            </Col>
            <Col sm={12} className={'terms-of-use pl-5 pr-5 pt-2'}>
              <FontAwesomeIcon icon={faChevronRight} color={'green'} className={'mr-2'} />
              <span>
                If you have any concerns about material which appears on the Website, please contact us at contactus@intramark.io.
              </span>
            </Col>
          </Row>
        </section>
      </>
    );
  }
}

export default TermsOfUse;
