import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projectVariant = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
};

const Project = ({ title, description, techs, link }) => {
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
        className='relative '
        onClick={() => setShowModal(true)}
      >
        <div className='border-purple flex justify-center text-center items-center h-full cursor-pointer hover:opacity-80'>
          <img
            className='max-w-full object-contain max-h-full w-auto h-auto'
            src={`assets/${projectTitle}.png`}
            alt={projectTitle}
          />
        </div>
      </motion.div>

      {showModal && (
        <ProjectModal
          dismissModal={onDismissModal}
          title={title}
          description={description}
          techs={techs}
          link={link}
        />
      )}
    </>
  );
};

export default Project;
