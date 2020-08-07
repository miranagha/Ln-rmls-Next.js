import React from "react";
import Head from "next/head";
import Form from "../components/Form.js";
import AsideText from "../components/AsideText.js";
import Section from "../components/Section.js";
import Page from "../layouts/main";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "reactstrap";


const Home = () => (
  <div>
    <Head>
      <title>London removals company cheap house move van |Top London removals</title>
      <meta name="description" content='Top London Removals is a specialist Man and Van service since 2001. Based in London we cover the UK and the rest of Europe.'/>
      <meta name="google-site-verification" content="VsHncoHhcXRVYyv61NQAx_3Kz8YVDSY5jB20QTMZ6LE" />
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