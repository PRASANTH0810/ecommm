<script>
    document.addEventListener('DOMContentLoaded', function () {
      const addToCartButtons = document.querySelectorAll('.add-to-cart');
      
      addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
          const productId = button.getAttribute('data-product-id');
          addToCart(productId);
          updateCartCount();
        });
      });

      function addToCart(product) {
        if (!localStorage.cart) {
          localStorage.cart = JSON.stringify([]);
        }

        const cart = JSON.parse(localStorage.cart);
        const existingProduct = cart.find(item => item.product === product);

        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.push({ product, quantity: 1 });
        }

        localStorage.cart = JSON.stringify(cart);
      }

      function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalQuantity = 0;

        cart.forEach(item => {
          totalQuantity += item.quantity;
        });

        cartCountElement.textContent = totalQuantity;
      }
    });
  </script>
