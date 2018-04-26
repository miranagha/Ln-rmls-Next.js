import React from "react";
import Head from 'next/head'
import Form from "../components/Form.js"
import AsideText from "../components/AsideText.js"
import Section from "../components/Section.js"



// import 'bootstrap';
// import "font-awesome/css/font-awesome.min.js";

import Page from '../layouts/main';

const Home = () => (
  <div className='row'>
    <Head>
      <title>London Removals</title>
    </Head>

    <Page>
    <div className='col-sm-8'>
      <Section />
    </div>
    <aside className='col-sm-4'>
      <Form />
      <AsideText />
    </aside>
    </Page>
  </div>
);

export default Home;