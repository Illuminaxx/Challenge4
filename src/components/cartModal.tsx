import React from 'react';
import product from '../assets/product.png';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    total: number;
    cartCount: number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, total, cartCount }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white p-4 rounded w-1/2 h-1/2 overflow-auto relative">
          <button onClick={onClose} className="font-poppins font-semibold bg-coolGray rounded-little px-5 text-white absolute top-0 right-0 m-2">X</button>
            <h2 className="font-poppins font-bold text-center leading-tall text-medium border-b border-slate-400 mb-3">Votre panier</h2>
            <table className="table-auto w-full">
              <thead>
                <tr className="text-left">
                  <th>Produit</th>
                  <th>Quantité</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td className="py-2">
                      <div className="flex items-center gap-4">
                        <img src={product} alt="" className="w-20 h-16 rounded" />
                        Meryl Lounge Chair
                      </div>
                    </td>
                    <td>{cartCount}</td>
                    <td>149.99 $</td>
                  </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}  className="text-right font-bold">Total :</td>
                  <td>{total} $</td>
                </tr>
              </tfoot>
            </table>
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={onClose} className="font-poppins font-semibold bg-veridigris rounded-little px-5 py-2 text-white">Acheter</button>
            </div>
          </div>
        </div>
      );
};

export default Modal;