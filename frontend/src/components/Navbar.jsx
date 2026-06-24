import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldAlert, LogIn } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Workspace', path: '/workspace' },
    { name: 'Resume Builder', path: '/resume-builder' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="p-1.5 bg-cyan-950/60 rounded border border-cyan-500/30 text-cyan-400">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
          </div>
          <span className="font-mono font-bold tracking-tight text-xl text-slate-100 uppercase">
            Cyber<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Forge</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-1 py-5 transition hover:text-slate-200 border-b-2 ${
                location.pathname === link.path 
                  ? 'text-cyan-400 border-cyan-400' 
                  : 'border-transparent'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-slate-400 hover:text-slate-200 text-sm font-medium flex items-center">
             Sign In
          </Link>
          <Link to="/dashboard" className="btn btn-primary text-xs">
            Launch App
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
