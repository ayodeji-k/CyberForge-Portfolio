import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  HelpCircle, 
  Send, 
  CheckCircle2, 
  Play, 
  Circle, 
  DownloadCloud, 
  FileEdit, 
  Info, 
  Sparkles, 
  AlertCircle, 
  ChevronRight,
  Save
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import api from '../services/api';

const ProjectWorkspace = () => {
  const [searchParams] = useSearchParams();
  const domainId = searchParams.get('domain') || 'vulnerability-assessment';
  
  const [project, setProject] = useState(null);
  const [content, setContent] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [report, setReport] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProjectContent = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/projects/${domainId}`);
        setProject(response.data);
        
        // Fetch all markdown files for this project
        const files = [
          '01-project-brief.md',
          '02-data-and-tools.md',
          '03-analysis-framework.md',
          '04-reporting-template.md',
          '05-presentation-deck.md',
          '06-resume-bullets.md'
        ];
        
        const contentPromises = files.map(file => 
          api.get(`/projects/${domainId}/content/${file}`)
            .then(res => ({ file, body: res.data.content }))
            .catch(() => ({ file, body: 'Content not available.' }))
        );
        
        const results = await Promise.all(contentPromises);
        setContent(results);
        
        // Initialize report with template if available
        const template = results.find(r => r.file === '04-reporting-template.md');
        if (template) setReport(template.body);
        
      } catch (error) {
        console.error('Error fetching project content:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjectContent();
  }, [domainId]);

  const steps = [
    { title: 'Project Scenario Brief', icon: CheckCircle2, file: '01-project-brief.md' },
    { title: 'Data & Environment', icon: CheckCircle2, file: '02-data-and-tools.md' },
    { title: 'Analysis Framework', icon: Play, file: '03-analysis-framework.md' },
    { title: 'Reporting & Findings', icon: Circle, file: '04-reporting-template.md' },
    { title: 'Executive Slide Deck', icon: Circle, file: '05-presentation-deck.md' },
    { title: 'Resume Integration', icon: Circle, file: '06-resume-bullets.md' },
  ];

  const handleSave = async () => {
    setSaving(true);
    // Simulate API call
    setTimeout(() => {
      setSaving(false);
    }, 1000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
          <p className="text-slate-400 font-mono text-sm">INITIALIZING_WORKSPACE...</p>
        </div>
      </div>
    );
  }

  const currentContent = content.find(c => c.file === steps[currentStep].file)?.body || '';

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen flex flex-col antialiased overflow-hidden">
      {/* TOP HEADER */}
      <header className="h-16 border-b border-slate-900 bg-slate-950 flex items-center justify-between px-6 shrink-0 z-10">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="p-1.5 bg-slate-900 hover:bg-slate-850 rounded border border-slate-800 text-slate-400 hover:text-slate-200 transition">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-slate-500 uppercase">Dashboard</span>
            <span className="text-slate-700 text-xs">/</span>
            <span className="text-xs font-mono text-cyan-400 uppercase">{domainId.replace(/-/g, '_').toUpperCase()}</span>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
            ACTIVE LAB
          </span>
        </div>

        <div className="hidden sm:flex items-center space-x-2 text-xs text-slate-500 font-mono">
          <span className={`w-1.5 h-1.5 bg-emerald-500 rounded-full ${saving ? 'animate-ping' : ''}`}></span>
          <span>{saving ? 'Saving...' : 'Draft Autosaved'}</span>
        </div>

        <div className="flex items-center space-x-3">
          <button className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs rounded font-medium text-slate-300 flex items-center space-x-1.5 transition">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ask ForgeAI</span>
          </button>
          <button className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:opacity-95 font-bold text-xs rounded shadow transition flex items-center space-x-1.5">
            <Send className="w-3.5 h-3.5" />
            <span>Publish to Portfolio</span>
          </button>
        </div>
      </header>

      {/* CORE WORKSPACE */}
      <div className="flex-1 flex overflow-hidden">
        {/* SIDEBAR */}
        <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 overflow-y-auto">
          <div className="p-4 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-wider">PROJECT PROGRESS</h3>
              <div className="text-sm font-bold text-slate-200">{project?.name || 'Security Project'}</div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex-1 bg-slate-950 rounded-full h-1 border border-slate-800 overflow-hidden">
                  <div className="bg-cyan-400 h-1 rounded-full" style={{ width: `${(currentStep + 1) * 16.6}%` }}></div>
                </div>
                <span className="text-[10px] font-mono text-slate-400">{currentStep + 1}/6 Steps</span>
              </div>
            </div>

            <nav className="space-y-1.5">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentStep(i)}
                  className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded text-xs font-medium transition text-left ${
                    currentStep === i 
                      ? 'bg-slate-850 text-slate-100 border border-slate-800' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                  }`}
                >
                  <step.icon className={`w-4 h-4 shrink-0 ${
                    i < currentStep ? 'text-emerald-400' : i === currentStep ? 'text-cyan-400' : 'text-slate-600'
                  } ${i === currentStep && i > 1 ? 'animate-pulse' : ''}`} />
                  <span>{i + 1}. {step.title}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4 border-t border-slate-800 bg-slate-950/20 space-y-3">
            <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">LAB RESOURCES</h4>
            <div className="space-y-1.5 text-xs">
              <button className="w-full text-left px-2.5 py-1.5 bg-slate-950 hover:bg-slate-900 rounded border border-slate-850 text-slate-400 hover:text-slate-200 flex items-center justify-between transition">
                <span>lab-evidence.zip</span>
                <DownloadCloud className="w-3.5 h-3.5" />
              </button>
              <button className="w-full text-left px-2.5 py-1.5 bg-slate-950 hover:bg-slate-900 rounded border border-slate-850 text-slate-400 hover:text-slate-200 flex items-center justify-between transition">
                <span>security-baseline.csv</span>
                <DownloadCloud className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </aside>

        {/* TWO PANEL SPLIT */}
        <main className="flex-1 flex flex-col md:flex-row min-w-0 overflow-hidden">
          {/* LEFT PANEL: Guidance */}
          <section className="flex-1 border-r border-slate-900 bg-slate-950/40 p-6 overflow-y-auto">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-widest">STEP {currentStep + 1} OF 6</div>
                <h2 className="text-xl font-extrabold text-slate-200">{steps[currentStep].title}</h2>
              </div>

              <article className="prose prose-invert prose-sm max-w-none prose-headings:text-slate-100 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-cyan-400 prose-code:text-cyan-400 prose-code:bg-slate-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800">
                <ReactMarkdown>{currentContent}</ReactMarkdown>
              </article>
            </div>
          </section>

          {/* RIGHT PANEL: Editor */}
          <section className="flex-1 flex flex-col justify-between bg-slate-900 border-l border-slate-950 overflow-hidden">
            <div className="h-12 border-b border-slate-800 bg-slate-900/60 px-5 flex items-center justify-between shrink-0">
              <span className="text-xs font-bold text-slate-200 flex items-center space-x-2">
                <FileEdit className="w-4 h-4 text-cyan-400" />
                <span>LAB REPORT EDITOR // README.md</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-slate-950 px-2 py-0.5 border border-slate-800 rounded">
                COMPLETENESS: 85%
              </span>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="bg-slate-950 rounded p-4 border border-slate-850 space-y-2 text-xs">
                <div className="font-bold text-slate-300 flex items-center space-x-1">
                  <Info className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Portfolio Output Checklist</span>
                </div>
                <p className="text-slate-500 leading-relaxed">
                  Draft your executive narrative below. The full-stack engine matches these descriptions to extract industry keywords.
                </p>
              </div>

              <div className="space-y-2 h-[400px] flex flex-col">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Markdown Sandbox Output</label>
                <textarea 
                  className="flex-1 w-full bg-slate-950 border border-slate-800 focus:border-cyan-500/50 rounded-lg p-4 font-mono text-xs text-slate-300 leading-relaxed focus:outline-none focus:ring-1 focus:ring-cyan-500/50 resize-none"
                  value={report}
                  onChange={(e) => setReport(e.target.value)}
                  placeholder="# Vulnerability Assessment — Executive Report..."
                />
              </div>

              <div className="bg-cyan-950/20 border border-cyan-500/20 rounded-lg p-4 space-y-3 shadow-inner">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Sparkles className="w-4.5 h-4.5" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">ForgeAI Writing Companion</h4>
                </div>
                <p className="text-xs text-slate-500">
                  Provide a brief description of your lab findings and our AI agent will rewrite it into an ATS-optimized narrative.
                </p>
                <div className="flex space-x-2">
                  <input type="text" className="flex-1 bg-slate-950 border border-slate-850 text-xs text-slate-300 rounded p-2 focus:outline-none focus:border-cyan-500/40" placeholder="e.g., 'Found old apache, updated it...'" />
                  <button className="px-3 py-2 bg-slate-850 hover:bg-slate-800 text-cyan-400 border border-slate-800 rounded text-xs font-bold transition">
                    Optimize
                  </button>
                </div>
              </div>
            </div>

            <div className="h-16 border-t border-slate-800 bg-slate-950/80 px-6 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-1 text-xs text-slate-500">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>Save progress before continuing.</span>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={handleSave}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-850 rounded border border-slate-800 text-xs text-slate-300 transition flex items-center space-x-2"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{saving ? 'Saving...' : 'Save Draft'}</span>
                </button>
                <button 
                  onClick={() => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))}
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded shadow transition flex items-center"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProjectWorkspace;
