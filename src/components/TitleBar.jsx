import React from 'react';

const TitleBar = ({ title, activePage }) => {
    return (
        <div className="pbmit-title-bar-wrapper">
            <div className="container">
                <div className="pbmit-title-bar-content">
                    <div className="pbmit-title-bar-content-inner">
                        <div className="pbmit-tbar">
                            <div className="pbmit-tbar-inner">
                                <h1 className="pbmit-tbar-title">{title}</h1>
                            </div>
                        </div>
                        <div className="pbmit-breadcrumb">
                            <div className="pbmit-breadcrumb-inner">
                                <span><a title="" href="/" className="home"><span>Home</span></a></span>
                                <span className="sep"><i className="pbmit-base-icon-angle-double-right"></i></span>
                                <span><span className="post-root post post-post current-item">{activePage}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleBar;
