import { PageHeader } from '../../components/PageHeader';
import Link from 'next/link';

export default function PrimaryPage() {
    return (
        <main>
            <PageHeader
                title="Primary Education"
                subtitle="Exploratory learning and explicit core skills for a strong educational foundation"
                backgroundImage="/static/images/primary.png"
                breadcrumb="Primary (Grades 1 - 5)"
            />

            {/* Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Curriculum</span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">CBSE with Innovation</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                SNS Academy follows CBSE Curriculum enhanced with design thinking methodologies. Core English and Mathematics skills are explicitly taught from foundation, while the broader skills of Literacy and Numeracy are developed across all subject areas.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                All classrooms are equipped with smart boards which are used regularly to facilitate learning, making education interactive and engaging.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                            <img src="/static/images/SNS Academy Web/Primary Education.png" alt="Primary Classroom" className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Goals Box */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900">Our Primary Goals</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600 text-2xl"><i className="fas fa-globe"></i></div>
                                <h3 className="font-bold text-gray-900 mb-2">Global Citizens</h3>
                                <p className="text-sm text-gray-500">Equipping children for a globalized world</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-600 text-2xl"><i className="fas fa-graduation-cap"></i></div>
                                <h3 className="font-bold text-gray-900 mb-2">Successful Learners</h3>
                                <p className="text-sm text-gray-500">Developing independent study skills</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-4 text-orange-600 text-2xl"><i className="fas fa-hands-helping"></i></div>
                                <h3 className="font-bold text-gray-900 mb-2">Social Justice</h3>
                                <p className="text-sm text-gray-500">Fostering strong community values</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-4 text-purple-600 text-2xl"><i className="fas fa-brain"></i></div>
                                <h3 className="font-bold text-gray-900 mb-2">Critical Thinking</h3>
                                <p className="text-sm text-gray-500">Encouraging creative problem solving</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-orange-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-6">Nurture Your Child&apos;s Potential</h2>
                    <p className="text-xl mb-10 text-orange-100 font-light">
                        Experience world-class primary education with design thinking approach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/admissions" className="bg-white text-orange-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                            Apply for Admission
                        </Link>
                        <Link href="/contact" className="bg-orange-800 border border-orange-700 hover:bg-orange-700 px-10 py-4 rounded-full font-bold text-lg transition shrink-0">
                            Schedule Visit
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
