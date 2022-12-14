import CountUp from 'react-countup';
import { FC, Fragment } from 'react';
import { Tiles1 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { aboutList1 } from 'data/about';
import { serviceList4 } from 'data/service';

const Services: FC = () => {
  return (
    <Fragment>
      <div className="row gx-lg-8 gx-xl-12 gy-12 align-items-center mb-10 mb-md-13">
        <div className="col-lg-6 position-relative">
          <div
            className="btn btn-circle btn-primary pe-none position-absolute counter-wrapper flex-column d-none d-md-flex"
            style={{
              zIndex: 1,
              top: '50%',
              width: 170,
              height: 170,
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <h3 className="text-white mb-1 mt-n2">
              <span className="counter counter-lg">
                <CountUp end={10} />
              </span>
            </h3>

            <p>Weeks</p>
          </div>

          <Tiles1 />
        </div>

        <div className="col-lg-6">
          <h3 className="display-4 mb-5">We help you to learn German with a video course 🎥</h3>

          <p className="mb-7">
            Learning German can be hard and boring. We want to change that. We want to make learning German fun and
            easy.
          </p>
          <p>
            This is not "just a course". It's a kick-start event. Created with one goal: be able to speak basic German.
            10 intensive weeks to learn the fundamentals you need. Unlocking access to an attractive job market and new
            friends and relationships.
          </p>

          <ListColumn list={aboutList1} />
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
