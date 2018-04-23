import React from "react";
import Header from "../components/Header.js";
import Head from 'next/head'
import Footer from "../components/Footer.js";

const HomeRemovals = () => (
    <section>
        <Head>
            <title>Home Removals</title>
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
                    <h1>London Home Removals</h1>
                    <p>move home in comfort and style. We can come to your assistance,
                    whether you need to move locally, nationally or internationally.
                    Do everything in our power to take as much fuss and stress out of
                    the experience as we can by offering to carry out a range of tasks
                    on your behalf. We go the extra mile to deliver the customer satisfaction
                and offer a number of specialised services that many of our competitors don’t.</p>
                    <br />
                    <a href='/get-a-quote'><button className='btn btn-lg btn-removals pull-right' type='button'>Get a quote now</button></a>
                    <br />
                </div>
            </div>
            <div className="col-md-8 col-md-push-2">
                <h2 className='h2'>A highly-recommended service</h2>
                <p>We have been in the business for well over 15 years, and more and
                more domestic and commercial customerspeople are choosing us. Thanks to our ever-growing reputation. We are eager
                to introduce you to our door-to-door national and international services,
                and we are able to provide short and long-term solutions if needed.
                If you are not moving in on the same day you are leaving your current property,
                or are heading overseas for a few months, these services could prove to be the
                perfect solution. Our vast experience in moving a diverse range of clients means
                we can get your items from A to B in style without you needing to lift  a
                finger if you don’t want to. </p>

                <h2 className='h2'>Cutting down your workload</h2>
                <p>Relocation comes with a large number of duties. However, we can take much of
                the strain from your big move with our comprehensive packing and loading services.
                If you want us to, We can visit your home in advance of the big move to help with
                packing and can arrive at your property armed with boxes, bubble wrap and packing
                paper to cut your workload down even further. We are passionate making move house a
                breeze. </p>

                <h2 className='h2'>Extra flexibility</h2>

                <p>One of the reasons so many customers choose us over other London removal
                companies is our flexibility. We are happy to help you move during hours that
                could be deemed unsociable as well as public holidays and weekends. We may even be
                able to help you move at short notice if another firm has let you down or you have
                just found out you need to relocate quickly.</p>

                <h2 className='h2'>Calculating the cost</h2>
                <p>There are many different factors that might determine how long your move will
                take, such as parking issues, the size of your street and whether you live in a
                flat or house. We offer bespoke quotes based on our clients'' unique needs and
                circumstances, so why not talk to us today and get a competitive quote for your
                move? We are fully insured and always treat our clients' items with the utmost
                respect. <br />Get the wheels in motion and talk to our friendly,
                professional team today<a className='a' href="tel:07490531699"> 07490531699</a>.</p>
            </div>
        </article>
        <Footer />
    </section>
);
export default HomeRemovals;
