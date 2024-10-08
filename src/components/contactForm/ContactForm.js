import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isDuplicate
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type='text'
            value={ name } 
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </label>
        {isDuplicate && <p style={{color: 'red'}}>This name already exists.</p>}
        <label>
          Phone:
          <input
            type="tel"
            value={ phone }
            onChange={(e) => setPhone(e.target.value)} 
            required
            pattern="^\+?[1-9]\d{1,14}$" // Pattern for international phone numbers
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add contact</button>
            </form>
    </>
  );
};

