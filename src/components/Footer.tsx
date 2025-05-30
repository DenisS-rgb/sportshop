import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#212934] text-white ">
            <div className="max-w-7xl mx-auto py-12 px-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Col 1 */}
                    <div>
                        <h2 className="text-2xl text-[#59ab6e] border-b border-gray-400 pb-3 mb-4">Fit cu Stil</h2>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt className="mt-1" />
                                str.Nicolae Dimo 21/1, sect.Ciocana, Chișinău
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhone />
                                <a href="tel:060945543" className="hover:underline">
                                    060945543
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope />
                                <a href="mailto:infosportshop@company.md" className="hover:underline">
                                    infosportshop@company.md
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h2 className="text-2xl text-white border-b border-gray-400 pb-3 mb-4">Produse</h2>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            {[
                                "Lux",
                                "Îmbrăcăminte sport",
                                "Încălțăminte bărbați",
                                "Încălțăminte femei",
                                "Ținute populare",
                                "Accesorii pentru sală",
                                "Încălțăminte sport",
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:underline">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h2 className="text-2xl text-white border-b border-gray-400 pb-3 mb-4">
                            Informații suplimentare
                        </h2>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            {["Acasă", "Despre noi", "Locații magazine", "Întrebări frecvente", "Contact"].map(
                                (item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:underline">
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                {/* Social + Email */}
                <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Social icons */}
                    <div className="flex space-x-4">
                        {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedin].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-[#59ab6e] transition"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>

                    {/* Email input */}
                    <div className="flex items-center border border-gray-400 rounded overflow-hidden">
                        <input
                            type="text"
                            placeholder="Email address"
                            className="bg-[#212934] text-white px-4 py-2 outline-none"
                        />
                        <button className="bg-[#59ab6e] px-4 py-2 text-white hover:bg-green-700 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-[#1d242d] text-gray-400 text-sm py-4 px-25">
                <p>
                    &copy; 2025 Company Name | Designed by{" "}
                    <a href="#" className="text-white hover:underline">
                        Sport Company
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
