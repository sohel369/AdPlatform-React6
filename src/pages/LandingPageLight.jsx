import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PlayCircle, BarChart3, Globe2, ShieldCheck, Zap } from 'lucide-react';

const LandingPageLight = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-inter selection:bg-blue-600 selection:text-white">
            {/* Navbar */}
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                            <Zap fill="currentColor" className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">AdPlatform</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Features</a>
                        <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Solutions</a>
                        <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
                        <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Resources</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/dashboard" className="hidden md:block text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors">Log in</Link>
                        <Link
                            to="/dashboard"
                            className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all hover:ring-4 hover:ring-slate-100 flex items-center gap-2"
                        >
                            Start for free
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20 overflow-hidden">
                {/* Hero */}
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 border border-blue-100">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                            v2.0 is now available
                            <ArrowRight className="w-3 h-3 ml-1" />
                        </div>

                        <h1 className="text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-slate-900">
                            Marketing data <br />
                            <span className="text-blue-600">simplified.</span>
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                            Stop guessing. Start growing. The only platform that combines real-time analytics with autonomous campaign optimization.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link to="/dashboard" className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-600/20 text-center flex items-center justify-center gap-2">
                                Get Started Free
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <button className="px-8 py-4 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                <PlayCircle className="w-5 h-5" />
                                View Demo
                            </button>
                        </div>

                        <div className="flex items-center gap-8 text-sm text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                No credit card required
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                14-day free trial
                            </div>
                        </div>
                    </div>

                    {/* Abstract Hero Visualization */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-[40px] transform rotate-3 scale-95 blur-3xl -z-10" />
                        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-2 overflow-hidden ring-1 ring-slate-900/5 transform transition-transform hover:-translate-y-2 duration-500">
                            <div className="bg-slate-50 rounded-2xl border border-slate-200 aspect-square md:aspect-[4/3] relative overflow-hidden flex flex-col">
                                {/* Mock UI Header */}
                                <div className="h-12 border-b border-slate-200 bg-white flex items-center px-4 gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="flex-1" />
                                    <div className="w-24 h-2 rounded-full bg-slate-100" />
                                </div>
                                {/* Mock UI Body */}
                                <div className="p-6 md:p-8 flex-1 grid grid-cols-2 gap-6">
                                    <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <div className="h-2 w-24 bg-slate-100 rounded mb-2" />
                                                <div className="h-8 w-48 bg-slate-900 rounded" />
                                            </div>
                                            <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                                <Zap className="w-4 h-4" />
                                            </div>
                                        </div>
                                        <div className="h-32 w-full bg-blue-50/50 rounded-lg border border-blue-100 relative overflow-hidden">
                                            <div className="absolute bottom-0 left-0 right-0 h-[80%] bg-gradient-to-t from-blue-500/20 to-transparent" />
                                            {/* Simple Chart Line */}
                                            <svg className="absolute bottom-0 left-0 right-0 h-full w-full" preserveAspectRatio="none">
                                                <path d="M0 100 Q 50 50 100 80 T 200 40 T 300 90 T 400 20 L 400 128 L 0 128 Z" fill="rgba(59, 130, 246, 0.1)" stroke="none" />
                                                <path d="M0 100 Q 50 50 100 80 T 200 40 T 300 90 T 400 20" fill="none" stroke="#3b82f6" strokeWidth="3" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col justify-between hover:border-blue-300 transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                                            <BarChart3 className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div className="h-4 w-20 bg-slate-100 rounded mb-2" />
                                        <div className="h-6 w-16 bg-slate-800 rounded" />
                                    </div>

                                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col justify-between hover:border-purple-300 transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                                            <Globe2 className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div className="h-4 w-20 bg-slate-100 rounded mb-2" />
                                        <div className="h-6 w-16 bg-slate-800 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce duration-[3000ms]">
                            <div className="bg-green-100 p-2.5 rounded-full">
                                <ShieldCheck className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Status</p>
                                <p className="text-sm font-bold text-slate-900">Systems Operational</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logos */}
                <div className="border-y border-slate-100 bg-slate-50/50 py-12">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-sm font-semibold text-slate-500 mb-8">TRUSTED BY INNOVATIVE TEAMS WORLDWIDE</p>
                        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {['Acme Corp', 'GlobalBank', 'Nebula', 'Quotient', 'Spherule'].map(logo => (
                                <span key={logo} className="text-xl font-bold font-serif text-slate-800">{logo}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LandingPageLight;
