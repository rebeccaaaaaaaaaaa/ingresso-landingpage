import React from 'react';

import Head from 'next/head';

import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';
import Sociais from '../components/Sociais';
import WhatsFloat from '../components/WhatsFloat';
import { AppConfig } from '../utils/AppConfig';

const App = () => {
  return (
    <>
      <Head>
        <title> {AppConfig.title} </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={AppConfig.description} />
        <link rel="icon" type="image/x-icon" href={AppConfig.fivicon} />
      </Head>
      <div className={`bg-background grid gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <Header />
              <MainHero />
            </div>
          </div>
          <MainHeroImage />
        </div>
        <Canvas />
        <LazyShow>
          <>
            <Product />
            <Canvas />
          </>
        </LazyShow>
        <LazyShow>
          <>
            <Features />
            <Canvas />
          </>
        </LazyShow>
        <LazyShow>
          <Pricing />
        </LazyShow>
        <LazyShow>
          <>
            <Canvas />
            <Sociais />
          </>
        </LazyShow>
        <Analytics />

        <WhatsFloat />
      </div>
    </>
  );
};

export default App;
