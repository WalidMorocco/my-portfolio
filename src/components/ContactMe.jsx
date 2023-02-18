import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const ContactMe = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log('~ e', e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id='contact'
      className='contact pt-48'
    >
      {/* HEADINGS */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className='mx-auto '
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-yellow'>CONTACT ME</span>
          </p>
        </div>
      </motion.div>

      <div className='mx-auto gap-16 mt-16'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className='basis-1/2 mt-10 md:mt-0'
        >
          <form
            target='_blank'
            onSubmit={onSubmit}
            action='https://formsubmit.co/76b35b9513b34f4e9d689a7c0e772ae9'
            method='POST'
            className='space-y-10 text-black'
          >
            <input
              className='w-10/12 font-semibold placeholder-black p-3'
              type='text'
              placeholder='NAME'
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className='text-red mt-1'>
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className='w-10/12 font-semibold placeholder-black p-3 mt-5'
              type='text'
              placeholder='EMAIL'
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className='text-red mt-1'>
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}

            <textarea
              className='w-10/12 font-semibold placeholder-black p-3 mt-5'
              name='message'
              placeholder='MESSAGE'
              rows='4'
              cols='50'
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className='text-red mt-1'>
                {errors.message.type === 'required' &&
                  'This field is required.'}
                {errors.message.type === 'maxLength' &&
                  'Max length is 2000 char.'}
              </p>
            )}

            <button
              className='w-2/5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-300'
              type='submit'
            >
              <p className='m-5'>SEND ME A MESSAGE</p>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
