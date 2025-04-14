	
    // --- Utility Functions ---
    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
      }
  
      function setCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
      }
  
      function updateCartCount() {
        const cart = getCart();
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => el.textContent = cart.length);
      }
  
      // --- Product Data (Sample) ---
      const products = [
        {
          id: 1,
          name: 'Apple AirPods Pro 2',
          description: 'Wireless earbuds with active noise cancellation and high-fidelity sound.',
          price: 249.99,
          imageUrl: 'https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg',
          category: 'electronics',
          rating: 5
        },
        {
          id: 2,
          name: 'UGG Classic Mini II Boot',
          description: 'Iconic sheepskin boot offering comfort and warmth.',
          price: 149.95,
          imageUrl: 'https://th.bing.com/th/id/OIP.GkQAXWSwcKA9dq5FIsZMtAHaHa?w=89&h=89&c=1&rs=1&qlt=90&r=0&pid=InlineBlock',
          category: 'fashion',
          rating: 4
        },
        {
          id: 3,
          name: 'Bissell Little Green Multi-Purpose Cleaner',
          description: 'Compact carpet and upholstery cleaner for tackling tough spots and stains.',
          price: 123.59,
          imageUrl: 'https://th.bing.com/th/id/OIP.01g7GVUKg8kHLTud70hvegHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7',
          category: 'home',
          rating: 4
        },
        {
          id: 4,
          name: 'Apple Watch Series 8',
          description: 'Advanced smartwatch with health monitoring and fitness tracking features.',
          price: 399.00,
          imageUrl: 'https://th.bing.com/th/id/OIP.pMWZBr0ynCGU6Fz_7oVpEwHaEK?w=313&h=180&c=7&r=0&o=5&pid=1.7',
          category: 'electronics',
          rating: 5
        },
        {
          id: 5,
          name: 'Levi\'s 501 Original Fit Jeans',
          description: 'Classic straight-leg jeans with a timeless design.',
          price: 59.99,
          imageUrl: 'https://m.media-amazon.com/images/I/81wL6vK8HPL._AC_UL1500_.jpg',
          category: 'fashion',
          rating: 4
        },
        {
          id: 6,
          name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
          description: 'Versatile kitchen appliance that functions as a pressure cooker, slow cooker, rice cooker, and more.',
          price: 89.00,
          imageUrl: 'https://m.media-amazon.com/images/I/61aK9X4vO-L._AC_SL1500_.jpg',
          category: 'home',
          rating: 5
        },
        {
          id: 7,
          name: 'Sony WH-1000XM4 Wireless Noise-Canceling Headphones',
          description: 'Industry-leading noise-canceling headphones with superior sound quality.',
          price: 348.00,
          imageUrl: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg',
          category: 'electronics',
          rating: 5
        },
        {
          id: 8,
          name: 'Ray-Ban Aviator Classic Sunglasses',
          description: 'Timeless aviator sunglasses with a sleek design.',
          price: 154.00,
          imageUrl: 'https://m.media-amazon.com/images/I/51oL6qY3F-L._AC_UL1500_.jpg',
          category: 'fashion',
          rating: 4
        },
        {
          id: 9,
          name: 'Dyson V11 Torque Drive Cordless Vacuum Cleaner',
          description: 'High-performance cordless vacuum with powerful suction and intelligent cleaning modes.',
          price: 599.99,
          imageUrl: 'https://m.media-amazon.com/images/I/71rJ6yZ5QSL._AC_SL1500_.jpg',
          category: 'home',
          rating: 5
        },
        {
          id: 10,
          name: 'Samsung Galaxy S21 Ultra',
          description: 'Flagship smartphone with a 108MP camera and 120Hz AMOLED display.',
          price: 1199.99,
          imageUrl: 'https://m.media-amazon.com/images/I/91dLTREdG1L._AC_SL1500_.jpg',
          category: 'electronics',
          rating: 5
        },
        {
          id: 11,
          name: 'Nike Air Max 270',
          description: 'Stylish sneakers with a large Air unit for maximum cushioning.',
          price: 150.00,
          imageUrl: 'https://m.media-amazon.com/images/I/71g6YkDQ2ML._AC_UL1500_.jpg',
          category: 'fashion',
          rating: 4
        },
        {
          id: 12,
          name: 'KitchenAid Artisan Series 5-Quart Stand Mixer',
          description: 'Durable stand mixer with a 5-quart stainless steel bowl and 10-speed settings.',
          price: 429.99,
          imageUrl: 'https://m.media-amazon.com/images/I/81O4A9xK5-L._AC_SL1500_.jpg',
          category: 'home',
          rating: 5
        },
        {
          id: 13,
          name: 'Bose QuietComfort 35 II Wireless Bluetooth Headphones',
          description: 'Comfortable, noise-canceling headphones with Alexa voice control.',
          price: 299.00,
          imageUrl: 'https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_SL1500_.jpg',
          category: 'electronics',
          rating: 5
        },
        {
          id: 14,
          name: 'Patagonia Nano Puff Jacket',
          description: 'Lightweight, insulated jacket made from recycled materials.',
          price: 199.00,
          imageUrl: 'https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL1500_.jpg',
          category: 'fashion',
          rating: 4
        },
        {
          id: 15,
          name: 'iRobot Roomba i7+ (7550) Robot Vacuum',
          description: 'Self-emptying robot vacuum with smart mapping and powerful suction.',
          price: 799.99,
          imageUrl: 'https://m.media-amazon.com/images/I/71gZkO3F5LL._AC_SL1500_.jpg',
          category: 'home',
          rating: 5
        },
        {
          id: 16,
          name: 'Canon EOS R5 Mirrorless Camera',
          description: 'Professional-grade mirrorless camera with 45MP full-frame sensor and 8K video recording.',
          price: 3899.00,
          imageUrl: 'https://m.media-amazon.com/images/I/81HN5+f6ZfL._AC_SL1500_.jpg',
          category: 'electronics',
          rating: 5
        }]
       
      
  
      // --- Homepage ---
      document.addEventListener('DOMContentLoaded', () => {
        updateCartCount();
        // Newsletter Modal (Example)
        const newsletterModal = new bootstrap.Modal(document.getElementById('newsletterModal'));
        setTimeout(() => {
          newsletterModal.show();
        }, 5000); // Show after 5 seconds
  
        // Best Sellers (Homepage)
        const bestSellersContainer = document.getElementById('bestSellersContainer');
        if (bestSellersContainer) {
          products.slice(0, 4).forEach(product => {
            bestSellersContainer.innerHTML += `
              <div class="col-md-3">
                <div class="card product-card">
                  <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                  <div class="card-body product-card-body">
                    <h5 class="card-title product-card-title">${product.name}</h5>
                    <p class="card-text product-card-price">$${product.price.toFixed(2)}</p>
                    <a href="product.html?id=${product.id}" class="btn btn-primary">View Details</a>
                  </div>
                </div>
              </div>
            `;
          });
        }
  
        // Scroll to Top Button
        const scrollToTopButton = document.getElementById('scrollToTopButton');
        if (scrollToTopButton) {
          window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              scrollToTopButton.style.display = 'block';
            } else {
              scrollToTopButton.style.display = 'none';
            }
          });
  
          scrollToTopButton.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          });
        }
      });
  
      // --- Shop Page ---
      if (window.location.pathname === '/shop.html') {
        document.addEventListener('DOMContentLoaded', () => {
          updateCartCount();
          const productListContainer = document.getElementById('productListContainer');
          const paginationContainer = document.getElementById('paginationContainer');
          const categoryCheckboxes = document.querySelectorAll('input[name="categoryFilter"]');
          const priceRadios = document.querySelectorAll('input[name="priceFilter"]');
          const ratingRadios = document.querySelectorAll('input[name="ratingFilter"]');
          const sortDropdown = document.querySelector('#sortDropdown');
  
          let currentPage = 1;
          const productsPerPage = 9;
          let filteredProducts = [...products]; // Start with all products
  
          // --- Product Card Generation ---
          function generateProductCards(productsToDisplay) {
            productListContainer.innerHTML = '';
            productsToDisplay.forEach(product => {
              productListContainer.innerHTML += `
                <div class="col-md-4">
                  <div class="card product-card">
                    <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                    <div class="card-body product-card-body">
                      <h5 class="card-title product-card-title">${product.name}</h5>
                      <p class="card-text product-card-price">$${product.price.toFixed(2)}</p>
                      <a href="product.html?id=${product.id}" class="btn btn-primary">View Details</a>
                    </div>
                  </div>
                </div>
              `;
            });
          }
  
          // --- Pagination ---
          function generatePagination(totalProducts) {
            const totalPages = Math.ceil(totalProducts / productsPerPage);
            paginationContainer.innerHTML = '';
  
            if (totalPages <= 1) return;
  
            for (let i = 1; i <= totalPages; i++) {
              const li = document.createElement('li');
              li.classList.add('page-item');
              if (i === currentPage) {
                li.classList.add('active');
              }
              li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
              li.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = i;
                updateProductList();
              });
              paginationContainer.appendChild(li);
            }
          }
  
          // --- Update Product List (Filters, Sorting, Pagination) ---
          function updateProductList() {
            // Apply Filters
            filteredProducts = products.filter(product => {
              let categoryMatch = true;
              let priceMatch = true;
              let ratingMatch = true;
  
              // Category Filter
              const selectedCategories = Array.from(categoryCheckboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);
              if (selectedCategories.length > 0) {
                categoryMatch = selectedCategories.includes(product.category);
              }
  
              // Price Filter
              const selectedPrice = Array.from(priceRadios).find(radio => radio.checked)?.value;
              if (selectedPrice) {
                switch (selectedPrice) {
                  case 'under50':
                    priceMatch = product.price < 50;
                    break;
                  case '50to100':
                    priceMatch = product.price >= 50 && product.price <= 100;
                    break;
                  case 'over100':
                    priceMatch = product.price > 100;
                    break;
                }
              }
  
              // Rating Filter
              const selectedRating = Array.from(ratingRadios).find(radio => radio.checked)?.value;
              if (selectedRating) {
                ratingMatch = product.rating >= parseInt(selectedRating);
              }
  
              return categoryMatch && priceMatch && ratingMatch;
            });
  
            // Apply Sorting
            const sortValue = sortDropdown.querySelector('.dropdown-item.active')?.dataset.sort;
            if (sortValue) {
              filteredProducts.sort((a, b) => {
                if (sortValue === 'price-asc') return a.price - b.price;
                if (sortValue === 'price-desc') return b.price - a.price;
                if (sortValue === 'popularity') return b.rating - a.rating; // Assuming rating as popularity
                return 0;
              });
            }
  
            // Pagination
            const startIndex = (currentPage - 1) * productsPerPage;
            const endIndex = startIndex + productsPerPage;
            const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
  
            generateProductCards(productsToDisplay);
            generatePagination(filteredProducts.length);
          }
  
          // --- Event Listeners for Filters and Sorting ---
          categoryCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
              currentPage = 1; // Reset to first page on filter change
              updateProductList();
            });
          });
  
          priceRadios.forEach(radio => {
            radio.addEventListener('change', () => {
              currentPage = 1; // Reset to first page on filter change
              updateProductList();
            });
          });
  
          ratingRadios.forEach(radio => {
            radio.addEventListener('change', () => {
              currentPage = 1; // Reset to first page on filter change
              updateProductList();
            });
          });
  
          sortDropdown.addEventListener('click', (e) => {
            if (e.target.classList.contains('dropdown-item')) {
              e.preventDefault();
              // Remove active class from all dropdown items
              sortDropdown.querySelectorAll('.dropdown-item').forEach(item => item.classList.remove('active'));
              // Add active class to the clicked item
              e.target.classList.add('active');
              currentPage = 1; // Reset to first page on sort change
              updateProductList();
            }
          });
  
          // Initial Load
          updateProductList();
        });
      }
  
      // --- Product Details Page ---
      if (window.location.pathname === '/product.html') {
        document.addEventListener('DOMContentLoaded', () => {
          updateCartCount();
          const urlParams = new URLSearchParams(window.location.search);
          const productId = parseInt(urlParams.get('id'));
  
          const product = products.find(p => p.id === productId);
  
          if (!product) {
            // Handle product not found (e.g., redirect to 404 page)
            document.querySelector('.product-details .container').innerHTML = '<p>Product not found.</p>';
            return;
          }
  
          // --- Populate Product Details ---
          document.getElementById('productTitle').textContent = product.name;
          document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
          document.getElementById('productDescription').textContent = product.description;
  
          // Rating Stars
          const ratingContainer = document.getElementById('productRating');
          for (let i = 1; i <= 5; i++) {
            const star = document.createElement('i');
            star.classList.add('fas', 'fa-star');
            if (i <= product.rating) {
              star.classList.add('active'); // Add 'active' class for filled stars (optional)
            }
            ratingContainer.appendChild(star);
          }
  
          // Image Carousel
          const carouselInner = document.getElementById('carouselInner');
          const imageUrls = [product.imageUrl, 'img/product2.jpg', 'img/product3.jpg']; // Example images
          imageUrls.forEach((imageUrl, index) => {
            const item = document.createElement('div');
            item.classList.add('carousel-item');
            if (index === 0) {
              item.classList.add('active');
            }
            item.innerHTML = `<img src="${imageUrl}" class="d-block w-100" alt="${product.name}">`;
            carouselInner.appendChild(item);
          });
  
          // Quantity Selector
          const decreaseButton = document.getElementById('decreaseQuantity');
          const increaseButton = document.getElementById('increaseQuantity');
          const quantityInput = document.getElementById('quantity');
  
          decreaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
              quantity--;
              quantityInput.value = quantity;
            }
          });
  
          increaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
          });
  
          // Add to Cart Button
          const addToCartButton = document.querySelector('.add-to-cart');
          addToCartButton.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            const cart = getCart();
            const existingItemIndex = cart.findIndex(item => item.id === product.id);
  
            if (existingItemIndex > -1) {
              cart[existingItemIndex].quantity += quantity;
            } else {
              cart.push({ ...product, quantity: quantity });
            }
            setCart(cart);
  
            // Show Toast Message
            const toast = new bootstrap.Toast(document.getElementById('addToCartToast'));
            toast.show();
          });
  
          // Similar Products (Example)
          const similarProductsContainer = document.getElementById('similarProductsContainer');
          const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  
          similarProducts.forEach(similarProduct => {
            similarProductsContainer.innerHTML += `
              <div class="col-md-4">
                <div class="card product-card">
                  <img src="${similarProduct.imageUrl}" class="card-img-top" alt="${similarProduct.name}">
                  <div class="card-body product-card-body">
                    <h5 class="card-title product-card-title">${similarProduct.name}</h5>
                    <p class="card-text product-card-price">$${similarProduct.price.toFixed(2)}</p>
                    <a href="product.html?id=${similarProduct.id}" class="btn btn-primary">View Details</a>
                  </div>
                </div>
              </div>
            `;
          });
        });
      }
  
      // --- Cart Page ---
      if (window.location.pathname === '/cart.html') {
        document.addEventListener('DOMContentLoaded', () => {
          updateCartCount();
          const cartItemsContainer = document.getElementById('cartItemsContainer');
          const cartTotalElement = document.getElementById('cartTotal');
  
          function renderCartItems() {
            const cart = getCart();
            cartItemsContainer.innerHTML = '';
            let total = 0;
  
            cart.forEach(item => {
              const itemTotal = item.price * item.quantity;
              total += itemTotal;
  
              cartItemsContainer.innerHTML += `
                <div class="cart-item">
                  <img src="${item.imageUrl}" alt="${item.name}">
                  <div class="cart-item-details">
                    <h5 class="cart-item-title">${item.name}</h5>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                  </div>
                  <div class="cart-item-quantity">
                    <button class="btn btn-sm btn-outline-secondary decrease-quantity" data-product-id="${item.id}">-</button>
                                  <span class="cart-item-quantity-value">${item.quantity}</span>
                                  <button class="btn btn-sm btn-outline-secondary increase-quantity" data-product-id="${item.id}">+</button>
                                </div>
                                <div class="cart-item-total">
                                  <p>$${itemTotal.toFixed(2)}</p>
                                </div>
                                <button class="btn btn-sm btn-outline-danger remove-item" data-product-id="${item.id}">Remove</button>
                              </div>
                            `;
                          });
                          cartTotalElement.textContent = `$${total.toFixed(2)}`;
                        }
              
                        renderCartItems();
              
                        // Event Listeners for Cart Item Buttons
                        cartItemsContainer.addEventListener('click', (e) => {
                          const target = e.target;
                          const productId = parseInt(target.dataset.productId);
                          const cart = getCart();
                          const itemIndex = cart.findIndex(item => item.id === productId);
              
                          if (target.classList.contains('decrease-quantity')) {
                            if (cart[itemIndex].quantity > 1) {
                              cart[itemIndex].quantity--;
                            } else {
                              cart.splice(itemIndex, 1);
                            }
                          } else if (target.classList.contains('increase-quantity')) {
                            cart[itemIndex].quantity++;
                          } else if (target.classList.contains('remove-item')) {
                            cart.splice(itemIndex, 1);
                          }
              
                          setCart(cart);
                          renderCartItems();
                        });
                      });
                    }