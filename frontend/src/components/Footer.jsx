import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 text-slate-500 text-xs border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-2">
          <div className="p-1 bg-slate-900 rounded border border-slate-800 text-cyan-400">
            <Shield className="w-4 h-4" />
          </div>
          <span className="font-mono font-bold tracking-tight text-slate-300 uppercase">
            CYBER<span className="text-cyan-400">FORGE</span>
          </span>
        </div>
        <div>
          &copy; {new Date().getFullYear()} CyberForge Portfolio Inc. All rights reserved. Built for Cybersecurity Engineers.
        </div>
        <div className="flex space-x-6 text-slate-400">
          <a href="#" className="hover:text-slate-200 transition">Terms</a>
          <a href="#" className="hover:text-slate-200 transition">Privacy Policy</a>
          <a href="#" className="hover:text-slate-200 transition">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
