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
        className='relative max-w-[400px] max-h-[200px]'
        onClick={() => setShowModal(true)}
      >
        <div className='flex justify-center text-center items-center h-full object-contain cursor-pointer hover:opacity-80'>
          <img
            className='object-contain h-full w-full'
            src={require(`../../assets/${projectTitle}.png`)}
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
