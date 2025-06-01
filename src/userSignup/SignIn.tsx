import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage('');
      navigate('/profile');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-lg shadow-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Sign In
      </h2>

      <label className="block mb-1 text-gray-900 dark:text-gray-100 font-semibold">
        Email
      </label>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500
          text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="block mb-1 text-gray-900 dark:text-gray-100 font-semibold">
        Password
      </label>
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500
          text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleSignIn}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition-colors duration-200"
      >
        Sign In
      </button>

      {message && (
        <p className="mt-4 text-center text-red-500 dark:text-red-400">{message}</p>
      )}
    </div>
  );
}
