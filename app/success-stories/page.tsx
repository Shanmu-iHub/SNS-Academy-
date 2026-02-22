import { PageHeader } from '../components/PageHeader';
import Link from 'next/link';

export default function SuccessStoriesPage() {
    return (
        <main>
            <PageHeader
                title="Success Stories"
                subtitle="Celebrating the remarkable achievements of our students"
                backgroundImage="/static/images/hero4.png"
                breadcrumb="Success Stories"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Our Pride</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From academic excellence to outstanding sports achievements, our students continue to make us proud across all fields. Witness the journey of transformation and success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <div className="h-64 bg-blue-100 flex items-center justify-center relative">
                                <i className="fas fa-university text-7xl text-blue-300"></i>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">Academic Standouts</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 mb-4">
                                    Our alumni have consistently secured admissions in premier institutions globally, including IITs, NITs, and top universities in the US and UK, reflecting the strength of our Stanford Pathway curriculum.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <div className="h-64 bg-green-100 flex items-center justify-center relative">
                                <i className="fas fa-trophy text-7xl text-green-300"></i>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">Sporting Champions</h3>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-600 mb-4">
                                    Our robust sports program has nurtured national and state-level champions across disciplines such as athletics, swimming, and cricket, proving that excellence goes beyond the classroom.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-600 text-white rounded-2xl p-12 text-center shadow-xl">
                        <h3 className="text-3xl font-bold mb-4">Be Part of Our Next Success Story</h3>
                        <p className="text-lg mb-8 max-w-2xl mx-auto">
                            Join a community dedicated to fostering innovation, design thinking, and leadership.
                        </p>
                        <Link href="/admissions" className="inline-flex items-center text-orange-600 bg-white hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition transform hover:-translate-y-1">
                            Apply for Admission Today
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
