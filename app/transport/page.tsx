import { PageHeader } from '../components/PageHeader';
import Link from 'next/link';

export default function TransportPage() {
    return (
        <main>
            <PageHeader
                title="School Transport"
                subtitle="Safe, secure, and comfortable commute for our students"
                backgroundImage="/static/images/hero3.png"
                breadcrumb="Transport"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-8">Transport Facilities</h2>
                    <p className="text-center text-xl text-gray-600 mb-12">
                        We offer a comprehensive fleet of buses covering major parts of the city. All our buses are equipped with GPS tracking, CCTV cameras, and trained attendants.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg text-center">
                            <i className="fas fa-bus text-5xl text-blue-600 mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">Extensive Coverage</h3>
                            <p className="text-gray-600">Routes designed to cover maximum city areas for student convenience.</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg text-center">
                            <i className="fas fa-shield-alt text-5xl text-green-600 mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">Highest Safety Standards</h3>
                            <p className="text-gray-600">Equipped with speed governors, CCTV, and first-aid kits.</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg text-center">
                            <i className="fas fa-map-marked-alt text-5xl text-purple-600 mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">Live GPS Tracking</h3>
                            <p className="text-gray-600">Real-time GPS tracking available for parents via the school portal.</p>
                        </div>
                    </div>

                    <div className="bg-orange-50 rounded-2xl p-8 text-center border border-orange-200">
                        <h3 className="text-2xl font-bold mb-4 text-orange-900">Transport Enquiry</h3>
                        <p className="text-lg text-gray-700 mb-4">
                            🚨 Check if your area is covered before admission!
                        </p>
                        <p className="text-gray-600 mb-6">
                            For specific route information, pickup/drop timings, and transport fees, please contact the school administration office.
                        </p>
                        <Link href="/contact" className="inline-flex items-center bg-orange-600 text-white hover:bg-orange-700 px-8 py-3 rounded-full font-bold shadow-md transition">
                            <i className="fas fa-phone mr-2"></i> Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
