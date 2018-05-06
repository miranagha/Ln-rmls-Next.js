import React from "react";
import Head from "next/head";
import Page from "../layouts/main";
import { Container, Row, Col } from "reactstrap";

const InternationalRemovals = () => (
  <div>
    <Head>
      <title>International London Removals</title>
      <meta name="description" content="Do you move outside the country? Our international friendly team at Top London Removals is happy to talk to you and do the hard work for you. We cover all EU countries and cities including Berlin, Barcelona, Paris. etc.."/>
    </Head>
    <Page>
      <article>
        <Col className="main-container">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h1 style={{ fontSize: "35px" }}>International Removals</h1>
            <p>
              Do you need to move overseas? are you seeking international
              removals experts? At London Removals, We have been helping our
              clients move abroad since 2001, and more and more customers are
              choosing us due to our exceptional
              reputation. We are happy to serve you whenever you need us and always do everything we
              can to ensure your move runs as smoothly as possible, helping out
              with packing, labelling boxes and unpacking whenever needed. We
              are here to provide you with the first-class service that you
              deserve and offer some of the most competitive prices on the
              market without ever cutting corners on quality or integrity.{" "}
            </p>
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
        <br />
          <h2 className="h2">We can pack for you</h2>
          <p>
            We are fully-insured to carry out international removals and use all
            the materials necessary to protect your items whilst they are in
            transit. Carefully planning is essential to carrying out a
            successful move, so we can visit you in advance of your move so we
            can identify the best way to serve you. We have almost two decades
            of experience to draw upon when it comes to packing and loading and
            know exactly how to pack your items safely and securely. We can also
            help with the dismantling and reassembly of furniture and provide
            you with packaging materials of the highest quality including boxes,
            wrapping paper, bubble wrap and much more.{" "}
          </p>

          <h2 className="h2">Bespoke removal services</h2>
          <p>
            We can tailor our services in line with your specific needs. As
            every client’s requirements are different, it’s essential that we
            offer a bespoke service to ensure we can serve you efficiently. You
            can count on us to turn up on time and handle your items with the
            utmost care, so they get to their destination in the same condition
            they left their previous location in. We can help you whether you’re
            a residential or business client and can also provide you with
            storage solutions on a short or long-term basis if required. If you
            can’t move into your new premises immediately after you leave your
            current base, this service could be ideal.{" "}
          </p>

          <h2 className="h2">Domestic and commercial clients catered for</h2>
          <p>
            No matter how sizeable your needs are, we can help. We can assist
            you whether you need to move the contents of a small flat or a large
            office and are here to remove as much stress from the whole process
            as possible. We work hard to eliminate worry from our customers’
            minds, and the level of help we can offer means you don’t even need
            to lift a finger as part of the process if you don’t want or are
            unable to.
          </p>
          <h2 className="h2">international moving quotes</h2>
          <p>
            It’s easy to
            <a className="a" href="/get-a-quote"> request a quote </a>
            for an international move – you can do so simply by filling in the
            contact form or giving us a call
            <a className="a" href="tel:07484675664"> 07484675664</a>
            . Why wait any longer if you have been looking for the best
            international removals firm in London? Drop us a line today to find
            out more.
          </p>
        </Col>
      </article>
    </Page>
  </div>
);

export default InternationalRemovals;
