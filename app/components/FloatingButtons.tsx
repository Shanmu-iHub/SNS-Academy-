import Link from 'next/link';

export function FloatingButtons() {
    return (
        <>
            {/* Hanging Tag 1: CBSE */}
            <div className="fixed top-[22%] right-0 z-50 swing">
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white px-4 py-6 rounded-l-2xl shadow-2xl">
                    <span className="font-extrabold text-sm uppercase tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.2em' }}>CBSE</span>
                </div>
            </div>

            {/* Hanging Tag 2: Brochure */}
            <div className="fixed top-[36%] right-0 z-50 swing" style={{ animationDelay: '0.3s' }}>
                <a href="https://snsacademy.org/brochure/" target="_blank" className="bg-gradient-to-br from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-8 rounded-l-2xl shadow-2xl flex flex-col items-center space-y-3 group transition-all" rel="noreferrer">
                    <i className="fas fa-file-pdf text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                    <span className="font-extrabold text-sm uppercase tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.2em' }}>BROCHURE</span>
                </a>
            </div>

            {/* Floating CTA Button (Mobile) */}
            <div className="fixed bottom-6 left-6 z-50 lg:hidden">
                <Link href="/admissions" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center space-x-2 pulse-slow">
                    <i className="fas fa-pen-to-square"></i>
                    <span className="font-bold">Apply Now</span>
                </Link>
            </div>

            {/* Instagram Floating Icon */}
            <a href="https://www.instagram.com/snsacademy" className="instagram-float" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram">
                <i className="fab fa-instagram"></i>
            </a>

            {/* WhatsApp Floating Icon */}
            <a href="https://wa.me/919629937861" className="whatsapp-float" target="_blank" rel="noopener noreferrer" title="Chat with us on WhatsApp">
                <i className="fab fa-whatsapp"></i>
            </a>
        </>
    );
}
