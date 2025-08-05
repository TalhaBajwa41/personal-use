'use client';

import { useEffect, useState } from 'react';

export default function AdminContactPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('/api/contact')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setContacts(data.contacts);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
      <div className="bg-white shadow rounded p-4">
        {contacts.length === 0 ? (
          <p>No contact messages yet.</p>
        ) : (
          <ul className="space-y-4">
            {contacts.map((c) => (
              <li key={c._id} className="border-b pb-2">
                <p><strong>Name:</strong> {c.name}</p>
                <p><strong>Email:</strong> {c.email}</p>
                <p><strong>Message:</strong> {c.message}</p>
                <p className="text-sm text-gray-500">
                  Sent on: {new Date(c.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
