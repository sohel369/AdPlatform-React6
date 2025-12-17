import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Globe, Zap } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white selection:bg-indigo-500 selection:text-white font-inter overflow-x-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px]" />
            </div>

            {/* Navbar */}
            <nav className="relative z-50 px-6 py-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" fill="currentColor" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        AdPlatform
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <Link to="/pricing" className="hidden md:block text-slate-400 hover:text-white transition-colors text-sm font-medium">Pricing</Link>
                    <Link to="/dashboard" className="hidden md:block text-slate-400 hover:text-white transition-colors text-sm font-medium">Login</Link>
                    <Link
                        to="/dashboard"
                        className="group px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm transition-all text-sm font-semibold flex items-center gap-2"
                    >
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 pt-20 pb-32 md:pt-32 md:pb-40 px-6 max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    New v2.0 is live
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                    Scale your advertising <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        with precision & speed.
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    The all-in-one platform for modern marketers. Create, track, and optimize campaigns across every channel with AI-driven insights.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
                    <Link
                        to="/dashboard"
                        className="w-full md:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
                    >
                        Start Free Trial
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <button className="w-full md:w-auto px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700 flex items-center justify-center gap-2">
                        Watch Demo
                    </button>
                </div>

                {/* Dashboard Preview (Abstract) */}
                <div className="relative mx-auto max-w-5xl rounded-xl bg-slate-900/50 p-2 ring-1 ring-white/10 backdrop-blur-lg shadow-2xl">
                    <div className="rounded-lg overflow-hidden bg-slate-900 border border-slate-800 aspect-[16/9] relative group">
                        {/* Abstract UI Representation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                            <div className="text-center">
                                <BarChart3 className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                                <p className="text-slate-600 font-mono text-sm">Interactive Dashboard Preview</p>
                            </div>
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute top-10 left-10 p-4 bg-slate-800/90 backdrop-blur border border-white/5 rounded-xl shadow-xl hover:scale-105 transition-transform duration-500">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-xs text-slate-400 font-medium">Active Users</span>
                            </div>
                            <div className="text-2xl font-bold text-white">24,593</div>
                            <div className="text-xs text-green-400 mt-1">+12.5% vs last week</div>
                        </div>

                        <div className="absolute bottom-10 right-10 p-4 bg-slate-800/90 backdrop-blur border border-white/5 rounded-xl shadow-xl hover:scale-105 transition-transform duration-500 delay-100">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                                    <Globe className="w-4 h-4 text-indigo-400" />
                                </div>
                                <span className="text-xs text-slate-400 font-medium">Global Reach</span>
                            </div>
                            <div className="h-2 w-32 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full w-[70%] bg-gradient-to-r from-indigo-500 to-purple-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Features Grid */}
            <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything you need to grow</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Powerful tools designed for the modern marketer. Simple enough for beginners, advanced enough for pros.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Global Reach",
                            desc: "Target audiences in 190+ countries with localized formats and currencies.",
                            icon: <Globe className="w-6 h-6 text-indigo-400" />
                        },
                        {
                            title: "Real-time Analytics",
                            desc: "Make data-driven decisions with live performance tracking and custom reports.",
                            icon: <BarChart3 className="w-6 h-6 text-purple-400" />
                        },
                        {
                            title: "Smart Automation",
                            desc: "Automate your workflows and optimize bids 24/7 with our AI engine.",
                            icon: <Zap className="w-6 h-6 text-pink-400" />
                        }
                    ].map((feature, idx) => (
                        <div key={idx} className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-400">
                        <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">
                            <Zap className="w-3 h-3 text-slate-500" />
                        </div>
                        <span className="font-semibold text-slate-200">AdPlatform</span>
                        <span className="text-sm">© 2024</span>
                    </div>
                    <div className="flex gap-8 text-sm text-slate-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
