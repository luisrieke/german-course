import { FC, Fragment } from 'react';
import { Tiles3 } from 'components/elements/tiles';
import NextLink from 'components/reuseable/links/NextLink';
import { slideInDownAnimate } from 'utils/animation';

const Testimonial: FC = () => {
  return (
    <Fragment>
      <h3 className="display-4 mb-3 text-center">2023 cohort is starting in a few weeks!</h3>
      <p className="lead fs-lg mb-10 text-center">
        Simply register now, jump in and start the Berlin bootcamp to learn German in May 2023 🇩🇪
      </p>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 align-items-center">
        <div className="col-lg-7">
          <Tiles3 />
        </div>

        <div className="col-lg-5 mt-5 mb-12">
          <span style={slideInDownAnimate('1200ms')}>
            <NextLink
              href="https://buy.stripe.com/bIY18234Edbab3qbIN"
              title="enroll now"
              className="btn btn-lg btn-primary rounded-pill me-2"
            />
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
