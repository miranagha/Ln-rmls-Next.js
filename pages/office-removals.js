import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Head from 'next/head'

const OfficeRemovals = () => (
    <section>
        <Head>
            <title>Office Removals London - </title>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="stylesheet" href="/_next/static/style.css" />
            <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
            </script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js">
            </script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js">
            </script>
        </Head>
        <Header />
        <article>
            <div className="main-container col-lg-12">
                <div className="col-md-8 col-md-push-2">
                    <h1 style={{ fontSize: '36px' }}>London Office Removals</h1>
                    <p>There’s no doubt that a great deal of planning and time goes into moving offices,
                    but at London Removals we have the experience, expertise and resources needed to
                    ensure your office move goes smoothly. We have been helping business offices relocate since 2001
                    and are passionate about helping businesses move premises without disruption. It’s
                    essential that the job moving your items is handed to highly-experienced team with
                an excellent reputation, and we’re confident we can deliver the outstanding results you are looking for. </p>
                    <br />
                    <a href='/get-a-quote'><button className='btn btn-lg btn-removals pull-right' type='button'>Get a quote now</button></a>
                    <br />
                </div>
            </div>
            <div className="col-md-8 col-md-push-2">
                <h2 className='h2' >Getting you from A to B in style</h2>
                <p>We always treat your office equipment, furniture and other goods with the utmost
                respect and consistently ensure your items arrive at their destination in
                the same condition that they left their previous base inhome. With London Removals,
                there is no need to worry about your items being damaged, broken andor lost. We
                are fully-insured and wholly competent to carry out the duties that we are tasked
        with.</p>
                <h2 className='h2'>Assisting businesses of all sizes</h2>
                <p>London Removals can come to your assistance no matter the size of your business.
                Over the years, we have assisted small start-ups, SMEs and large corporate clients
                to relocate, and we can help you whether you’re moving across London, to another
                UK destination or overseas. We are happy to assist you during unsociable hours
                like evenings, weekends and public holidays. We know how important your digital
                and physical files are to your business and can be trusted to take care of everything
                properly. All electronic equipment, files and furniture are transported securely,
                and we can also provide storage services if you are not moving in on the same day
        you exit your current premises.</p>
                <h2 className='h2'>Keeping downtime to a minimum</h2>
                <p>To speed up the relocation process, we can pack your items safely and securely
                on your behalf, transport, deliver and even unpack themin your new office if needed.
                Our fast, safe and secure processes have helped us become one of the most trusted
                office removals services in London. As no two moves are ever the same, we build a
                detailed and intricate plan of action to ensure your big move runs as smoothly as
        it possibly can.</p>
                <h2 className='h2'>A smoother process</h2>
                <p>We can make the process even smoother by obtaining a floor plan of your new space
                and labeling all your boxes correctly. You can get in touch with us at any point if
                you do have any queries about our office removals services. More and more businesses
                from different industry sectors are choosing us over the competition thanks to our
                passion for quality and strong reputation. We also charge some of the most competitive
                prices on the market, without ever making sacrifices on quality.
        <br />Why not get in touch to  <a href='/get-a-quote'> get a quote</a> today if you need to move offices in London?</p>
            </div>
        </article>
        <Footer />
    </section>
);

export default OfficeRemovals;
