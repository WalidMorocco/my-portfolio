import { motion } from 'framer-motion';
import './Styles/svg.css';

const Skills = () => {
  return (
    <section
      id='skills'
      className='pt-10 pb-48'
    >
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='font-playfair font-semibold text-4xl mb-5'>MY SKILLS</p>
        </motion.div>
      </div>

      <div className='md:flex md:justify-between mt-16 gap-32'>
        <motion.div
          className='md:w-1/3 mt-10 mb-16'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Languages
              </p>
            </div>
            <div
              className='w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]'
              id='myLanguages'
            />
          </div>
          <div className='m-10 flex justify-center space-x-11'>
            <img
              className=''
              alt='python'
              src='assets/python-logo.png'
              title='Python'
            />
            <img
              className=''
              alt='github-link'
              src='assets/java-logo.png'
              title='Java'
            />
            <img
              className=''
              alt='github-link'
              src='assets/javascript-logo.png'
              title='JavaScript'
            />
          </div>
          <div className='m-10 flex justify-center space-x-11'>
            <img
              className=''
              alt='github-link'
              src='assets/sql-logo.png'
              title='SQL'
            />
            <img
              className=''
              alt='github-link'
              src='assets/csharp-logo.png'
              title='C#'
            />
          </div>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className='md:w-1/3 mt-10 mb-16'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Frameworks
              </p>
            </div>
            <div
              className='w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]'
              id='myFrameworks'
            />
          </div>
          <div className='m-10 flex justify-center space-x-11'>
            <img
              className=''
              alt='github-link'
              src='assets/express-logo.png'
              title='Express.JS'
            />
            <img
              className=''
              alt='github-link'
              src='assets/react-logo.png'
              title='React.JS'
            />
            <img
              className=''
              alt='github-link'
              src='assets/dotnet-logo.png'
              title='ASP.NET'
            />
          </div>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-3xl mt-3 drop-shadow-xl'>
                Other Tools
              </p>
            </div>
            <div
              className='w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]'
              id='myTools'
            />
          </div>
          <div className='m-10 flex justify-center space-x-11'>
            <img
              className=''
              alt='github-link'
              src='assets/git-logo.png'
              title='GIT'
            />
            <img
              className=''
              alt='github-link'
              src='assets/aws-logo.png'
              title='Amazon Web Service'
            />
            <img
              className=''
              alt='github-link'
              src='/assets/mongo-logo.png'
              title='MongoDB'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
