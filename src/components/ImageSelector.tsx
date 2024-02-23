import left from '../assets/chevron-left.svg';
import { motion } from 'framer-motion';
import right from '../assets/chevron-right.svg';
import { useState } from 'react';

interface ImageSelectorProps {
    images: string[];
  }

const ImageSelector: React.FC<ImageSelectorProps> = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const goToPrevious = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="flex items-center justify-center transform -left-2/4 translate-x-1/2 space-x-4 mt-6">
            <button onClick={goToPrevious}>
                <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                   <img src={left} />
                </motion.span>
            </button>
            <div>
                <span className="text-lg font-semibold">
                    {String(selectedImageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
            </div>
            <button onClick={goToNext}>
                <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img src={right} />
                </motion.span>
            </button>
        </div>
    );
};


export default ImageSelector;