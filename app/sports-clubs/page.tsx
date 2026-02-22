import { PageHeader } from '../components/PageHeader';
import Link from 'next/link';

export default function SportsClubsPage() {
    return (
        <main>
            <PageHeader
                title="Sports & Clubs"
                subtitle="Building champions in sports, arts, and life skills"
                backgroundImage="/static/images/gym.jpg"
                breadcrumb="Sports & Clubs"
            />

            {/* Sports for Life */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-4">Sports For Life</h2>
                    <p className="text-center text-xl text-gray-600 mb-12">
                        Well-developed play fields with specialized physical instructors to bring out the best in every student
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg card-hover">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-futbol text-4xl text-green-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">Football</h3>
                            <p className="text-gray-600 text-center">Full-sized field with professional coaching</p>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg card-hover">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-table-tennis text-4xl text-yellow-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">Tennis &amp; TT</h3>
                            <p className="text-gray-600 text-center">Professional tennis court and table tennis facility</p>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-lg card-hover">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-baseball-ball text-4xl text-red-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">Cricket</h3>
                            <p className="text-gray-600 text-center">All-weather indoor cricket center with nets</p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg card-hover">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-basketball-ball text-4xl text-orange-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">Basketball</h3>
                            <p className="text-gray-600 text-center">Full court with modern equipment</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg card-hover">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-volleyball-ball text-4xl text-blue-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">Volleyball</h3>
                            <p className="text-gray-600 text-center">Indoor and outdoor courts available</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg card-hover">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-running text-4xl text-purple-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">Athletics</h3>
                            <p className="text-gray-600 text-center">Track events and field sports training</p>
                        </div>

                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg card-hover">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-swimmer text-4xl text-teal-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">Swimming</h3>
                            <p className="text-gray-600 text-center">Ozonized pool with trained coaches</p>
                        </div>

                        <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 shadow-lg card-hover">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-dumbbell text-4xl text-pink-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">Gym &amp; Fitness</h3>
                            <p className="text-gray-600 text-center">Modern equipment with fitness trainers</p>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg card-hover">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-medal text-4xl text-amber-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4">Kabaddi &amp; Kho-Kho</h3>
                            <p className="text-gray-600 text-center">Traditional Indian sports training</p>
                        </div>
                    </div>

                    <div className="bg-green-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-center mb-6">Scouts &amp; Guides</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <i className="fas fa-campground text-4xl text-green-600 mb-4"></i>
                                <h4 className="font-bold mb-2">Outdoor Activities</h4>
                                <p className="text-sm text-gray-600">Camping, hiking, and nature exploration</p>
                            </div>
                            <div>
                                <i className="fas fa-hands-helping text-4xl text-blue-600 mb-4"></i>
                                <h4 className="font-bold mb-2">Community Service</h4>
                                <p className="text-sm text-gray-600">Social responsibility and leadership</p>
                            </div>
                            <div>
                                <i className="fas fa-certificate text-4xl text-purple-600 mb-4"></i>
                                <h4 className="font-bold mb-2">Skill Development</h4>
                                <p className="text-sm text-gray-600">Badges, certifications, and achievements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clubs & Activities */}
            <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-4">Clubs &amp; Activities</h2>
                    <p className="text-center text-xl text-gray-600 mb-12">
                        25+ extra-curricular options for holistic development
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-music text-5xl text-purple-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Music Club</h3>
                            <p className="text-sm text-gray-600">Vocal &amp; instrumental training</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-theater-masks text-5xl text-pink-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Dance Club</h3>
                            <p className="text-sm text-gray-600">Classical, western, and folk forms</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-palette text-5xl text-yellow-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Art Club</h3>
                            <p className="text-sm text-gray-600">Painting, drawing, and crafts</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-drama text-5xl text-red-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Drama Club</h3>
                            <p className="text-sm text-gray-600">Theater and public speaking</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-robot text-5xl text-blue-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Robotics Club</h3>
                            <p className="text-sm text-gray-600">STEM and innovation projects</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-chess text-5xl text-gray-700 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Chess Club</h3>
                            <p className="text-sm text-gray-600">Strategic thinking and tournaments</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-book-reader text-5xl text-green-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Literary Club</h3>
                            <p className="text-sm text-gray-600">Reading, writing, and debates</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-flask text-5xl text-orange-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Science Club</h3>
                            <p className="text-sm text-gray-600">Experiments and exhibitions</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-leaf text-5xl text-green-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Eco Club</h3>
                            <p className="text-sm text-gray-600">Environmental awareness activities</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-language text-5xl text-indigo-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Language Club</h3>
                            <p className="text-sm text-gray-600">Hindi, Tamil, French learning</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-camera text-5xl text-purple-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Photography Club</h3>
                            <p className="text-sm text-gray-600">Visual arts and documentation</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-users text-5xl text-blue-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Student Council</h3>
                            <p className="text-sm text-gray-600">Leadership and governance</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-microphone-alt text-5xl text-red-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Toastmasters Club</h3>
                            <p className="text-sm text-gray-600">Public speaking &amp; leadership skills</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                            <i className="fas fa-globe-americas text-5xl text-teal-600 mb-4"></i>
                            <h3 className="font-bold text-lg mb-2">Model United Nations</h3>
                            <p className="text-sm text-gray-600">Diplomacy, debate &amp; global issues</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4">Discover Your Passion</h2>
                    <p className="text-xl mb-8">Join our sports teams and clubs to unlock your potential!</p>
                    <Link href="/admissions" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition inline-block">
                        <i className="fas fa-trophy mr-2"></i>
                        Join SNS Academy
                    </Link>
                </div>
            </section>
        </main>
    );
}
