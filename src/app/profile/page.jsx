'use client';

import { useState } from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

export default function ProfilePage() {
  const [profile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 123 456 7890',
    address: '1234 Main St, New York, NY 10001, USA'
  });

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">👤 Profile Information</h1>
        
        <div className="space-y-4">
          <ProfileField icon={<User className="w-5 h-5 text-blue-600" />} label="Name" value={profile.name} />
          <ProfileField icon={<Mail className="w-5 h-5 text-green-600" />} label="Email" value={profile.email} />
          <ProfileField icon={<Phone className="w-5 h-5 text-red-600" />} label="Contact" value={profile.phone} />
          <ProfileField icon={<MapPin className="w-5 h-5 text-purple-600" />} label="Address" value={profile.address} />
        </div>
      </div>
    </main>
  );
}

function ProfileField({ icon, label, value }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
}
