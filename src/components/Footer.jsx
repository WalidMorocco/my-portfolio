import SocialMedia from './SocialMedia';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className='h-64 bg-red pt-10'>
      <div className='w-10/12 mx-auto'>
        <SocialMedia />
        <div className='md:flex justify-center md:justify-between text-center '>
          <p className='font-playfair font-semibold text-2xl text-yellow'>
            Walid AMAR
          </p>
          <p className='font-playfair text-md text-yellow'>
            ©{currentYear} Walid. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
