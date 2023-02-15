import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projectVariant = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  const [showModal, setShowModal] = useState(false);

  const onDismissModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <motion.div
        variants={projectVariant}
        transition={{ duration: 0.7 }}
        className='relative max-w-[400px] max-h-[200px]'
        onClick={() => setShowModal(true)}
      >
        <div className={overlayStyles}>
          <p className='text-2xl font-playfair'>{title}</p>
          <p className='mt-7'>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Nulla porttitor accumsan tincidunt.
          </p>
        </div>
        <div className='flex justify-center text-center items-center h-full object-contain'>
          <img
            className='object-contain h-full w-full'
            src={require(`../../assets/${projectTitle}.png`)}
            alt={projectTitle}
          />
        </div>
      </motion.div>
      {showModal && (
        <ProjectModal
          title={title}
          dismissModal={onDismissModal}
        />
      )}
    </>
  );
};

export default Project;
