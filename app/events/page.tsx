import { PageHeader } from '../components/PageHeader';
import Link from 'next/link';

export default function EventsPage() {
    return (
        <main>
            <PageHeader
                title="Events & Celebrations"
                subtitle="Experience the vibrant life at SNS Academy through our memorable events, celebrations, and activities"
                backgroundImage="/static/images/SNS Academy Web/Events.webp"
                breadcrumb="Events"
            />

            {/* Instagram-Style Gallery */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Event 1: Pongal Celebration */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                            <div className="absolute inset-0">
                                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" alt="Pongal Celebration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </div>
                            {/* Always visible title */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-white font-bold text-2xl">Pongal Celebration</h3>
                            </div>
                            {/* Hover overlay with full details */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-bold text-2xl mb-2">Pongal Celebration</h3>
                                    <p className="text-white/90 text-sm mb-3">உங்கள் இல்லங்களிலும் மகிழ்ச்சியும், மனங்களில் நன்றியுணர்வும், வாழ்வில் வளமும் நிறையட்டும். பாரம்பரியமும் பண்பாடும் போற்றப்படும் இந்த நன்னாளில், புதிய நம்பிக்கைகளும் நல்ல தொடக்கங்களும் மலரட்டும். SNS கல்வி நிறுவனங்கள் சார்பாக இனிய பொங்கல் திருநாள் நல்வாழ்த்துகள்!</p>
                                    <div className="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                        <span><i className="fas fa-calendar mr-1"></i> Jan 2026</span>
                                        <span><i className="fas fa-star mr-1"></i> Festival</span>
                                    </div>
                                    <a href="https://www.instagram.com/p/DTgwcNEk1QH/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                        <i className="fas fa-arrow-right mr-2"></i> Read More
                                    </a>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">Festival</span>
                            </div>
                        </div>

                        {/* Event 2: Green Day Celebration */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                            <div className="absolute inset-0">
                                <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80" alt="Green Day Celebration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-white font-bold text-2xl">Green Day Celebration</h3>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-bold text-2xl mb-2">Green Day Celebration</h3>
                                    <p className="text-white/90 text-sm mb-3">Our little learners of SNS Academy had stepped out of their classrooms and into nature as part of Green Day celebrations. Taken to the lush lawn areas, children were introduced to the importance of greenery, plants, and caring for our environment. A beautiful day filled with curiosity, smiles, and meaningful lessons—planting the seeds of environmental responsibility from an early age.</p>
                                    <div className="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                        <span><i className="fas fa-calendar mr-1"></i> Jan 2026</span>
                                        <span><i className="fas fa-leaf mr-1"></i> Environment</span>
                                    </div>
                                    <a href="https://www.instagram.com/p/DTUFJ3ID1Ys/?img_index=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                        <i className="fas fa-arrow-right mr-2"></i> Read More
                                    </a>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">Environment</span>
                            </div>
                        </div>

                        {/* Event 3: Little Chef */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                            <div className="absolute inset-0">
                                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" alt="Little Chef Activity" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-white font-bold text-2xl">Little Chef</h3>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-bold text-2xl mb-2">Little Chef</h3>
                                    <p className="text-white/90 text-sm mb-3">Our kindergarten students of SNS Academy, joyfully stepped into the role of little chefs during a fun-filled Salad Making Activity. With colourful vegetables, curious minds, and happy smiles, children explored healthy eating while engaging in hands-on culinary learning. This delightful activity encouraged creativity, teamwork, and awareness about nutritious food—making learning both tasty and meaningful!</p>
                                    <div className="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                        <span><i className="fas fa-calendar mr-1"></i> Jan 2026</span>
                                        <span><i className="fas fa-utensils mr-1"></i> Kindergarten</span>
                                    </div>
                                    <a href="https://www.instagram.com/p/DTJlHSKExme/?img_index=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                        <i className="fas fa-arrow-right mr-2"></i> Read More
                                    </a>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold">Activity</span>
                            </div>
                        </div>

                        {/* Event 4: Happy New Year */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                            <div className="absolute inset-0">
                                <img src="https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80" alt="Happy New Year" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-white font-bold text-2xl">Happy New Year</h3>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-bold text-2xl mb-2">Happy New Year</h3>
                                    <p className="text-white/90 text-sm mb-3">Happy New Year from SNS Institutions! &quot;Empowering Minds. Shaping Futures. Welcome to New Beginnings.&quot; Wishing everyone a year filled with growth, excellence, and positivity.</p>
                                    <div className="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                        <span><i className="fas fa-calendar mr-1"></i> Jan 2026</span>
                                        <span><i className="fas fa-star mr-1"></i> Celebration</span>
                                    </div>
                                    <a href="https://www.instagram.com/p/DS8i4tzEyKO/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                        <i className="fas fa-arrow-right mr-2"></i> Read More
                                    </a>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">Celebration</span>
                            </div>
                        </div>

                        {/* Event 5: Christmas Celebration */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                            <div className="absolute inset-0">
                                <img src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?w=800&q=80" alt="Christmas Celebration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-white font-bold text-2xl">Christmas Celebration</h3>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-bold text-2xl mb-2">Christmas Celebration</h3>
                                    <p className="text-white/90 text-sm mb-3">May this festive season fill your hearts with joy, peace, and goodwill. Wishing everyone a Christmas filled with love, happiness, and new beginnings. Warm Christmas wishes from SNS Institutions!!!</p>
                                    <div className="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                        <span><i className="fas fa-calendar mr-1"></i> Dec 2025</span>
                                        <span><i className="fas fa-gift mr-1"></i> Festival</span>
                                    </div>
                                    <a href="https://www.instagram.com/p/DSqjISvkzr3/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                        <i className="fas fa-arrow-right mr-2"></i> Read More
                                    </a>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">Festival</span>
                            </div>
                        </div>

                        {/* Event 6: Educational Tour */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                            <div className="absolute inset-0">
                                <img src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&q=80" alt="Educational Tour" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-white font-bold text-2xl">Educational Tour</h3>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div>
                                    <h3 className="text-white font-bold text-2xl mb-2">Educational Tour</h3>
                                    <p className="text-white/90 text-sm mb-3">Our Mid Wing students of SNS Academy enjoyed an enriching educational tour to Thekkady, where learning met nature and adventure. From exploring the Periyar Wildlife Sanctuary to understanding biodiversity and conservation firsthand, the experience went beyond textbooks. Filled with teamwork, joy, and unforgettable memories!</p>
                                    <div className="flex items-center text-white/80 text-xs space-x-4 mb-3">
                                        <span><i className="fas fa-calendar mr-1"></i> Dec 2025</span>
                                        <span><i className="fas fa-hiking mr-1"></i> Thekkady</span>
                                    </div>
                                    <a href="https://www.instagram.com/p/DSd5rGBEwpi/?img_index=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white px-4 py-2 rounded-lg text-xs font-semibold transition border border-white/30">
                                        <i className="fas fa-arrow-right mr-2"></i> Read More
                                    </a>
                                </div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">Educational Tour</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Be Part of Our Vibrant Community</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Join SNS Academy and create unforgettable memories through our diverse events and celebrations!
                    </p>
                    <Link href="/admissions" className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition">
                        <i className="fas fa-pen-to-square mr-2"></i>
                        Apply for Admission
                    </Link>
                </div>
            </section>
        </main>
    );
}
