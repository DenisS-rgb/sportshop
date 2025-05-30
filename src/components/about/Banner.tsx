import img1 from "../../assets/img/about-hero.svg";

function Banner() {
    return (
        <section className="bg-[#59ab6e] py-12">
            <div className="container mx-auto px-5 md:px-25">
                <div className="flex flex-col md:flex-row items-center gap-8 py-8">
                    <div className="md:w-2/3 text-white">
                        <h1 className="text-4xl font-semibold mb-4">1. Scurtă Introducere</h1>
                        <p className="mb-6">
                            „La Fit cu Stil, credem că sportul nu este doar o activitate fizică, ci un mod de viață. Am
                            creat acest magazin online pentru a inspira oamenii să se simtă bine în pielea lor, să fie
                            activi și... să o facă cu stil!”
                        </p>
                        <h1 className="text-4xl font-semibold mb-4">2. Misiunea Noastră</h1>
                        <p className="mb-6">
                            „Misiunea noastră este să oferim produse sportive de calitate, care combină confortul,
                            funcționalitatea și designul modern. Fiecare articol din colecția noastră este ales cu grijă
                            pentru a te susține în drumul tău spre o viață mai sănătoasă.”
                        </p>
                        <h1 className="text-4xl font-semibold mb-4">3. De ce să alegi Fit cu Stil?</h1>
                        <p className="mb-2">✔️ Produse testate și recomandate de sportivi</p>
                        <p className="mb-2">✔️ Design modern și atrăgător</p>
                        <p className="mb-2">✔️ Livrare rapidă & suport client dedicat</p>
                    </div>
                    <div className="w-1/1 md:w-1/3">
                        <img src={img1} alt="About Hero" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
