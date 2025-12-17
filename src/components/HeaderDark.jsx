import React, { useState } from 'react';
import {
    Search,
    Bell,
    ChevronDown,
    Command,
    Calendar,
    Filter
} from 'lucide-react';

const HeaderDark = () => {
    return (
        <header className="h-20 fixed top-0 right-0 left-72 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 z-40 px-8 flex items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-xl">
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search campaigns, analytics, or audiences..."
                        className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-xl pl-10 pr-12 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-slate-700 bg-slate-800 px-1.5 font-mono text-[10px] font-medium text-slate-400">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                {/* Date Filter */}
                <button className="hidden md:flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-all text-sm font-medium">
                    <Calendar size={16} />
                    <span>Last 30 Days</span>
                    <ChevronDown size={14} className="opacity-50" />
                </button>

                <div className="h-6 w-px bg-slate-800 mx-2" />

                {/* Notifications */}
                <button className="relative p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse" />
                </button>
            </div>
        </header>
    );
};

export default HeaderDark;
