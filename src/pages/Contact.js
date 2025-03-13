import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

const Contact = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // Event type options for the dropdown
  const eventTypeOptions = [
    { value: 'wedding', label: 'Wedding' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'birthday', label: 'Birthday Party' },
    { value: 'quinceanera', label: 'Quinceañera' },
    { value: 'dj-party', label: 'DJ Party' },
    { value: 'other', label: 'Other' },
  ];

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // In theory, this is where you would send the form data to your backend or email service
    alert('Thank you! Your request has been submitted.');
  };

  return (
    <div className="page" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto',paddingBottom: '5rem' }}>
      <h1>Contact Us</h1>
      <p>Reach out to book your event.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register('name', { required: 'Name is required' })}
            placeholder="Your name"
            style={{ width: '100%', padding: '0.5rem' }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="Your email"
            style={{ width: '100%', padding: '0.5rem' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        {/* Phone Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid phone number (10 digits required)',
              },
            })}
            placeholder="Your phone number"
            style={{ width: '100%', padding: '0.5rem' }}
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
        </div>

        {/* Event Type Dropdown */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="eventType">Event Type</label>
          <Controller
            name="eventType"
            control={control}
            rules={{ required: 'Event type is required' }}
            render={({ field }) => (
              <Select
                {...field}
                options={eventTypeOptions}
                placeholder="Select event type"
              />
            )}
          />
          {errors.eventType && <p style={{ color: 'red' }}>{errors.eventType.message}</p>}
        </div>

        {/* Event Date Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="eventDate">Event Date</label>
          <input
            id="eventDate"
            type="date"
            {...register('eventDate', { required: 'Event date is required' })}
            style={{ width: '100%', padding: '0.5rem' }}
          />
          {errors.eventDate && <p style={{ color: 'red' }}>{errors.eventDate.message}</p>}
        </div>

        {/* Event Time Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="eventTime">Event Time</label>
          <input
            id="eventTime"
            type="time"
            {...register('eventTime', { required: 'Event time is required' })}
            style={{ width: '100%', padding: '0.5rem' }}
          />
          {errors.eventTime && <p style={{ color: 'red' }}>{errors.eventTime.message}</p>}
        </div>

        {/* Party Size Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="partySize">Party Size</label>
          <input
            id="partySize"
            type="number"
            {...register('partySize', {
              required: 'Party size is required',
              min: { value: 1, message: 'Party size must be at least 1' },
            })}
            placeholder="Number of guests"
            style={{ width: '100%', padding: '0.5rem' }}
          />
          {errors.partySize && <p style={{ color: 'red' }}>{errors.partySize.message}</p>}
        </div>

        {/* Additional Notes Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            id="notes"
            {...register('notes')}
            placeholder="Any special requests or notes"
            style={{ width: '100%', padding: '0.5rem', minHeight: '100px' }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#ffcc00',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;