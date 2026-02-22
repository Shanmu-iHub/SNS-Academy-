import { PageHeader } from '../../components/PageHeader';
import Link from 'next/link';

export default function PrePrimaryPage() {
    return (
        <main>
            <PageHeader
                title="Pre-Primary Education"
                subtitle="Building strong foundations through play-based learning, curiosity, and early childhood development"
                backgroundImage="/static/images/pre-primary.png"
                breadcrumb="Pre-Primary (Ages 2.5 - 5 Years)"
            />

            {/* Program Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Philosophy</span>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Discovery Through Play</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Every parent appreciates that these early years in education are a time of curiosity, discovery, and learning. Our Preschool curriculum is inquiry and play-based, with a strong focus on developing early Literacy and Numeracy skills.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Great emphasis is placed on developing early reading and writing skills, so that each child is given a &quot;head start&quot; in their education. The wonderful world of stories, nursery rhymes, songs, role-play, and drama within a language-rich learning environment stimulates children&apos;s curiosity.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                            <img src="/static/images/SNS Academy Web/Pre-Primary Education.png" alt="Happy Kindergarten Students" className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Age Groups */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Pre-Primary Programs</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tailored learning experiences for every stage of early childhood.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Nursery */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-baby text-3xl text-purple-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nursery (2.5-3.5 years)</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                Our youngest students enjoy a hands-on, fun curriculum with opportunities to think, speak, and listen in various situations.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li className="flex items-center"><i className="fas fa-check text-purple-500 mr-2"></i>Communication &amp; language</li>
                                <li className="flex items-center"><i className="fas fa-check text-purple-500 mr-2"></i>Indoor &amp; outdoor learning</li>
                                <li className="flex items-center"><i className="fas fa-check text-purple-500 mr-2"></i>Motor skills development</li>
                            </ul>
                        </div>

                        {/* LKG */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-child-reaching text-3xl text-pink-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lower KG (3.5-4.5 years)</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                More structured day with emphasis on early English and Mathematics skills, while maintaining a balanced program.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li className="flex items-center"><i className="fas fa-check text-pink-500 mr-2"></i>Phonics &amp; early reading</li>
                                <li className="flex items-center"><i className="fas fa-check text-pink-500 mr-2"></i>Basic mathematics concepts</li>
                                <li className="flex items-center"><i className="fas fa-check text-pink-500 mr-2"></i>Creative arts &amp; design</li>
                            </ul>
                        </div>

                        {/* UKG */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-child text-3xl text-blue-600"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Upper KG (4.5-5.5 years)</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                Preparing for formal schooling with advanced literacy and numeracy skills, critical thinking, and creativity.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-500">
                                <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i>Blending &amp; segmentation</li>
                                <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i>Early writing skills</li>
                                <li className="flex items-center"><i className="fas fa-check text-blue-500 mr-2"></i>School readiness preparation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Programs */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Literacy Program */}
                        <div className="bg-blue-50 rounded-3xl p-10">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                                    <i className="fas fa-book-open text-2xl text-blue-600"></i>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Literacy Programme</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                We place great emphasis on developing early Literacy skills to provide your child with a &apos;head start&apos; in their education. Through well-established literacy programmes, children are taught fundamental skills essential for early reading and writing success.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Fun and interactive introduction to alphabetic sounds and phonics</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Letter recognition and sound association</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-blue-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Early reading and writing development</span>
                                </li>
                            </ul>
                        </div>

                        {/* Numeracy Program */}
                        <div className="bg-green-50 rounded-3xl p-10">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                                    <i className="fas fa-calculator text-2xl text-green-600"></i>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Numeracy Programme</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Our Numeracy programme draws on the young child&apos;s natural mathematical interest and encourages numerical proficiency. Children participate in meaningful and fun activities that build their initial understanding.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Number recognition and counting</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Shapes, patterns, and spatial awareness</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
                                    <span className="text-gray-700">Real-life mathematical experiences</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-purple-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-6">Give Your Child the Best Start</h2>
                    <p className="text-xl mb-10 text-purple-100 font-light">
                        Join SNS Academy&apos;s Pre-Primary program and watch your child thrive.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/admissions" className="bg-white text-purple-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shrink-0">
                            Apply for Admission
                        </Link>
                        <Link href="/contact" className="bg-purple-800 border border-purple-700 hover:bg-purple-700 px-10 py-4 rounded-full font-bold text-lg transition shrink-0">
                            Schedule Visit
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
