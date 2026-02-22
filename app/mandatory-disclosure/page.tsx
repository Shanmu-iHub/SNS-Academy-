import { PageHeader } from '../components/PageHeader';

export default function MandatoryDisclosurePage() {
    return (
        <main>
            <PageHeader
                title="Mandatory Public Disclosure"
                subtitle="Transparency and compliance as per CBSE guidelines"
                backgroundImage="/static/images/hero2.png"
                breadcrumb="Mandatory Disclosure"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* General Information */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold bg-blue-900 text-white p-4 rounded-t-lg">A. GENERAL INFORMATION</h2>
                        <div className="border border-gray-200 rounded-b-lg overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <tbody>
                                    <tr className="border-b bg-gray-50">
                                        <th className="p-4 w-16 text-center border-r">Sl. No.</th>
                                        <th className="p-4 w-1/3 border-r">Information</th>
                                        <td className="p-4 font-semibold">Details</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 text-center border-r">1</td>
                                        <td className="p-4 border-r">NAME OF THE SCHOOL</td>
                                        <td className="p-4">SNS ACADEMY (A FINGERPRINT PUBLIC SCHOOL)</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-4 text-center border-r">2</td>
                                        <td className="p-4 border-r">AFFILIATION NO. (IF APPLICABLE)</td>
                                        <td className="p-4">1930600</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 text-center border-r">3</td>
                                        <td className="p-4 border-r">SCHOOL CODE (IF APPLICABLE)</td>
                                        <td className="p-4">55610</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-4 text-center border-r">4</td>
                                        <td className="p-4 border-r">COMPLETE ADDRESS WITH PIN CODE</td>
                                        <td className="p-4">SNS Kalvi Nagar, Sathy Main Road, Kurumbapalayam, Coimbatore – 641107. Tamil Nadu</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 text-center border-r">5</td>
                                        <td className="p-4 border-r">PRINCIPAL NAME</td>
                                        <td className="p-4">D LAKSHMINARAYANASWAMY</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-4 text-center border-r">6</td>
                                        <td className="p-4 border-r">PRINCIPAL QUALIFICATION</td>
                                        <td className="p-4">M.Sc., B.Ed.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 text-center border-r">7</td>
                                        <td className="p-4 border-r">SCHOOL EMAIL ID</td>
                                        <td className="p-4">
                                            <a href="mailto:office@snsacademy.org" className="text-blue-600 hover:underline">office@snsacademy.org</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-center border-r">8</td>
                                        <td className="p-4 border-r">CONTACT DETAILS (LANDLINE/MOBILE)</td>
                                        <td className="p-4">
                                            <a href="tel:+919629937861" className="text-blue-600 hover:underline">+91 96299 37861</a>, <a href="tel:04222666244" className="text-blue-600 hover:underline">0422-2666244</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Documents and Information */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold bg-blue-900 text-white p-4 rounded-t-lg">B. DOCUMENTS AND INFORMATION</h2>
                        <div className="border border-gray-200 rounded-b-lg overflow-hidden flex justify-center p-8 bg-gray-50">
                            <a href="/static/pdf/B_Documents_and_Information.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition">
                                <i className="fas fa-file-pdf mr-2 text-xl"></i>
                                View Documents &amp; Information
                            </a>
                        </div>
                    </div>

                    {/* Result and Academics */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold bg-blue-900 text-white p-4 rounded-t-lg">C. RESULT AND ACADEMICS</h2>
                        <div className="border border-gray-200 rounded-b-lg overflow-hidden flex justify-center p-8 bg-gray-50">
                            <a href="/static/pdf/C_Results_and_Academics.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition">
                                <i className="fas fa-file-pdf mr-2 text-xl"></i>
                                View Results &amp; Academics
                            </a>
                        </div>
                    </div>

                    {/* Staff Teaching */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold bg-blue-900 text-white p-4 rounded-t-lg">D. STAFF (TEACHING)</h2>
                        <div className="border border-gray-200 rounded-b-lg overflow-hidden flex justify-center p-8 bg-gray-50">
                            <a href="/static/pdf/D_Staff_Teaching.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition">
                                <i className="fas fa-file-pdf mr-2 text-xl"></i>
                                View Staff Details
                            </a>
                        </div>
                    </div>

                    {/* School Infrastructure */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold bg-blue-900 text-white p-4 rounded-t-lg">E. SCHOOL INFRASTRUCTURE</h2>
                        <div className="border border-gray-200 rounded-b-lg overflow-hidden flex justify-center p-8 bg-gray-50">
                            <a href="/static/pdf/E_School_Infrastructure.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition">
                                <i className="fas fa-file-pdf mr-2 text-xl"></i>
                                View Infrastructure Details
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
