import React from "react";
import Head from "next/head";
import Form from "../components/Form.js";
import AsideText from "../components/AsideText.js";
import Section from "../components/Section.js";
import Page from "../layouts/main";
import "../static/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "reactstrap";


const Home = () => (
  <div>
    <Head>
      <title>Top London Removals - Removals London get free quotes 24/7 service</title>
      <meta name="description" content='Top London Removals is a specialist Man and Van service since 2001. You can request free quotes 24/7 to receive the most competitive prices'/>
      <meta name="msvalidate.01" content="6382720E15EBB9DC5C6D09370AE8FA44" />
      <meta name="google-site-verification" content="5afQhcER_xaFBw6dkC5QlwfYEtXQF0Qg7Cotg7JoLEE" />
      <link rel="canonical" href="https://top-london-removals.com/" />
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