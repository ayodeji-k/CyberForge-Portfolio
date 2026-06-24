import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  Download, 
  Save, 
  Gauge, 
  AlertTriangle, 
  Check, 
  CheckCircle2, 
  Zap 
} from 'lucide-react';

const ResumeBuilder = () => {
  const [score, setScore] = useState(82);
  const [pastedResume, setPastedResume] = useState('');
  const [summary, setSummary] = useState('Aspiring Cybersecurity Analyst with strong foundational competence across vulnerability management, compliance audits, and dual DMZ networking. Proficient in executing active scans and implementing mitigation roadmaps matching NIST frameworks.');
  const [skills, setSkills] = useState('Nmap, Wireshark, PfSense, SOC 2 Readiness, ISO 27001, Python, Bash, Windows Server Active Directory');
  
  const [embeddedProjects, setEmbeddedProjects] = useState({
    va: true,
    network: true,
    log: false
  });

  const toggleProject = (project) => {
    setEmbeddedProjects(prev => ({
      ...prev,
      [project]: !prev[project]
    }));
  };

  const handleInject = (points) => {
    setScore(prev => Math.min(prev + points, 100));
  };

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen flex flex-col antialiased overflow-hidden">
      {/* HEADER */}
      <header className="h-16 border-b border-slate-900 bg-slate-950 flex items-center justify-between px-6 shrink-0 z-10">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="p-1.5 bg-slate-900 hover:bg-slate-850 rounded border border-slate-800 text-slate-400 hover:text-slate-200 transition">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-slate-500 uppercase">Dashboard</span>
            <span className="text-slate-700 text-xs">/</span>
            <span className="text-xs font-mono text-cyan-400 uppercase">Resume Builder</span>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            ATS OPTIMIZED
          </span>
        </div>

        <div className="hidden sm:flex items-center space-x-2 text-xs text-slate-500 font-mono">
          <Sparkles className="text-cyan-400 w-4 h-4 animate-spin-slow" />
          <span>Real-time scanner ready</span>
        </div>

        <div className="flex items-center space-x-3">
          <button className="px-4 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs rounded font-medium text-slate-300 flex items-center space-x-1.5 transition">
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Export PDF</span>
          </button>
          <button className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:opacity-95 font-bold text-xs rounded shadow transition flex items-center space-x-1.5">
            <Save className="w-3.5 h-3.5" />
            <span>Save & Sync</span>
          </button>
        </div>
      </header>

      {/* CORE WORKSPACE */}
      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 flex flex-col md:flex-row min-w-0 overflow-hidden">
          {/* LEFT PANEL: Editor */}
          <section className="flex-1 border-r border-slate-900 bg-slate-950/40 p-6 overflow-y-auto space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-extrabold text-slate-200">Construct Your Cyber Resume</h2>
              <p className="text-slate-400 text-xs">Edit your details or toggle completed security portfolio projects to dynamically embed them in Workday-ready formats.</p>
            </div>

            <div className="bg-slate-900/40 rounded border border-slate-800 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Option A: Paste Existing Resume</label>
                <span className="text-[10px] font-mono text-slate-500">Fast Scan</span>
              </div>
              <textarea 
                className="w-full h-32 bg-slate-950 border border-slate-850 rounded p-3 font-mono text-xs text-slate-400 focus:outline-none focus:border-cyan-500/40 leading-relaxed resize-none" 
                placeholder="Copy and paste your plain-text resume here..."
                value={pastedResume}
                onChange={(e) => setPastedResume(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wide">Option B: Dynamic ATS Builder</h3>
              
              <div className="bg-slate-900/60 rounded border border-slate-800 p-5 space-y-3">
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider">1. Professional Summary</label>
                <textarea 
                  className="w-full h-24 bg-slate-950 border border-slate-850 rounded p-3 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/40 leading-relaxed resize-none"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>

              <div className="bg-slate-900/60 rounded border border-slate-800 p-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider">2. Embed Portfolio Projects</label>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Select completed CyberForge projects to dynamically append them to your resume experience:</p>
                </div>
                
                <div className="space-y-3">
                  <label className="flex items-start space-x-3 p-3 bg-slate-950 hover:bg-slate-900 rounded border border-slate-850 cursor-pointer transition">
                    <input 
                      type="checkbox" 
                      checked={embeddedProjects.va} 
                      onChange={() => toggleProject('va')}
                      className="mt-1 rounded bg-slate-900 border-slate-800 text-cyan-500 focus:ring-0" 
                    />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-200">Embed: Vulnerability Assessment Lab</span>
                        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 border border-emerald-500/20 rounded">Ready</span>
                      </div>
                      <p className="text-[10px] text-slate-400 line-clamp-1">Embeds: "Orchestrated credentialed scans using Nessus, evaluated 10 critical alerts with CVSS v3.1..."</p>
                    </div>
                  </label>

                  <label className="flex items-start space-x-3 p-3 bg-slate-950 hover:bg-slate-900 rounded border border-slate-850 cursor-pointer transition">
                    <input 
                      type="checkbox" 
                      checked={embeddedProjects.network} 
                      onChange={() => toggleProject('network')}
                      className="mt-1 rounded bg-slate-900 border-slate-800 text-cyan-500 focus:ring-0" 
                    />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-200">Embed: Network Security DMZ Lab</span>
                        <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 border border-emerald-500/20 rounded">Ready</span>
                      </div>
                      <p className="text-[10px] text-slate-400 line-clamp-1">Embeds: "Configured pfsense firewalls, deployed dual-DMZ network architectures..."</p>
                    </div>
                  </label>

                  <div className="flex items-start space-x-3 p-3 bg-slate-950/40 rounded border border-slate-900 opacity-60">
                    <input type="checkbox" disabled className="mt-1 rounded bg-slate-900 border-slate-800" />
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400">Embed: SIEM Log Analysis (Splunk)</span>
                        <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 border border-amber-500/20 rounded">In Progress</span>
                      </div>
                      <p className="text-[10px] text-slate-500">Complete the log analysis lab to unlock this experience block.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/60 rounded border border-slate-800 p-5 space-y-3">
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider">3. Technical Skills Inventory</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-850 rounded p-2.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/40" 
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* RIGHT PANEL: Diagnostics */}
          <section className="flex-1 flex flex-col justify-between bg-slate-900 border-l border-slate-950 overflow-hidden">
            <div className="h-12 border-b border-slate-800 bg-slate-900/60 px-5 flex items-center justify-between shrink-0">
              <span className="text-xs font-bold text-slate-200 flex items-center space-x-2">
                <Gauge className="w-4 h-4 text-cyan-400" />
                <span>ATS REAL-TIME SCORES & MATCHES</span>
              </span>
              <span className="text-[10px] font-mono text-cyan-400 bg-slate-950 px-2 py-0.5 border border-slate-800 rounded">
                ALIGNED TO: SOC_ANALYST_L1
              </span>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="bg-slate-950 rounded-lg border border-slate-850 p-6 flex items-center justify-between gap-6 shadow-inner relative overflow-hidden">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">CURRENT SCORE</div>
                  <div className="text-4xl font-extrabold font-mono text-cyan-400 flex items-baseline">
                    <span>{score}</span>
                    <span className="text-slate-500 text-lg font-normal">/ 100</span>
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed max-w-xs">
                    Your resume has cleared primary filters. Push your score above <span className="text-emerald-400 font-semibold font-mono">95%</span> with the suggestions below.
                  </div>
                </div>

                <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                  <div className="absolute inset-2 bg-cyan-500/5 rounded-full filter blur-md"></div>
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="56" cy="56" r="46" stroke-width="8" stroke="#0f172a" fill="transparent" />
                    <circle cx="56" cy="56" r="46" stroke-width="8" stroke="#22d3ee" fill="transparent" strokeDasharray="289" strokeDashoffset={289 - (289 * score) / 100} strokeLinecap="round" className="transition-all duration-1000" />
                  </svg>
                  <span className="absolute text-xl font-extrabold font-mono text-slate-100">{score}%</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex border-b border-slate-800 text-xs text-slate-400">
                  <button className="px-4 py-2 text-cyan-400 border-b-2 border-cyan-400 font-semibold flex items-center space-x-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Keywords Needed</span>
                  </button>
                  <button className="px-4 py-2 hover:text-slate-200 transition flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Formatting Audit</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'nessus', title: 'Missing Tool: "Nessus"', points: 5, desc: 'Heavily requested in SOC roles. Since you completed the VA lab, we can inject this block.' },
                    { id: 'cvss', title: 'Missing Match: "CVSS v3.1"', points: 4, desc: 'Recruiters look specifically for CVSS scoring competence when vetting assessments.' },
                    { id: 'mitigation', title: 'Missing Concept: "Risk Mitigation"', points: 4, desc: 'Adding "mitigation roadmaps" matches compliance guidelines. Available in GRC lab.' },
                  ].map((sug) => (
                    <div key={sug.id} className="bg-slate-950/80 rounded border border-slate-850 p-4 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">{sug.title}</span>
                        <span className={`px-2 py-0.5 rounded text-[9px] font-mono ${sug.points > 4 ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'} border`}>
                          +{sug.points} Points
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">{sug.desc}</p>
                      <button 
                        onClick={() => handleInject(sug.points)}
                        className="px-3 py-1.5 bg-slate-900 hover:bg-slate-850 text-cyan-400 border border-cyan-500/20 hover:border-cyan-400 rounded text-[11px] font-bold transition flex items-center space-x-1"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Inject Experience (+{sug.points} Pts)</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-16 border-t border-slate-800 bg-slate-950/80 px-6 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-1 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Ready for submission. PDF fits onto 1 page.</span>
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-slate-900 hover:bg-slate-850 rounded border border-slate-800 text-xs text-slate-300 transition flex items-center space-x-1">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Auto-Enhance Verbs</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ResumeBuilder;
