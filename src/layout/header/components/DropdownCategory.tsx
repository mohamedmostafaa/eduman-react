import Link from 'next/link';
import React from 'react';

const DropdownCategory = () => {
    return (
        <div className="dropdown-category">
            <nav>
                <ul>
                    <li className="item-has-children">
                        <Link href="/course">Development</Link>
                        <ul className="category-submenu">
                            <li>
                                <Link href="/course">All Development</Link>
                            </li>
                            <li>
                                <Link href="/course">Mobile App</Link>
                            </li>
                            <li>
                                <Link href="/course">Web Development</Link>
                            </li>
                            <li>
                                <Link href="/course">
                                    Development tools
                                </Link>
                            </li>
                            <li>
                                <Link href="/course">Database</Link>
                            </li>
                            <li>
                                <Link href="/course">
                                    Programming language
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="item-has-children">
                        <Link href="/course">Art and Design</Link>
                        <ul className="category-submenu">
                            <li>
                                <Link href="/course">Web Design</Link>
                            </li>
                            <li>
                                <Link href="/course">Graphic Design</Link>
                            </li>
                            <li>
                                <Link href="/course">Design tools</Link>
                            </li>
                            <li>
                                <Link href="/course">All Art</Link>
                            </li>
                            <li>
                                <Link href="/course">Marketing</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="item-has-children">
                        <Link href="/course">Business</Link>
                        <ul className="category-submenu">
                            <li>
                                <Link href="/course">All Business</Link>
                            </li>
                            <li>
                                <Link href="/course">Communications</Link>
                            </li>
                            <li>
                                <Link href="/course">Finance</Link>
                            </li>
                            <li>
                                <Link href="/course">Management</Link>
                            </li>
                            <li>
                                <Link href="/course">Sales</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="item-has-children">
                        <Link href="/course">Life Style</Link>
                        <ul className="category-submenu">
                            <li>
                                <Link href="/course">Life Style</Link>
                            </li>
                            <li>
                                <Link href="/course">Mental Health</Link>
                            </li>
                            <li>
                                <Link href="/course">Dieting</Link>
                            </li>
                            <li>
                                <Link href="/course">All Art</Link>
                            </li>
                            <li>
                                <Link href="/course">Nutrition</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="item-has-children">
                        <Link href="/course">Health and Fitness</Link>
                        <ul className="category-submenu">
                            <li>
                                <Link href="/course">
                                    All Health and Fitness
                                </Link>
                            </li>
                            <li>
                                <Link href="/course">
                                    Beauty and Makeup
                                </Link>
                            </li>
                            <li>
                                <Link href="/course">
                                    Food and Beverages
                                </Link>
                            </li>
                            <li>
                                <Link href="/course">Good Food</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/course">Data Science</Link>
                    </li>
                    <li>
                        <Link href="/course">Marketing</Link>
                    </li>
                    <li>
                        <Link href="/course">Photography</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DropdownCategory;