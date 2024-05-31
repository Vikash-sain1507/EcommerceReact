import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  console.log(data);

  const generateToken = () => {
    let data = new Date().toISOString();
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const randomIndex = Math.floor(Math.random() * characters.length);
    const combinedString = data + 'vikash'+ randomIndex;
    return combinedString;
  }
  const handleData = () => {
    if(email !== '' && password !== ''){
      const jwtToken =  generateToken();
      const newData = { email: email, password: password,jwtToken:jwtToken};
     sessionStorage.setItem("vikashDetails",JSON.stringify(newData));
     setEmail("");
     setPassword("");
     navigate("/", { replace: true });
    }

  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src='https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg'/>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" id="full-name" name="email" value={email} className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" value={password} className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button onClick={handleData} className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Login</button>
        </div>
      </div>
    </section>
  );
}

export default Login;
