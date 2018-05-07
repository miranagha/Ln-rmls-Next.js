import React from "react";
import Form from "../components/Form.js";
import Page from "../layouts/main";
import Head from "next/head";
import { Container, Row, Col } from "reactstrap";

const GetAquote = () => (
  <div>
    <Head>
      <title>Get a quote</title>
      <meta name="description" content="Speak with our expert team to get the most competative quote in London without spending a penny. Request a quote now"/>
    </Head>
    <Page>
      <Col className="main-container">
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <br />
          <h1>Get a Quote from Top London Removals</h1>
          <p>
            we have vast experience behind us when it comes to moving the
            contents of flats, houses, offices and more and are able to offer
            some of the most competitive quotes on the market. We are renowned
            for our flexibility and can come to your assistance whether your
            move is taking place during the daytime, on an evening, during the
            night or on a weekend or public holiday, and assist you when
            packing and unpacking if needed to make the process of getting from
            A to B even smoother.
          </p>
          <br />
        </Col>
      </Col>
      <Col sm="12" md={{ size: 8, offset: 2 }}>
      <br />

        <p>
          To get a quote for removal services or a man with van in London please
          complete this form or give us a call <a className="a" href="tel:07484675664"> 07484675664 </a>
          (24/7).
        </p>
        <br />
        <Form />
        <br />
        <h2 className="h2">Bespoke quoting available for free</h2>
        <p>
          You can get as much as quotes you need for your removal 24/7. We cover all parts of London and specialise in local, national
          and even international moves. What’s more is that we can even come to
          visit you at your home or business premises if needed to provide a
          bespoke quotation. If this is not possible, we can offer an initial
          quote over the phone by taking a few key details.
        </p>
        <h2 className="h2">Taking the stress out of relocation</h2>
        <p>
          There’s no doubt that relocating can be stressful, whether you’re
          moving your business or transporting your goods to your new home. We
          are here to remove much of the stress from the relocation process and
          can help whether you need us for a few hours, half-day, full-day or
          even longer. Storage solutions are also available if you cannot move
          into your new home or business premises on the same day you are
          leaving. We are also fully-insured and treat your belongings with the
          highest level of respect. We can also label your boxes on your behalf
          to ensure you can easily identify your goods when you arrive at your
          new base.
        </p>
      </Col>
    </Page>
    <br />
  </div>
);

export default GetAquote;
