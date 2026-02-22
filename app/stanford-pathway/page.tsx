import { PageHeader } from '../components/PageHeader';

export default function StanfordPathwayPage() {
    return (
        <main>
            <PageHeader
                title="Stanford Pathway"
                subtitle="A unique evolutionary methodology linking education to global standards"
                backgroundImage="/static/images/hero2.png"
                breadcrumb="Stanford Pathway"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Introduction */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Stanford Pathway?</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                The Stanford Pathway at SNS Academy is a unique educational approach that bridges the gap between structured schooling and global higher education paradigms. Inspired by the principles of Stanford University, it focuses on design thinking, innovation, and holistic student development.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Our goal is to nurture students who are not only academically proficient but also possess the critical thinking, problem-solving, and leadership skills required to excel in the 21st century. We cultivate an environment that encourages curiosity, resilience, and a lifelong love for learning.
                            </p>
                            <ul className="space-y-3 mt-6 text-gray-700">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Design Thinking Integration across all subjects</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Focus on Innovation and Practical Application</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                    <span>Global Perspectives and Collaborative Learning</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <img src="/static/images/SNS Academy Web/Colla Work.png" alt="Collaborative Work" className="w-full rounded-xl shadow-xl hover:shadow-2xl transition duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-xl"></div>
                        </div>
                    </div>

                    {/* Key Pillars */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Pillars of Our Pathway</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:-translate-y-2 transition duration-300">
                                <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center text-2xl mb-6 shadow-md">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Design Thinking</h3>
                                <p className="text-gray-600">
                                    Empathize, Define, Ideate, Prototype, and Test. Students learn to approach problems methodically and creatively, developing solutions that have a real-world impact.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-purple-100 hover:-translate-y-2 transition duration-300">
                                <div className="w-16 h-16 bg-purple-600 text-white rounded-xl flex items-center justify-center text-2xl mb-6 shadow-md">
                                    <i className="fas fa-globe-americas"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Citizenship</h3>
                                <p className="text-gray-600">
                                    Fostering an understanding of global issues, cultural diversity, and international collaboration. We prepare students to be responsible members of the global community.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg border border-green-100 hover:-translate-y-2 transition duration-300">
                                <div className="w-16 h-16 bg-green-600 text-white rounded-xl flex items-center justify-center text-2xl mb-6 shadow-md">
                                    <i className="fas fa-rocket"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation &amp; Entrepreneurship</h3>
                                <p className="text-gray-600">
                                    Encouraging a mindset of innovation. Students are given the tools and platforms to turn their ideas into viable projects, instilling an entrepreneurial spirit early on.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
