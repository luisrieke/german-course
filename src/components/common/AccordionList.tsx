import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'No subscription, no long-term contract',
    body: 'You can book this course once. There is no subscription trap and no obligation to continue the course. Of course we are happy if you like our online sessions and want to continue. But this is all up to you. This also makes the course perfect as a Christmas present if you are not booking the course for yourself but for friends or loved ones.'
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Flexible course participation, sessions 3 times a week',
    body: 'We have fixed course times 3 times a week. These are always Tuesdays at 6 p.m., Thursdays at 6 p.m. and Saturdays at 10 a.m. This means that the course times can be perfectly combined with work or study. And you just come as you like and feel. All dates in February and March are freely available to you and you can come when it suits you.'
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Everything online via video conference',
    body: 'Stay where you are. You can take part in the courses flexibly from home or from work and you dont have to travel far to get there. You dont have to install any extra software for the video conferences, you get a link that you just have to click on and the video conference starts. The only important thing is that you have a laptop.'
  }
];

const AccordionList: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  );
};

export default AccordionList;
