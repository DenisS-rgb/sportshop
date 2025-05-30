import { FaTruck, FaExchangeAlt, FaPercent, FaUser } from "react-icons/fa";

function Services() {
    return (
        <section className="py-12 px-5 md:px-25">
            <div className="text-center pt-10 pb-6">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-5xl text-gray-900 mb-4">Serviciile Noastre</h1>
                    <p className="text-gray-700">
                        La Fit cu Stil, ne dedicăm să-ți oferim o experiență de shopping fără stres – de la livrare
                        rapidă și retururi ușoare, până la oferte exclusive și asistență 24/7. Totul ca tu să fii mereu
                        în formă, cu stil.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="group bg-white h-full shadow-xl py-10 px-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-[#59ab6e]">
                    <FaTruck className="text-[#59ab6e] text-6xl mb-4 group-hover:text-white transition-colors duration-300" />
                    <h2 className="text-lg text-gray-900 group-hover:text-white transition-colors duration-300">
                        Servicii de Livrare
                    </h2>
                </div>

                {/* Card 2 */}
                <div className="group bg-white h-full shadow-xl py-10 px-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-[#59ab6e]">
                    <FaExchangeAlt className="text-[#59ab6e] text-6xl mb-4 group-hover:text-white transition-colors duration-300" />
                    <h2 className="text-lg text-gray-900 group-hover:text-white transition-colors duration-300">
                        Livrare & Retur
                    </h2>
                </div>

                {/* Card 3 */}
                <div className="group bg-white h-full shadow-xl py-10 px-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-[#59ab6e]">
                    <FaPercent className="text-[#59ab6e] text-6xl mb-4 group-hover:text-white transition-colors duration-300" />
                    <h2 className="text-lg text-gray-900 group-hover:text-white transition-colors duration-300">
                        Promoții
                    </h2>
                </div>

                {/* Card 4 */}
                <div className="group bg-white h-full shadow-xl py-10 px-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-[#59ab6e]">
                    <FaUser className="text-[#59ab6e] text-6xl mb-4 group-hover:text-white transition-colors duration-300" />
                    <h2 className="text-lg text-gray-900 group-hover:text-white transition-colors duration-300">
                        Serviciu 24/7
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default Services;
