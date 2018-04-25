import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Head from 'next/head'

const ManAndVan = () => (
  <div>
    <Head>
    <title>Man And Van</title>      
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <link rel="stylesheet" href="/_next/static/style.css" />
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <Header />
    <div className="main-container col-lg-12">
      <div className="col-md-8 col-md-push-2">
        <h1>London man and van</h1>
        <p>Look for man and van services in London?  we have been taking the fuss, stress and strain out
           of removals for over a decade-and-a-half and always go the extra mile to
           make your move as smooth as possible. We are trusted to oversee all kinds
           of moves, including everything from small flat removals to large office
           relocations. Our fleet is diverse enough to cover all moves and includes
           transit vans, large removal vans and everything in between. We treat all
           your items with the care and respect that they deserve and use our vast
           experience and resources to ensure your goods get from A to B in style in
           the same condition as they left. Get in touch today if you require a man and van service in London.</p>

        <a href='/get-a-quote'><button className='btn btn-lg btn-removals pull-right' type='button'>Get a quote now</button></a>
        <br />
      </div>
    </div>
    <div className="col-md-8 col-md-push-2">
      <br />
      <h2 className='h2' >A 24-hour Man and Van Service</h2>
      <p>Available 24 hours a day, seven days a week, we are waiting to hear from you if
      you need help with deliveries, removals, transportations and relocations. The
      entire length and breadth of the capital are covered by our team, and we have
      excellent knowledge of the streets and districts of London. though we also regularly
      head to international cities like Berlin, Paris, Brussels and Amsterdam.
        </p>
      <br />
      <h2 className='h2'>Removals and deliveries</h2>
      <p>There are many great reasons for choosing London Removals when you need
        a man and van service you can depend on. We are fully-insured, employ
        professional, friendly and uniformed staff and offer clean vans of various
        sizes with a host of useful facilities. We are one of the most highly-rated
        removal services in the capital and can even help with packing, unpacking and
        labelling boxes to speed up the process if needed. Whether you need to move
        locally, nationally or internationally, we can assist you, and what’s more is
        that we offer some of the best prices in London, without ever making compromises
             on quality. </p>
      <br />
      <h2 className='h2'>Tailored to your needs</h2>
      <p>We know that no two clients’ needs are ever quite the same, which is why so
        we take a host of factors into account when calculating the cost of your move.
        These factors include street size, whether you live in a house or flat, where
        you are moving to and the size of your loads to give just a few examples. Our
        man and van service is used for a number of reasons, including relocations,
        courier services and more. The services we offer have been fine-tuned to cater
        forto our customers perfectly, and we can help you even if you need us during
        unsociable hours, evenings, weekends and public holidays. We are noted for our
        flexibility and happy to work around your schedule.
               <br />
        <br />
        <br />
        Getting a quote is easy – just  <a className='a' href='/get-a-quote'> complete the form </a>
        or call the number above and we will be happy to give you a price based on your specific needs.
               </p>
    </div>
    <Footer />    
  </div>

);

export default ManAndVan;
