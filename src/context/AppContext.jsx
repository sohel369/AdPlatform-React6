import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCountryDefaults, SUPPORTED_COUNTRIES, SUPPORTED_CURRENCIES, SUPPORTED_LANGUAGES } from '../config/i18nConfig';

import { toast } from 'sonner';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    // Mock Data
    const [stats, setStats] = useState({
        totalSpend: 4920,
        impressions: 1240000,
        ctr: 3.2,
        budgetRemaining: 780
    });

    const [campaigns, setCampaigns] = useState([
        { id: 1, name: 'Holiday Push 2024', budget: 5000, status: 'live', startDate: '2024-12-01', impressions: 450000, clicks: 12000 },
        { id: 2, name: 'Winter Product Launch', budget: 8500, status: 'review', startDate: '2024-11-28', impressions: 0, clicks: 0 },
        { id: 3, name: 'Brand Awareness Q4', budget: 3200, status: 'approved', startDate: '2024-12-05', impressions: 0, clicks: 0 },
        { id: 4, name: 'Mobile App Promo', budget: 6800, status: 'draft', startDate: '2024-11-25', impressions: 0, clicks: 0 },
    ]);

    const [notifications, setNotifications] = useState([
        { id: 1, type: 'approval', title: 'Campaign Approved', message: 'Holiday Push 2024 is now approved.', time: '2h ago', read: false },
        { id: 2, type: 'warning', title: 'Budget Warning', message: '80% of budget used for Brand Awareness.', time: '5h ago', read: false },
    ]);

    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@adplatform.com',
        avatar: null
    });

    const [currency, setCurrency] = useState('USD');
    const [language, setLanguage] = useState('en');
    const [country, setCountry] = useState('US');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const CONSTANTS = {
        COUNTRIES: SUPPORTED_COUNTRIES,
        CURRENCIES: SUPPORTED_CURRENCIES,
        LANGUAGES: SUPPORTED_LANGUAGES
    };

    const addCampaign = (campaign) => {
        setCampaigns(prev => [{ ...campaign, id: prev.length + 1, status: 'review', impressions: 0, clicks: 0 }, ...prev]);
        addNotification({ type: 'info', title: 'Campaign Submitted', message: `"${campaign.name}" is pending review.` });
    };

    const addNotification = ({ type, title, message }) => {
        setNotifications(prev => [{ id: Date.now(), type, title, message, read: false, time: 'Just now' }, ...prev]);

        // Trigger Toast
        if (type === 'approval' || type === 'success') {
            toast.success(title, { description: message });
        } else if (type === 'warning') {
            toast.warning(title, { description: message, action: { label: 'Check', onClick: () => console.log('Action clicked') } });
        } else if (type === 'error') {
            toast.error(title, { description: message });
        } else {
            toast.info(title, { description: message });
        }
    };

    const markAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    // Simulate Real-time Events
    useEffect(() => {
        const interval = setInterval(() => {
            const events = [
                { type: 'approval', title: 'Campaign Approved', message: 'Winter Product Launch is now live!' },
                { type: 'warning', title: 'Budget Alert', message: 'Daily spend limit reached for Mobile App Promo.' },
                { type: 'info', title: 'New Feature', message: 'Check out the new Geo-Targeting map.' },
                { type: 'success', title: 'High Performance', message: 'CTR spiked to 4.5% in the last hour.' }
            ];
            const randomEvent = events[Math.floor(Math.random() * events.length)];

            // 30% chance to trigger an event
            if (Math.random() > 0.7) {
                addNotification(randomEvent);
            }
        }, 10000); // Check every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <AppContext.Provider value={{
            stats,
            campaigns,
            notifications,
            user,
            currency,
            setCurrency,
            setCurrency,
            language,
            setLanguage,
            country,
            setCountry,
            sidebarOpen,
            setSidebarOpen,
            CONSTANTS,
            addCampaign,
            addNotification,
            markAllRead
        }}>
            {children}
        </AppContext.Provider>
    );
};
