import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Hero } from 'components/blocks/hero';
import { Team } from 'components/blocks/team';
import { About } from 'components/blocks/about';
import { Facts } from 'components/blocks/facts';
import { Footer } from 'components/blocks/footer';
import { Banner } from 'components/blocks/banner';
import { Services } from 'components/blocks/services';
import { Testimonial } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';

const LandingPage: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero />

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-18">
            {/* ========== services section ========== */}
            <Services />

            <hr className="my-14 my-md-17" />

            {/* ========== about us section ========== */}
            <About />
          </div>
        </section>

        {/* ========== video banner section ========== */}
        <Banner />

        <section className="wrapper bg-light position-relative">
          <div className="container py-14 py-md-16">
            {/* ========== facts section ========== */}
            <Facts />

            {/* ========== team section ========== */}
            <Team />

            <hr className="mt-15 mt-md-18 mb-14 mb-md-17" />

            {/* ========== testimonial section ========== */}
            <Testimonial />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
