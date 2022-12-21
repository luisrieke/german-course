import { FC } from 'react';
import { Tiles2 } from 'components/elements/tiles';
import AccordionList from 'components/common/AccordionList';

const About: FC = () => {
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-8 align-items-center">
      <div className="col-lg-7 order-lg-2">
        <Tiles2 />
      </div>

      <div className="col-lg-5">
        <h3 className="display-4 mb-7">A few reasons why we could be the right fit for you 🤗</h3>
        <AccordionList />
      </div>
    </div>
  );
};

export default About;
