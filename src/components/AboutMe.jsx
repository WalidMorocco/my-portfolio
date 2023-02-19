import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMedia from './SocialMedia';

const AboutMe = ({ setSelectedPage }) => {
  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10'
    >
      {/* Image Section */}
      <div className='md:order-2 flex justify-between basis-3/5 z-10 mt-16 md:mt-16'>
        <div
          className=' relative z-0 ml-20 before:absolute before:-left-10 before:bottom-5 before:rounded-t-[400px]
                before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full  before:z-[-1] before:bg-gradient-rainbow'
        >
          <div
            className='relative z-0  before:absolute before:rounded-t-[400px]
                before:w-full before:max-w-[525px] hover:before:max-w-[600px] before:duration-1000  before:h-full before:z-[-1] before:bg-deep-blue'
          >
            <img
              alt='profile'
              className='hover:filter hover:saturate-200 transition  duration-1000 z-10 w-full max-w-[400px] md:max-w-[600px] '
              src='assets/profile-image.png'
            />
          </div>
        </div>
      </div>

      <div className='z-30 basis-2/5 mt-12 md:mt-32'>
        {/* HEADINGS */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='text-6xl font-playfair z-10 text-center md:text-start'>
            I'm Walid
          </p>

          <p className='mt-10 mb-7 text-sm text-center md:text-start'>
            Software Engineer from Morocco, based in the United-States with a
            passion for solving problems and building creative tools.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            <div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair'>
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMedia />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
