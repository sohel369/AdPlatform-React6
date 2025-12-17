import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    PlusCircle,
    Globe2,
    Wallet,
    PieChart,
    Settings,
    LogOut,
    Zap,
    LifeBuoy
} from 'lucide-react';

const SidebarDark = () => {
    const navItems = [
        { to: "/dashboard-v2", icon: LayoutDashboard, label: "Overview" },
        { to: "/campaigns/new", icon: PlusCircle, label: "New Campaign" },
        { to: "/geo-targeting", icon: Globe2, label: "Geo-Targeting" },
        { to: "/pricing", icon: Wallet, label: "Billing" },
        { to: "/analytics", icon: PieChart, label: "Analytics" },
    ];

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-72 bg-slate-950 border-r border-slate-800/60 flex flex-col z-50">
            {/* Logo Area */}
            <div className="h-20 flex items-center px-8 border-b border-slate-800/60">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <Zap className="w-5 h-5 text-white" fill="currentColor" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-white tracking-tight">AdPlatform</h1>
                        <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Pro Console</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
                <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Main Menu</p>
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group
                            ${isActive
                                ? 'bg-gradient-to-r from-blue-600/10 to-cyan-600/10 text-cyan-400 border border-cyan-500/20'
                                : 'text-slate-400 hover:text-white hover:bg-slate-900'
                            }
                        `}
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon
                                    size={20}
                                    className={`transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-white'}`}
                                />
                                <span className="font-medium">{item.label}</span>
                                {isActive && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                                )}
                            </>
                        )}
                    </NavLink>
                ))}

                <div className="mt-8">
                    <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">System</p>
                    <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-all">
                        <Settings size={20} />
                        <span className="font-medium">Settings</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-all">
                        <LifeBuoy size={20} />
                        <span className="font-medium">Support Center</span>
                    </button>
                </div>
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-slate-800/60 bg-slate-900/50">
                <div className="flex items-center gap-3 p-2 rounded-xl border border-slate-800 bg-slate-950/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-[2px]">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYYED46R5puH88P1qic_RXu3sSoyfjyO3Pw&s"
                            alt="User"
                            className="w-full h-full rounded-full object-cover border-2 border-slate-950"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-white truncate">John Marketing</p>
                        <p className="text-xs text-slate-500 truncate">Premium Plan</p>
                    </div>
                    <button className="text-slate-500 hover:text-white transition-colors">
                        <LogOut size={18} />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default SidebarDark;
