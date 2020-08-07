import React from "react";
import Head from "next/head";
import Page from "../layouts/main";
import Link from 'next/link'

import { Container, Row, Col } from "reactstrap";

const ManAndVan = () => (
  <div>
    <Head>
      <title>London Man And Van</title>
      <meta name="description" content="Do you want man with a van now? just give us a call we will be at your place in less than half an hour, and you do not need to touch anything leave the hard work for us"/>
    </Head>
    <Page>
      <Col className="main-container">
        <Col sm="12" md={{ size: 8, offset: 2 }}>
        <br />
          <h1>London man and van</h1>
          <p>
            Look for man and van services in London? we have been taking the
            fuss, stress and strain out of removals for over a decade-and-a-half
            and always go the extra mile to make your move as smooth as
            possible. We are trusted to oversee all kinds of moves, including
            everything from small flat removals to large office relocations. Our
            fleet is diverse enough to cover all moves and includes transit
            vans, large removal vans and everything in between. We treat all
            your items with the care and respect that they deserve and use our
            vast experience and resources to ensure your goods get from A to B
            in style in the same condition as they left. Get in touch today if
            you require a man and van service in London.
          </p>
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
        <h2 className="h2">A 24-hour Man and Van Service</h2>
        <p>
          Available 24 hours a day, seven days a week, we are waiting to hear
          from you if you need help with deliveries, removals, transportations
          and relocations. The entire length and breadth of the capital are
          covered by our team, and we have excellent knowledge of the streets
          and districts of London. though we also regularly head to
          international cities like Berlin, Paris, Brussels and Amsterdam.
        </p>
        <br />
        <h2 className="h2">Removals and deliveries</h2>
        <p>
          There are many great reasons for choosing London Removals when you
          need a man and van service you can depend on. We are fully-insured,
          employ professional, friendly and uniformed staff and offer clean vans
          of various sizes with a host of useful facilities. We are one of the
          most highly-rated removal services in the capital and can even help
          with packing, unpacking and labelling boxes to speed up the process if
          needed. Whether you need to move locally, nationally or
          internationally, we can assist you, and what’s more is that we offer
          some of the best prices in London, without ever making compromises on
          quality.{" "}
        </p>
        <br />
        <h2 className="h2">Tailored to your needs</h2>
        <p>
          We know that no two clients’ needs are ever quite the same, which is
          why so we take a host of factors into account when calculating the
          cost of your move. These factors include street size, whether you live
          in a house or flat, where you are moving to and the size of your loads
          to give just a few examples. Our man and van service is used for a
          number of reasons, including relocations, courier services and more.
          The services we offer have been fine-tuned to cater forto our
          customers perfectly, and we can help you even if you need us during
          unsociable hours, evenings, weekends and public holidays. We are noted
          for our flexibility and happy to work around your schedule.
          <br />
          <br />
          <br />
          Getting a quote from <a className="a" title="man and van London" href="https://www.google.co.uk/search?safe=strict&rlz=1C5CHFA_enGB851GB851&q=man%20and%20van%20london&npsic=0&rflfq=1&rlha=0&rllag=51493237%2C-104428%2C436&tbm=lcl&ved=2ahUKEwiQzOvy_93jAhWlsKQKHfZCDToQtgN6BAgLEAQ&tbs=lrf%3A!2m1!1e3!3sIAE%2Clf%3A1%2Clf_ui%3A3&rldoc=1&fbclid=IwAR2qCGIZtC7CCK3ZSUKMd_hniM8AMLKDSuVd9QKGGsYOEleNfmUfOJPPR-o#rlfi=hd:;si:8582725131999057027;mv:!1m2!1d51.45764983124475!2d-0.041589478990886164!2m2!1d51.44203085487853!2d-0.08536313011393305!3m12!1m3!1d7562.960727244291!2d-0.0634763045524096!3d51.44984034306164!2m3!1f0!2f0!3f0!3m2!1i1019!2i584!4f13.1"> man and van London</a> is easy – just
          <Link href='/get-a-quote' passHref><a className='a'> complete the form </a></Link>
          or call the number above and we will be happy to give you a price
          based on your specific needs.
        </p>
      </Col>
    </Page>
  </div>
);

export default ManAndVan;
