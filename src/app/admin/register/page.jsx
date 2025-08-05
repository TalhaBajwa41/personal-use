'use client';

import { useRouter } from 'next/navigation';

export default function AdminRegisterPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm text-center">
        <h2 className="text-2xl font-semibold mb-4">Admin Registration</h2>
        <p className="text-gray-500 mb-4">Registration is not available. Ask developer to add you manually.</p>
        <button
          onClick={() => router.push('/admin/login')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
