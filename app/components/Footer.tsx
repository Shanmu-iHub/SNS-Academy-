import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img src="https://www.snsgroups.com/sns.png" alt="SNS Academy Logo" className="h-12 w-auto bg-white rounded p-1" />
                            <div>
                                <h3 className="text-white font-bold">SNS Academy</h3>
                                <p className="text-xs">Design Thinking School</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed">
                            CBSE Affiliation: 1930610<br />
                            Established: 2014<br />
                            Coimbatore, Tamil Nadu
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="/facilities" className="hover:text-white transition">Facilities</Link></li>
                            <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
                            <li><Link href="/sports-clubs" className="hover:text-white transition">Sports & Clubs</Link></li>
                            <li><Link href="/events" className="hover:text-white transition">Events & Celebrations</Link></li>
                            <li><Link href="/success-stories" className="hover:text-white transition">Success Stories</Link></li>
                            <li><Link href="/transport" className="hover:text-white transition">Transport</Link></li>
                            <li><Link href="/innovation" className="hover:text-white transition">Innovation Hub</Link></li>
                            <li><Link href="/brochure" className="hover:text-white transition">Download Brochure</Link></li>
                            <li><Link href="/admissions" className="hover:text-white transition">Admissions</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Academics</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/academics/pre-primary" className="hover:text-white transition">Pre-Primary</Link></li>
                            <li><Link href="/academics/primary" className="hover:text-white transition">Primary</Link></li>
                            <li><Link href="/academics/middle" className="hover:text-white transition">Middle School</Link></li>
                            <li><Link href="/academics/secondary" className="hover:text-white transition">Secondary & Senior Secondary</Link></li>
                            <li><Link href="/stanford-pathway" className="hover:text-white transition">Pathway to Stanford</Link></li>
                            <li><Link href="/mandatory-disclosure" className="hover:text-white transition">Mandatory Disclosure</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <ul className="space-y-2 text-sm mb-4">
                            <li><i className="fas fa-map-marker-alt mr-2"></i>SNS Academy,<br />Thudiyalur - Saravanampatti Road,<br />Vellakinar Post,<br />Coimbatore - 641029.</li>
                            <li><a href="tel:+919629937861" className="hover:text-white transition"><i className="fas fa-phone mr-2"></i>Admission: +91 96299 37861</a></li>
                            <li><a href="tel:+917530093730" className="hover:text-white transition"><i className="fas fa-phone mr-2"></i>Landline: +91 75300 93730</a></li>
                            <li><a href="mailto:info@snsacademy.org" className="hover:text-white transition"><i className="fas fa-envelope mr-2"></i>info@snsacademy.org</a></li>
                            <li><a href="mailto:job@snsgroups.com" className="hover:text-white transition"><i className="fas fa-briefcase mr-2"></i>Career: job@snsgroups.com</a></li>
                        </ul>
                        <div className="flex space-x-3">
                            <a href="https://www.facebook.com/snsinstitutions" target="_blank" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition" rel="noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/snsacademyorg" target="_blank" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition" rel="noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@snsinstitutions" target="_blank" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition" rel="noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.linkedin.com/school/snsinstitutions/" target="_blank" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition" rel="noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; 2026 SNS Academy. All rights reserved.</p>
                    <p className="mt-2 text-orange-400 font-semibold">Redesigning Common Minds | We are Design Thinkers</p>
                    <p className="mt-1 text-xs">SNS Core Value: Sincerity, Nobility, Service</p>
                    <p className="mt-3 text-orange-400 font-bold"><i className="fas fa-headset mr-2"></i>Helpline: 95644 23456</p>
                </div>
            </div>
        </footer>
    );
}
