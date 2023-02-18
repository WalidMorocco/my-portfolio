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
      className='gap-16 py-10 pt-24'
    >
      {/* HEADINGS */}
      <motion.div
        className='md:w-2/5 mx-auto text-center '
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
      <div className='flex justify-center pt-7 mt-32'>
        <motion.div
          className='sm:grid sm:grid-cols-1 space-y-10 '
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div className='sm:grid sm:grid-cols-3 gap-10'>
            <div
              className='flex justify-center text-center items-center p-10 bg-purple
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
            >
              FULL STACK
            </div>
            <Project
              title='Coffee Me'
              description='Discover nearby coffee shops on Coffee-Me! 
                          You can easily find and explore the best coffee spots around you, save your favorite stores, create an account, and even create your own store profile.'
              techs='Express, ReactJS, MongoDB'
              link='https://github.com/WalidMorocco/TWR-Final-Project'
            />
            <Project
              title='Afrolance'
              description='Find Freelance Job offers in your field or post your own and see the applicants with Afrolance! 
                          You can explored the different job offers and the applicants but also set up your profile as a freelancer or an employer'
              techs='ASP.NET, C#, SQL'
              link='https://github.com/WalidMorocco/TWR-Final-Project'
            />
          </div>

          {/* ROW 2 */}
          <div className='sm:grid sm:grid-cols-3 gap-10'>
            <div
              className='flex justify-center text-center items-center p-10 bg-purple
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
            >
              DATA SCIENCE
            </div>
            <Project
              title='Neural Network'
              description='Neural Network based app where you can train the AI to recognize the letters A, B, C and D and then test it all in the GUI.'
              techs='Java'
              link='https://github.com/WalidMorocco/TWR-Final-Project'
            />
            <Project
              title='Stock Market Prediction'
              description='Neural Network based app where you can train the AI to recognize the letters A, B, C and D and then test it all in the GUI.'
              techs='Java'
              link='https://github.com/WalidMorocco/TWR-Final-Project'
            />
          </div>

          {/* ROW 3 */}
          <div className='sm:grid sm:grid-cols-3 gap-10'>
            <div
              className='flex justify-center text-center items-center p-10 bg-purple
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
            >
              OTHERS
            </div>
            <Project
              title='Burning Castle'
              description='Discover nearby coffee shops on Coffee-Me! 
                          You can easily find and explore the best coffee spots around you, save your favorite stores, create an account, and even create your own store profile.'
              techs='Unity, C#'
              link='https://github.com/WalidMorocco/Bruning-Castle'
            />
            <Project
              title='Todo-App'
              description='Personal To do App to keep track of the task I have to do during the day'
              techs='ReactJS, TypeScript'
              link='https://github.com/WalidMorocco/Bruning-Castle'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
