import React from "react";
import Head from "next/head";
import Form from "../components/Form.js";
import AsideText from "../components/AsideText.js";
import Section from "../components/Section.js";
import Page from "../layouts/main";

import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "reactstrap";

const Home = () => (
  <div>
    <Head>
      <title>London Removals - Top removal services get free quotes 24/7</title>
      <meta name="description" content="Top London Removals is a specialist home, office and international removals company since 2001. You can request quotes for free 24/7 no obligations to receive the most competitive prices in the industry."/>
      <meta name="google-site-verification" content="VsHncoHhcXRVYyv61NQAx_3Kz8YVDSY5jB20QTMZ6LE" />
      <link rel="canonical" href="http://top-london-removals.com/" />
    </Head>
    <Page>
      <Row>
        <Col md="8">
          <Section />
        </Col>
        <Col md="4">
          <Form />
          <AsideText />
        </Col>
      </Row>
    </Page>
  </div>
);

export default Home;
