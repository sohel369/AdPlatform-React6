import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    PlusCircle,
    Map,
    CreditCard,
    BarChart3,
    Settings,
    LogOut,
    X
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const Sidebar = () => {
    const { sidebarOpen, setSidebarOpen } = useApp();

    // Close sidebar on route change (mobile)
    const handleNavClick = () => {
        if (window.innerWidth < 768) {
            setSidebarOpen(false);
        }
    };

    const navItems = [
        { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
        { to: "/campaigns/new", icon: PlusCircle, label: "Create Campaign" },
        { to: "/geo-targeting", icon: Map, label: "Geo-Targeting" },
        { to: "/pricing", icon: CreditCard, label: "Pricing & Billing" },
        { to: "/analytics", icon: BarChart3, label: "Analytics" },
    ];

    const activeClass = "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl bg-blue-50 text-blue-600 transition-all shadow-sm";
    const inactiveClass = "flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-all";

    return (
        <>
            {/* Mobile Backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden animate-in fade-in"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside className={`
                w-64 fixed left-0 top-0 bottom-0 bg-white/80 backdrop-blur-xl border-r border-slate-200 z-50 flex flex-col 
                transition-transform duration-300 ease-in-out
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                {/* Logo */}
                <div className="h-20 flex items-center justify-between px-6 border-b border-slate-200/50">
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                        </div>
                        AdPlatform
                    </div>
                    {/* Close Button (Mobile) */}
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="p-1 text-slate-400 hover:text-slate-600 md:hidden"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Nav */}
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={handleNavClick}
                            className={({ isActive }) => isActive ? activeClass : inactiveClass}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Footer / User */}
                <div className="p-4 border-t border-slate-200/50">
                    <NavLink to="/" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl w-full transition-colors">
                        <LogOut size={20} />
                        Sign Out
                    </NavLink>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
