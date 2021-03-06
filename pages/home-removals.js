import React from "react";
import Head from "next/head";
import Link from 'next/link'
import Page from "../layouts/main";
import { Container, Row, Col } from "reactstrap";

const HomeRemovals = () => (
  <section>
    <Head>
      <title>House Removals London - Flat removals</title>
      <meta name="description" content="Do you need a hand for your house relocation? Top London removals is ready to assit you and take your stress out" />
    </Head>
    <Page>
      <article>
        <Col className="main-container">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <br />
            <h1>Home removals London</h1>
            <br />
            <p>
              <strong>Move home in comfort and style.</strong> We can come to your assistance,
              whether you need to move locally, nationally or internationally.
              Do everything in our power to take as much stress out of
              the experience as we can by offering to carry out a range of tasks
              on your behalf. We go the extra mile to deliver the customer
              satisfaction and offer a number of specialised services for you house moving.
            </p>
            <br />
            <div className="text-right">
              <Link href="/get-a-quote">
                <button className="btn btn-lg btn-removals" type="button">
                  Get a quote now
                </button>
              </Link>
            </div>
            <br />
          </Col>
        </Col>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <br />
          <h2 className="h2">A highly-recommended house mover</h2>
          <p>
            We have been in the business for well over 15 years, and more and
            more domestic and commercial customerspeople are choosing us. Thanks
            to our ever-growing reputation. We are eager to introduce you to our
            door-to-door home removals services, and we are able to
            provide short and long-term solutions if needed. If you are not
            moving in on the same day you are leaving your current property, or
            are heading overseas for a few months, these services could prove to
            be the perfect solution. Our vast experience in moving a diverse
            range of clients means we can get your items to anywhere in style
            without you needing to lift a finger if you don’t want to.{" "}
          </p>

          <h2 className="h2">Cutting down your relocation</h2>
          <p>
            Relocation comes with a large number of duties. However, we can take
            much of the strain from your big move with our comprehensive packing
            and loading services. If you want us to, We can visit your home in
            advance of the big move to help with packing and can arrive at your
            property armed with boxes, bubble wrap and packing paper to cut your
            workload down even further. We are passionate making move house a
            breeze.{" "}
          </p>

          <h2 className="h2">Flexible house removals</h2>

          <p>
            One of the reasons so many customers choose us for their house or flat
            removals is our flexibility. We are happy to help you move
            during hours that could be deemed unsociable as well as public
            holidays and weekends. We may even be able to help you move at short
            notice if another firm has let you down or you have just found out
            you need to relocate quickly.
          </p>

          <h2 className="h2">Calculating the cost</h2>
          <p>
            There are many different factors that might determine how long your
            move will take, such as parking issues, the size of your street and
            whether you live in a flat or house. We offer bespoke quotes based
            on our clients'' unique needs and circumstances, so why not talk to
            us today and get a competitive quote for your house move? We are fully
            insured and always treat our clients' items with the utmost respect.
            <br />
            <br />Get the wheels in motion and talk to our friendly,
            professional <a title="Removals" className="a" href="https://www.google.co.uk/search?rlz=1C5CHFA_enGB851GB851&q=removals&npsic=0&rflfq=1&rlha=0&rllag=51488110,-103920,562&tbm=lcl&ved=2ahUKEwjTh96d_d3jAhV6AGMBHZ79AQgQtgN6BAgLEAQ&tbs=lrf:!2m1!1e3!3sIAE,lf:1,lf_ui:3&rldoc=1#rlfi=hd:;si:8582725131999057027;mv:!1m2!1d51.46819727236742!2d-0.026438156384529073!2m2!1d51.43696119341516!2d-0.11398545863062283!3m12!1m3!1d15125.014059044368!2d-0.07021180750757594!3d51.45257923289129!2m3!1f0!2f0!3f0!3m2!1i1019!2i584!4f13.1">removals </a>team today <a className="a" href="tel:02036336151">02036336151</a>
          </p>
        </Col>
      </article>
    </Page>
  </section>
);
export default HomeRemovals;
