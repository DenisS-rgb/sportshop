import img1 from "../../assets/img/category_img_01.jpg";
import img2 from "../../assets/img/category_img_02.jpg";
import img3 from "../../assets/img/category_img_03.jpg";

function BestSellers() {
    return (
        <section className="max-w-7xl mx-auto py-12 px-4">
            <div className="text-center pt-6">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-6xl text-gray-900 mb-4">Top Selecții pentru un Stil Activ</h1>
                    <p className="text-gray-700">
                        Am selectat cele mai îndrăgite produse care îmbină performanța cu stilul. Fie că ești în sală,
                        pe stradă sau în natură – fii activ, dar rămâi tu însuți.
                    </p>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center p-5">
                    <a href="#">
                        <img
                            src={img1}
                            alt="Watches"
                            className="w-85 h-85 rounded-full object-cover border-1 border-gray-200"
                        />
                    </a>
                    <h5 className="mt-4 mb-3 text-xl text-center">Watches</h5>
                    <a href="#" className="bg-[#59ab6e] text-white px-4 py-2 rounded hover:bg-green-700 transition">
                        Cumpără acum
                    </a>
                </div>

                <div className="flex flex-col items-center p-5">
                    <a href="#">
                        <img
                            src={img2}
                            alt="Shoes"
                            className="w-85 h-85 rounded-full object-cover border-1 border-gray-200"
                        />
                    </a>
                    <h5 className="mt-4 mb-3 text-xl text-center">Shoes</h5>
                    <a href="#" className="bg-[#59ab6e] text-white px-4 py-2 rounded hover:bg-green-700 transition">
                        Cumpără acum
                    </a>
                </div>

                <div className="flex flex-col items-center p-5">
                    <a href="#">
                        <img
                            src={img3}
                            alt="Accessories"
                            className="w-85 h-85 rounded-full object-cover border-1 border-gray-200"
                        />
                    </a>
                    <h5 className="mt-4 mb-3 text-xl text-center">Accessories</h5>
                    <a href="#" className="bg-[#59ab6e] text-white px-4 py-2 rounded hover:bg-green-700 transition">
                        Cumpără acum
                    </a>
                </div>
            </div>
        </section>
    );
}

export default BestSellers;
