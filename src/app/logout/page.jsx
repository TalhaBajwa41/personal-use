'use client';
import React, { useState, useEffect } from 'react';
import { 
  LogOut, 
  Check, 
  X, 
  Loader2, 
  Shield, 
  Smartphone, 
  Monitor, 
  AlertTriangle,
  ArrowLeft,
  User
} from 'lucide-react';

export default function SignOutPage() {
  const [signOutStep, setSignOutStep] = useState('confirm'); // confirm, processing, success, error
  const [signOutOptions, setSignOutOptions] = useState({
    allDevices: false,
    clearData: false,
    revokeTokens: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'JD',
    lastLogin: '2 hours ago'
  });

  // Simulated active sessions
  const [activeSessions] = useState([
    { id: 1, device: 'Current Device', type: 'desktop', location: 'New York, US', lastActive: 'Now', current: true },
    { id: 2, device: 'iPhone 14', type: 'mobile', location: 'New York, US', lastActive: '1 hour ago', current: false },
    { id: 3, device: 'MacBook Pro', type: 'desktop', location: 'New York, US', lastActive: '3 hours ago', current: false },
  ]);

  const handleSignOut = async () => {
    setIsLoading(true);
    setSignOutStep('processing');
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate potential error (uncomment to test error state)
      // if (Math.random() > 0.8) throw new Error('Network error occurred');
      
      setSignOutStep('success');
      
      // Redirect after success
      setTimeout(() => {
        // In a real app, you'd use Next.js router
        console.log('Redirecting to login page...');
        // router.push('/login');
      }, 2000);
      
    } catch (err) {
      setError(err.message || 'An error occurred during sign out');
      setSignOutStep('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    // In a real app, go back to previous page or dashboard
    console.log('Cancelled sign out');
    // router.back();
  };

  const getDeviceIcon = (type) => {
    switch (type) {
      case 'mobile': return <Smartphone size={16} />;
      case 'desktop': return <Monitor size={16} />;
      default: return <Monitor size={16} />;
    }
  };

  const renderConfirmStep = () => (
    <div className="space-y-6">
      {/* User Info Card */}
      <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {userInfo.avatar}
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{userInfo.name}</h3>
          <p className="text-sm text-gray-500">{userInfo.email}</p>
          <p className="text-xs text-gray-400">Last login: {userInfo.lastLogin}</p>
        </div>
      </div>

      {/* Sign Out Options */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Sign Out Options</h3>
        
        <div className="space-y-3">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={signOutOptions.allDevices}
              onChange={(e) => setSignOutOptions(prev => ({ ...prev, allDevices: e.target.checked }))}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Sign out from all devices</span>
              <p className="text-xs text-gray-500">This will end all active sessions across all your devices</p>
            </div>
          </label>
          
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={signOutOptions.clearData}
              onChange={(e) => setSignOutOptions(prev => ({ ...prev, clearData: e.target.checked }))}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Clear local data</span>
              <p className="text-xs text-gray-500">Remove cached data and preferences from this device</p>
            </div>
          </label>
          
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={signOutOptions.revokeTokens}
              onChange={(e) => setSignOutOptions(prev => ({ ...prev, revokeTokens: e.target.checked }))}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-sm font-medium text-gray-900">Revoke access tokens</span>
              <p className="text-xs text-gray-500">Invalidate all API tokens and third-party app access</p>
            </div>
          </label>
        </div>
      </div>

      {/* Active Sessions */}
      {signOutOptions.allDevices && (
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Active Sessions</h3>
          <div className="space-y-2">
            {activeSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getDeviceIcon(session.type)}
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {session.device}
                      {session.current && <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Current</span>}
                    </p>
                    <p className="text-xs text-gray-500">{session.location} • {session.lastActive}</p>
                  </div>
                </div>
                {!session.current && (
                  <button className="text-red-600 hover:text-red-700 text-xs">
                    End Session
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Warning */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start space-x-3">
        <AlertTriangle className="text-yellow-600 mt-0.5" size={16} />
        <div>
          <p className="text-sm font-medium text-yellow-800">Before you sign out</p>
          <p className="text-xs text-yellow-700 mt-1">
            Make sure you've saved any unsaved work. You'll need to sign in again to access your account.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3 pt-4">
        <button
          onClick={handleSignOut}
          disabled={isLoading}
          className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
        <button
          onClick={handleCancel}
          disabled={isLoading}
          className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-colors flex items-center justify-center space-x-2"
        >
          <ArrowLeft size={18} />
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );

  const renderProcessingStep = () => (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
        <Loader2 className="text-blue-600 animate-spin" size={32} />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Signing you out...</h3>
        <p className="text-gray-500">
          {signOutOptions.allDevices 
            ? 'Ending all sessions and clearing data...' 
            : 'Ending your current session...'}
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
          <Check className="text-green-500" size={16} />
          <span>Clearing session data</span>
        </div>
        {signOutOptions.revokeTokens && (
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Check className="text-green-500" size={16} />
            <span>Revoking access tokens</span>
          </div>
        )}
        {signOutOptions.allDevices && (
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Check className="text-green-500" size={16} />
            <span>Ending remote sessions</span>
          </div>
        )}
      </div>
    </div>
  );

  const renderSuccessStep = () => (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check className="text-green-600" size={32} />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Successfully signed out</h3>
        <p className="text-gray-500">You have been securely signed out of your account.</p>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800">
          {signOutOptions.allDevices 
            ? 'All devices have been signed out and your data has been cleared.'
            : 'Your session has been ended and you\'re now signed out.'}
        </p>
      </div>
      <div className="text-sm text-gray-500">
        Redirecting to login page...
      </div>
    </div>
  );

  const renderErrorStep = () => (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
        <X className="text-red-600" size={32} />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Sign out failed</h3>
        <p className="text-gray-500">There was an error signing you out. Please try again.</p>
      </div>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}
      <div className="flex space-x-3">
        <button
          onClick={handleSignOut}
          className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={handleCancel}
          className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (signOutStep) {
      case 'confirm': return renderConfirmStep();
      case 'processing': return renderProcessingStep();
      case 'success': return renderSuccessStep();
      case 'error': return renderErrorStep();
      default: return renderConfirmStep();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-pink-600 px-6 py-8 text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogOut className="text-white" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white">Sign Out</h1>
            <p className="text-red-100 mt-2">
              {signOutStep === 'confirm' && 'Are you sure you want to sign out?'}
              {signOutStep === 'processing' && 'Processing your request...'}
              {signOutStep === 'success' && 'You\'ve been signed out'}
              {signOutStep === 'error' && 'Something went wrong'}
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {renderStep()}
          </div>

          {/* Security Badge */}
          {signOutStep === 'confirm' && (
            <div className="px-6 pb-6">
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <Shield size={14} />
                <span>Your data is protected with end-to-end encryption</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Need help? <a href="#" className="text-blue-600 hover:text-blue-700">Contact support</a>
          </p>
        </div>
      </div>
    </div>
  );
}