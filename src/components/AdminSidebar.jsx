'use client';

import Link from 'next/link';
import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-react';

const navLinks = [
  { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard size={20} /> },
  { name: 'Users', href: '/admin/users', icon: <Users size={20} /> },
  { name: 'Settings', href: '/admin/settings', icon: <Settings size={20} /> },
    { name: 'Contact', href: '/admin/contact', icon: <Settings size={20} /> },
];

export default function AdminSidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      {/* Logo/Title */}
      <div className="text-2xl font-bold px-6 py-4 border-b border-gray-700">
        Admin Panel
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700"
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-4 py-4 border-t border-gray-700">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}
