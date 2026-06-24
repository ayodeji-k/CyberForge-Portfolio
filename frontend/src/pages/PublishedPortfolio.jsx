import React from 'react';
import { 
  ExternalLink, 
  Mail, 
  FileText, 
  Globe, 
  Briefcase, 
  Scan, 
  Network, 
  FileCheck, 
  Lock, 
  ShieldCheck, 
  Download, 
  Presentation,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PublishedPortfolio = () => {
  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen flex flex-col overflow-x-hidden antialiased">
      {/* PLATFORM HEADER BANNER */}
      <div className="bg-gradient-to-r from-cyan-950/80 via-slate-900 to-emerald-950/80 border-b border-slate-800/80 py-2.5 px-6 text-center text-xs relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            CYBERFORGE VERIFIED
          </span>
          <span className="text-slate-400">This portfolio contains validated lab evidence, configuration files, and expert reports completed by the candidate.</span>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 font-bold underline transition flex items-center shrink-0">
            <span>View Platform</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 space-y-10">
        
        {/* CANDIDATE HERO */}
        <section className="bg-slate-900 rounded-xl border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-full bg-cyan-500/5 rounded-full filter blur-[50px] pointer-events-none"></div>

          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center font-extrabold text-slate-950 font-mono text-3xl shadow-[0_0_15px_rgba(34,211,238,0.25)] shrink-0">
            AM
          </div>

          <div className="space-y-4 flex-1">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">Alex Mercer</h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-slate-400 text-sm sm:text-base font-medium">Aspiring Cybersecurity Engineer | Incident Response Specialist</p>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-3xl">
              Technical security practitioner with validated expertise across vulnerability management, network zoning, and risk compliance audits. Experienced configuring pfsense dual-DMZ segments, automating Nessus scans, and prioritizing mitigation roadmaps matching NIST Cybersecurity Frameworks.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 bg-slate-950 text-slate-300 border border-slate-850 rounded">CompTIA Security+</span>
              <span className="px-2.5 py-1 bg-slate-950 text-slate-300 border border-slate-850 rounded">eLearnSecurity Junior Pentester (eJPT)</span>
              <span className="px-2.5 py-1 bg-slate-950 text-slate-300 border border-slate-850 rounded">Blue Team Level 1 (BTL1)</span>
            </div>

            <div className="pt-4 border-t border-slate-850 flex flex-wrap gap-4 items-center">
              <a href="mailto:alex@example.com" className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded transition flex items-center space-x-1.5 shadow">
                <Mail className="w-4 h-4" />
                <span>Contact Candidate</span>
              </a>
              <Link to="/resume-builder" className="px-4 py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 rounded transition flex items-center space-x-1.5">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Verified Resume</span>
              </Link>
              <div className="flex items-center space-x-3 text-slate-500 pl-2">
                <a href="#" className="hover:text-slate-300 transition"><Globe className="w-5 h-5" /></a>
                <a href="#" className="hover:text-slate-300 transition"><Briefcase className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO DOMAIN SELECTION */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold text-slate-200 uppercase tracking-wider font-mono">Completed Portfolio Modules</h2>
          
          <div className="border-b border-slate-900 flex flex-wrap text-sm text-slate-400">
            <button className="px-5 py-3 text-cyan-400 border-b-2 border-cyan-400 font-bold flex items-center space-x-2 shrink-0">
              <Scan className="w-4 h-4 text-cyan-400" />
              <span>1. Vulnerability Assessment</span>
            </button>
            <button className="px-5 py-3 hover:text-slate-200 border-b-2 border-transparent hover:border-slate-800 transition flex items-center space-x-2 shrink-0">
              <Network className="w-4 h-4 text-slate-500" />
              <span>2. Network Security</span>
            </button>
            <button className="px-5 py-3 hover:text-slate-200 border-b-2 border-transparent hover:border-slate-800 transition flex items-center space-x-2 shrink-0">
              <FileCheck className="w-4 h-4 text-slate-500" />
              <span>3. GRC Compliance</span>
            </button>
            <button className="px-5 py-3 text-slate-600 cursor-not-allowed flex items-center space-x-2 shrink-0" disabled>
              <Lock className="w-3.5 h-3.5" />
              <span>4. Log Analysis</span>
            </button>
            <button className="px-5 py-3 text-slate-600 cursor-not-allowed flex items-center space-x-2 shrink-0" disabled>
              <Lock className="w-3.5 h-3.5" />
              <span>5. Incident Response</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-100">Credentialed Technical Audit & CVE Manual Validation</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Conducted credentialed and uncredentialed technical vulnerability scan of <span className="text-slate-200 font-semibold">FinSecure Corp's</span> core payment pipeline network components consisting of 200+ internal hosts, dual DMZ partitions, and Web Application endpoints.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">1. Reconnaissance Scanner Config</h4>
                <div className="bg-slate-950 rounded border border-slate-900 p-3.5 font-mono text-xs text-cyan-400">
                  nmap -sV -sC -O -p- -T4 -A -oA full-scan 192.168.1.0/24
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">2. CVSS Prioritized Findings Matrix</h4>
                <div className="overflow-x-auto rounded-lg border border-slate-800">
                  <table className="w-full text-xs text-left text-slate-400">
                    <thead className="text-[10px] font-mono uppercase tracking-wider bg-slate-900 border-b border-slate-800 text-slate-400">
                      <tr>
                        <th className="px-4 py-3">ID</th>
                        <th className="px-4 py-3">Host Target</th>
                        <th className="px-4 py-3">Finding Alert</th>
                        <th className="px-4 py-3 text-center">CVSS 3.1</th>
                        <th className="px-4 py-3 text-center">Severity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {[
                        { id: 'V-001', host: '192.168.1.10', alert: 'Apache 2.4.41 Multiple Vulnerabilities', cve: 'CVE-2021-41773 RCE Exploit Vector', score: '9.8', severity: 'Critical' },
                        { id: 'V-002', host: '192.168.1.11', alert: 'Apache Tomcat Ghostcat RCE', cve: 'CVE-2020-1938 AJP File Leak', score: '9.8', severity: 'Critical' },
                        { id: 'V-003', host: '10.0.0.20', alert: 'Default MySQL root Password Detected', cve: 'Unauthorized DB Access vulnerability', score: '9.1', severity: 'Critical' },
                        { id: 'V-007', host: '10.0.0.10', alert: 'SMBv1 Protocol Remains Enabled', cve: 'Enables lateral SMB remote compromise', score: '8.1', severity: 'High' },
                      ].map((row) => (
                        <tr key={row.id} className="hover:bg-slate-900/40 transition">
                          <td className="px-4 py-3.5 font-mono text-cyan-400">{row.id}</td>
                          <td className="px-4 py-3.5 font-mono text-slate-300">{row.host}</td>
                          <td className="px-4 py-3.5">
                            <div className="font-semibold text-slate-200">{row.alert}</div>
                            <div className="text-[10px] text-slate-500 mt-0.5 font-mono">{row.cve}</div>
                          </td>
                          <td className="px-4 py-3.5 text-center font-bold text-slate-100 font-mono">{row.score}</td>
                          <td className="px-4 py-3.5 text-center">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold ${row.severity === 'Critical' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 'bg-orange-500/10 text-orange-400 border-orange-500/20'} border`}>
                              {row.severity}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-900">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">3. Technical Remediation Roadmap</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="bg-slate-900 p-4 border border-slate-800 rounded space-y-2">
                    <div className="font-bold text-rose-400 uppercase tracking-wider font-mono">PHASE 1 // IMMEDIATE</div>
                    <p className="text-slate-400">Patch Apache httpd to &gt;= 2.4.50. Disable AJP connector in Tomcat configuration.</p>
                  </div>
                  <div className="bg-slate-900 p-4 border border-slate-800 rounded space-y-2">
                    <div className="font-bold text-orange-400 uppercase tracking-wider font-mono">PHASE 2 // 30 DAYS</div>
                    <p className="text-slate-400">Enforce password policy on MySQL server. Disable SMBv1 protocol on all Windows hosts.</p>
                  </div>
                  <div className="bg-slate-900 p-4 border border-slate-800 rounded space-y-2">
                    <div className="font-bold text-cyan-400 uppercase tracking-wider font-mono">PHASE 3 // 90 DAYS</div>
                    <p className="text-slate-400">Configure pfsense stateful firewall rules to block public, uncredentialed ping sweep requests.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 rounded-lg border-2 border-emerald-500/40 p-6 space-y-4 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <div className="flex items-center space-x-2.5 text-emerald-400">
                  <ShieldCheck className="w-6 h-6 shrink-0 animate-pulse" />
                  <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider">COMPETENCY SEAL</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  This project was configured inside a sandboxed laboratory server and validated matching real-world CVE parameters.
                </p>
                <div className="border-t border-slate-800 pt-3 space-y-2 text-[10px] font-mono text-slate-500">
                  <div className="flex justify-between"><span>VALIDATION METHOD:</span> <span className="text-slate-300">AUTOMATED + AUDITED</span></div>
                  <div className="flex justify-between"><span>VALIDITY HASH:</span> <span className="text-emerald-400 select-all">cf_7a03bc5b8a</span></div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg border border-slate-800 p-6 space-y-4">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">Project Artifacts</h4>
                <div className="grid grid-cols-1 gap-2.5 text-xs">
                  <button className="w-full text-left py-2 px-3 bg-slate-950 hover:bg-slate-900 border border-slate-850 rounded text-slate-400 hover:text-slate-200 flex items-center justify-between transition">
                    <span className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-cyan-500" />
                      <span>Technical_Report.pdf</span>
                    </span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-full text-left py-2 px-3 bg-slate-950 hover:bg-slate-900 border border-slate-850 rounded text-slate-400 hover:text-slate-200 flex items-center justify-between transition">
                    <span className="flex items-center space-x-2">
                      <Presentation className="w-4 h-4 text-cyan-500" />
                      <span>Executive_Briefing.pptx</span>
                    </span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-12 text-slate-500 text-xs border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <div className="p-1 bg-slate-900 rounded border border-slate-800 text-cyan-400">
              <Shield className="w-4 h-4" />
            </div>
            <span className="font-mono font-bold tracking-tight text-slate-300">
              CYBER<span className="text-cyan-400">FORGE</span>
            </span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Alex Mercer // Certified Cybersecurity Engineer. Built on CyberForge Portfolio.
          </div>
          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-slate-200 transition">Portfolio Terms</a>
            <a href="#" className="hover:text-slate-200 transition">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublishedPortfolio;
