import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; 
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../validation/validationSchema';
import useLocalStorage from '../hooks/useLocalStorage';
import '../styles/Contact.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const [storedFormData, setStoredFormData] = useLocalStorage('contactForm', {});

  useEffect(() => {
    if (storedFormData) {
      Object.keys(storedFormData).forEach(key => {
        setValue(key, storedFormData[key]);
      });
    }
  }, [setValue, storedFormData]);

  const onSubmit = (data) => {
    try {
      
      console.log('Form data submitted:', data);
      alert('Message sent successfully');
      setStoredFormData({});
      window.localStorage.removeItem('contactForm');
    } catch (error) {
      console.error('There was an error sending the message!', error);
    }
  };

  const handleInputChange = () => {
    const currentFormData = getValues();
    setStoredFormData(currentFormData);
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} onChange={handleInputChange}>
        <div>
          <label>Name</label>
          <input {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Message</label>
          <textarea {...register('message')} />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
