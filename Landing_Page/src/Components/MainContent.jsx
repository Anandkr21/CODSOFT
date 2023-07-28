import React from 'react';

const MainContent = () => {
  return (
    <section className="main-content">
      {/* Fast Food Specials */}
      <div className="fast-food-specials">
        <h2>Fast Food Specials</h2>
        <p>Check out our latest fast food specials that will satisfy your cravings:</p>
        <ul>
          <li>Big Burger Combo - 50% off! 😍</li>
          <li>Super Fries - Buy 1, Get 1 Free 😋 </li>
          <li>Family Pizza Pack - Perfect for Sharing 🥳</li>
        </ul>
      </div>

      {/* Features */}
      <div className="feature">
        <h2>Burger</h2>
        <p>Delicious Burgers and Sandwiches that will leave you wanting more.</p>
        <img src="/src/Assets/burger.jpg" alt="Delicious Food" className="feature-image" />
      </div>

      <div className="feature">
        <h2>Pizza</h2>
        <p>Irresistible Pizza with a wide range of toppings to choose from.</p>
        <img src="/src/Assets/pizza.jpg" alt="Delicious Food" className="feature-image" />
      </div>

      <div className="feature">
        <h2>Chicken</h2>
        <p>Crunchy and Flavorful Fried Chicken that will satisfy your cravings.</p>
        <img src="/src/Assets/chicken.jpg" alt="Delicious Food" className="feature-image" />
      </div>
    </section>
  );
};

export default MainContent;
