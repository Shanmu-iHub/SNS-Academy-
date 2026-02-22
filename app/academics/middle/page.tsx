import { PageHeader } from '../../components/PageHeader';
import Link from 'next/link';

export default function MiddleSchoolPage() {
    return (
        <main>
            <PageHeader
                title="Middle School Education"
                subtitle="Developing critical thinking, problem-solving, and collaborative skills through project-based learning"
                backgroundImage="/static/images/middle.png"
                breadcrumb="Middle School (Grades 6 - 8)"
            />

            {/* Program Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Building Stage</span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Building The Future</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Middle school focus on the Building Stage, where students master the design thinking framework and begin applying it to real-world challenges. This critical phase prepares students for advanced academic pursuits and develops entrepreneurial mindsets.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our curriculum combines rigorous CBSE academics with hands-on projects, critical reasoning, and collaborative problem-solving, ensuring students develop both knowledge and practical skills.
                            </p>
                        </div>
                        <div className="bg-blue-50 rounded-3xl p-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i className="fas fa-check text-blue-700 text-xs"></i></div>
                                    <span className="text-gray-700">Design Thinking Framework Mastery</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i className="fas fa-check text-blue-700 text-xs"></i></div>
                                    <span className="text-gray-700">Critical Thinking &amp; Problem Solving</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i className="fas fa-check text-blue-700 text-xs"></i></div>
                                    <span className="text-gray-700">Real-World Projects</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-0.5"><i className="fas fa-check text-blue-700 text-xs"></i></div>
                                    <span className="text-gray-700">Team Collaboration &amp; Communication</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Thinking Framework Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Thinking in Action</h2>
                        <p className="text-gray-600">The 5-step process our middle school students apply to every project.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                            <i className="fas fa-heart text-3xl text-orange-500 mb-3"></i>
                            <h4 className="font-bold">1. Empathize</h4>
                        </div>
                        <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                            <i className="fas fa-crosshairs text-3xl text-blue-500 mb-3"></i>
                            <h4 className="font-bold">2. Define</h4>
                        </div>
                        <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                            <i className="fas fa-lightbulb text-3xl text-yellow-500 mb-3"></i>
                            <h4 className="font-bold">3. Ideate</h4>
                        </div>
                        <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                            <i className="fas fa-tools text-3xl text-green-500 mb-3"></i>
                            <h4 className="font-bold">4. Prototype</h4>
                        </div>
                        <div className="col-span-2 md:col-span-1 bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                            <i className="fas fa-vial text-3xl text-purple-500 mb-3"></i>
                            <h4 className="font-bold">5. Test</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-6">Join Our Middle School Community</h2>
                    <p className="text-xl mb-10 text-blue-100 font-light">
                        Give your child the opportunity to develop critical thinking, creativity, and problem-solving skills.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/admissions" className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                            Apply for Admission
                        </Link>
                        <Link href="/contact" className="bg-blue-800 border border-blue-700 hover:bg-blue-700 px-10 py-4 rounded-full font-bold text-lg transition shrink-0">
                            Schedule Visit
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
