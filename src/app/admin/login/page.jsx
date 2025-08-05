'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      username: form.username,
      password: form.password,
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full border p-2 rounded mb-3"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full border p-2 rounded mb-3"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Don’t have an account?</p>
          <button
            type="button"
            onClick={() => router.push('/admin/register')}
            className="text-blue-600 underline mt-1"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
