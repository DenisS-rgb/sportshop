import HeroCarousel from "../components/home/HeroCarousel";
import FeaturedProduct from "../components/home/FeaturedProduct";
import BestSellers from "../components/home/BestSellers";

export default function Home() {
    return (
        <>
            <HeroCarousel />
            <FeaturedProduct />
            <BestSellers />
        </>
    );
}
