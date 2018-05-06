import React from "react";
import Head from "next/head";
import Page from "../layouts/main";
import { Container, Row, Col } from "reactstrap";

const OfficeRemovals = () => (
  <section>
    <Head>
      <title>Office Removals London - </title>
      <meta name="description" content="No matter how large your business is. Our office removals staff has a huge experience and capacity to carry out the job smoother than you expect. Call today to receive a free quote."/>
    </Head>
    <Page>
      <article>
        <Col className="main-container">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <h1 style={{ fontSize: "36px" }}>London Office Removals</h1>
            <p>
              There’s no doubt that a great deal of planning and time goes into
              moving offices, but at London Removals we have the experience,
              expertise and resources needed to ensure your office move goes
              smoothly. We have been helping business offices relocate since
              2001 and are passionate about helping businesses move premises
              without disruption. It’s essential that the job moving your items
              is handed to highly-experienced team with an excellent reputation,
              and we’re confident we can deliver the outstanding results you are
              looking for.{" "}
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
          <h2 className="h2">office relocation in style</h2>
          <p>
            We always treat your office equipment, furniture and other goods
            with the utmost respect and consistently ensure your items arrive at
            their destination in the same condition that they left their
            previous base inhome. With London Removals, there is no need to
            worry about your items being damaged, broken andor lost. We are
            fully-insured and wholly competent to carry out the duties that we
            are tasked with.
          </p>
          <h2 className="h2">Assisting businesses of all sizes</h2>
          <p>
            London Removals can come to your assistance no matter the size of
            your business. Over the years, we have assisted small start-ups,
            SMEs and large corporate clients to relocate, and we can help you
            whether you’re moving across London, to another UK destination or
            overseas. We are happy to assist you during unsociable hours like
            evenings, weekends and public holidays. We know how important your
            digital and physical files are to your business and can be trusted
            to take care of everything properly. All electronic equipment, files
            and furniture are transported securely, and we can also provide
            storage services if you are not moving in on the same day you exit
            your current premises.
          </p>
          <h2 className="h2">Keeping downtime to a minimum</h2>
          <p>
            To speed up the relocation process, we can pack your items safely
            and securely on your behalf, transport, deliver and even unpack
            themin your new office if needed. Our fast, safe and secure
            processes have helped us become one of the most trusted office
            removals services in London. As no two moves are ever the same, we
            build a detailed and intricate plan of action to ensure your big
            move runs as smoothly as it possibly can.
          </p>
          <h2 className="h2">Smooth office removals</h2>
          <p>
            We can make the process even smoother by obtaining a floor plan of
            your new space and labeling all your boxes correctly. You can get in
            touch with us at any point if you do have any queries about our
            office removals services. More and more businesses from different
            industry sectors are choosing us over the competition thanks to our
            passion for quality and strong reputation. We also charge some of
            the most competitive prices on the market, without ever making
            sacrifices on quality.
            <br />Why not get in touch to
            <a className='a' href="/get-a-quote"> get a quote</a> today if you need to move
            offices in London?
          </p>
        </Col>
      </article>
    </Page>
  </section>
);

export default OfficeRemovals;
