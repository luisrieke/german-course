import { FC, Fragment } from 'react';
import { Tiles3 } from 'components/elements/tiles';
import NextLink from 'components/reuseable/links/NextLink';
import { slideInDownAnimate } from 'utils/animation';

const Testimonial: FC = () => {
  return (
    <Fragment>
      <h3 className="display-4 mb-3 text-center">2023 cohort starting in a few weeks!</h3>
      <p className="lead fs-lg mb-10 text-center">
        Simply register now, jump in and start your A1 German video course 🇩🇪
      </p>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 align-items-center">
        <div className="col-lg-7">
          <Tiles3 />
        </div>

        <div className="col-lg-5 mt-5 mb-12">
          <span style={slideInDownAnimate('1200ms')}>
            <NextLink
              href="https://buy.stripe.com/7sI6sm7kUefe8ViaEI"
              title="120$ one-time payment"
              className="btn btn-lg btn-primary rounded-pill me-2"
            />
          </span>

          <br />
          <br />

          <span style={slideInDownAnimate('1500ms')}>
            <NextLink
              href="https://buy.stripe.com/7sI6sm7kUefe8ViaEI"
              title="14$ in 10 weekly payments"
              className="btn btn-lg btn-outline-primary rounded-pill"
            />
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;
