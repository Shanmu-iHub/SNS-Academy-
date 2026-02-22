"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Navigation() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // State for mobile dropdowns
    const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
    const [mobileInfrastructureOpen, setMobileInfrastructureOpen] = useState(false);
    const [mobileBeyondOpen, setMobileBeyondOpen] = useState(false);
    const [mobileMeetUsOpen, setMobileMeetUsOpen] = useState(false);

    // Helper to determine active state exactly as before
    const isActive = (paths: string[]) => {
        if (pathname === '/' && paths.includes('home')) return true;
        return paths.some(path => pathname.startsWith('/' + path));
    };

    const isAcademicsActive = isActive(['academics', 'stanford-pathway']);
    const isInfrastructureActive = isActive(['facilities', 'gallery', 'transport']);
    const isBeyondActive = isActive(['sports-clubs', 'innovation', 'events', 'success-stories']);
    const isMeetUsActive = isActive(['about', 'contact', 'mandatory-disclosure']);

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center space-x-3">
                        <img src="https://www.snsgroups.com/sns.png" alt="SNS Academy Logo" className="h-16 w-auto" />
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">SNS Academy</h1>
                            <p className="text-xs text-gray-500">Design Thinking School</p>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className={`${pathname === '/' ? 'text-orange-600 font-bold' : 'text-gray-700 hover:text-orange-600'} font-medium`}>Home</Link>

                        {/* Academics Dropdown */}
                        <div className="relative group">
                            <button className={`${isAcademicsActive ? 'text-orange-600 font-bold' : 'text-gray-700 hover:text-orange-600'} font-medium flex items-center`}>
                                Academics <i className="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-64 mt-0 z-50">
                                <Link href="/academics/pre-primary" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Pre-Primary (Pre-KG, LKG, UKG)</Link>
                                <Link href="/academics/primary" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Primary (Grades 1-5)</Link>
                                <Link href="/academics/middle" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Middle School (Grades 6-8)</Link>
                                <Link href="/academics/secondary" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Secondary & Senior Secondary (Grades 9-12)</Link>
                                <div className="border-t my-2"></div>
                                <Link href="/stanford-pathway" className="block px-4 py-2 hover:bg-orange-50 text-gray-700 font-semibold">
                                    <i className="fas fa-university text-orange-600 mr-2"></i>Pathway to Stanford
                                </Link>
                            </div>
                        </div>

                        {/* Infrastructure Dropdown */}
                        <div className="relative group">
                            <button className={`${isInfrastructureActive ? 'text-orange-600 font-bold' : 'text-gray-700 hover:text-orange-600'} font-medium flex items-center`}>
                                Infrastructure <i className="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-48 mt-0 z-50">
                                <Link href="/facilities" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Facilities</Link>
                                <Link href="/gallery" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Gallery</Link>
                                <Link href="/transport" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Transport</Link>
                            </div>
                        </div>

                        {/* Beyond Academics Dropdown */}
                        <div className="relative group">
                            <button className={`${isBeyondActive ? 'text-orange-600 font-bold' : 'text-gray-700 hover:text-orange-600'} font-medium flex items-center`}>
                                Beyond Academics <i className="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                                <Link href="/sports-clubs" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Sports & Clubs</Link>
                                <Link href="/innovation" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Innovation Hub</Link>
                                <Link href="/events" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Events & Celebrations</Link>
                                <Link href="/success-stories" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Success Stories</Link>
                            </div>
                        </div>

                        {/* Meet Us Dropdown */}
                        <div className="relative group">
                            <button className={`${isMeetUsActive ? 'text-orange-600 font-bold' : 'text-gray-700 hover:text-orange-600'} font-medium flex items-center`}>
                                Meet Us <i className="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                                <Link href="/about" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">About Us</Link>
                                <Link href="/contact" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Contact Us</Link>
                                <Link href="/mandatory-disclosure" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Mandatory Disclosure</Link>
                            </div>
                        </div>

                        <Link href="/admissions" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition">
                            Apply Now <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                    </div>

                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-700">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t`}>
                <div className="px-4 py-4 space-y-3">
                    <Link href="/" onClick={closeMenu} className="block text-gray-700 hover:text-orange-600 font-medium py-2">Home</Link>

                    {/* Academics */}
                    <div>
                        <button onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)} className="w-full text-left text-gray-700 hover:text-orange-600 font-medium py-2 flex justify-between items-center">
                            Academics <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className={`${mobileAcademicsOpen ? 'block' : 'hidden'} pl-4 space-y-2 mt-2`}>
                            <Link href="/academics/pre-primary" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Pre-Primary (Pre-KG, LKG, UKG)</Link>
                            <Link href="/academics/primary" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Primary (Grades 1-5)</Link>
                            <Link href="/academics/middle" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Middle School (Grades 6-8)</Link>
                            <Link href="/academics/secondary" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Secondary & Senior Secondary (Grades 9-12)</Link>
                            <div className="border-t my-2"></div>
                            <Link href="/stanford-pathway" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1 font-semibold">
                                <i className="fas fa-university text-orange-600 mr-2"></i>Pathway to Stanford
                            </Link>
                        </div>
                    </div>

                    {/* Infrastructure */}
                    <div>
                        <button onClick={() => setMobileInfrastructureOpen(!mobileInfrastructureOpen)} className="w-full text-left text-gray-700 hover:text-orange-600 font-medium py-2 flex justify-between items-center">
                            Infrastructure <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className={`${mobileInfrastructureOpen ? 'block' : 'hidden'} pl-4 space-y-2 mt-2`}>
                            <Link href="/facilities" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Facilities</Link>
                            <Link href="/gallery" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Gallery</Link>
                            <Link href="/transport" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Transport</Link>
                        </div>
                    </div>

                    {/* Beyond Academics */}
                    <div>
                        <button onClick={() => setMobileBeyondOpen(!mobileBeyondOpen)} className="w-full text-left text-gray-700 hover:text-orange-600 font-medium py-2 flex justify-between items-center">
                            Beyond Academics <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className={`${mobileBeyondOpen ? 'block' : 'hidden'} pl-4 space-y-2 mt-2`}>
                            <Link href="/sports-clubs" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Sports & Clubs</Link>
                            <Link href="/innovation" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Innovation Hub</Link>
                            <Link href="/events" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Events & Celebrations</Link>
                            <Link href="/success-stories" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Success Stories</Link>
                        </div>
                    </div>

                    {/* Meet Us */}
                    <div>
                        <button onClick={() => setMobileMeetUsOpen(!mobileMeetUsOpen)} className="w-full text-left text-gray-700 hover:text-orange-600 font-medium py-2 flex justify-between items-center">
                            Meet Us <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className={`${mobileMeetUsOpen ? 'block' : 'hidden'} pl-4 space-y-2 mt-2`}>
                            <Link href="/about" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">About Us</Link>
                            <Link href="/contact" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Contact Us</Link>
                            <Link href="/mandatory-disclosure" onClick={closeMenu} className="block text-gray-600 hover:text-orange-600 py-1">Mandatory Disclosure</Link>
                        </div>
                    </div>

                    <Link href="/admissions" onClick={closeMenu} className="block bg-orange-500 text-white text-center px-6 py-3 rounded-lg font-bold">
                        Apply Now <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
