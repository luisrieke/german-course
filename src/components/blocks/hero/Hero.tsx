import { FC } from 'react';
import { slideInDownAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const Hero: FC = () => {
  return (
    <section className="wrapper bg-light position-relative min-vh-70 d-lg-flex align-items-center">
      <div
        style={{ backgroundImage: 'url(/img/photos/about16.jpg)' }}
        className="rounded-4-lg-start col-lg-6 order-lg-2 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100 min-vh-50"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mt-10 mt-md-11 mt-lg-n10 px-10 px-md-11 ps-lg-0 pe-lg-13 text-center text-lg-start">
              <h1 className="display-1 mb-5" style={slideInDownAnimate('600ms')}>
                Christmas Special 🎄 Learn to speak basic German within 9 weeks
              </h1>
              <br />
              <p className="lead fs-25 lh-sm mb-7 pe-md-10" style={slideInDownAnimate('900ms')}>
                We help you to learn German in our sessions for beginners. You will learn the basics of German language
                in 9 weeks starting from February 2023.
              </p>

              <div
                className="d-flex justify-content-center justify-content-lg-start"
                style={slideInDownAnimate('900ms')}
              >
                <span style={slideInDownAnimate('1200ms')}>
                  <NextLink
                    href="https://buy.stripe.com/28oaIC8oYgnmc7udQQ"
                    title="Book now"
                    className="btn btn-lg btn-primary rounded-pill me-2"
                  />
                </span>

                <span style={slideInDownAnimate('1500ms')}>
                  <NextLink
                    href="https://buy.stripe.com/28o2c6bBa3AAefCfYZ"
                    title="for a friend"
                    className="btn btn-lg btn-outline-primary rounded-pill"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
