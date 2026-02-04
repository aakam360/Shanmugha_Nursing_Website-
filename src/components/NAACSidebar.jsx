import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAACSidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const items = [
        { path: '/criteria1', label: 'CRITERIA 1' },
        { path: '/criteria2', label: 'CRITERIA 2' },
        { path: '/criteria3', label: 'CRITERIA 3' },
        { path: '/criteria4', label: 'CRITERIA 4' },
        { path: '/criteria5', label: 'CRITERIA 5' },
        { path: '/criteria6', label: 'CRITERIA 6' },
        { path: '/criteria7', label: 'CRITERIA 7' },
        { path: '/criteria8', label: 'CRITERIA 8' },
    ];

    return (
        <aside className="service-sidebar">
            <aside className="widget post-list">
                <h2>NAAC MENU</h2>
                <div className="all-post-list pbmit-bg-color-global">
                    <ul>
                        {items.map((item) => (
                            <li key={item.path} className={currentPath === item.path ? 'post-active' : ''}>
                                <Link to={item.path}>{item.label} </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </aside>
    );
};

export default NAACSidebar;
