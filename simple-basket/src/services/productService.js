export const loadProducts = async () => {
    const response = await fetch('http://localhost:3000/data/products.json');
    return await response.json();
};

export const areProductsEqual = (product1, product2) =>
    product1
    && product2
    && product1.name === product2.name
    && product1.type === product2.type;

