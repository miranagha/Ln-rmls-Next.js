import React from "react";
import { Row, Col } from 'reactstrap';

const Modal4 = ({ nextActivModal, previousActivModal, toggle }) => (
    <div>
        <h3>4. Ask if the price is final</h3>
        <hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
        <p>Some of the moving companies provide you a cheap quote when you book with them, but actually, there are many additional hidden costs like stair charges, VAT, etc. That’s why it is always the best to check with the removal company and make sure they provided you all the moving charges before you confirm your booking.</p>
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
export default Modal4;
