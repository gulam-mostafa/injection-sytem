import { Footer } from 'flowbite-react';
import React from 'react';

const PageFooter = () => {
    return (
        <div>
            <Footer container={true}>
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <Footer.Brand
      className='text-sm'
        href="/"
        src="https://flowbite.com/docs/images/logo.svg"
        alt="Flowbite Logo"
        name="Injection Molding  System"
      />
      <Footer.LinkGroup>
        <Footer.Link href="#" className='mx-1'>
          About
        </Footer.Link>
        <Footer.Link className='mx-1' href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link className='mx-1' href="#">
          Licensing
        </Footer.Link>
        <Footer.Link className='mx-1' href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
    <Footer.Copyright
      href="#"
      by="Developer™"
      year={2022}
    />
  </div>
</Footer>
        </div>
    );
};

export default PageFooter;