'use client';
import React, { useEffect, useState } from 'react';
import {
  User,
  Bell,
  Shield,
  Palette,
  Eye,
  EyeOff,
  Save,
  Moon,
  Sun,
  Monitor,
  ChevronRight,
} from 'lucide-react';

export default function SettingsPage() {
  const [mounted, setMounted] = useState(false);

  const [settings, setSettings] = useState({
    username: 'johndoe',
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    bio: 'Full-stack developer passionate about creating amazing user experiences.',
    profileVisibility: 'public',
    showEmail: false,
    showActivity: true,
    allowMessages: true,
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    securityAlerts: true,
    theme: 'system',
    language: 'en',
    timezone: 'UTC-5',
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: '30',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'security', label: 'Security', icon: Eye },
  ];

  const ToggleSwitch = ({ checked, onChange, label, description }) => (
    <div className="flex items-center justify-between py-3">
      <div className="flex-1">
        <label className="text-sm font-medium text-gray-900">{label}</label>
        {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          checked ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  value={settings.firstName}
                  onChange={(e) => handleSettingChange('firstName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={settings.lastName}
                  onChange={(e) => handleSettingChange('lastName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={settings.username}
                onChange={(e) => handleSettingChange('username', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleSettingChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea
                value={settings.bio}
                onChange={(e) => handleSettingChange('bio', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <ToggleSwitch
              checked={settings.emailNotifications}
              onChange={(value) => handleSettingChange('emailNotifications', value)}
              label="Email Notifications"
              description="Get updates by email"
            />
            <ToggleSwitch
              checked={settings.pushNotifications}
              onChange={(value) => handleSettingChange('pushNotifications', value)}
              label="Push Notifications"
              description="Get updates on your device"
            />
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6">
            <ToggleSwitch
              checked={settings.showEmail}
              onChange={(value) => handleSettingChange('showEmail', value)}
              label="Show Email"
              description="Let others see your email"
            />
            <ToggleSwitch
              checked={settings.allowMessages}
              onChange={(value) => handleSettingChange('allowMessages', value)}
              label="Allow Messages"
              description="Let people message you"
            />
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <label className="block text-sm font-medium text-gray-700">Theme</label>
            <div className="flex gap-4">
              {['light', 'dark', 'system'].map((theme) => (
                <button
                  key={theme}
                  onClick={() => handleSettingChange('theme', theme)}
                  className={`px-4 py-2 rounded-lg border ${
                    settings.theme === theme
                      ? 'bg-blue-600 text-white'
                      : 'border-gray-300 text-gray-700'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Select a tab to configure settings.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-blue-100">Manage your account preferences and security</p>
          </div>

          <div className="flex flex-col lg:flex-row">
            <aside className="w-full lg:w-1/4 bg-gray-50 border-r border-gray-200">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeTab === id
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={18} />
                  {label}
                  <ChevronRight size={16} className="ml-auto" />
                </button>
              ))}
            </aside>

            <main className="flex-1 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </h2>
              {mounted && renderTabContent()}
              <div className="mt-8 border-t pt-6">
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                >
                  <Save size={20} />
                  Save Changes
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
