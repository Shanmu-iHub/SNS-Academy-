import { PageHeader } from '../../components/PageHeader';
import Link from 'next/link';

export default function SecondaryPage() {
    return (
        <main>
            <PageHeader
                title="Secondary & Senior Secondary"
                subtitle="Nurturing critical thinking and leadership skills (Grades 9 - 12)"
                backgroundImage="/static/images/hero2.png"
                breadcrumb="Secondary"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-8">Academic Excellence & Leadership</h2>
                    <p className="text-center text-xl text-gray-600 mb-12">
                        Our secondary curriculum focuses on in-depth understanding of subjects and comprehensive development, preparing students for board examinations and future challenges.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                            <h3 className="text-2xl font-bold mb-4 text-blue-900 border-b pb-4">Secondary (Grades 9 & 10)</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Comprehensive CBSE curriculum preparing for board exams.</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Focus on foundational concepts in Science, Mathematics, and Humanities.</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Integration of project-based learning and design thinking.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border border-orange-100">
                            <h3 className="text-2xl font-bold mb-4 text-orange-900 border-b pb-4">Senior Secondary (Grades 11 & 12)</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-orange-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Specialized streams: Science, Commerce, and Humanities.</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-orange-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Preparation for competitive exams (JEE, NEET, CLAT, etc.).</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-orange-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Career counseling and Stanford Pathway integration.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/admissions" className="inline-flex items-center bg-orange-600 text-white hover:bg-orange-700 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
                            Apply for Admission
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
