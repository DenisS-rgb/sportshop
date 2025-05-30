import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import brand1 from "../../assets/img/brand_01.png";
import brand2 from "../../assets/img/brand_02.png";
import brand3 from "../../assets/img/brand_03.png";
import brand4 from "../../assets/img/brand_04.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [brand1, brand2, brand3, brand4, brand1, brand2, brand3, brand4];

const PrevArrow = (props: React.HTMLAttributes<HTMLButtonElement>) => (
    <button {...props} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-500 hover:text-green-600">
        <FaChevronLeft className="text-2xl" />
    </button>
);

const NextArrow = (props: React.HTMLAttributes<HTMLButtonElement>) => (
    <button
        {...props}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-500 hover:text-green-600"
    >
        <FaChevronRight className="text-2xl" />
    </button>
);

export default function Brands() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="bg-gray-100 py-12 md:px-70">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl text-gray-900 mb-4">Brandurile noastre</h1>
                <p className="max-w-2xl mx-auto mb-8 text-gray-600">
                    Colaborăm cu cele mai de încredere branduri din domeniul sportului și modei pentru a-ți oferi
                    produse de calitate, stil și performanță. Fiecare brand este ales cu grijă pentru a-ți completa
                    stilul activ și modern.
                </p>

                <div className="relative">
                    <Slider {...settings}>
                        {brands.map((brand, index) => (
                            <div key={index} className="px-4">
                                <a href="#">
                                    <img
                                        src={brand}
                                        alt={`Brand ${index + 1}`}
                                        className="mx-auto h-20 object-contain grayscale hover:grayscale-0 transition"
                                    />
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
