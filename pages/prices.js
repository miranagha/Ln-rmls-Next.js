import React from "react";
import Head from "next/head";
import Page from "../layouts/main";
import { Container, Row, Col } from "reactstrap";

const Prices = () => (
  <div>
    <Head>
      <title> Prices at London removals </title>
    </Head>
    <Page>
      <article>
      <Col className="main-container">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h1 style={{ fontSize: "50px" }}>Prices</h1>
            <p>
              At London Removals, we are able to offer some of the most
              competitive and affordable prices for home, office and
              international moves as well as man and van services on the market
              without ever compromising on quality.
            </p>
            <div className="prices">
              <h2 className="h2"> WE PROVIDE:</h2>
              {/* <ul> */}
                <li>Small, medium, or Luton vans</li>
                <li>well-trained and friendly staff</li>
                <li>Loading, unloading</li>
                <li>No VAT</li>
                <li>No hidden charges</li>
              {/* </ul> */}
            </div>
            <br />
            <div className="text-right">
              <a href="/get-a-quote">
                <button className="btn btn-lg btn-removals" type="button">
                  Get a quote now
                </button>
              </a>
            </div>
            <br />
            </Col>
        </Col>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <h2 className="h2">Option 1 – Pay by the hour</h2>
          <p>
            Many customers opt for our Pay by the Hour service. This service is
            ideal if your move will only take a few hours. We can assist you
            whether you require 1, 2 or 3 members of staff to help. there are no
            hidden costs and the price you see is the price you pay.
            <br />
            <br />
            <li>1 Man and Van = £40 per hour</li>
            <br />
            <li>2 Men and Van = £50 per hour</li>
            <br />
            <li>3 Men and Van = £65 per hour</li>
            <br />
            <br />
          </p>
          <h2 className="h2">Option 2 – Half-day rate</h2>
          <p>
            This service may be the most suitable if you expect your move to
            take up to four hours but not a full day and will work out cheaper
            than paying by the hour. If you need to move the contents of a large
            flat or small house or office, you may well wish to opt for the
            half-day service.
            <br />
            <br />
            <li>£150 for 1 man</li>
            <br />
            <li>£195 for 2 men</li>
            <br />
            <li>£240 for 3 man</li>
            <br />
            <br />
          </p>
          <h2 className="h2">Option 3 – Full-day rate</h2>
          <p>
            There are even bigger savings to make if you require our services
            for a full-day. If you need to move from a large house or office,
            this could be the most appropriate solution for your requirements.
            <br />
            <br />
            <li>£290 for 1 man</li>
            <br />
            <li>£380 for 2 men</li>
            <br />
            <li>£480 for 3 men</li>
            <br />
            <br />
          </p>
          <h2 className="h2">Option 4 – Everything Else</h2>
          <p>
            If none of the above options seem quite right for you, simply get in
            touch so we can provide you with a custom quote based on your
            specific needs and circumstances. Remember, there are no hidden
            charges and all prices include VAT.
            <br />
            <br />
            To find out more about using our Everything Else service or to
            <a className="a" href="/get-a-quote"> get a quote </a>, call us on
            <a className="a" href="tel:07490531699"> 07490531699 </a>.
          </p>
        </Col>
      </article>
    </Page>
  </div>
);

export default Prices;
