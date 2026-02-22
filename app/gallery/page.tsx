import { PageHeader } from '../components/PageHeader';
import Link from 'next/link';

export default function GalleryPage() {
    return (
        <main>
            <PageHeader
                title="Campus Gallery"
                subtitle="Explore our world-class infrastructure and vibrant campus life"
                backgroundImage="/static/images/hero5.png"
                breadcrumb="Gallery"
            />

            {/* Life at SNS Academy */}
            <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-4">Life @ SNS Academy</h2>
                    <p className="text-center text-xl text-gray-600 mb-12">Where learning meets joy, and every day is an adventure!</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl card-hover">
                            <div className="h-64 relative overflow-hidden">
                                <img src="/static/images/pre-primary.png" alt="Little Graduates" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <i className="fas fa-graduation-cap text-3xl mb-2"></i>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Little Graduates</h3>
                                <p className="text-gray-600">Celebrating achievements and milestones of our youngest learners</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl card-hover">
                            <div className="h-64 relative overflow-hidden">
                                <img src="/static/images/SNS Academy Web/Colla Work.png" alt="Collaborative Work" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <i className="fas fa-users text-3xl mb-2"></i>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Collaborative Work</h3>
                                <p className="text-gray-600">Students working together on innovative projects and problem-solving</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl card-hover">
                            <div className="h-64 relative overflow-hidden">
                                <img src="/static/images/SNS Academy Web/Happy Envirn.png" alt="Happy Environment" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <i className="fas fa-smile-beam text-3xl mb-2"></i>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Happy Environment</h3>
                                <p className="text-gray-600">Nurturing positive atmosphere where every child thrives</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* School Blocks */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-4">School Campus</h2>
                    <p className="text-center text-xl text-gray-600 mb-12">Wi-Fi enabled campus with smart classrooms and modern facilities</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-building text-4xl text-blue-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">A Block</h3>
                            <p className="text-gray-700 text-center">Primary academic block with smart classrooms</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-school text-4xl text-purple-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">B Block</h3>
                            <p className="text-gray-700 text-center">Secondary education wing with advanced facilities</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-landmark text-4xl text-green-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">C Block</h3>
                            <p className="text-gray-700 text-center">Senior secondary and administrative block</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-md text-center">
                            <i className="fas fa-door-open text-4xl text-indigo-600 mb-3"></i>
                            <h4 className="font-bold">Reception</h4>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md text-center">
                            <i className="fas fa-chalkboard text-4xl text-blue-600 mb-3"></i>
                            <h4 className="font-bold">Smart Classrooms</h4>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md text-center">
                            <i className="fas fa-baby text-4xl text-pink-600 mb-3"></i>
                            <h4 className="font-bold">Pre-KG</h4>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md text-center">
                            <i className="fas fa-child text-4xl text-purple-600 mb-3"></i>
                            <h4 className="font-bold">LKG &amp; UKG</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Laboratories */}
            <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">State-of-the-Art Laboratories</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <i className="fas fa-flask text-3xl text-red-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Chemistry Lab</h3>
                            <p className="text-gray-600">Fully-equipped with modern apparatus for hands-on experiments</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <i className="fas fa-atom text-3xl text-blue-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Physics Lab</h3>
                            <p className="text-gray-600">Advanced equipment for scientific exploration and discovery</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <i className="fas fa-microscope text-3xl text-green-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Biology Lab</h3>
                            <p className="text-gray-600">Complete setup for life sciences and biological studies</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <i className="fas fa-laptop-code text-3xl text-purple-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Computer Lab</h3>
                            <p className="text-gray-600">Latest computers with modern software and internet connectivity</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                                <i className="fas fa-calculator text-3xl text-yellow-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Maths Lab</h3>
                            <p className="text-gray-600">Interactive learning tools for mathematical concepts</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <i className="fas fa-language text-3xl text-orange-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Language Lab</h3>
                            <p className="text-gray-600">Multimedia resources for language skill development</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Facilities */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">Premium Facilities</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
                            <i className="fas fa-briefcase text-4xl text-amber-600 mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">Board Room</h3>
                            <p className="text-gray-600 text-sm">Professional meeting space for important discussions</p>
                        </div>

                        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6">
                            <i className="fas fa-utensils text-4xl text-rose-600 mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">VIP Dining</h3>
                            <p className="text-gray-600 text-sm">Premium dining facility for guests and special events</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                            <i className="fas fa-bus text-4xl text-blue-600 mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">Transport</h3>
                            <p className="text-gray-600 text-sm">Safe and comfortable school bus service</p>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6">
                            <i className="fas fa-video text-4xl text-red-600 mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">CCTV Security</h3>
                            <p className="text-gray-600 text-sm">24/7 monitoring for student safety</p>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6">
                            <i className="fas fa-solar-panel text-4xl text-yellow-600 mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">Solar Powered</h3>
                            <p className="text-gray-600 text-sm">Eco-friendly campus with solar energy</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                            <i className="fas fa-wifi text-4xl text-purple-600 mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">Wi-Fi Enabled</h3>
                            <p className="text-gray-600 text-sm">Complete campus connectivity</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Executive Lounge */}
            <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-4">SLUSH - Executive Lounge</h2>
                    <p className="text-center text-xl text-gray-600 mb-12">Premium space for top-performing students</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <i className="fas fa-gamepad text-6xl text-indigo-600 mb-6"></i>
                            <h3 className="text-2xl font-bold mb-4">Video Gaming</h3>
                            <p className="text-gray-600">Latest gaming consoles and equipment</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <i className="fas fa-star text-6xl text-yellow-500 mb-6"></i>
                            <h3 className="text-2xl font-bold mb-4">Awe Inspiring</h3>
                            <p className="text-gray-600">Motivational and inspiring environment</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <i className="fas fa-film text-6xl text-pink-600 mb-6"></i>
                            <h3 className="text-2xl font-bold mb-4">Entertainment</h3>
                            <p className="text-gray-600">Movies, music, and recreational activities</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Play Area */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-4">Happy Trails - Play Area</h2>
                    <p className="text-center text-xl text-gray-600 mb-12">Where imagination comes to life!</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-xl p-6 text-center">
                            <i className="fas fa-home text-5xl text-pink-600 mb-4"></i>
                            <h3 className="font-bold text-lg">Play Houses</h3>
                        </div>

                        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 text-center">
                            <i className="fas fa-water text-5xl text-blue-600 mb-4"></i>
                            <h3 className="font-bold text-lg">Aquatics</h3>
                        </div>

                        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 text-center">
                            <i className="fas fa-puzzle-piece text-5xl text-green-600 mb-4"></i>
                            <h3 className="font-bold text-lg">Mazes</h3>
                        </div>

                        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-6 text-center">
                            <i className="fas fa-tree text-5xl text-purple-600 mb-4"></i>
                            <h3 className="font-bold text-lg">Jungle Gym</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4">Experience Our Campus</h2>
                    <p className="text-xl mb-8">Schedule a visit to see our world-class infrastructure in person!</p>
                    <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition inline-block">
                        <i className="fas fa-calendar-check mr-2"></i>
                        Book Campus Tour
                    </Link>
                </div>
            </section>
        </main>
    );
}
