import React from "react";
import { Row, Col } from 'reactstrap';

const Modal2 = ({ nextActivModal, previousActivModal, toggle }) => (
    <div>
        <h3>2. Read their Google reviews </h3>
        <hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
        <p> Finding out what their customers say is one of the best ways to gauge how good the company is. You can check their Google My Business page(s) and look at some of their good and bad reviews. It is really important to check how the company responded to customer reviews, especially when they're bad.</p>
        <Row>
            <Col>
                <button className='btn previous' onClick={previousActivModal}>&laquo; previous</button>
            </Col>
            <Col className='text-right'>
                <button className='btn' onClick={toggle}>Close</button>
                <button className='btn next' onClick={nextActivModal}>Next &raquo;</button>
            </Col>
        </Row>
    </div>
);

export default Modal2;
