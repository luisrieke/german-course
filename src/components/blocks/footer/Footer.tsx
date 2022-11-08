import { FC } from 'react';
import { Contact } from '../contact';
import NextLink from 'components/reuseable/links/NextLink';

const Footer: FC = () => {
  return (
    <footer className="bg-soft-primary">
      <div className="container">
        <div className="card shadow-lg mt-n16 mt-md-n21 mb-15 mb-md-14">
          <Contact />
        </div>
      </div>

      <div className="container pb-12 text-center">
        <div className="row mt-n10 mt-lg-0">
          <div className="col-xl-10 mx-auto">
            <p>
              © Spacifik UG (haftungsbeschränkt). All rights reserved.{' '}
              <NextLink title="Imprint & Data privacy" href="/terms" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
