import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../../assets/img/banner_img_01.jpg";
import img2 from "../../assets/img/flexwear.png";
import img3 from "../../assets/img/powergrip.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
        title: "Alege Încălțămintea top",
        subtitle: "„Mișcă-te cu stil. T-Mork.”",
        description: "T-Mork nu e doar o pereche de pantofi sport. Este o declarație de stil, viteză și motivație...",
        discount: "-18%",
        button: "Cumpără acum",
        img: img1,
    },
    {
        title: "FlexWear - Respiră mișcarea",
        subtitle: "",
        description: "Tricou sport ușor, elastic și ultra-respirabil. Ideal pentru orice tip de antrenament intens.",
        discount: "-20%",
        button: "Cumpără acum",
        img: img2,
    },
    {
        title: "PowerGrip",
        subtitle: "Control total, fără compromisuri",
        description:
            "PowerGrip este alegerea ideală pentru cei care ridică serios. Aceste mănuși oferă aderență și protecție maximă.",
        discount: "-15%",
        button: "Cumpără acum",
        img: img3,
    },
];

// Custom arrows
const PrevArrow = (props: React.ComponentProps<"button">) => (
    <button
        {...props}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-[#59ab6e] p-4 rounded-full hover:bg-opacity-80"
    >
        <FaChevronLeft className="text-2xl" />
    </button>
);

const NextArrow = (props: React.ComponentProps<"button">) => (
    <button
        {...props}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-[#59ab6e] p-4 rounded-full hover:bg-opacity-80"
    >
        <FaChevronRight className="text-2xl" />
    </button>
);

export default function HeroCarousel() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        dots: true,
        appendDots: (dots: React.ReactNode[]) => (
            <div>
                <ul className="flex justify-center gap-2 mt-4">{dots}</ul>
            </div>
        ),
        customPaging: (i: number) => (
            <div data-index={i} className="w-3 h-1 bg-gray-300 hover:bg-[#59ab6e] transition-colors duration-300" />
        ),
    };

    return (
        <div className="relative w-full overflow-hidden bg-[#efefef] pb-10">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div className="flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto px-25 py-12 relative">
                            <span className="absolute top-6 right-6 bg-red-500 text-white px-3 py-1 rounded text-sm shadow-md z-10">
                                {slide.discount}
                            </span>
                            <div className="lg:w-1/2 text-left ">
                                <h1 className="text-4xl text-gray-900 mb-2">{slide.title}</h1>
                                {slide.subtitle && <h2 className="text-2xl text-gray-800 mb-2">{slide.subtitle}</h2>}
                                <p className="text-gray-700 max-w-100 mb-6">{slide.description}</p>
                                <a
                                    href="#"
                                    className="inline-block bg-[#59ab6e] hover:bg-green-700 text-white px-6 py-2 transition"
                                >
                                    {slide.button}
                                </a>
                            </div>
                            <div className="lg:w-1/2 flex justify-center">
                                <img
                                    src={slide.img}
                                    alt={`Slide ${index}`}
                                    className="w-full max-h-[500px] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
