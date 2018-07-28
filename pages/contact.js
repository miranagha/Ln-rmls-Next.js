import React from "react";
import Form from "../components/Form.js";
import Page from "../layouts/main";
import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
import {MdRoom, MdSchedule, MdEmail} from 'react-icons/lib/md';
import FaPhone from "react-icons/lib/fa/phone";

const pColor ={
  color:'black'
}
const formColor ={
  color: 'white'
}
const Contact = () => (
  <div>
    <Head>
      <title>Contact Top London Removals 24 hour a day</title>
      <meta name="description" content="Get in touch with our expert removal team to get the most competative quote in London for free. Request a quote in less than a minute"/>
    </Head>
    <Page>
      <Row>
      <Col className="main-container">
        <Col style={formColor} sm="12" md={{ size: 8, offset: 2 }}>
        <br />
          <h1 className='text-center'>CONTACT US</h1>
          <Form />
        </Col>
      </Col>
      </Row>
      <Col sm="12" md={{ size: 8, offset: 2 }}>
      <br />
      <br />
      <Col >
        <p><MdSchedule /> We are open 7 days a week, 24 hours a day</p>
        <p><a style={pColor} href="mailto:hi@top-london-removals.com"><MdEmail /> hi@top-london-removals.com</a></p>
        <p><a style={pColor} href="tel:07459896495"><FaPhone /> 07459896495</a></p>
        <p><MdRoom /> 383 Barry Rd, East Dulwich, London SE22 0JZ</p>
      </Col>
      <Col>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19895.28946190851!2d-0.08205589451276422!3d51.441424983759774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876038ce48b3221%3A0x771bf708c99f1483!2sTop+London+Removals+(Man+and+Van)!5e0!3m2!1sen!2suk!4v1530898889049" width="100%" height="300" frameborder="0" allowfullscreen></iframe>
      </Col>
      </Col>
      <br />
    </Page>
    <br />
  </div>
);

export default Contact;
