import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Money back guarantee',
    body: 'We are launching 🚀 this means, we are doint this bootcamp for the first time. This is a beta phase 👨‍🚀 So if you are not satisfied with your German weekend in Berlin, you will get your money back.'
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Meet new people',
    body: 'This bootcamp is not only about learning German. It is about learning German culture 🥨🍺 It is about meeting new people. It is about having fun. We will have breakfast together, will go out for dinner and will have a party night together 🪩'
  },
  {
    no: 'Three',
    expand: false,
    heading: 'You are here for the basics',
    body: 'The course is designed to provide you with the fundamentals to speak German 🇩🇪 You will learn the basics of the language and will be able to communicate with the locals. You will be able to order food 🍞 ask for directions 🗺️ and will be able to talk about yourself. We will focus on practice and discover Berlin together.'
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
