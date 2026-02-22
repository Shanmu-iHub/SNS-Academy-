import Link from 'next/link';
import { ParentsTestimonialsCarousel } from './components/Testimonials';

export default function HomePage() {
    return (
        <main>
            {/* Hero Section with Real SNS Content */}
            <section className="relative text-white py-24 lg:py-32 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="/static/images/hero.png" alt="SNS Academy Campus" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
                                <i className="fas fa-trophy text-yellow-400 mr-2"></i>
                                <span className="text-sm font-semibold tracking-wide">India&apos;s First GenAI-Powered Design Thinking CBSE School (Patented)</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight font-display">
                                <Link href="/stanford-pathway" className="hover:text-orange-400 transition duration-300">
                                    Your Pathway to <br />
                                    <span className="text-orange-500">Stanford</span>
                                </Link>
                            </h1>

                            <div className="h-1 w-24 bg-orange-500 mb-8 rounded-full"></div>

                            <p className="text-xl lg:text-2xl mb-6 text-gray-200 leading-relaxed max-w-xl">
                                Trained by Stanford Alumni, our students learn world-class <strong className="text-white">Design Thinking Methodologies</strong> and innovation practices that open doors to elite universities worldwide.
                            </p>

                            <p className="text-sm lg:text-base mb-8 text-gray-200 leading-relaxed max-w-xl">
                                Transform your child into a confident learner and global leader at Coimbatore&apos;s most progressive CBSE school.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <Link href="/admissions" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-orange-500/30 transition transform hover:-translate-y-1 flex items-center justify-center">
                                    Apply for 2026-27
                                    <i className="fas fa-arrow-right ml-2 text-sm"></i>
                                </Link>
                                <Link href="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center justify-center">
                                    <i className="fas fa-play mr-2 text-sm"></i>
                                    About Us
                                </Link>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-200">
                                <div className="inline-flex items-center">
                                    <i className="fas fa-circle-check text-green-400 mr-2"></i>
                                    CBSE Affiliated
                                </div>
                                <div className="inline-flex items-center">
                                    <i className="fas fa-shield-halved text-green-400 mr-2"></i>
                                    Verified by CBSE
                                </div>
                                <div className="inline-flex items-center">
                                    <i className="fas fa-calendar text-green-400 mr-2"></i>
                                    Since 2014
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block relative">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                        <div className="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">10:1</div>
                                        <div className="text-xs text-gray-200 mt-1">Student Teacher Ratio</div>
                                    </div>
                                    <div className="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                        <div className="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">60%</div>
                                        <div className="text-xs text-gray-200 mt-1">10+ Years Experience</div>
                                    </div>
                                    <div className="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                        <div className="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">25+</div>
                                        <div className="text-xs text-gray-200 mt-1">Extra Curricular</div>
                                    </div>
                                    <div className="bg-white/10 border border-white/10 rounded-xl p-5 text-center transition-all duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:shadow-xl hover:border-white/30 cursor-pointer">
                                        <div className="text-4xl font-extrabold text-white transition-transform duration-300 hover:scale-110">12+</div>
                                        <div className="text-xs text-gray-200 mt-1">Years of CBSE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-10 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center divide-x divide-gray-100">
                        <div className="p-4">
                            <div className="text-4xl font-bold text-gray-900 mb-2">2014</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Established</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Happy Students</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold text-gray-900 mb-2">A+</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Campus Rating</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-bold text-gray-900 mb-2">SNS iHub</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Innovation Center</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why SNS Academy */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-orange-600">Why Parents Choose SNS Academy</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We don&apos;t just teach subjects—we redesign common minds through design thinking, preparing your child for tomorrow&apos;s challenges.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                <i className="fas fa-lightbulb text-3xl text-orange-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Thinking Education</h3>
                            <p className="text-gray-600 leading-relaxed">
                                India&apos;s first school with <strong>GenAI-Powered Design Thinking Framework (Patented)</strong>. Built on <strong>Empathy</strong>, every child learns to solve problems creatively using AI-enhanced methodologies from an early age.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                <i className="fas fa-users text-3xl text-blue-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">3P Culture Framework</h3>
                            <p className="text-gray-600 leading-relaxed">
                                <strong>Purpose, Process, People</strong>—our holistic approach ensures every child develops academically, socially, emotionally, and ethically.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                <i className="fas fa-hand-holding-heart text-3xl text-green-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">10:1 Personalized Care</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ultra-low student-teacher ratio ensures every child receives individual attention. 60% of our faculty have 10+ years of experience.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                <i className="fas fa-rocket text-3xl text-purple-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">SNS Innovation Hub</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Access to SNS iHub—India&apos;s Y-Combinator equivalent. Students work with AI, IoT, Robotics, AR/VR labs preparing them for future careers.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                <i className="fas fa-building text-3xl text-pink-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">World-Class SPINE Center</h3>
                            <p className="text-gray-600 leading-relaxed">
                                5-level activity center with swimming pool, indoor cricket, gym, music studio, dance studio, theater, and more—everything under one roof.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                <i className="fas fa-layer-group text-3xl text-indigo-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">5 Pillars Development</h3>
                            <p className="text-gray-600 leading-relaxed">
                                <strong>Learning, Upskilling, Innovation, Networking, Character Building</strong>—comprehensive development for future leaders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Programs Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                            <span className="text-orange-600">Academic Excellence at Every Level</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            CBSE curriculum enhanced with design thinking, experiential learning, and innovation from Nursery to Grade XII.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Program 1 */}
                        <Link href="/academics/pre-primary" className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                                <img src="/static/images/pre-primary.png" alt="Pre-Primary" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-6 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">Pre-Primary</h3>
                                <p className="text-orange-600 font-semibold text-sm mb-3">Nursery - UKG</p>
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    Play-based learning with early literacy, numeracy, and social development.
                                </p>
                                <div className="mt-4 text-orange-600 font-bold text-sm flex items-center">
                                    Explore <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"></i>
                                </div>
                            </div>
                        </Link>

                        {/* Program 2 */}
                        <Link href="/academics/primary" className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                                <img src="/static/images/primary.png" alt="Primary" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-6 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">Primary</h3>
                                <p className="text-blue-600 font-semibold text-sm mb-3">Grades 1 - 5</p>
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    Conceptual understanding, creativity, and skill development with hands-on learning.
                                </p>
                                <div className="mt-4 text-blue-600 font-bold text-sm flex items-center">
                                    Explore <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"></i>
                                </div>
                            </div>
                        </Link>

                        {/* Program 3 */}
                        <Link href="/academics/middle" className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                                <img src="/static/images/middle.png" alt="Middle School" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-6 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">Middle School</h3>
                                <p className="text-purple-600 font-semibold text-sm mb-3">Grades 6 - 8</p>
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    Critical thinking, problem-solving, and project-based collaborative learning.
                                </p>
                                <div className="mt-4 text-purple-600 font-bold text-sm flex items-center">
                                    Explore <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"></i>
                                </div>
                            </div>
                        </Link>

                        {/* Program 4 */}
                        <Link href="/academics/secondary" className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition z-10"></div>
                                <img src="/static/images/secondary.png" alt="Secondary" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-6 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">Secondary</h3>
                                <p className="text-green-600 font-semibold text-sm mb-3">Grades 9 - 12</p>
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    Board exam excellence with career pathways and university preparation.
                                </p>
                                <div className="mt-4 text-green-600 font-bold text-sm flex items-center">
                                    Explore <i className="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <ParentsTestimonialsCarousel />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Ready to Transform Your Child&apos;s Future?
                    </h2>
                    <p className="text-xl opacity-90 mb-8">
                        Admissions open for Academic Year 2026-27. Limited seats available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/admissions" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl">
                            <i className="fas fa-pen-to-square mr-2"></i>
                            Apply Now
                        </Link>
                        <Link href="/contact" className="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition">
                            <i className="fas fa-phone mr-2"></i>
                            Schedule Campus Visit
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
