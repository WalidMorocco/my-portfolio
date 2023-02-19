const SocialMedia = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/walid-amar/'
        target='_blank'
        rel='noreferrer'
      >
        <img
          alt='linkedin-link'
          src='assets/linkedin-icon.png'
        />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://github.com/WalidMorocco'
        target='_blank'
        rel='noreferrer'
      >
        <img
          alt='github-link'
          src='assets/github-icon.png'
        />
      </a>
    </div>
  );
};

export default SocialMedia;
