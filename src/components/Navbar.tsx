import CartModal from './cartModal';
import cart from '../assets/shopping-cart.svg';
import menu from '../assets/menu.svg';
import search from '../assets/search.svg';
import { useState } from 'react';

// Props définies avec TypeScript pour la typage strict
interface NavbarProps {
    cartCount: number;
    addToCart: () => void;
}

const PRICE_PER_ITEM = 144.99;

const Navbar = ({ cartCount }: NavbarProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Gestion de l'état du modal (ouvert ou fermé)


    const handleOpenModal = () => setIsModalOpen(true); // Fonction qui ouvre le modal
    const handleCloseModal = () => setIsModalOpen(false); // Fonction qui ferme le modal

    const total = cartCount * PRICE_PER_ITEM; // Calcul du prix total de la commande en fonction des quantités dans le panier
    
    return (
        <nav className="bg-white border-b">
            <div className="mx-auto px-4">
                <div className="flex justify-between items-center py-2">
                    <a href="#" className="flex items-center space-x-2">
                        <span className="font-normal font-cambay text-large leading-larger text-gray-700">Cozy®</span>
                    </a>

                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 px-3 py-2 rounded-md  text-small leading-base font-poppins font-semibold hover:text-veridigris transition-colors duration-150">SHOP</a>
                        <a href="#" className="text-gray-600 px-3 py-2 rounded-md  text-small leading-base font-poppins font-semibold hover:text-veridigris transition-colors duration-150">COLLECTIVE</a>
                        <a href="#" className="text-gray-600 px-3 py-2 rounded-md  text-small leading-base font-poppins font-semibold hover:text-veridigris transition-colors duration-150">DESIGNERS</a>
                        <a href="#" className="text-gray-600 px-3 py-2 rounded-md  text-small leading-base font-poppins font-semibold hover:text-veridigris transition-colors duration-150">ABOUT US</a>
                        <a href="#" className="text-gray-600 px-3 py-2 rounded-md  text-small leading-base font-poppins font-semibold hover:text-veridigris transition-colors duration-150">CONTACT</a>
                    </div>


                    <div className="flex justify-between items-center w-44">
                        <div className="flex space-x-10">
                            <button className="text-gray-600">
                                {/* Icone de menu */}
                                <img src={menu} />
                            </button>
                            <button className="text-gray-600 mr-7">
                                {/* Icone de recherche */}
                                <img src={search}  />
                            </button>
                        </div>

                        <div className="flex items-center">
                            <div className="border-l border-gray-300">
                                <button  onClick={handleOpenModal} className="text-gray-600 hover:text-verdigris relative ml-4">
                                    {/* Icone de panier */}
                                    <img src={cart} />
                                    {cartCount > 0 && (
                                        <span className="absolute right-0 bottom-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                            <span>
                                                {cartCount}
                                            </span>
                                        </span>
                                    )}
                                </button>
                                <CartModal isOpen={isModalOpen} onClose={handleCloseModal} total={total} cartCount={cartCount}   />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </nav>
    );
};

export default Navbar;
