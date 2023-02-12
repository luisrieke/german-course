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
                <CountUp end={8} />
              </span>
            </h3>

            <p>People</p>
          </div>

          <Tiles1 />
        </div>

        <div className="col-lg-6">
          <h3 className="display-4 mb-5">Have a fun weekend together and learn some German 🥳</h3>

          <p className="mb-7">We're launching! 🙌 And you can be part of it 😊</p>
          <p>
            This is not "just a course". It's a full weekend of fun, party and language lessons. We will explore Berlin
            and get you into learning German. The plan is to kick-start your ass to learn some German. Prepare to meet
            new people, gain new experiences and learn the fundamentals you need to communicate in German. This will be
            an intense one-weekend-bootcamp to unlock access to an attractive job market and new friends in Germany.
          </p>

          <ListColumn list={aboutList1} />
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
