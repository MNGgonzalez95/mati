import React, { createContext, useState, useEffect } from 'react';
import productData from '../helper/product.json'; 

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (productData && productData.products) {
            setProducts(productData.products);
        } else {
            console.error("Los datos de los productos no están disponibles o están mal formados.");
        }
    }, []);

    const getProductById = (id) => {
        if (products.length === 0) {
            console.warn("El array de productos está vacío. Asegúrate de que los datos se carguen antes de llamar a getProductById.");
            return undefined;
        }

        const product = products.find(product => product.id === id);
        
        if (!product) {
            console.warn(`Producto con ID ${id} no encontrado.`);
            return undefined;
        }
        
        return product;
    };

    const getAllItemsFromProduct1 = () => {
        const product1 = products.find(product => product.id === 1);
        if (!product1) {
            console.warn("Producto con ID 1 no encontrado.");
            return undefined;
        }
        return product1;
    };

    return (
        <ProductContext.Provider value={{ getProductById, getAllItemsFromProduct1 }}>
            {children}
        </ProductContext.Provider>
    );
};
