import Link from 'next/link';
import React from 'react';

const BlogTag = () => {
    return (
        <div className="sidebar__widget mb-30">
            <div className="sidebar__widget-head mb-35">
                <h4 className="sidebar__widget-title">Tags</h4>
            </div>
            <div className="sidebar__widget-content">
                <div className="sidebar__tag">
                    <Link href="/blog">Art and Design</Link>
                    <Link href="/blog">Course</Link>
                    <Link href="/blog">Videos</Link>
                    <Link href="/blog">App</Link>
                    <Link href="/blog">Education</Link>
                    <Link href="/blog">Data Science</Link>
                    <Link href="/blog">Machine Learning</Link>
                    <Link href="/blog">Tips</Link>
                </div>
            </div>
            </div>
    );
};

export default BlogTag;