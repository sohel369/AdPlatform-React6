import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Info } from 'lucide-react';

const GeoTargeting = () => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const circleInstance = useRef(null);
    const markerInstance = useRef(null);

    const [settings, setSettings] = useState({
        radius: 30, // miles
        lat: 40.7128,
        lng: -74.0060,
        postcode: ''
    });

    const [stats, setStats] = useState({ reach: 0, area: 0 });

    const milesToMeters = (miles) => miles * 1609.34;

    const calculateStats = (radius) => {
        const area = Math.PI * radius * radius;
        const reach = Math.floor(area * 850);
        return { area: Math.floor(area), reach };
    };

    useEffect(() => {
        // Dynamically load Leaflet CSS and JS if not already loaded
        const loadLeaflet = async () => {
            if (!window.L) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
                document.head.appendChild(link);

                const script = document.createElement('script');
                script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
                script.onload = initMap;
                document.body.appendChild(script);
            } else {
                initMap();
            }
        };

        loadLeaflet();

        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    const initMap = () => {
        if (mapRef.current && !mapInstance.current && window.L) {
            // Create Map
            mapInstance.current = window.L.map(mapRef.current).setView([settings.lat, settings.lng], 10);

            // Add Tile Layer (OpenStreetMap)
            window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(mapInstance.current);

            // Add Marker
            markerInstance.current = window.L.marker([settings.lat, settings.lng]).addTo(mapInstance.current)
                .bindPopup('Target Center');

            // Add Circle
            circleInstance.current = window.L.circle([settings.lat, settings.lng], {
                color: '#3b82f6',
                fillColor: '#3b82f6',
                fillOpacity: 0.15,
                radius: milesToMeters(settings.radius),
                weight: 2
            }).addTo(mapInstance.current);

            // Interactions
            circleInstance.current.on('mouseover', function () {
                this.setStyle({ fillOpacity: 0.35, weight: 3 });
                this.bindPopup(`Radius: ${settings.radius} miles`).openPopup();
            });
            circleInstance.current.on('mouseout', function () {
                this.setStyle({ fillOpacity: 0.15, weight: 2 });
                // this.closePopup();
            });

            // Update stats
            setStats(calculateStats(settings.radius));
        }
    };

    // Update map when settings change
    useEffect(() => {
        if (mapInstance.current && window.L && circleInstance.current) {
            const radiusMeters = milesToMeters(settings.radius);

            // Update Circle
            circleInstance.current.setRadius(radiusMeters);
            circleInstance.current.setLatLng([settings.lat, settings.lng]);

            // Update Marker
            if (markerInstance.current) {
                markerInstance.current.setLatLng([settings.lat, settings.lng]);
            }

            // Pan Map
            mapInstance.current.setView([settings.lat, settings.lng]);

            // Fit Bounds
            mapInstance.current.fitBounds(circleInstance.current.getBounds());

            setStats(calculateStats(settings.radius));
        }
    }, [settings.radius, settings.lat, settings.lng]);

    const handlePostcodeSearch = () => {
        if (!settings.postcode) return;

        // Use Nominatim OpenStreetMap Geocoding API (Free)
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(settings.postcode)}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setSettings(prev => ({
                        ...prev,
                        lat: parseFloat(data[0].lat),
                        lng: parseFloat(data[0].lon)
                    }));
                } else {
                    alert('Location not found');
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Geo-Targeting</h1>
                <p className="text-slate-500 mt-1">Define your audience location and reach.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Settings Panel */}
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-white/50 p-6 shadow-sm space-y-8 h-fit">

                    {/* Location Input */}
                    <div className="space-y-3">
                        <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                            <MapPin size={16} /> Location
                        </h2>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-100"
                                placeholder="Enter Postcode or City"
                                value={settings.postcode}
                                onChange={(e) => setSettings(p => ({ ...p, postcode: e.target.value }))}
                                onKeyDown={(e) => e.key === 'Enter' && handlePostcodeSearch()}
                            />
                            <button
                                onClick={handlePostcodeSearch}
                                className="bg-blue-600 text-white p-2.5 rounded-xl hover:bg-blue-700 transition-colors"
                            >
                                <Navigation size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Radius Slider */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-sm font-bold text-slate-800">Radius</h2>
                            <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md text-xs">{settings.radius} miles</span>
                        </div>
                        <input
                            type="range" min="5" max="100"
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            value={settings.radius}
                            onChange={(e) => setSettings(p => ({ ...p, radius: parseInt(e.target.value) }))}
                        />
                        <div className="flex justify-between text-xs text-slate-400 font-medium">
                            <span>5 mi</span>
                            <span>100 mi</span>
                        </div>
                    </div>

                    {/* Stats Display */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white text-center space-y-6">
                        <div>
                            <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Estimated Reach</p>
                            <p className="text-3xl font-bold">{stats.reach.toLocaleString()}</p>
                            <p className="text-sm text-slate-400">users</p>
                        </div>
                        <div className="w-full h-px bg-slate-700"></div>
                        <div>
                            <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-1">Coverage Area</p>
                            <p className="text-2xl font-bold">{stats.area.toLocaleString()}</p>
                            <p className="text-sm text-slate-400">sq miles</p>
                        </div>
                    </div>

                    <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-colors"
                        onClick={() => alert('Settings Saved')}>
                        Apply Target
                    </button>
                </div>

                {/* Map Container */}
                <div className="lg:col-span-2 h-[600px] bg-slate-200 rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative">
                    <div id="map" ref={mapRef} className="w-full h-full z-0" />

                    {/* Info Overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-medium text-slate-600 shadow-sm border border-white flex items-center gap-2 z-[1000]">
                        <Info size={14} className="text-blue-500" />
                        Interactive Map: Drag to pan, scroll to zoom
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeoTargeting;
