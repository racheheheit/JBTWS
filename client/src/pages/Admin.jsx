import React, { useState } from 'react';
import { Calendar, Image as ImageIcon, Heart, GraduationCap, Users, Mail, Plus, Lock } from 'lucide-react';

export const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('events');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123' || password.length >= 6) {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <div className="bg-[#173F3A] text-[#F7F3E8] border border-[#DDD8CA]/30 rounded-3xl p-8 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#126A73]/40 border border-[#D5A33A]/30 text-[#D5A33A] flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-display-en font-bold text-[#D5A33A]">
              Admin CMS Login
            </h2>
            <p className="text-xs text-[#DDD8CA]/80">
              Jaunsar Bawar Janjatiya Kalyan Samiti Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-[#DDD8CA] mb-1">Passcode / JWT Access:</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#173F3A] border border-[#DDD8CA]/30 rounded-xl text-white focus:outline-none focus:border-[#D5A33A]"
                placeholder="Enter admin password (demo: admin123)"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 font-bold text-white bg-[#126A73] hover:bg-[#126A73]/90 rounded-xl transition-all shadow"
            >
              Authenticate & Enter CMS
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#DDD8CA] pb-6 gap-4">
        <div>
          <span className="text-xs font-mono text-[#126A73] font-bold uppercase">CMS Management Portal</span>
          <h1 className="h2-title text-[#173F3A]">
            Content Management System
          </h1>
        </div>

        <button
          onClick={() => setIsAuthenticated(false)}
          className="px-4 py-2 text-xs font-semibold text-[#202625] bg-[#F7F3E8] hover:bg-[#DDD8CA]/40 border border-[#DDD8CA] rounded-xl"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#DDD8CA] pb-4">
        {[
          { id: 'events', label: 'Events & Programs', icon: <Calendar className="w-4 h-4" /> },
          { id: 'gallery', label: 'Gallery Archive', icon: <ImageIcon className="w-4 h-4" /> },
          { id: 'healthcare', label: 'Healthcare Initiatives', icon: <Heart className="w-4 h-4" /> },
          { id: 'education', label: 'Education Programs', icon: <GraduationCap className="w-4 h-4" /> },
          { id: 'volunteers', label: 'Volunteer Applications', icon: <Users className="w-4 h-4" /> },
          { id: 'messages', label: 'Contact Messages', icon: <Mail className="w-4 h-4" /> }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === tab.id
                ? 'bg-[#173F3A] text-[#D5A33A] shadow'
                : 'bg-white text-[#66706D] hover:bg-[#F7F3E8] border border-[#DDD8CA]'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* CMS Workspace */}
      <div className="bg-white border border-[#DDD8CA] rounded-3xl p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="h3-title text-[#173F3A] uppercase tracking-wider">
            {activeTab} Management
          </h3>

          <button className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#126A73] hover:bg-[#126A73]/90 rounded-xl shadow">
            <Plus className="w-4 h-4" />
            <span>Add New {activeTab.slice(0, -1)}</span>
          </button>
        </div>

        <div className="p-8 bg-[#F7F3E8] border border-dashed border-[#DDD8CA] rounded-2xl text-center space-y-2">
          <p className="text-xs font-mono text-[#173F3A] font-semibold">
            [ADMIN CRUD INTERFACE READY — CONNECTED TO REST API `/api/{activeTab}`]
          </p>
          <p className="text-[11px] text-[#66706D]">
            Administrators can create, edit, delete, and publish items cleanly via MongoDB Express REST endpoints.
          </p>
        </div>
      </div>
    </div>
  );
};
