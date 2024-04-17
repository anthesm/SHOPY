import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [signupMessage, setSignupMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json(); // Extract JSON data from response
      console.log(data);
      // Display signup message
      setSignupMessage('Signup successful!'); // Set the signup message state
      // Optionally, redirect to another page
    } catch (error) {
      console.error(error);
      // Handle error: display error message to user or log it
    }
  };

  return (
<div className="container-fluid vh-100 d-flex justify-content-center align-items-center"> {/* Center the form */}
  <div className="border p-4 shadow-lg"> 
    <h2 className="text-center">Signup Page</h2>
    {signupMessage && <p className="text-center">{signupMessage}</p>}
    <form className="text-center" onSubmit={handleSubmit}>
      <input className="form-control my-3" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input className="form-control my-3" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input className="form-control my-3" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <button className="btn btn-primary mx-3" type="submit">Signup</button>
    </form>
  </div>
</div>

  
  );
};

export default SignupForm;
