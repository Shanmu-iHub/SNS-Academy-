import { PageHeader } from '../components/PageHeader';

export default function ContactPage() {
    return (
        <main>
            <PageHeader
                title="Contact Us"
                subtitle="We'd love to hear from you. Visit us or get in touch today!"
                backgroundImage="/static/images/hero.png"
                breadcrumb="Contact Us"
            />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <i className="fas fa-map-marker-alt text-3xl text-orange-600 mr-4"></i>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Address</h3>
                                        <p className="text-gray-700">SNS Academy,<br />Thudiyalur - Saravanampatti Road,<br />Vellakinar Post,<br />Coimbatore - 641029.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-phone text-3xl text-orange-600 mr-4"></i>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Phone</h3>
                                        <p className="text-gray-700">Admission: +91 96299 37861<br />Landline: +91 75300 93730</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-envelope text-3xl text-green-600 mr-4"></i>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Email</h3>
                                        <p className="text-gray-700">General: info@snsacademy.org<br />Career: job@snsgroups.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-clock text-3xl text-orange-600 mr-4"></i>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                                        <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8">
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
                </div>
            </section>
        </main>
    );
}
