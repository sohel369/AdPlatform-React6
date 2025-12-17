import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Bell, Search, Globe, ChevronDown, User as UserIcon, X, Check, Info, PlusCircle, Settings, LogOut, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

// Simple Dropdown Component
const Dropdown = ({ label, icon, options, value, onChange, align = 'right' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
          flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200
          ${isOpen
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-600'
                        : 'bg-white/50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white'
                    }
        `}
            >
                {icon}
                <span className="hidden md:inline text-xs font-semibold">{options.find(o => o.code === value || o.value === value)?.name || options.find(o => o.code === value)?.code || value}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-[300px] overflow-y-auto`}>
                    <div className="py-1">
                        {options.map((option) => (
                            <button
                                key={option.code || option.value}
                                onClick={() => {
                                    onChange(option.code || option.value);
                                    setIsOpen(false);
                                }}
                                className={`
                  w-full text-left px-4 py-2.5 text-sm transition-colors flex justify-between items-center
                  ${(option.code || option.value) === value
                                        ? 'bg-indigo-50 text-indigo-600 font-medium'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }
                `}
                            >
                                <span className="truncate">{option.name || option.label}</span>
                                {option.symbol && <span className="text-xs text-slate-400 font-mono ml-2">{option.symbol}</span>}
                                {option.currency && <span className="text-xs text-slate-400 font-mono ml-2">{option.currency}</span>}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const Header = () => {
    const { user, notifications, markAllRead, language, setLanguage, currency, setCurrency, country, setCountry, CONSTANTS, setSidebarOpen } = useApp();
    const [showNotifs, setShowNotifs] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const unreadCount = notifications.filter(n => !n.read).length;

    // Get current country name
    const currentCountryName = CONSTANTS.COUNTRIES.find(c => c.code === country)?.name || country;

    return (
        <header className="h-20 fixed top-0 right-0 left-0 md:left-64 bg-slate-50/80 backdrop-blur-md border-b border-slate-200 z-40 px-4 md:px-8 flex items-center justify-between transition-all duration-300">

            {/* Left: Context */}
            <div className="flex items-center gap-3 md:gap-6">
                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 -ml-2 text-slate-500 hover:text-slate-800 md:hidden"
                >
                    <Menu size={24} />
                </button>

                <div>
                    <h1 className="text-lg md:text-xl font-bold text-slate-800">
                        Dashboard
                    </h1>
                    <div className="flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            LIVE
                        </span>
                        <span className="text-slate-400 text-xs flex items-center gap-1 font-medium hidden sm:flex">
                            <Globe size={10} />
                            {currentCountryName}
                        </span>
                    </div>
                </div>
            </div>

            {/* Right: Actions & I18n Controls */}
            <div className="flex items-center gap-4">

                {/* Country/Currency/Lang Selectors */}
                <div className="hidden lg:flex items-center gap-2 mr-4 pr-6 border-r border-slate-200">
                    <Dropdown
                        label="Country"
                        options={CONSTANTS.COUNTRIES}
                        value={country}
                        onChange={setCountry}
                        icon={<Globe size={14} />}
                    />
                    <Dropdown
                        label="Currency"
                        options={CONSTANTS.CURRENCIES}
                        value={currency}
                        onChange={setCurrency}
                        icon={<span className="font-mono text-xs font-bold">{CONSTANTS.CURRENCIES.find(c => c.code === currency)?.symbol}</span>}
                    />
                    <Dropdown
                        label="Language"
                        options={CONSTANTS.LANGUAGES}
                        value={language}
                        onChange={setLanguage}
                        icon={<span className="text-xs font-bold uppercase">{language}</span>}
                    />
                </div>

                {/* Quick Actions */}
                <div className="flex items-center gap-3">
                    {/* Notifications */}
                    <div className="relative">
                        <button
                            onClick={() => setShowNotifs(!showNotifs)}
                            className="p-2.5 text-slate-500 hover:text-slate-700 hover:bg-white rounded-xl border border-transparent hover:border-slate-200 items-center justify-center flex transition-all shadow-sm hover:shadow relative"
                        >
                            <Bell size={20} />
                            {unreadCount > 0 && (
                                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                            )}
                        </button>

                        {/* Notification Panel (Slide-over) */}
                        {showNotifs && (
                            <>
                                <div className="fixed inset-0 z-[60]" onClick={() => setShowNotifs(false)}></div>
                                <div className="absolute top-14 right-[-100px] w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-100 z-[70] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-slate-800">Notifications</h3>
                                            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">{unreadCount} New</span>
                                        </div>
                                        <button onClick={markAllRead} className="text-xs text-blue-600 font-medium hover:underline">Mark all read</button>
                                    </div>
                                    <div className="max-h-[400px] overflow-y-auto p-2 space-y-1">
                                        {notifications.length === 0 ? (
                                            <div className="p-8 text-center text-slate-400">
                                                <p>No new notifications</p>
                                            </div>
                                        ) : (
                                            notifications.map(n => (
                                                <div key={n.id} className={`p-3 rounded-xl flex gap-3 ${!n.read ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}>
                                                    <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${n.type === 'approval' ? 'bg-green-100 text-green-600' : n.type === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                                                        {n.type === 'approval' ? <Check size={14} /> : <Info size={14} />}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-slate-800 leading-snug">{n.title}</p>
                                                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{n.message}</p>
                                                        <span className="text-[10px] text-slate-400 mt-1 block">{n.time}</span>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                    <div className="p-2 border-t border-slate-100 bg-slate-50/50 text-center">
                                        <button className="text-xs font-medium text-slate-500 hover:text-slate-800">View Action Center</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <Link to="/campaigns/new" className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-slate-900/20 transition-all active:scale-95">
                        <PlusCircle size={16} />
                        <span>New Campaign</span>
                    </Link>

                    {/* User Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 p-0.5 shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                            <div className="w-full h-full rounded-full bg-white border-2 border-transparent overflow-hidden">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYYED46R5puH88P1qic_RXu3sSoyfjyO3Pw&s" alt="User" />
                            </div>
                        </button>

                        {showUserMenu && (
                            <>
                                <div className="fixed inset-0 z-[60]" onClick={() => setShowUserMenu(false)}></div>
                                <div className="absolute top-14 right-0 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 z-[70] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                                        <p className="font-bold text-slate-800">{user.name}</p>
                                        <p className="text-xs text-slate-500 truncate">{user.email}</p>
                                    </div>
                                    <div className="p-2 space-y-1">
                                        <button className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2">
                                            <UserIcon size={16} />
                                            <span>My Profile</span>
                                        </button>
                                        <button className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2">
                                            <Settings size={16} />
                                            <span>Settings</span>
                                        </button>
                                        <div className="h-px bg-slate-100 my-1"></div>
                                        <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                                            <LogOut size={16} />
                                            <span>Sign Out</span>
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
