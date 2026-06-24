import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  Scan, 
  Terminal, 
  Activity, 
  Network, 
  Users, 
  FileText, 
  ArrowRight, 
  Check, 
  ChevronRight,
  Cpu
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden border-b border-slate-900">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left">
              <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-3 py-1 text-xs text-slate-400">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Fully Updated for 2026 Security Standards</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-slate-100">
                Forge a Bulletproof <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-300 to-emerald-400">
                  Cybersecurity Portfolio
                </span>
              </h1>
              
              <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                Stop building generic portfolios. Guided, credible security projects built across all 7 critical domains — with reporting templates, manager decks, and a direct, built-in ATS resume alignment scoring engine.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/dashboard" className="btn btn-primary px-8 py-3.5 flex items-center justify-center">
                  Build Your Free Portfolio
                </Link>
                <Link to="/workspace" className="btn btn-secondary px-8 py-3.5 flex items-center justify-center space-x-2">
                  <span className="font-mono">&gt;_</span> <span>Interactive Demo</span>
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-900 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold font-mono text-cyan-400">20+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Expert Templates</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-emerald-400">95%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">ATS Score Target</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-slate-200">2.5x</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">More Interviews</div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[540px] aspect-[3/2] rounded-lg border border-slate-800 bg-slate-900 p-2 shadow-2xl shadow-cyan-500/10 group overflow-hidden">
                <div className="bg-slate-800 w-full h-full rounded-md flex items-center justify-center overflow-hidden">
                   {/* In a real app we'd use the generated image, but for now a placeholder with a nice gradient */}
                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-emerald-900/40 mix-blend-overlay"></div>
                   <img src="/src/assets/hero.png" alt="CyberForge Security Workspace" className="rounded-md object-cover w-full h-full filter brightness-90 group-hover:scale-[1.02] transition duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <span className="text-xs font-mono text-cyan-400 bg-slate-950/90 border border-slate-800 px-2.5 py-1 rounded">
                    PROJECT_WORKSPACE // ACTIVE
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-slate-950/90 border border-slate-800 px-2.5 py-1 rounded">
                    CVSS v3 COMPLIANT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Domains Section */}
        <section className="py-24 border-b border-slate-900 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                Build Credibility Across 7 Security Domains
              </h2>
              <p className="text-slate-400 text-lg">
                Real cyber managers look for diverse, structured domain competence. Our platform guides you through configuring active labs, writing expert findings, and hosting professional defenses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                { title: 'Vulnerability Assessment', icon: Scan, desc: 'Perform full credentialed/uncredentialed network and web-app scans using Nessus, OpenVAS, and Burp Suite.', status: '100% Core Ready' },
                { title: 'Log Analysis (SIEM)', icon: Terminal, desc: 'Analyze security event streams, build custom alert dashboards, and investigate indicators of compromise (IoC) in Splunk or ELK.', status: 'Premium Access' },
                { title: 'Incident Response', icon: Activity, desc: 'Investigate registry alerts, file system timeline changes, and draft comprehensive root-cause forensic defense summaries.', status: 'Premium Access' },
                { title: 'Network Security', icon: Network, desc: 'Architect secure DMZs, deploy firewall policies (pfsense), configure snort IDS, and perform extensive pcap trace investigations.', status: '100% Core Ready' },
                { title: 'IAM Configuration', icon: Users, desc: 'Enforce role-based access control, secure OAuth flows, secure Active Directory Group Policy, and perform access reviews.', status: 'Premium Access' },
                { title: 'GRC Compliance', icon: FileText, desc: 'Perform a formal risk analysis matching SOC 2, ISO 27001, or NIST CSF, draft system security plans, and build asset matrices.', status: '100% Core Ready' },
              ].map((domain, i) => (
                <div key={i} className="card group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 bg-cyan-950/40 rounded border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-950/80 transition">
                      <domain.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-200">{domain.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">
                    {domain.desc}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-950 text-xs">
                    <span className={`${domain.status === 'Premium Access' ? 'text-cyan-400' : 'text-emerald-400'} font-mono`}>{domain.status}</span>
                    <Link to="/workspace" className="text-cyan-400 hover:underline flex items-center">
                      Launch Sandbox <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATS Section */}
        <section className="py-24 border-b border-slate-900 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[460px] aspect-square rounded-xl border border-slate-800 bg-slate-900 p-2 shadow-2xl shadow-emerald-500/10 group overflow-hidden">
                <div className="bg-slate-800 w-full h-full rounded-lg flex items-center justify-center overflow-hidden">
                   <img src="/src/assets/react.svg" alt="ATS Resume Alignment Scanner" className="w-1/2 opacity-20 animate-spin-slow" />
                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2 text-left">
              <div className="inline-flex items-center space-x-2 bg-emerald-950/40 border border-emerald-500/30 rounded-full px-3 py-1 text-xs text-emerald-400 font-mono">
                <Cpu className="w-3.5 h-3.5 mr-1" /> RESUME ENVELOPE AUDIT
              </div>
              
              <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                Real-Time ATS Alignment Scan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Maximize Your Interview Rate
                </span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Most portfolios sit unread because the candidate's resume gets filtered out by automated ATS scanners before a manager ever opens it. CyberForge fixes this structural flaw in the hiring loop.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Automated Score Meter', desc: 'Live scanning highlights missing keywords like "Nessus", "CVSS v3.1", or "Incident Log Analysis".' },
                  { title: 'Embedded Project Achievements', desc: 'Dynamically embed your completed CyberForge project summaries with high-impact industry verbs.' },
                  { title: 'One-Click PDF Export', desc: 'Clean, parsing-optimized ATS resume templates compatible with Workday, Greenhouse, and Lever.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="mt-1 p-1 bg-cyan-950/40 text-cyan-400 rounded border border-cyan-500/20">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/resume-builder" className="btn btn-secondary inline-flex items-center">
                  <span>Scan Your Resume Now</span>
                  <ChevronRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-900 text-center relative">
          <div className="absolute inset-0 bg-slate-950 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
              Ready to Prove Your Cybersecurity Skills?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Stop submitting PDF resumes with nothing to show for it. Build full, credible projects, scan your resume to pass the bots, and land your dream job.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/dashboard" className="btn btn-primary px-8 py-3.5">
                Get Started For Free
              </Link>
              <Link to="/pricing" className="btn btn-secondary px-8 py-3.5 bg-slate-900 text-slate-200 border-slate-800">
                View Premium Plans
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
