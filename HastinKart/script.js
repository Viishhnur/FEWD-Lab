// Sample product data
const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a sample product.',
      price: 19.99,
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Another sample product.',
      price: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'A third sample product.',
      price: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1547586796-bc9ae4655493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'A fourth sample product.',
      price: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1548369937-4757996f9277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  // Function to generate product cards
  function generateProductCards(products) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear existing content

    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <div class="product-card-content">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p class="price">$${product.price.toFixed(2)}</p>
          <button class="button">Add to Cart</button>
        </div>
      `;

      productGrid.appendChild(productCard);
    });
  }

  // Call the function to generate product cards when the page loads
  generateProductCards(products);
