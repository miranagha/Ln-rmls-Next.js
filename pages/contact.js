import React from "react";
import Form from "../components/Form.js";
import Page from "../layouts/main";
import Head from "next/head";
import {Row, Col } from "reactstrap";
import {MdRoom, MdSchedule, MdEmail} from 'react-icons/lib/md';
import FaPhone from "react-icons/lib/fa/phone"
import FaMobile from "react-icons/lib/fa/mobile";
;

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
        <p><a style={pColor} href="tel:02036336151"><FaPhone /> 02036336151</a></p>
        <p><a style={pColor} href="tel:07459896495"><FaMobile /> 07459896495</a></p>
        <p><MdRoom /> 383 Barry Rd, East Dulwich, London SE22 0JZ</p>
      </Col>
      <Col>
      <p>Find <a className="a" title="Top London Removals" href="https://goo.gl/maps/T7Ne8uVaNoASjaDX7"> Top London Removals </a> on Google map</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.4958211398985!2d-0.07611868423216415!3d51.44905247962566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876038ce48b3221%3A0x771bf708c99f1483!2sTop+London+Removals!5e0!3m2!1sen!2suk!4v1534170609744" width="100%" height="300" frameborder="0" allowfullscreen></iframe>
      </Col>
      </Col>
      <br />
    </Page>
    <br />
  </div>
);

export default Contact;
