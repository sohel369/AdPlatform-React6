import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CampaignCreation from './pages/CampaignCreation';
import GeoTargeting from './pages/GeoTargeting';
import Pricing from './pages/Pricing';
import Analytics from './pages/Analytics';
import LandingPage from './pages/LandingPage';
import LandingPageLight from './pages/LandingPageLight';
import DashboardDark from './pages/DashboardDark';
import SidebarDark from './components/SidebarDark';
import HeaderDark from './components/HeaderDark';

import { Toaster } from 'sonner';

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            <Sidebar />
            <div className="flex-1 ml-0 md:ml-64 transition-all duration-300">
                <Header />
                <main className="pt-20 px-4 pb-8 md:px-8 md:pb-12 min-h-screen">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

const DashboardLayoutDark = () => {
    return (
        <div className="flex min-h-screen bg-slate-950 selection:bg-cyan-900 selection:text-cyan-100 font-inter">
            <SidebarDark />
            <div className="flex-1 ml-0 md:ml-72 transition-all duration-300">
                <HeaderDark />
                <main className="pt-24 px-8 pb-12 min-h-screen">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

function App() {
    return (
        <Router>
            <Toaster position="top-right" richColors closeButton />
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/landing-light" element={<LandingPageLight />} />

                {/* Protected/App Routes (Legacy/Light) */}
                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/campaigns/new" element={<CampaignCreation />} />
                    <Route path="/geo-targeting" element={<GeoTargeting />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/analytics" element={<Analytics />} />
                </Route>

                {/* New Premium Routes (Dark) */}
                <Route element={<DashboardLayoutDark />}>
                    <Route path="/dashboard-v2" element={<DashboardDark />} />
                </Route>

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
