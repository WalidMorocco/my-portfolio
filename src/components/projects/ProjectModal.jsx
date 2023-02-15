import { Fragment } from 'react';

const ProjectModal = (props) => {
  return (
    <Fragment>
      <div
        className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'
        onClick={() => props.dismissModal()}
      >
        <div className='bg-white p-4 max-w-full max-h-full overflow-auto'>
          <button
            className='absolute top-4 right-4'
            onClick={() => props.dismissModal()}
          >
            Close
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectModal;
