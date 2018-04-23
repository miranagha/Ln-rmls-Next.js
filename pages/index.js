// import React, { Component } from 'react';
import React from "react";
import Form from "../components/Form.js"
import AsideText from "../components/AsideText.js"
import Section from "../components/Section.js"
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Head from 'next/head'

const Home = () => (
<div className='row'>
    <Head>
      <title>London Removals</title>
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
        <div className='col-sm-8'>
          <Section />
        </div>
        <aside className='col-sm-4'>
          <Form />
          <AsideText />
        </aside>
        <Footer />
      </div>
);

export default Home;