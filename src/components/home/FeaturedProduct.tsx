import { FaStar, FaRegStar } from "react-icons/fa";
import img1 from "../../assets/img/feature_prod_01.jpg";
import img2 from "../../assets/img/feature_prod_02.jpg";
import img3 from "../../assets/img/feature_prod_03.jpg";

function FeaturedProduct() {
    return (
        <section className="bg-gray-100 py-12 px-25">
            <div className="container mx-auto px-4">
                <div className="text-center py-6">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-5xl text-gray-900 mb-4">Echipat pentru Performanță</h1>
                        <p className="text-gray-700">🎯 „Fă mișcare. Arată bine. Trăiește Fit.”</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="mb-4">
                        <div className="h-full bg-white border-1 border-gray-200 rounded-[5px]">
                            <a href="shop-single.html">
                                <img
                                    src={img1}
                                    alt="SmartFit Torch"
                                    className="w-full h-65 object-cover rounded-t-[5px]"
                                />
                            </a>
                            <div className="p-4">
                                <ul className="flex list-none items-center justify-between py-2 text-sm mb-2">
                                    <li className="flex space-x-1">
                                        <FaStar className="text-yellow-300" />
                                        <FaStar className="text-yellow-300" />
                                        <FaStar className="text-yellow-300" />
                                        <FaRegStar className="text-gray-300" />
                                        <FaRegStar className="text-gray-300" />
                                    </li>
                                    <li className="text-gray-400">$240.00</li>
                                </ul>
                                <a href="shop-single.html" className="text-xl text-gray-900">
                                    SmartFit Torch
                                </a>
                                <p className="text-gray-700 mt-2">
                                    Lumină puternică pentru antrenamentele de seară sau plimbările de dimineață.
                                    Compactă, modernă și mereu pregătită.
                                </p>
                                <p className="text-sm text-gray-400 py-3">Reviews (24)</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="h-full bg-white border-1 border-gray-200 rounded-[5px]">
                            <a href="shop-single.html">
                                <img src={img2} alt="WatchX Pro" className="w-full h-65 object-cover rounded-t-[5px]" />
                            </a>
                            <div className="p-4">
                                <ul className="flex list-none items-center justify-between py-2 text-sm mb-2">
                                    <li className="flex space-x-1">
                                        <FaStar className="text-yellow-300" />
                                        <FaStar className="text-yellow-300" />
                                        <FaStar className="text-yellow-300" />
                                        <FaRegStar className="text-gray-300" />
                                        <FaRegStar className="text-gray-300" />
                                    </li>
                                    <li className="text-gray-400">$480.00</li>
                                </ul>
                                <a href="shop-single.html" className="text-xl text-gray-900">
                                    WatchX Pro
                                </a>
                                <p className="text-gray-700 mt-2">
                                    Ceas smart cu stil sportiv. Monitorizează-ți pașii, pulsul și obiectivele zilnice cu
                                    tehnologie de ultimă oră.
                                </p>
                                <p className="text-sm text-gray-400 py-3">Reviews (48)</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="h-full bg-white border-1 border-gray-200 rounded-[5px]">
                            <a href="shop-single.html">
                                <img
                                    src={img3}
                                    alt="RetroMotion Cam"
                                    className="w-full h-65 object-cover rounded-t-[5px]"
                                />
                            </a>
                            <div className="p-4">
                                <ul className="flex list-none items-center justify-between py-2 text-sm mb-2">
                                    <li className="flex space-x-1">
                                        <FaStar className="text-yellow-300" />
                                        <FaStar className="text-yellow-300" />
                                        <FaStar className="text-yellow-300" />
                                        <FaStar className="text-yellow-300" />
                                        <FaStar className="text-yellow-300" />
                                    </li>
                                    <li className="text-gray-400">$360.00</li>
                                </ul>
                                <a href="shop-single.html" className="text-xl text-gray-900">
                                    RetroMotion Cam
                                </a>
                                <p className="text-gray-700 mt-2">
                                    Suprinde-ți progresul cu o cameră old-school, dar cu stil. Ideală pentru un vibe
                                    vintage la sală sau în parc.
                                </p>
                                <p className="text-sm text-gray-400 py-3">Reviews (74)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProduct;
