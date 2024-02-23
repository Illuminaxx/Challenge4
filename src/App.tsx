import { Toaster, toast } from 'sonner'

import Breadcrumb from './components/Breadcrumb';
import ColorSelector from './components/ColorSelector';
import HeartBayoux from './assets/heartBayoux.svg';
import HeartBayouxFilled from './assets/heartBayouxFilled.svg';
import HeartCotton from './assets/heartCotton.svg';
import HeartCottonFilled from './assets/heartCottonFilled.svg';
import HeartGray from './assets/heartGray.svg';
import HeartGrayFilled from './assets/heartGrayFilled.svg';
import HeartHydrangea from './assets/heartHydrangea.svg';
import HeartHydrangeaFilled from './assets/heartHydrangeaFilled.svg';
import Navbar from './components/Navbar';
import ProductImages from './components/ProductImages';
import Rating from './components/rating/Rating';
import back from './assets/back.svg';
import fb from './assets/facebook.svg';
import heart from './assets/heart.svg';
import heartFilled from './assets/heart copy.svg';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';
import image4 from './assets/4.jpg';
import image5 from './assets/5.png';
import imageBayoux1 from './assets/1-bayoux.png';
import imageBayoux2 from './assets/2-bayoux.png';
import imageBayoux3 from './assets/3-bayoux.png';
import imageBayoux4 from './assets/4-bayoux.png';
import imageBayoux5 from './assets/5-bayoux.png';
import imageCotton1 from './assets/1-cotton.png';
import imageCotton2 from './assets/2-cotton.png';
import imageCotton3 from './assets/3-cotton.png';
import imageCotton4 from './assets/4-cotton.png';
import imageCotton5 from './assets/5-cotton.png';
import imageGray33_1 from './assets/1-gray33.png';
import imageGray33_2 from './assets/2-gray33.png';
import imageGray33_3 from './assets/3-gray33.png';
import imageGray33_4 from './assets/4-gray33.png';
import imageGray33_5 from './assets/5-gray33.png';
import imageHydrangea_1 from './assets/1-hydrangea.png';
import imageHydrangea_2 from './assets/2-hydrangea.png';
import imageHydrangea_3 from './assets/3-hydrangea.png';
import imageHydrangea_4 from './assets/4-hydrangea.png';
import imageHydrangea_5 from './assets/5-hydrangea.png';
import instagram from './assets/instagram.svg';
import pinterest from './assets/pinterest.svg';
import twitter from './assets/twitter.svg';
import { useState } from 'react';

type WishlistIconMapping = {
  [key: string]: { empty: string; filled: string };
};

function App() {
  const [quantity, setQuantity] = useState(1);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedColorImage, setSelectedColorImage] = useState<string>(image1);
  const [selectorImages, setSelectorImages] = useState<string[]>([image1, image2, image3, image4, image5]);
  const [selectedColorCode, setSelectedColorCode] = useState('#3AA39F');


  const breadcrumbs = [
    { title: 'Chair', href: 'chair' },
    { title: 'Meryl Lounge Chair', href: '' }
  ];

  const imagesCotton = [imageCotton1, imageCotton2, imageCotton3, imageCotton4, imageCotton5];
  const imagesBayoux = [imageBayoux1, imageBayoux2, imageBayoux3, imageBayoux4, imageBayoux5];
  const imagesGray = [imageGray33_1, imageGray33_2, imageGray33_3, imageGray33_4, imageGray33_5];
  const imagesHydrangea = [imageHydrangea_1, imageHydrangea_2, imageHydrangea_3, imageHydrangea_4, imageHydrangea_5];

  const colorToImageMap: { [key: string]: string } = {
    '#C1BDB3': imagesCotton[0],
    '#58737D': imagesBayoux[0],
    '#545454': imagesGray[0],
    '#CBA5A5': imagesHydrangea[0]
  };

  const colorToSelectorImagesMap: { [key: string]: string[] } = {
    '#C1BDB3': imagesCotton,
    '#58737D': imagesBayoux,
    '#545454': imagesGray,
    '#CBA5A5': imagesHydrangea,
  };


  const handleColorSelect = (colorCode: string) => {
    const mainImage = colorToImageMap[colorCode];
    const selectorImages = colorToSelectorImagesMap[colorCode];
    
    if (mainImage && selectorImages) {
      setSelectedColorImage(mainImage); // Met à jour l'image principale
      setSelectorImages(selectorImages); // Met à jour les images miniatures
      setSelectedColorCode(colorCode); // Met à jour le code de couleur sélectionné
    } else {
      console.error(`Aucune image associée au code couleur ${colorCode}`);
    }
  };



  const colors = [
    { name: 'Cotton Seed', code: '#C1BDB3', image: imagesCotton[0] },
    { name: 'Blue Bayoux', code: '#58737D', image: imagesBayoux[0] },
    { name: 'Gray33', code: '#545454', image: imagesGray[0] },
    { name: 'Hydrangea Bouquet', code: '#CBA5A5', image: imagesHydrangea[0] },
  ];



  const wishlistIcons: WishlistIconMapping = {
    '#C1BDB3': { empty: HeartCotton, filled: HeartCottonFilled },
    '#58737D': { empty: HeartBayoux, filled: HeartBayouxFilled },
    '#545454': { empty: HeartGray, filled: HeartGrayFilled },
    '#CBA5A5': { empty: HeartHydrangea, filled: HeartHydrangeaFilled },
    'default': { empty: heart, filled: heartFilled }
  };

  const getCurrentWishlistIcon = () => {
    const icons = wishlistIcons[selectedColorCode as keyof WishlistIconMapping] || wishlistIcons['default']; // 'default' est un fallback
    return isAddedToWishlist ? icons.filled : icons.empty;
  };
  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => {
      if (prevQuantity + amount < 1) return 1;
      return prevQuantity + amount;
    });
  };

  const toggleWishlist = () => {
    const newState = !isAddedToWishlist;
    setIsAddedToWishlist(newState);

    if (newState) {
      toast('Le produit à été ajouté à la wishlist');
    } else {
      toast('Produit retiré de la wishlist.');
    }
  };

  const addToCart = (): void => {
    setCartCount(quantity);
    toast.success('Produit ajouté au panier.');
  };


  return (
    <div className="max-w-[1440px]">
      <header className="bg-gray-100">
        <Navbar cartCount={cartCount} addToCart={addToCart} />
      </header>
      <button className="flex items-center text-sm text-gray-600 hover:text-gray-800 mt-xl ml-xl">
        <img src={back} alt="" />
      </button>
      <Breadcrumb crumbs={breadcrumbs} />
      <main>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex-1 ml-xl mt-xlarge-top">
            <h1 className="text-xl text-space-cadet font-bold font-poppins leading-xlarge">Meryl Lounge Chair</h1>
            <p className="text-large font font-poppins font-semibold leading-large tracking-0 mt-medium">$149.99</p>
            <p className="text-medium leading-med font-poppins font-normal mt-large w-[440px]">The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.</p>
            <div className="flex items-center mt-3 gap-12">
              <ColorSelector colors={colors} onColorSelect={handleColorSelect} />
              <Rating />
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex items-center justify-around border border-coolGray rounded-little w-med h-med">
                <button className='font-poppins font-semibold' onClick={() => handleQuantityChange(-1)}>-</button>
                <span className='font-poppins font-med-large font-semibold leading-med tracking-2'>{quantity}</span>
                <button className='font-poppins font-semibold' onClick={() => handleQuantityChange(1)}>+</button>
              </div>
              <button onClick={addToCart} className="items-center text-white  rounded-little w-large h-med" style={{ backgroundColor: selectedColorCode, color: 'white' }}>
                <span className="font-poppins font-semibold text-medium leading-tall tracking-0.1">Add to Cart</span>
              </button>
            </div>
            <p className="w-[430px] mt-l font-poppins font-normal leading-med text-medium">Free 3-5 day shipping  •  Tool-free assembly  •  30-day trial</p>
            <div className="flex flex-row justify-start items-end gap-4 mt-xlarge">
              <button onClick={toggleWishlist} className="flex  gap-4 items-end">
                <img src={getCurrentWishlistIcon()} alt="Wishlist" />
                <span className="font-poppins font-semibold text-medium leading-tall tracking-0.1" style={{ color: selectedColorCode }}>
                  {isAddedToWishlist ? 'Ajouté à la wishlist' : 'Add to wishlist'}
                </span>
              </button>
              <div className="flex flex-row gap-4 ml-[141px]">
                <img src={fb} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
                <img src={instagram} alt="" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <ProductImages images={selectorImages} selectedColorImage={selectedColorImage} />
          </div>
        </div>
      </main>
      <Toaster position="top-center" closeButton />
    </div>
  );
}

export default App;
