import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Individual payment options and no subscription trap',
    body: 'You can book this course once. There is no subscription trap and no obligation to continue another course. This also makes the course perfect as a present if you are not booking the course for yourself but for friends or loved ones. But if you are not sure if you can finish the course within 10 weeks, it is also possible to book the course for 8$ a week and keep subscribed as long as you need to. You can cancel the subscription at any time.'
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Flexible course participation, whenever you want',
    body: 'Because it is a video course, you can take part in the course whenever you want. You can watch the videos as often as you want and you can also pause the videos at any time. You can also watch the videos on your smartphone or tablet.'
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Easy to understand, easy to learn',
    body: 'The course is designed in such a way that you can learn German in a fun and easy way. The course is perfectly suitable for beginners. The course is also suitable for people who have already learned German at school or university and want to refresh their knowledge.'
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
