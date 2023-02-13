import { NextPage } from 'next';
import { Fragment } from 'react';
import { Footer } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import Script from 'next/script';
import { slideInDownAnimate } from 'utils/animation';

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

      <main className="content-wrapper mt-12 mb-12">
        <section className="wrapper bg-light position-relative min-vh-70 d-lg-flex align-items-center">
          <div
            style={{
              backgroundImage: 'url(/img/photos/portuguese.jpg)'
            }}
            className="rounded-4-lg-start col-lg-6 order-lg-2 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100 min-vh-50"
          />

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="mt-10 mt-md-11 mt-lg-n10 px-10 px-md-11 ps-lg-0 pe-lg-13 text-center text-lg-start">
                  <h1 className="display-1 mb-5" style={slideInDownAnimate('600ms')}>
                    One Weekend. One Goal. Learn a new language 🙌
                  </h1>
                  <br />
                  <p className="lead fs-25 lh-sm mb-7 pe-md-10" style={slideInDownAnimate('900ms')}>
                    Start learning a language with other folks. One weekend. One cohort. With one goal. Learn
                    Portuguese. And by side some party 🪩 new food 🥘 and having a good time together 🌊☀️
                  </p>

                  <h2>
                    Coming soon! <a href="mailto:luis.rieke@spacifik.com">Notify me</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-light position-relative mg-12">
          <div className="container py-14 py-md-16">
            <Fragment>
              <h3 className="display-4 mb-3 text-center">This bootcamp has not been planned yet</h3>
              <p className="lead fs-lg mb-10 text-center">
                Coming soon! If you want to be notified when this bootcamp is planned, please send us an email:{' '}
                <a href="mailto:luis.rieke@spacifik.com">Notify me</a>
              </p>
            </Fragment>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
};

export default LandingPage;
