type ExampleCarouselImageProps = {
    text: string;
    imageSrc: string;
};

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({ text, imageSrc }) => {
    return (
        <div className="relative w-full h-full">
            <img src={imageSrc} alt={text} className="w-full h-full object-cover" />
        </div>
    );
};

export default ExampleCarouselImage;
