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
                One Weekend. One Goal. Learn some German 🍻🇩🇪
              </h1>
              <br />
              <p className="lead fs-25 lh-sm mb-7 pe-md-10" style={slideInDownAnimate('900ms')}>
                Berlin. 2nd - 4th of June 2023. Start learning German with other folks. One weekend. One cohort. With one
                goal. Learn some German. And at the same time party, experience new food and met great people.
              </p>

              <div
                className="d-flex justify-content-center justify-content-lg-start"
                style={slideInDownAnimate('900ms')}
              >
                <span style={slideInDownAnimate('1200ms')}>
                  <NextLink
                    href="https://buy.stripe.com/bIY18234Edbab3qbIN"
                    title="register for bootcamp"
                    className="btn btn-lg btn-primary rounded-pill me-2"
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
