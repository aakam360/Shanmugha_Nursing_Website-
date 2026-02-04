import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const IQACSidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const items = [
        { path: '/feedback', label: 'FEEDBACK', type: 'link' },
        { path: '#', label: 'ANNUAL REPORT', type: 'anchor' },
        { path: '/pdf/Qualityinitiative2-4.pdf', label: 'AISHE', type: 'pdf' },
        { path: '/iqac-members', label: 'IQAC MEMBERS', type: 'link' },
        { path: '/pdf/IQACMinutes.pdf', label: 'MINUTES OF MEETING', type: 'pdf' },
        { path: '/about-iqac', label: 'ABOUT IQAC', type: 'link' },
    ];

    return (
        <aside className="service-sidebar">
            <aside className="widget post-list">
                <h2> IQAC</h2>
                <div className="all-post-list pbmit-bg-color-global">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className={currentPath === item.path ? 'post-active' : ''}>
                                {item.type === 'link' ? (
                                    <Link to={item.path}>{item.label}</Link>
                                ) : (
                                    <a href={item.path} target={item.type === 'pdf' ? "_blank" : "_self"} rel={item.type === 'pdf' ? "noopener noreferrer" : ""}>
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </aside>
    );
};

export default IQACSidebar;
