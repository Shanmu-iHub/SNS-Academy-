import { PageHeader } from '../components/PageHeader';

export default function AdmissionsPage() {
    return (
        <main>
            <PageHeader
                title="Admissions 2026-27"
                subtitle="Begin Your Child's Journey to Excellence"
                backgroundImage="/static/images/hero.png"
                breadcrumb="Admissions"
            />

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">Admission Process</h2>
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                                <span className="text-2xl font-bold text-orange-600">1</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Register</h3>
                                <p className="text-gray-700">Visit school on any working day between 9:00 AM to 5:00 PM and register for your child&apos;s admission.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                                <span className="text-2xl font-bold text-orange-600">2</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Assessment</h3>
                                <p className="text-gray-700">Written assessment in English, Mathematics, Language, and General Knowledge according to School&apos;s syllabi.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                                <span className="text-2xl font-bold text-green-600">3</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Interview</h3>
                                <p className="text-gray-700">Interview to determine alignment of parental views with school philosophy and interpret student scores.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                                <span className="text-2xl font-bold text-orange-600">4</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Selection</h3>
                                <p className="text-gray-700">Results compiled on merit by Admissions Committee. Seats offered in order of merit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Admission and Enquiry Form</h3>

                        {/* Bitrix24 Form with Custom Styling */}
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            /* Bitrix Form Custom Styles */
                            .b24-form-wrapper {
                                background: transparent !important;
                                border: none !important;
                                padding: 0 !important;
                                box-shadow: none !important;
                            }
                            
                            .b24-form-header {
                                display: none !important;
                            }
                            
                            .b24-form-field {
                                margin-bottom: 24px !important;
                            }
                            
                            /* Remove Bitrix auto separators */
                            .b24-form-separator,
                            .b24-form-field-separator,
                            .b24-form-field::before,
                            .b24-form-field::after {
                                display: none !important;
                                content: none !important;
                                height: 0 !important;
                                border: none !important;
                            }
                            
                            /* Hide labels visually but keep for Bitrix logic */
                            .b24-form-control-label {
                                position: absolute !important;
                                opacity: 0 !important;
                                pointer-events: none !important;
                            }
                            
                            /* Input styling */
                            .b24-form-control {
                                width: 100% !important;
                                background: #ffffff !important;
                                border: 1px solid #dfe3e8 !important;
                                border-radius: 14px !important;
                                padding: 16px 18px !important;
                                font-size: 15px !important;
                                font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                                color: #111 !important;
                                box-shadow: none !important;
                            }
                            
                            .b24-form-control::placeholder {
                                color: #9aa0a6 !important;
                                font-weight: 400;
                            }
                            
                            .b24-form-control:focus {
                                border-color: #111 !important;
                                outline: none !important;
                            }
                            
                            /* Dropdown styling */
                            .b24-form-dropdown {
                                border-radius: 14px !important;
                                border: 1px solid #fcfcfc !important;
                                box-shadow: 0 12px 28px rgba(0,0,0,0.12) !important;
                            }
                            
                            .b24-form-dropdown-item {
                                padding: 14px 18px !important;
                                font-size: 15px !important;
                                font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                            }
                            
                            .b24-form-dropdown-item:hover {
                                background: #f5f6f8 !important;
                            }
                            
                            /* Submit button */
                            .b24-form-btn {
                                width: 100% !important;
                                margin-top: 28px !important;
                                padding: 18px !important;
                                border-radius: 16px !important;
                                background: #e94a28 !important;
                                color: #000 !important;
                                font-size: 18px !important;
                                font-weight: 600 !important;
                                border: none !important;
                                font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
                                cursor: pointer !important;
                                transition: all 0.3s ease !important;
                            }
                            
                            .b24-form-btn:hover {
                                background: #d43d1f !important;
                                transform: translateY(-1px);
                            }
                            
                            /* Footer text */
                            .b24-form-sign {
                                margin-top: 20px !important;
                                font-size: 13px !important;
                                color: #9aa0a6 !important;
                            }
                        `}} />

                        <script data-b24-form="inline/18/m4ecvi" data-skip-moving="true" dangerouslySetInnerHTML={{
                            __html: `
                        (function(w,d,u){
                            var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
                        })(window,document,'https://cdn.bitrix24.com/b11752903/crm/form/loader_18.js');
                        `}} />

                        <script dangerouslySetInnerHTML={{
                            __html: `
                        /* Placeholder + Asterisk Fix */
                        setTimeout(function () {
                            document.querySelectorAll('.b24-form-field').forEach(function (field) {
                                const label = field.querySelector('.b24-form-control-label');
                                const input = field.querySelector('.b24-form-control');
                                
                                if (label && input) {
                                    let text = label.textContent.replace(/\\s*\\*$/, '').trim();
                                    let required = label.textContent.includes('*');
                                    input.placeholder = required ? text + ' *' : text;
                                }
                            });
                        }, 500);
                        `}} />
                    </div>
                </div>
            </section>
        </main>
    );
}
