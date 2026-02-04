import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CommitteeSidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const items = [
        { path: '/anti-ragging', label: 'Anti-ragging Committee' },
        { path: '/students-grievance-committee', label: 'Student Grievance Committee' },
        { path: '/library-committee', label: 'Library Committee' },
        { path: '/campus-maintenance-committee', label: 'Campus Maintenance Committee' },
        { path: '/curriculum-committee', label: 'Curriculum Committee' },
        { path: '/disciplinary-committee', label: 'Disciplinary Committee' },
        { path: '/transport-committee', label: 'Transport Committee' },
        { path: '/hostel-committee', label: 'Hostel Committee' },
        { path: '/posh', label: 'POSH (Prevention of Sexual Harrassment) Committee' },
        { path: '/grievance-redressal-committee', label: 'Grievance Redressal Committee' },
        { path: '/sports-committee', label: 'Sports Committee' },
        { path: '/women-empowerment', label: 'Women Empowerment Cell' },
        { path: '/alumni-committee', label: 'Alumni Committee' },
        { path: '/research-committee', label: 'Research & Development Committee' },
        { path: '/sna-committee', label: 'SNA (Student Nurses Association) Committee' },
    ];

    return (
        <aside className="service-sidebar">
            <aside className="widget post-list">
                <h2>COMMITTEES</h2>
                <div className="all-post-list pbmit-bg-color-global">
                    <ul>
                        {items.map((item) => (
                            <li key={item.path} className={currentPath === item.path ? 'post-active' : ''}>
                                <Link to={item.path} style={{ textTransform: 'uppercase' }}>{item.label} </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </aside>
    );
};

export default CommitteeSidebar;
