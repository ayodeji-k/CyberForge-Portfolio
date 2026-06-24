import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Sparkles, 
  Minus, 
  CreditCard, 
  Lock, 
  ShieldCheck 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing = () => {
  const plans = [
    {
      name: 'Freemium Core',
      sub: 'Foundational sandbox testing',
      price: '$0',
      period: '/ month',
      desc: 'Start testing security layouts. Perfect for discovering vulnerabilities in our introductory laboratories.',
      cta: 'Your Active Plan',
      features: [
        { text: '2 Core Project Templates (VA / NetSec)', included: true },
        { text: 'Basic ATS Score Evaluation Scan', included: true },
        { text: 'Standard Public Portfolio Web Page', included: true },
        { text: 'Unlimited ATS Keyword Injections', included: false },
        { text: '1-on-1 Security Professional Audits', included: false },
      ],
      popular: false,
    },
    {
      name: 'Premium Explorer',
      sub: 'Full access to 20+ laboratory tasks',
      price: '$19',
      period: '/ month',
      desc: 'Complete access to all domains, custom dashboard templates, and live, interactive recruiter keyword matches.',
      cta: 'Upgrade To Premium',
      features: [
        { text: 'All 20+ Guided Project Blueprints', included: true, bold: true },
        { text: 'Complete Reporting & Slide Deck Downloads', included: true },
        { text: 'Unlimited ATS Resume Optimizations', included: true, bold: true },
        { text: 'Advanced Cybersecurity Resume Verbs', included: true },
        { text: 'Standard Support', included: 'minus' },
      ],
      popular: true,
    },
    {
      name: 'Pro Career Track',
      sub: 'Lifetime complete pass + CISSP Audit',
      price: '$149',
      period: 'One-Time Fee',
      desc: 'Includes live portfolio audits with security leaders plus full future access. Land the job or your money back.',
      cta: 'Secure Pro Bundle',
      link: 'https://buy.stripe.com/5kQfZg8vnc2c8aQ8Ua2ZO00',
      features: [
        { text: 'Lifetime Complete Access & Labs', included: true, bold: true },
        { text: '1-on-1 Portfolio Alignment Audit', included: true, bold: true },
        { text: '60-Min Mock Technical CISO Interview', included: true },
        { text: 'Premium Public Theme & Custom Host Domains', included: true },
        { text: 'Priority Recruiter Network Listing', included: true, bold: true },
      ],
      popular: false,
    }
  ];

  const faqs = [
    { q: 'Can I write custom project summaries?', a: 'Yes! While our platform guides you through detailed steps and parameters for standard labs, you have full editor access to customize your findings, mitigation planning, and architecture configurations before publishing.' },
    { q: 'Does the ATS scan guarantee I pass recruiter bots?', a: 'While no tool can bypass manual vetting, the ATS Resume Builder analyzes key security terms and matches them directly to the active keywords hiring algorithms require.' },
    { q: 'Can I cancel my subscription anytime?', a: 'Absolutely. If you find a role or complete your portfolio layouts quickly, you can cancel your Premium subscription with a single click inside your billing settings.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />

      <main className="flex-grow">
        <section className="py-12 sm:py-20 text-center relative max-w-4xl mx-auto px-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>
          
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-3 py-1 text-xs text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Choose Your Career Accelerator Track</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
              Transparent Plans For Aspiring <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Cybersecurity Professionals
              </span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Build credible project portfolios that satisfy security recruiters. Choose the plan that fits your career timeline. Cancel anytime.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`bg-slate-900/60 rounded-xl border ${plan.popular ? 'border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]' : 'border-slate-800'} p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden transition hover:border-slate-700`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-cyan-500 text-slate-950 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                    Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-bold ${plan.popular ? 'text-slate-100' : 'text-slate-200'}`}>{plan.name}</h3>
                    <p className={`text-xs ${plan.popular ? 'text-cyan-400' : 'text-slate-500'} mt-1`}>{plan.sub}</p>
                  </div>
                  
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-extrabold font-mono ${plan.popular ? 'text-cyan-400' : 'text-slate-100'}`}>{plan.price}</span>
                    <span className="text-slate-500 text-sm ml-2">{plan.period}</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {plan.desc}
                  </p>

                  <ul className="space-y-3.5 text-xs text-slate-400 border-t border-slate-850 pt-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className={`flex items-center space-x-3 ${!feature.included && feature.included !== 'minus' ? 'text-slate-600 line-through' : ''}`}>
                        {feature.included === true && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                        {feature.included === false && <X className="w-4 h-4 text-slate-700 shrink-0" />}
                        {feature.included === 'minus' && <Minus className="w-4 h-4 text-slate-600 shrink-0" />}
                        <span className={feature.bold ? 'font-semibold text-slate-200' : ''}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-auto">
                  <a 
                    href={plan.link || '#'}
                    target={plan.link ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-2.5 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                        : 'bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-slate-100'
                    } text-xs font-semibold rounded transition`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-8 border-t border-b border-slate-900 flex flex-wrap justify-around items-center gap-6 text-slate-500 text-xs uppercase font-mono tracking-widest">
          <div className="flex items-center space-x-2">
            <CreditCard className="w-4 h-4 text-cyan-500" />
            <span>Stripe Secured Payments</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-cyan-500" />
            <span>AES-256 Bit Encryption</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span>SOC 2 Compliant Infrastructure</span>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 py-20 space-y-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 text-sm">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-900/40 rounded border border-slate-900 p-5 space-y-2">
                <h4 className="font-semibold text-slate-200">{faq.q}</h4>
                <p className="text-slate-400 leading-relaxed text-xs">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
