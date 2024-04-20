import Link from 'next/link';
import React from 'react';

const BlogCategory = () => {
    return (
        <div className="sidebar__widget mb-30">
        <div className="sidebar__widget-head mb-35">
            <h4 className="sidebar__widget-title">Category</h4>
        </div>
        <div className="sidebar__widget-content">
            <div className="sidebar__category">
                <ul>
                    <li><Link href="/blog">Data Science(2)</Link></li>
                    <li><Link href="/blog">Video and Tips (4)</Link></li>
                    <li><Link href="/blog">Education (8)</Link></li>
                    <li><Link href="/blog">Business (5)</Link></li>
                    <li><Link href="/blog">UX Design (3)</Link></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default BlogCategory;