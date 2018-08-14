import React from "react";
import Link from 'next/link';
import Modal1 from "./modals/Modal1.js";
import Modal2 from "./modals/Modal2.js";
import Modal3 from "./modals/Modal3.js";
import Modal4 from "./modals/Modal4.js";
import Modal5 from "./modals/Modal5.js";


import { MdPublic, MdLocationCity, MdHome } from 'react-icons/lib/md';
import { Container, Row, Col, Modal, ModalBody } from 'reactstrap';


class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false,
            activModal: 0
        };

        this.toggle = this.toggle.bind(this);
    }
    nextActivModal = () => {
        this.setState(prevState => {
            return { activModal: prevState.activModal + 1 }
        })
    }
    previousActivModal = () => {
        this.setState(prevState => {
            return { activModal: prevState.activModal - 1 }
        })
    }
    toggle() {
        this.setState({
            modal: !this.state.modal,
            activModal: 0
        });
    }

    render() {
        const modals = [
            <Modal1 nextActivModal={this.nextActivModal} toggle={this.toggle} />,
            <Modal2 nextActivModal={this.nextActivModal} toggle={this.toggle} previousActivModal={this.previousActivModal} />,
            <Modal3 nextActivModal={this.nextActivModal} toggle={this.toggle} previousActivModal={this.previousActivModal} />,
            <Modal4 nextActivModal={this.nextActivModal} toggle={this.toggle} previousActivModal={this.previousActivModal} />,
            <Modal5 toggle={this.toggle} previousActivModal={this.previousActivModal} />
        ]
        return (
            <section>
                <div className="main-container col-lg-12">
                    <br />
                    <h1 className='text-center' >Top London Removals</h1>
                    <p className="text-eft">
                        In London on moving day without a plan? You need a man with a van service. At Top London Removals, we are passionate about moving you from A to B with a minimum of fuss and are able to offer some of the most competitive prices in the industry. Our Man and Van team is here 24/7 to help you move across London or further afield, and can even come to your assistance if you’re relocating overseas. Our company has a diverse client base and can assist you whether you’re moving a single item or are a large corporation wishing to relocate.
            </p>
                    <div>
                        <h2 className='text-center h2 types'>Types of <span className='typesofmoves'>Moves</span></h2>
                        <Container>
                            <Row className="text-center">
                                <Col>
                                    <p className="material-icon-lg material-icon"><MdHome /></p>
                                    <a href='/home-removals'><button className="btn btn-removals" >House</button></a>
                                </Col>
                                <Col>
                                    <p className="material-icon-lg material-icon"><MdLocationCity /></p>
                                    <a href='/office-removals'><button className="btn btn-removals" type="button">Office</button></a>
                                </Col>
                                <Col>
                                    <p className="material-icon-lg material-icon"><MdPublic /></p>
                                    <a href='/international-removals'><button className="btn btn-removals" type="button">International</button></a>
                                </Col>
                            </Row>

                        </Container>
                        <br />
                        <br />
                        <div className='text-center'>
                            <button className="btn btn-lg btn-tips" onClick={this.toggle}>{this.props.buttonLabel}TOP 5 MOVING TIPS</button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalBody>
                                    <div>{modals[this.state.activModal]}</div>
                                </ModalBody>
                            </Modal>
                        </div>
                        <br />
                    </div>
                </div>
                <article>
                    <br />
                    <h2 className='h2'>Top removals expert in London</h2>
                    <p>
                        Having been in the business since way back in 2001, we can be counted on to deliver the exceptional removal services that you require. We can also help you with packing, loading, unpacking and waste disposal, and can even provide the assistance you need when you need to assemble and disassemble furniture. We are fully-insured and treat your items with the utmost respect, providing a quality guarantee to each and every customer. Our specialised services are designed to take the stress out of relocation, and we have worked on a huge range of moves over the years.
            </p>
                    <h2 className='h2'>Reliable removals company</h2>
                    <p>
                        All our uniformed loaders and drivers are fully-trained and competent enough to carry out the work safely and professionally. We take pride in our quality assurance procedures and constantly seek out feedback from our clients to ensure we remain at the top. We understand better than anybody how important it is to need trustworthy and efficient partners when you move, and this is exactly the guarantee we provide to every customer. Not only are we fully insured, meaning we are fully responsible for all your items while they are being transported by us and a quality guarantee is provided to every customer, but we pride ourselves on being sensitive and adaptable.
            </p>
                    <h2 className='h2'>London office removals</h2>
                    <p>
                        If you’re a business, chances are you have big concerns about keeping downtime to a minimum and making the swiftest move you possibly can. If this is the case, let us step in. We can carefully pack and label all items on your behalf, remove and reassemble shelving systems to support your accounts team and carry out moves during evenings and weekends to diminish lost hours and revenue. Whether you’re moving within the same complex or to another part of the country, we can help. Our business clients have included everyone from small start-ups to large, long-established organisations.
            </p>
                    <h2 className='h2'>Storage solutions available</h2>
                    <p>
                        You can rely on us to use our vast experience to make the experience as smooth as possible. In fact, you don’t need to lift as much as a finger to use our services. We also offer short and long-term storage solutions, which means you are fully covered if you are not moving into your new home or business premises on the same day you leave your old base. We offer global moving services and can transport your goods to anywhere in the world.
            </p>
                    <p>
                        Why not get in touch to <Link href='/get-a-quote' passHref><a className='a'> get a quote </a></Link>
                        today if you’ve been looking for the best removals companies in London?
        </p>

                </article>
            </section>
        );
    }
}
export default Section;
