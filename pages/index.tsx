import { NextPage } from 'next';
import { Fragment } from 'react';
import { Footer } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import Script from 'next/script';
import { slideInDownAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const LandingPage: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      <main className="content-wrapper mt-12 mb-12">
        <section className="wrapper bg-light position-relative min-vh-70 d-lg-flex align-items-center">
          <div
            style={{ backgroundImage: 'url(/img/photos/index.jpg)' }}
            className="rounded-4-lg-start col-lg-6 order-lg-2 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100 min-vh-50"
          />

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="mt-10 mt-md-11 mt-lg-n10 px-10 px-md-11 ps-lg-0 pe-lg-13 text-center text-lg-start">
                  <h1 className="display-1 mb-5" style={slideInDownAnimate('600ms')}>
                    3 Months. One Goal. Learn German Together! 🙌
                  </h1>
                  <br />
                  <p className="lead fs-25 lh-sm mb-7 pe-md-10" style={slideInDownAnimate('900ms')}>
                    Embark on an immersive language journey that offers more than just lessons. 🪩 In just 90 days, join
                    a community of like-minded individuals on an exciting quest to master the German language. 🥙🍻
                  </p>
                  <div>
                    <p>
                      Ready to master German? Join our dynamic video course with interactive weekly live sessions!
                      Perfect for beginners and those looking to improve.
                    </p>
                    <ul>
                      <li>On-demand video lessons</li>
                      <li>Live, interactive weekly classes</li>
                      <li>Flexible learning on your schedule</li>
                      <li>A supportive community of learners</li>
                    </ul>
                    <script
                      async
                      src="https://form.maildroppa.com/md-form-loader.js"
                      data-md-form="84d17677-775d-4459-b760-b2cd4e6d1994"
                    ></script>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-light position-relative mg-12">
          <div className="container py-14 py-md-16">
            <Fragment>
              <h3 className="display-4 mb-3 text-center">We're just launching! 🚀</h3>
              <p className="lead fs-lg mb-10 text-center">
                Don't miss out—make German your superpower from the start! 👨‍🚀✨
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
