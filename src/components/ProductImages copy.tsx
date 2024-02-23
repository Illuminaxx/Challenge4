import defaultImg from '../assets/product.png';
import left from '../assets/chevron-left.svg';
import { motion } from 'framer-motion';
import right from '../assets/chevron-right.svg';
import { useState } from 'react';

interface ProductProps {
    images: string[];
}

const ProductImageGallery = ({ images }: ProductProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const arrowVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 }
    };

    const goToPreviousImage = () => {
        setSelectedImageIndex((prevIndex) => prevIndex !== null ? (prevIndex - 1 + images.length) % images.length : null);
    };

    const goToNextImage = () => {
        setSelectedImageIndex((prevIndex) => prevIndex !== null ? (prevIndex + 1) % images.length : null);
    };


    const displayImage = selectedImageIndex !== null ? images[selectedImageIndex] : defaultImg;

    return (
        <div className="flex flex-col items-center">
            {/* Container pour l'image principale et le sélecteur d'images */}
            <div className="relative">
                {/* Image principale */}
                <img
                    src={displayImage}
                    alt="Selected product"
                    className="object-scale-down w-[844px] h-[469.5px]"
                />
                <img
                    src={images[selectedImageIndex]}
                    alt="Selected product"
                    className="object-scale-down w-[844px] h-[469.5px]"

                />



                <div className="absolute bottom-[500px] left-[55%] transform translate-x-full -mb-4 z-10">
                    <div className="flex flex-col items-center w-full">
                        <div className="">
                            <span className="text-space-cadet text-xxl leading-xl font-poppins font-bold">
                                {String(selectedImageIndex + 1).padStart(2, '0')}
                            </span>
                            <span> </span>
                            <span className="text-coolGray font-poppins font-semibold text-xxl leading-xl">
                                / {String(images.length).padStart(2, '0')}
                            </span>
                        </div>
                        <div className="flex justify-center w-[128px] mt-2">
                            <motion.button
                                variants={arrowVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={goToPreviousImage}
                                className="p-2"
                            >
                                <img src={left} alt="Previous" className="h-6 w-6" />
                            </motion.button>
                            <div className="mx-4 "></div>
                            <motion.button
                                variants={arrowVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={goToNextImage}
                                className="p-2"
                            >
                                <img src={right} alt="Next" className="h-6 w-6" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sélecteur d'images miniatures */}
            <div className="flex mt-12 space-x-2">
                {images.map((url, index) => (
                    <button
                        key={index}
                        className={`p-1 border-2 rounded-[5px] ${selectedImageIndex === index ? 'border-verdigris' : 'border-gray-400'
                            } focus:outline-none`}
                        onClick={() => setSelectedImageIndex(index)}
                    >
                        <img
                            src={url}
                            alt={`Product view ${index + 1}`}
                            className="h-[88px] w-[88px] object-contain rounded-[5px]"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductImageGallery;
