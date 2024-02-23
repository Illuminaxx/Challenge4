import React, { useState } from 'react';

import defaultImg from '../assets/product.png';
import left from '../assets/chevron-left.svg';
import { motion } from 'framer-motion';
import right from '../assets/chevron-right.svg';

interface ProductProps {
    images: string[];
    selectedColorImage: string;

}

const ProductImageGallery: React.FC<ProductProps> = ({ images, selectedColorImage }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const arrowVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 }
    };

    const imageVariants = {
        hidden: { scale: 0.85, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    };

    const goToPreviousImage = () => {
        setSelectedImageIndex((prevIndex) => prevIndex !== null ? (prevIndex - 1 + images.length) % images.length : null);
    };

    const goToNextImage = () => {
        setSelectedImageIndex((prevIndex) => prevIndex !== null ? (prevIndex + 1) % images.length : null);
    };

    const displayImage = selectedImageIndex !== null ? images[selectedImageIndex] : defaultImg || selectedColorImage;

    return (
        <div className="flex flex-col items-center">
            <div className="relative" key={selectedImageIndex || 'default'}>
                {/* Image principale - Affiche l'image par défaut ou l'image sélectionnée */}
                {/* {selectedColorImage ? (
                    <img
                        src={displayImage}
                        alt="Selected product"
                        className="object-scale-down w-[844px]  h-[469.5px]"
                    />) : (
                    <img src={selectedColorImage} className="object-scale-down w-[844px] h-[469.5px]" />
                )} */}
                {selectedColorImage ? (
                    <motion.img
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={imageVariants}
                        src={displayImage}
                        alt="Selected product"
                        className="object-scale-down w-[844px] h-[469.5px]"
                    />
                ) : (
                    <motion.img
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={imageVariants}
                        src={selectedColorImage}
                        alt="Selected product"
                        className="object-scale-down w-[844px] h-[469.5px]"
                    />
                )}
                {/* Flèches de navigation et compteur d'images */}
                {images.length > 0 && (
                    <div className="absolute bottom-[500px] left-[55%] transform translate-x-full -mb-4 z-10">
                        <div className="flex flex-col items-center w-full">
                            <div className="">
                                {selectedImageIndex !== null ? (
                                    <>
                                        <span className="text-space-cadet text-xxl leading-xl font-poppins font-bold">
                                            {String(selectedImageIndex + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-coolGray font-poppins font-semibold text-large"> / </span>
                                        <span className="text-coolGray font-poppins font-semibold text-large leading-xl">
                                            {String(images.length).padStart(2, '0')}
                                        </span>
                                    </>
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className="flex justify-center w-[128px] mt-2">
                                {selectedImageIndex !== null &&
                                    <>
                                        <motion.button
                                            variants={arrowVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            onClick={goToPreviousImage}
                                            className="p-2"
                                        >
                                            <img src={left} alt="Previous" className="h-6 w-6" />
                                        </motion.button>
                                        <div className="mx-4"></div>
                                        <motion.button
                                            variants={arrowVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            onClick={goToNextImage}
                                            className="p-2"
                                        >
                                            <img src={right} alt="Next" className="h-6 w-6" />
                                        </motion.button>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Sélecteur d'images miniatures - n'inclut pas l'image par défaut */}
            <div className="flex mt-12 space-x-2">
                {images.map((url, index) => (
                    <button
                        key={index}
                        className={`p-1 border-2 rounded-[5px] ${selectedImageIndex === index ? 'border-verdigris' : 'border-gray-400'} focus:outline-none`}
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
