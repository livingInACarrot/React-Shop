import React, { useState } from 'react';
import './styles.css';
import { IProduct } from '/src/entities/IProduct.ts';
import products from '/src/data/products.json';
import Product from '../Card/Card.tsx';
import ModalWindow from '../ModalWindow/ModalWindow.tsx';
import { Categories } from '/src/entities/Categories.ts';

var products_filtered = products;

export function ApplyFilters(
  title: string,
  onStock: boolean,
  category: string
) {
  var result = products;

  // Фильтр по названию
  if (title != '') {
    const pattern = new RegExp(`\\b${title}\\b`, 'i');
    result = result.filter((product: { name: string }) =>
      pattern.test(product.name)
    );
  }

  // В наличии
  if (onStock) {
    result = result.filter(
      (product: { quantity: number }) => product.quantity > 0
    );
  }

  // Категория соответствует
  if (category != '') {
    result = result.filter(
      (product: { category: Categories }) => product.category == category
    );
  }
  products_filtered = result;
}

const ProductList: React.FC = () => {
  const [isModalWindowOpen, setModalWindowOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const openModalWindow = (product: IProduct) => {
    setSelectedProduct(product);
    setModalWindowOpen(true);
  };

  const closeModalWindow = () => {
    setModalWindowOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="card-field">
      <div className="card-container">
        {products_filtered.map((product: IProduct) => (
          <Product
            key={product.id}
            {...product}
            onClick={() => openModalWindow(product)}
          />
        ))}
      </div>
      <ModalWindow
        isOpen={isModalWindowOpen}
        onClose={closeModalWindow}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductList;
