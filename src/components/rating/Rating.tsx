import starEmpty from '../../assets/StarEmpty.svg';
import starFull from '../../assets/StarFull.svg';
import starHalf from '../../assets/StarHalf.svg';
import { useState } from 'react';

const RatingComponent = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const getStarImage = (index: number) => {
        if (hover) {
            return hover >= index ? starFull : starEmpty;
        } else {
            // Note entière inférieure à l'index actuel
            if (Math.floor(rating) >= index) {
                return starFull;
            // Gérer les demi-étoiles
            } else if (Math.ceil(rating) >= index && rating % 1 >= 0.5 && rating < index) {
                return starHalf;
            } else {
                return starEmpty;
            }
        }
    };

    return (
        <div className="flex items-center">
            <div className="flex">
                {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1;
                    return (
                        <button
                            key={ratingValue}
                            className="p-1"
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setRating(ratingValue)}
                        >
                            <img
                                src={getStarImage(ratingValue)}
                                alt={`star ${ratingValue}`}
                                className="w-[14px] h-[14px] mr-1"
                            />
                        </button>
                    );
                })}
            </div>
            <span className="ml-2 text-lg font-semibold">{rating.toFixed(1)} / 5.0  <span className="text-gray-400">(566)</span> </span>
        </div>
    );
};

export default RatingComponent;
