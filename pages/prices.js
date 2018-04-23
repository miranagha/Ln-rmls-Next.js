import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Head from 'next/head'

const Prices = () => (
    <section>
        <Head>
            <title> Prices at London removals </title>
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
                    <h1 style={{ fontSize: '50px' }}>Prices</h1>
                    <p>At London Removals, we are able to offer some of the most competitive
                    and affordable prices for home, office and international moves as well as
                    man and van services on the market without ever compromising on quality.
                </p>
                    <div className='prices'>
                        <h2 className='h2'> WE PROVIDE:</h2>
                        <ul>
                            <li>Small, medium, or Luton vans</li>
                            <li>well-trained and friendly staff</li>
                            <li>Loading, unloading</li>
                            <li>No VAT</li>
                            <li>No hidden charges</li>
                        </ul>
                    </div>
                    <br />
                    <a href='/get-a-quote'><button className='btn btn-lg btn-removals pull-right' type='button'>Get a quote now</button></a>
                    <br />
                </div>
            </div>
            <div className="col-md-8 col-md-push-2">
                <h2 className='h2'>Option 1 – Pay by the hour</h2>
                <p>Many customers opt for our Pay by the Hour service. This service
                is ideal if your move will only take a few hours. We can assist you whether you require 1, 2 or 3 members
                of staff to help. there are no hidden costs and the price you see is
                the price you pay.
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
                <h2 className='h2'>Option 2 – Half-day rate</h2>
                <p>This service may be the most suitable if you expect your move to take
                up to four hours but not a full day and will work out cheaper than paying
                by the hour. If you need to move the contents of a large flat or small house
                or office, you may well wish to opt for the half-day service.
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
                <h2 className='h2'>Option 3 – Full-day rate</h2>
                <p>There are even bigger savings to make if you require our services for a full-day.
                If you need to move from a large house or office, this could be the most appropriate
                solution for your requirements.
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
                <h2 className='h2'>Option 4 – Everything Else</h2>
                <p>If none of the above options seem quite right for you, simply get in touch so we
                can provide you with a custom quote based on your specific needs and circumstances.
                Remember, there are no hidden charges and all prices include VAT.
                <br />
                    <br />
                    To find out more about using our Everything Else service or to
                <a className='a' href='/get-a-quote'> get a quote</a>, call us on <a className='a' href="tel:07490531699"> 07490531699</a>.</p>
            </div>
        </article>
        <Footer />
    </section>
);

export default Prices;
