import React from 'react';
import {
    TrendingUp,
    TrendingDown,
    Users,
    DollarSign,
    Target,
    MoreHorizontal,
    ArrowUpRight,
    ArrowDownRight,
    Activity,
    MousePointer2
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const DashboardDark = () => {
    // Mock Data
    const performanceData = [
        { name: 'Mon', revenue: 4000, spend: 2400 },
        { name: 'Tue', revenue: 3000, spend: 1398 },
        { name: 'Wed', revenue: 2000, spend: 9800 },
        { name: 'Thu', revenue: 2780, spend: 3908 },
        { name: 'Fri', revenue: 1890, spend: 4800 },
        { name: 'Sat', revenue: 2390, spend: 3800 },
        { name: 'Sun', revenue: 3490, spend: 4300 },
    ];

    const StatCard = ({ title, value, change, isPositive, icon: Icon, colorClass }) => (
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all group">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${colorClass} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={colorClass.replace('bg-', 'text-').replace('/10', '')} size={24} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? 'text-emerald-400' : 'text-red-400'} bg-opacity-10 px-2 py-1 rounded-lg`}>
                    {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    {change}
                </div>
            </div>
            <div className="space-y-1">
                <p className="text-slate-500 text-sm font-medium">{title}</p>
                <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
            </div>
        </div>
    );

    return (
        <div className="space-y-8 animate-fade-in pb-10">
            {/* Welcome Section */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">John</span>
                    </h1>
                    <p className="text-slate-400">Here's what's happening with your campaigns today.</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-2">
                    <Activity size={18} />
                    Live View
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Revenue"
                    value="$128,430"
                    change="+12.5%"
                    isPositive={true}
                    icon={DollarSign}
                    colorClass="bg-emerald-500 text-emerald-500"
                />
                <StatCard
                    title="Active Campaigns"
                    value="24"
                    change="+4"
                    isPositive={true}
                    icon={Target}
                    colorClass="bg-blue-500 text-blue-500"
                />
                <StatCard
                    title="Total Impressions"
                    value="2.4M"
                    change="+8.2%"
                    isPositive={true}
                    icon={Users}
                    colorClass="bg-purple-500 text-purple-500"
                />
                <StatCard
                    title="Avg. CTR"
                    value="2.8%"
                    change="-0.4%"
                    isPositive={false}
                    icon={MousePointer2}
                    colorClass="bg-orange-500 text-orange-500"
                />
            </div>

            {/* Main Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-white">Revenue Overview</h3>
                            <p className="text-sm text-slate-500">Gross earnings per day</p>
                        </div>
                        <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={performanceData}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} dy={10} />
                                <YAxis stroke="#64748b" axisLine={false} tickLine={false} dx={-10} tickFormatter={(value) => `$${value}`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Campaign Performance Bar Chart */}
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-white">Ad Spend by Day</h3>
                        <p className="text-sm text-slate-500">Daily budget utilization</p>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} dy={10} />
                                <Tooltip
                                    cursor={{ fill: '#1e293b' }}
                                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
                                />
                                <Bar dataKey="spend" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Active Campaigns Table */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-slate-800">
                    <h3 className="text-lg font-bold text-white">Recent Campaigns</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-950/50 text-slate-400 text-xs uppercase tracking-wider font-semibold">
                            <tr>
                                <th className="px-6 py-4">Campaign Name</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Reach</th>
                                <th className="px-6 py-4">Spent</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-sm">
                            {[
                                { name: "Summer Sale 2024", status: "Active", reach: "124K", spent: "$1,240", color: "emerald" },
                                { name: "New Product Launch", status: "Review", reach: "45K", spent: "$850", color: "amber" },
                                { name: "Retargeting Cart", status: "Active", reach: "89K", spent: "$2,100", color: "emerald" },
                                { name: "Brand Awareness", status: "Paused", reach: "12K", spent: "$340", color: "slate" },
                            ].map((campaign, i) => (
                                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                                    <td className="px-6 py-4 font-medium text-white">{campaign.name}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-${campaign.color}-500/10 text-${campaign.color}-400 border border-${campaign.color}-500/20`}>
                                            <span className={`w-1.5 h-1.5 rounded-full bg-${campaign.color}-400`}></span>
                                            {campaign.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-300">{campaign.reach}</td>
                                    <td className="px-6 py-4 text-slate-300">{campaign.spent}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-white font-medium hover:underline">Manage</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardDark;
