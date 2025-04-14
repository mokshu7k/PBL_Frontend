// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// const Register = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async(e) => {
//     e.preventDefault();
//     try{
//       const res = await fetch('http://localhost:5001/user/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });
//       const data = await res.json();

//       if (res.ok) {
//         // Optional: Store JWT token
//         localStorage.setItem('token', data.token);
//         navigate('/home');
//       } else {
//         alert(data.msg || 'Registration failed');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong');
//     }
//   }

//   return (
//     <div className="w-full h-screen flex justify-center items-center bg-gray-50">
//       <section className="register w-6/12 h-screen">
//         <div className="container register_container w-{35rem} m-3 bg-white p-10 rounded-lg shadow-lg">
//           <h2 className='text-3xl font-extrabold'>Sign Up</h2>
//           <form className='register_form flex flex-col gap-4 mt-5' action="">
//             <div>
//             <h3>Full Name</h3>
//             <input
//               className='bg-gray-200 w-full p-2 rounded-md'
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               autoComplete="on"
//               autoFocus
//             />
//             <h3>Email</h3>
//             <input
//               className='bg-gray-200 w-full p-2 rounded-md'
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               autoComplete="on"
//             />
//             <h3>Password</h3>
//             <input
//               className='bg-gray-200 w-full p-2 rounded-md'
//               type="password"
//               name="password"
//               placeholder="Password"
//               autoComplete="on"
//             />
//             <h3>Confirm Password</h3>
//             <input
//               className='bg-gray-200 w-full p-2 rounded-md'
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               autoComplete="on"
//             />
//             </div>
            

//             <p>
//               Already have an account? <Link className='text-blue-400' to="/">Sign in</Link>
//             </p>

//             <button onClick={() => {navigate('/home')}} type="submit" className="btn primary bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl ">Register</button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch('http://localhost:5001/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: fullName, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        alert(data.msg || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <section className="register w-6/12 h-screen">
        <div className="container register_container w-[35rem] m-3 bg-white p-10 rounded-lg shadow-lg">
          <h2 className='text-3xl font-extrabold'>Sign Up</h2>
          <form className='register_form flex flex-col gap-4 mt-5' onSubmit={handleRegister}>
            <div>
              <h3>Full Name</h3>
              <input
                className='bg-gray-200 w-full p-2 rounded-md'
                type="text"
                name="fullName"
                placeholder="Full Name"
                autoComplete="on"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <h3>Email</h3>
              <input
                className='bg-gray-200 w-full p-2 rounded-md'
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="on"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3>Password</h3>
              <input
                className='bg-gray-200 w-full p-2 rounded-md'
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="on"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <h3>Confirm Password</h3>
              <input
                className='bg-gray-200 w-full p-2 rounded-md'
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="on"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <p>
              Already have an account? <Link className='text-blue-400' to="/">Sign in</Link>
            </p>

            <button type="submit" className="btn primary bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl">
              Register
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;

