import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  LayoutDashboard, 
  Terminal, 
  FileCheck, 
  Globe, 
  CreditCard, 
  HelpCircle, 
  Eye, 
  ArrowRight, 
  CheckSquare, 
  Users, 
  Mail, 
  TrendingUp, 
  Check, 
  ChevronRight, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import api from '../services/api';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects/');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const stats = [
    { label: 'Domain Progress', value: '3 / 7', sub: 'Completed Domains', icon: CheckSquare, color: 'text-cyan-400', progress: 42.8 },
    { label: 'ATS Score', value: '82%', sub: 'Matching Target Keywords', badge: 'Highly Aligned', color: 'text-cyan-400', progress: 82 },
    { label: 'Portfolio Views', value: '147', sub: 'Unique recruiter views this week', trend: '+28% Increase', icon: Users, color: 'text-emerald-400' },
    { label: 'Inquiries', value: '4 New', sub: 'Pending connection requests', icon: Mail, color: 'text-amber-400' },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen flex antialiased overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
          <div className="h-16 px-6 flex items-center border-b border-slate-800/60">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-1 bg-cyan-950/40 rounded border border-cyan-500/20 text-cyan-400">
                <ShieldAlert className="w-5 h-5 animate-pulse" />
              </div>
              <span className="font-mono font-bold tracking-tight text-lg text-slate-100">
                CYBER<span className="text-cyan-400">FORGE</span>
              </span>
            </Link>
          </div>

          <div className="px-4 py-6 border-b border-slate-800/60 bg-slate-950/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center font-bold text-slate-950 font-mono text-sm shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                SA
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-200">SecurityAnalyst_01</div>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Premium Account</span>
                </div>
              </div>
            </div>
          </div>

          <nav className="px-3 py-6 space-y-1">
            <Link to="/dashboard" className="flex items-center space-x-3 px-3 py-2.5 rounded bg-slate-850 text-cyan-400 border border-slate-800 font-medium text-sm transition">
              <LayoutDashboard className="w-4 h-4 text-cyan-400" />
              <span>Dashboard</span>
            </Link>
            <Link to="/workspace" className="flex items-center space-x-3 px-3 py-2.5 rounded hover:bg-slate-850 text-slate-300 hover:text-slate-100 font-medium text-sm transition group">
              <Terminal className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
              <span>Project Workspace</span>
              <span className="ml-auto px-1.5 py-0.5 text-[9px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">Active</span>
            </Link>
            <Link to="/resume-builder" className="flex items-center space-x-3 px-3 py-2.5 rounded hover:bg-slate-850 text-slate-300 hover:text-slate-100 font-medium text-sm transition group">
              <FileCheck className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
              <span>Resume Builder</span>
              <span className="ml-auto px-1.5 py-0.5 text-[9px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">82%</span>
            </Link>
            <Link to="/portfolio" className="flex items-center space-x-3 px-3 py-2.5 rounded hover:bg-slate-850 text-slate-300 hover:text-slate-100 font-medium text-sm transition group">
              <Globe className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
              <span>My Live Portfolio</span>
              <span className="ml-auto text-xs text-slate-500"><ExternalLink className="w-3.5 h-3.5" /></span>
            </Link>
            <Link to="/pricing" className="flex items-center space-x-3 px-3 py-2.5 rounded hover:bg-slate-850 text-slate-300 hover:text-slate-100 font-medium text-sm transition group">
              <CreditCard className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
              <span>Billing & Upgrade</span>
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-950/20 space-y-4">
          <div className="rounded bg-slate-950 p-3 border border-slate-800 text-xs text-slate-400 space-y-2">
            <div className="font-semibold text-slate-300 flex items-center space-x-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Need Guidance?</span>
            </div>
            <p className="leading-relaxed">Complete 5/7 domains to unlock our customized executive mock interview blueprint.</p>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>VER v1.0.4</span>
            <span className="text-emerald-500">SYSTEMS OK</span>
          </div>
        </div>
      </aside>

      {/* MAIN WINDOW */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 border-b border-slate-900 bg-slate-950 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-slate-500 uppercase">Home</span>
            <span className="text-slate-700 text-xs">/</span>
            <span className="text-xs font-mono text-cyan-400 uppercase">Dashboard</span>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/portfolio" target="_blank" className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-cyan-500/30 text-xs rounded font-medium text-slate-300 flex items-center space-x-1.5 transition">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>Preview Published Page</span>
            </Link>
            <Link to="/resume-builder" className="px-3.5 py-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:opacity-90 font-semibold text-xs rounded shadow transition">
              Analyze Resume
            </Link>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Welcome Alert Bar */}
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="absolute right-0 top-0 w-48 h-full bg-cyan-500/5 rounded-full filter blur-[40px] pointer-events-none"></div>

            <div className="space-y-1 z-10">
              <h2 className="text-xl font-bold text-slate-100 flex items-center">
                Welcome Back, Cybersecurity Engineer
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
                You have successfully configured and completed **3 security domains**. Your current resume is highly optimized, but matching **Log Analysis** and **Incident Response** will boost your interview rate by another 45%.
              </p>
            </div>
            <div className="shrink-0 z-10 flex space-x-3">
              <Link to="/workspace" className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-cyan-400 border border-cyan-500/20 hover:border-cyan-400 rounded text-xs font-semibold flex items-center transition">
                <span>Resume Current Lab</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>

          {/* KEY PERFORMANCE STATISTICS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-900 rounded-lg border border-slate-800 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{stat.label}</span>
                  {stat.icon && (
                    <span className={`p-1.5 bg-slate-950 text-slate-400 rounded border border-slate-800 ${stat.color.replace('text', 'text')}`}>
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                    </span>
                  )}
                  {stat.badge && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">{stat.badge}</span>
                  )}
                </div>
                <div>
                  <div className={`text-2xl font-extrabold font-mono ${stat.color || 'text-slate-100'}`}>{stat.value}</div>
                  <p className="text-xs text-slate-500 mt-1">{stat.sub}</p>
                </div>
                {stat.progress !== undefined && (
                  <div className="w-full bg-slate-950 rounded-full h-1.5 border border-slate-850 overflow-hidden">
                    <div className={`h-1.5 rounded-full ${stat.color.replace('text', 'bg')}`} style={{ width: `${stat.progress}%` }}></div>
                  </div>
                )}
                {stat.trend && (
                  <div className="text-xs text-emerald-500 flex items-center font-mono">
                    <TrendingUp className="w-3.5 h-3.5 mr-1" /> {stat.trend}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* MAIN CONTENT COLUMNS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-200">Your Cybersecurity Domain Portfolios</h3>
                <span className="text-xs text-slate-500">Click a domain card to configure lab briefs and logs</span>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-slate-900 border border-slate-800 rounded-lg p-5 h-48 animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projects.map((project, i) => (
                    <div key={project.id} className={`bg-slate-900 border ${project.status === 'completed' ? 'border-emerald-500/30' : project.status === 'in-progress' ? 'border-amber-500/30' : 'border-slate-800'} rounded-lg p-5 flex flex-col justify-between h-48 hover:border-cyan-500/30 transition shadow-sm`}>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                            project.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                            project.status === 'in-progress' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 
                            'bg-slate-850 text-slate-400 border-slate-800'
                          } border`}>
                            {(project.status || 'not started').toUpperCase().replace('-', ' ')}
                          </span>
                          {project.status === 'completed' && <Check className="w-4 h-4 text-emerald-400" />}
                        </div>
                        <h4 className="text-base font-bold text-slate-200 mt-3">{project.name}</h4>
                        <p className="text-slate-400 text-xs mt-1 leading-relaxed line-clamp-2">{project.description || 'Access simulated labs and build professional security documentation.'}</p>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-slate-950 text-xs mt-2">
                        <span className="font-mono text-[10px] text-slate-500">
                          {project.status === 'completed' ? '10 Findings Added' : 'Template Available'}
                        </span>
                        <Link 
                          to={`/workspace?domain=${project.id}`} 
                          className="text-cyan-400 font-semibold hover:underline flex items-center"
                        >
                          {project.status === 'completed' ? 'Open Lab' : project.status === 'in-progress' ? 'Resume Lab' : 'Start Lab'} 
                          <ChevronRight className="w-3 h-3 ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 rounded-lg border border-slate-800 p-6 space-y-4">
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Quick Actions</h4>
                <div className="grid grid-cols-1 gap-2.5">
                  <Link to="/portfolio" target="_blank" className="w-full text-center py-2 bg-cyan-950/40 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-950/80 rounded text-xs font-semibold flex items-center justify-center space-x-1.5 transition">
                    <Globe className="w-3.5 h-3.5" />
                    <span>View Public Portfolio</span>
                  </Link>
                  <Link to="/resume-builder" className="w-full text-center py-2 bg-slate-950 text-slate-300 border border-slate-850 hover:bg-slate-900 rounded text-xs font-medium flex items-center justify-center space-x-1.5 transition">
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>Edit Resume Bullet Points</span>
                  </Link>
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg border border-cyan-500/30 p-6 space-y-4 shadow-[0_0_15px_rgba(6,182,212,0.05)]">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">ATS Score Booster</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Add these keywords from your completed portfolios to your resume to gain **13 points**:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 text-[9px] font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-500/20 rounded">Nessus v10.x</span>
                  <span className="px-2 py-0.5 text-[9px] font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-500/20 rounded">CVSS Scoring</span>
                  <span className="px-2 py-0.5 text-[9px] font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-500/20 rounded">NIST Compliance</span>
                </div>
                <Link to="/resume-builder" className="block text-center py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-[11px] font-bold rounded transition">
                  Apply Auto-Optimizations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
