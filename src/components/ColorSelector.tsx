import React, { useState } from 'react';

interface Color {
  name: string;
  code: string;  // Supposons que c'est l'identifiant de la couleur
  image: string; // Chemin de l'image correspondant à la couleur
}

interface ColorProps {
  colors: Color[];
  onColorSelect: (colorCode: string) => void; // Callback quand une couleur est sélectionnée
}

const ColorSelector: React.FC<ColorProps> = ({ colors, onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState<Color>(colors[0]); // Commence avec la première couleur sélectionnée

  const handleColorChange = (color: Color) => {
    setSelectedColor(color); // Met à jour la couleur locale sélectionnée
    onColorSelect(color.code); // Ici on passe l'identifiant de la couleur sélectionnée
  };

  return (
    <div className="flex space-x-3 w-little mt-l mb-l">
      {colors.map((color) => (
        <button
          key={color.name}
          aria-label={`Select ${color.name}`}
          className={`h-icon w-icon rounded-full focus:outline-none ${selectedColor.code === color.code ? 'ring-4 ring-offset-2 ring-offset-white ring-gray-300' : 'ring-1 ring-gray-200'}`}
          style={{ backgroundColor: color.code }}
          onClick={() => handleColorChange(color)}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
