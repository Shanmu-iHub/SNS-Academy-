import { PageHeader } from '../components/PageHeader';
import Link from 'next/link';

export default function InnovationPage() {
    return (
        <main>
            <PageHeader
                title="SNS Innovation Hub"
                subtitle="Powered by India's First Patented GenAI Design Thinking Framework | India's Y-Combinator for Schools"
                backgroundImage="/static/images/pillar_industry.jpg"
                breadcrumb="Innovation Hub"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">About SNS iHub</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                SNS iHub is an initiative by SNS Institutions to foster startups by providing a prototyping space immersed in an ambience of creativity and our <strong className="text-orange-600">patented GenAI-powered Design Thinking framework</strong>.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                The center helps identify societal/industrial needs and solve them using our AI-enhanced design thinking approach, mentored by experts from academia and industry.
                            </p>
                        </div>
                        <div className="bg-purple-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6">RADICAL Technologies</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start"><i className="fas fa-robot text-orange-600 mr-3 mt-1"></i><span>Robotics &amp; Automation</span></li>
                                <li className="flex items-start"><i className="fas fa-vr-cardboard text-orange-600 mr-3 mt-1"></i><span>AR/VR Technology</span></li>
                                <li className="flex items-start"><i className="fas fa-brain text-orange-600 mr-3 mt-1"></i><span>Data Science/AI/ML</span></li>
                                <li className="flex items-start"><i className="fas fa-network-wired text-orange-600 mr-3 mt-1"></i><span>IoT/Cybersecurity</span></li>
                                <li className="flex items-start"><i className="fas fa-wifi text-orange-600 mr-3 mt-1"></i><span>Communication Tech</span></li>
                                <li className="flex items-start"><i className="fas fa-cube text-orange-600 mr-3 mt-1"></i><span>Additive Manufacturing</span></li>
                                <li className="flex items-start"><i className="fas fa-code text-orange-600 mr-3 mt-1"></i><span>Low Code/No Code</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SHAAARP Industry Verticals */}
            <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">SHAAARP Industry Verticals</h2>
                        <p className="text-xl text-gray-600">Focus areas for innovation and startup development</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-city text-3xl text-orange-600"></i>
                            </div>
                            <h3 className="font-bold text-lg text-center mb-3">Smart City &amp; Manufacturing</h3>
                            <p className="text-sm text-gray-600 text-center">IoT, automation, smart infrastructure</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-heartbeat text-3xl text-red-600"></i>
                            </div>
                            <h3 className="font-bold text-lg text-center mb-3">Healthcare</h3>
                            <p className="text-sm text-gray-600 text-center">AI diagnostics, telemedicine, digital health</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-seedling text-3xl text-green-600"></i>
                            </div>
                            <h3 className="font-bold text-lg text-center mb-3">Agriculture &amp; Food</h3>
                            <p className="text-sm text-gray-600 text-center">Precision farming, food tech, supply chain</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-shopping-cart text-3xl text-orange-600"></i>
                            </div>
                            <h3 className="font-bold text-lg text-center mb-3">Retail FMCG</h3>
                            <p className="text-sm text-gray-600 text-center">E-commerce, consumer goods, retail analytics</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-car text-3xl text-orange-600"></i>
                            </div>
                            <h3 className="font-bold text-lg text-center mb-3">Automotive &amp; Aerospace</h3>
                            <p className="text-sm text-gray-600 text-center">Autonomous vehicles, aerospace engineering</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-shield-alt text-3xl text-indigo-600"></i>
                            </div>
                            <h3 className="font-bold text-lg text-center mb-3">Defense, Government, Legal</h3>
                            <p className="text-sm text-gray-600 text-center">Security, compliance, legal tech</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-building text-3xl text-pink-600"></i>
                            </div>
                            <h3 className="font-bold text-lg text-center mb-3">Real Estate</h3>
                            <p className="text-sm text-gray-600 text-center">PropTech, smart buildings, analytics</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-futbol text-3xl text-yellow-600"></i>
                            </div>
                            <h3 className="font-bold text-lg text-center mb-3">Sports, Media &amp; Entertainment</h3>
                            <p className="text-sm text-gray-600 text-center">Content creation, gaming, sports tech</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-university text-3xl text-teal-600"></i>
                            </div>
                            <h3 className="font-bold text-lg text-center mb-3">BFSI - Fintech/Banking</h3>
                            <p className="text-sm text-gray-600 text-center">Financial services, banking technology</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-bolt text-3xl text-cyan-600"></i>
                            </div>
                            <h3 className="font-bold text-lg text-center mb-3">Power, Oil, Energy</h3>
                            <p className="text-sm text-gray-600 text-center">Energy management, renewables, utilities</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1 col-span-full md:col-span-1 lg:col-start-3">
                            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-user-circle text-3xl text-rose-600"></i>
                            </div>
                            <h3 className="font-bold text-lg text-center mb-3">Personal Services</h3>
                            <p className="text-sm text-gray-600 text-center">EdTech, Dating/Marriage, HR Tech</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">Innovation Labs</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4">I-TECH Labs</h3>
                            <p className="text-gray-700">Inter-disciplinary research space for AR/VR, AI, IoT, Robotics, and 3D printing innovations.</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4">BOT Lab</h3>
                            <p className="text-gray-700">Coimbatore&apos;s first Center-of-Excellence in Robotics Process Automation with Automation Anywhere.</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold mb-4">Piston Factory</h3>
                            <p className="text-gray-700">Real-time project workspace and vehicle fabrication for national competitions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mango Big7 Clubs */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Mango Big7 Clubs</h2>
                        <p className="text-xl text-gray-600 mb-2">Student clubs focused on industry leaders and career pathways</p>
                        <p className="text-lg text-orange-600 font-semibold">Exposure to world&apos;s leading companies and consulting firms</p>
                    </div>

                    {/* Tech Giants */}
                    <div className="mb-12">
                        <h3 className="text-3xl font-bold text-center mb-8 text-orange-600">Tech Giants Club</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {/* Meta */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">Meta</h4>
                                <p className="text-xs text-gray-600 mt-1">Social Media &amp; VR</p>
                            </div>

                            {/* Microsoft */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M0 0h11.377v11.372H0V0zm12.623 0H24v11.372H12.623V0zM0 12.623h11.377V24H0V12.623zm12.623 0H24V24H12.623V12.623z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">Microsoft</h4>
                                <p className="text-xs text-gray-600 mt-1">Cloud &amp; Software</p>
                            </div>

                            {/* Apple */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">Apple</h4>
                                <p className="text-xs text-gray-600 mt-1">Hardware &amp; Design</p>
                            </div>

                            {/* Amazon */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.548.41-3.156.615-4.83.615-3.268 0-6.306-.756-9.116-2.268-.44-.236-.81-.46-1.11-.67-.18-.124-.3-.22-.36-.29-.09-.11-.12-.21-.07-.31zm23.696-3.017c-.225-.183-.506-.244-.84-.244-.334 0-.664.061-.99.183-.327.122-.61.244-.85.366-.24.122-.45.214-.63.275-.18.061-.33.092-.45.092-.12 0-.21-.031-.27-.092-.06-.061-.09-.153-.09-.275 0-.122.03-.244.09-.366.06-.122.15-.244.27-.366.12-.122.27-.244.45-.366.18-.122.39-.214.63-.275.24-.061.51-.092.81-.092.3 0 .6.031.9.092.3.061.57.153.81.275.24.122.45.244.63.366.18.122.33.244.45.366.12.122.21.244.27.366.06.122.09.244.09.366 0 .122-.03.214-.09.275-.06.061-.15.092-.27.092-.12 0-.27-.031-.45-.092-.18-.061-.39-.153-.63-.275-.24-.122-.52-.244-.84-.366-.32-.122-.65-.183-.99-.183z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">Amazon</h4>
                                <p className="text-xs text-gray-600 mt-1">E-commerce &amp; AWS</p>
                            </div>

                            {/* Netflix */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c2.873-.41 5.398-.82 8.489-.82V9.63L9.191 1.05z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">Netflix</h4>
                                <p className="text-xs text-gray-600 mt-1">Streaming &amp; Content</p>
                            </div>

                            {/* NVIDIA */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M7.764 0c-.473 0-.857.384-.857.857v22.286c0 .473.384.857.857.857h8.472c.473 0 .857-.384.857-.857V.857c0-.473-.384-.857-.857-.857H7.764zm4.236 2.571c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">NVIDIA</h4>
                                <p className="text-xs text-gray-600 mt-1">GPUs &amp; AI Chips</p>
                            </div>

                            {/* Google */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">Google</h4>
                                <p className="text-xs text-gray-600 mt-1">Search &amp; AI</p>
                            </div>

                            {/* Oracle */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-red-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">Oracle</h4>
                                <p className="text-xs text-gray-600 mt-1">Database &amp; Cloud</p>
                            </div>

                            {/* Tesla */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 5.362L8.16 15h7.68L12 5.362zM12 0l8.485 21H3.515L12 0z" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">Tesla</h4>
                                <p className="text-xs text-gray-600 mt-1">EV &amp; Innovation</p>
                            </div>
                        </div>
                    </div>

                    {/* Consulting & Finance */}
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-indigo-100">
                        <h3 className="text-3xl font-bold text-center mb-8 text-indigo-600">Consulting &amp; Finance Club</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {/* KPMG */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/KPMG_blue_logo.svg/500px-KPMG_blue_logo.svg.png" alt="KPMG" className="w-full h-full object-contain" />
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">KPMG</h4>
                                <p className="text-xs text-gray-600 mt-1">Big 4 Audit</p>
                            </div>

                            {/* EY */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg" alt="EY" className="w-full h-full object-contain" />
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">EY</h4>
                                <p className="text-xs text-gray-600 mt-1">Big 4 Advisory</p>
                            </div>

                            {/* Deloitte */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" alt="Deloitte" className="w-full h-full object-contain" />
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">Deloitte</h4>
                                <p className="text-xs text-gray-600 mt-1">Big 4 Consulting</p>
                            </div>

                            {/* JP Morgan */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Logo_2008_1.svg" alt="JP Morgan" className="w-full h-full object-contain" />
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">JP Morgan</h4>
                                <p className="text-xs text-gray-600 mt-1">Investment Banking</p>
                            </div>

                            {/* PwC */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/PwC_Logo_2010.svg" alt="PwC" className="w-full h-full object-contain" />
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">PwC</h4>
                                <p className="text-xs text-gray-600 mt-1">Big 4 Tax &amp; Advisory</p>
                            </div>

                            {/* BCG */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Boston_Consulting_Group_2020_logo.svg" alt="BCG" className="w-full h-full object-contain" />
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">BCG</h4>
                                <p className="text-xs text-gray-600 mt-1">Strategy Consulting</p>
                            </div>

                            {/* Bain */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Bain_%26_Company_logo.svg" alt="Bain" className="w-full h-full object-contain" />
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">Bain</h4>
                                <p className="text-xs text-gray-600 mt-1">Management Consulting</p>
                            </div>

                            {/* McKinsey */}
                            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg p-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/McKinsey_%26_Company_Script_Mark_Logo.svg" alt="McKinsey" className="w-full h-full object-contain" />
                                </div>
                                <h4 className="font-bold text-lg text-gray-900">McKinsey</h4>
                                <p className="text-xs text-gray-600 mt-1">Top-tier Consulting</p>
                            </div>
                        </div>
                    </div>

                    {/* Club Benefits */}
                    <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold text-center mb-6">What Students Learn</h3>
                        <div className="grid md:grid-cols-4 gap-6 text-center">
                            <div>
                                <i className="fas fa-users-cog text-4xl mb-3"></i>
                                <h4 className="font-bold mb-2">Industry Insights</h4>
                                <p className="text-sm opacity-90">Deep dive into business models</p>
                            </div>
                            <div>
                                <i className="fas fa-project-diagram text-4xl mb-3"></i>
                                <h4 className="font-bold mb-2">Case Studies</h4>
                                <p className="text-sm opacity-90">Real-world problem solving</p>
                            </div>
                            <div>
                                <i className="fas fa-handshake text-4xl mb-3"></i>
                                <h4 className="font-bold mb-2">Networking</h4>
                                <p className="text-sm opacity-90">Connect with alumni &amp; professionals</p>
                            </div>
                            <div>
                                <i className="fas fa-graduation-cap text-4xl mb-3"></i>
                                <h4 className="font-bold mb-2">Career Prep</h4>
                                <p className="text-sm opacity-90">Internship &amp; placement guidance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
