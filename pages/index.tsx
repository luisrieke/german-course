import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero } from 'components/blocks/hero';
import { About } from 'components/blocks/about';
import { Footer } from 'components/blocks/footer';
import { Services } from 'components/blocks/services';
import { Testimonial } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';
import Script from 'next/script';

const LandingPage: NextPage = () => {
  return (
    <Fragment>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="1315d47d-d606-4f96-a103-c9afa6469781"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>

      <PageProgress />

      <main className="content-wrapper mt-12">
        <Hero />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-18">
            <Services />

            <About />
          </div>
        </section>

        {/* <Banner /> */}

        <section className="wrapper bg-light position-relative mg-12">
          <div className="container py-14 py-md-16">
            <Testimonial />
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default LandingPage;
