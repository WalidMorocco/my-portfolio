import { Fragment } from 'react';

const ProjectModal = (props) => {
  const projectTitle = props.title.split(' ').join('-').toLowerCase();
  return (
    <Fragment>
      <div
        className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center '
        onClick={() => props.dismissModal()}
      >
        {/* <div className='bg-deep-blue p-4 md:max-w-screen-md md:max-h-screen-md max-w-[80%] max-h-[80%] overflow-auto flex flex-col md:flex-row items-center hover:scale-105 transition duration-300'> */}
        <div className='bg-deep-blue md:flex max-w-[80%] max-h-[65%] overflow-auto items-center hover:scale-105 transition duration-300 p-10 space-y-10'>
          <div className='md:mr-10 mb-4 md:mt-4 h-full md:w-1/2 '>
            <img
              className='mx-auto'
              src={require(`../../assets/${projectTitle}.png`)}
              alt={projectTitle}
            />
          </div>
          <div className='md:w-1/2 text-white space-y-10 '>
            <h2 className='text-2xl font-bold mb-2'>{props.title}</h2>
            <p className='text-lg mb-2'>{props.description}</p>
            <p className='text-lg mb-2'>
              <strong>Technologies used:</strong> {props.techs}
            </p>
            <p className=' hover:text-yellow'>
              <a
                href={props.link}
                target='_blank'
                rel='noreferrer'
                className='text-blue-500 font-bold'
              >
                Link {`>`}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectModal;
