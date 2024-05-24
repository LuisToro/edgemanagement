import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import Picture from '../../components/picture/Picture';
import './Contact.scss';

interface FormDataProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState<FormDataProps>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormDataProps>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    console.log('formData', { formData });
  }, [formData]);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let errors = formErrors;

    switch (name) {
      case 'firstName':
        errors.firstName = value.trim() === '' ? 'First Name is required' : '';
        break;
      case 'lastName':
        errors.lastName = value.trim() === '' ? 'Last Name is required' : '';
        break;
      case 'email':
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        errors.email = emailValid ? '' : 'Email is not valid';
        if (value.trim() === '') errors.email = 'Email is required';
        break;
      case 'message':
        errors.message = value.trim() === '' ? 'Message is required' : '';
        break;
      default:
        break;
    }

    setFormErrors(errors);
    checkIfAllFieldsAreFilled({ ...formData, [name]: value }, errors);
  };

  const checkIfAllFieldsAreFilled = (data: any, errors: FormDataProps) => {
    const areAllFieldsFilled = Object.values(data).every(
      (field: any) => field.trim() !== ''
    );
    const areAllFieldsValid = Object.values(errors).every(
      (error) => error === ''
    );
    setIsButtonDisabled(!(areAllFieldsFilled && areAllFieldsValid));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting formData', { formData });
  };

  return (
    <Layout>
      <div className="contact">
        <Picture
          src="https://images.squarespace-cdn.com/content/v1/640bb2a094bc044ee3179f89/5f4d9a02-2813-404c-9be0-2e1be1947ea1/info-systems-consulting.JPG"
          alt="Two men meeting in an office"
        ></Picture>
        <div className="form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {formErrors.firstName && <span>{formErrors.firstName}</span>}
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {formErrors.lastName && <span>{formErrors.lastName}</span>}
              </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span>{formErrors.email}</span>}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              />
              {formErrors.message && <span>{formErrors.message}</span>}
            </div>
            <button type="submit" disabled={isButtonDisabled}>
              Send
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
