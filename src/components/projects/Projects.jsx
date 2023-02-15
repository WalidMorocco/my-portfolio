import { motion } from 'framer-motion';
import Project from './Project';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section
      id='projects'
      className='pt-48 pb-48'
    >
      {/* HEADINGS */}
      <motion.div
        className='md:w-2/5 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl mb-10'>PROJECTS</p>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className='flex justify-center pt-7'>
        <motion.div
          className='sm:grid sm:grid-cols-1 space-y-10'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div className='sm:grid sm:grid-cols-3 sm:space-x-7'>
            <div
              className='flex justify-center text-center items-center p-10 bg-blue
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
            >
              FULL STACK
            </div>
            <Project title='Coffee Me' />
            <Project title='Afrolance' />
          </div>

          {/* ROW 2 */}
          <div className='sm:grid sm:grid-cols-3 sm:space-x-7'>
            <div
              className='flex justify-center text-center items-center p-10 bg-blue
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
            >
              DATA SCIENCE
            </div>
            <Project title='Afrolance' />
            <Project title='Afrolance' />
          </div>

          {/* ROW 3 */}
          <div className='sm:grid sm:grid-cols-3 sm:space-x-7'>
            <div
              className='flex justify-center text-center items-center p-10 bg-blue
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
            >
              OTHERS
            </div>
            <Project title='Afrolance' />
            <Project title='Afrolance' />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
