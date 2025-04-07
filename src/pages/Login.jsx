import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <section className="register w-6/12 h-screen">
        <div className="container register_container w-{35rem} m-3 bg-white p-10 rounded-lg shadow-lg">
          <h2 className='text-3xl font-extrabold'>Login</h2>
          <form className='register_form flex flex-col gap-4 mt-5' action="">
            <div>
            <h3 className=''>Email Address</h3>
            <input
              className='bg-gray-200 w-full p-2 rounded-md'
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="on"
            />
            <h3 className=''>Password</h3>
            <input
              className='bg-gray-200 w-full p-2 rounded-md'
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="on"
            />
            </div>

            <p>
              Don't have an account? <Link className='text-blue-400' to="/register">Signup</Link>
            </p>

            <button onClick={() => {navigate('/home')}} type="submit" className="btn primary bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl ">Login</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login