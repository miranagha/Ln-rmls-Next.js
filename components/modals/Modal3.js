import React from "react";
import { Row, Col } from 'reactstrap';

const Modal3 = ({ nextActivModal, previousActivModal, toggle }) => (
    <div>
        <h3>3. Check for specialized moving equipment</h3>
        <hr width='100%' color='black' height='1px' background-color='rgb(88, 82, 82)' />
        <p> Some items require extra care to protect them from getting scratched or damaged such as piano, antiques, or expensive furniture. During the moving process, they must have specialised equipments to make sure that the transportation is safe includes lifts, trolley, carrying straps or special blankets.</p>
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
export default Modal3;
