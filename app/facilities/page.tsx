import { PageHeader } from '../components/PageHeader';
import Link from 'next/link';

export default function FacilitiesPage() {
    return (
        <main>
            <PageHeader
                title="World-Class Infrastructure"
                subtitle="Everything your child needs for holistic development under one roof—unlocking their potential at the SPINE Activity Center"
                backgroundImage="/static/images/hero5.png"
                breadcrumb="Facilities"
            />

            {/* SPINE Center */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Student Life</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">SNS SPINE Activity Center</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A 5-level world-class activity center for sports, arts, entertainment, and wellness.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Swimming Pool */}
                        <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                                <img src="/static/images/SNS Academy Web/Swim.png" alt="Swimming Pool" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Swimming Pool</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Professional-grade swimming pool with trained coaches. Swimming regularly lowers stress, reduces anxiety, and builds physical endurance.
                                </p>
                            </div>
                        </div>

                        {/* Cricket Center */}
                        <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                                <img src="/static/images/SNS Academy Web/Indoor.png" alt="Indoor Cricket Center" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Indoor Cricket</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    All-weather cricket pitch with bowling machines and nets. Professional coaching available for all skill levels, day or night.
                                </p>
                            </div>
                        </div>

                        {/* Fitness Center */}
                        <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                                <img src="/static/images/SNS Academy Web/Fitness.png" alt="Fitness Center" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fitness Center</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Fully-equipped gym with treadmills, strength machines, weights, and boxing kits to ensure students stay healthy and toned.
                                </p>
                            </div>
                        </div>

                        {/* Music Studio */}
                        <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                                <img src="/static/images/SNS Academy Web/Music.png" alt="Music Studio" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Music Studio</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Professional music studio with recording equipment and instruments. A space for students to compose, practice, and create.
                                </p>
                            </div>
                        </div>

                        {/* Dance Studio */}
                        <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                                <img src="/static/images/SNS Academy Web/Dance.png" alt="Beats Dance Studio" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Dance Studio</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Dedicated space for various dance styles—from classical to contemporary. Enriching life through movement and expression.
                                </p>
                            </div>
                        </div>

                        {/* Art Room */}
                        <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                                <img src="/static/images/SNS Academy Web/Art Studio.png" alt="Art Room" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Art Studio</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Creative space for drawing, painting, and sculpting. Allowing students to visualize concepts and express emotions.
                                </p>
                            </div>
                        </div>

                        {/* Theater */}
                        <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                                <img src="/static/images/SNS Academy Web/The.png" alt="Bioskop Theater" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bioskop Theater</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Compact digital theater with superior sound and projection. A unique venue for educational films and entertainment.
                                </p>
                            </div>
                        </div>

                        {/* Gaming Arena */}
                        <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                                <img src="/static/images/SNS Academy Web/Gaming Area.png" alt="Gaming Arena" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Gaming Arena</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    State-of-the-art gaming space for recreational and competitive esports, fostering strategic thinking and teamwork.
                                </p>
                            </div>
                        </div>

                        {/* Rooftop Restaurant */}
                        <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                                <img src="/static/images/SNS Academy Web/TopRoof Dinning.png" alt="Rooftop Restaurant" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                            </div>
                            <div className="p-8 bg-white relative z-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Rooftop Dining</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Fine dining experience with healthy, seasonal meals. A perfect setting for community interaction and relaxation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Facilities */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Academic Infrastructure</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Modern learning spaces designed to foster innovation and collaboration.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-chalkboard-teacher text-3xl text-purple-600"></i>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Smart Classrooms</h3>
                            <p className="text-sm text-gray-600">Interactive learning with smart boards</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-flask text-3xl text-blue-600"></i>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Science Labs</h3>
                            <p className="text-sm text-gray-600">Physics, Chemistry &amp; Biology labs</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-desktop text-3xl text-green-600"></i>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Computer Labs</h3>
                            <p className="text-sm text-gray-600">State-of-the-art computing facilities</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:-translate-y-2 transition duration-300">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-book text-3xl text-orange-600"></i>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">Library</h3>
                            <p className="text-sm text-gray-600">Comprehensive resource collection</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-pink-600 to-orange-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Experience It In Person</h2>
                    <p className="text-xl lg:text-2xl mb-10 text-white/90 font-light">
                        Words and pictures can only say so much. Schedule a visit to see our world-class campus.
                    </p>
                    <Link href="/contact" className="bg-white text-pink-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl shadow-xl transition transform hover:scale-105 inline-block">
                        Schedule Campus Tour
                    </Link>
                </div>
            </section>
        </main>
    );
}
