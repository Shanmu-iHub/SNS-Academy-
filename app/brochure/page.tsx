import { PageHeader } from '../components/PageHeader';

export default function BrochurePage() {
    return (
        <main>
            <PageHeader
                title="Digital Brochure"
                subtitle="Download our complete prospectus and learn more about SNS Academy"
                backgroundImage="/static/images/hero.png"
                breadcrumb="Brochure"
            />

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 text-center shadow-xl">
                        <i className="fas fa-file-pdf text-8xl text-red-600 mb-8"></i>
                        <h2 className="text-4xl font-bold mb-4">SNS Academy Prospectus</h2>
                        <p className="text-xl text-gray-700 mb-8">
                            Comprehensive guide with complete information about our programs, facilities, admission process, and fees structure.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a href="https://snsacademy.org/brochure/" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                                <i className="fas fa-download mr-2"></i>
                                Download Brochure
                            </a>
                            <a href="https://snsacademy.org/brochure/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center">
                                <i className="fas fa-external-link-alt mr-2"></i>
                                View Online
                            </a>
                        </div>

                        <p className="text-sm text-gray-600">
                            For printed copies, contact us at <a href="tel:+919629937861" className="text-blue-600 hover:underline">+91 96299 37861</a>
                        </p>
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-graduation-cap text-3xl text-purple-600"></i>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Academic Programs</h3>
                            <p className="text-sm text-gray-600">Nursery to Grade XII curriculum details</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-building text-3xl text-blue-600"></i>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Facilities Tour</h3>
                            <p className="text-sm text-gray-600">Complete infrastructure overview</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-rupee-sign text-3xl text-green-600"></i>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Fee Structure</h3>
                            <p className="text-sm text-gray-600">Transparent pricing and payment options</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
