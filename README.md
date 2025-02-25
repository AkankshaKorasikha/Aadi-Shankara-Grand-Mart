# AdiShankara Grand Mart - E-commerce Website

AdiShankara Grand Mart is a modern e-commerce web application built using **React**. This project provides an intuitive shopping experience with features such as product browsing, cart management, authentication, and order history.

## Features

- **Product Listing**: Browse a variety of products fetched from a JSON file.
- **Search Functionality**: Search for products dynamically.
- **Cart Management**: Add, remove, and update product quantities in the cart.
- **User Authentication**: Login and register users, storing authentication details in local storage.
- **Order History**: Keep track of previous purchases.
- **Responsive Design**: Optimized for different screen sizes.
- **Notification System**: Inform users about actions like adding to cart, login status, and checkout.

## Technologies Used

- **React** (Functional Components, Hooks)
- **React Router** (Routing & Navigation)
- **Local Storage** (User authentication & session handling)
- **CSS & Tailwind CSS** (Styling & Layouts)

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/adishankara-grand-mart.git
   cd adishankara-grand-mart
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```
4. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

## Project Structure

```
├── public
│   ├── index.html
│   ├── products.json
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── NavBar.js
│   │   ├── SearchBar.js
│   │   ├── Cart.js
│   │   ├── Notification.js
│   │   ├── Login.js
│   │   ├── Register.js
│   ├── pages
│   │   ├── Home.js
│   │   ├── Products.js
│   │   ├── Offers.js
│   │   ├── ContactUs.js
│   │   ├── AboutUs.js
│   │   ├── OrderHistory.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│
└── package.json
```

## Usage

- **Login/Register**: Users must log in to add items to the cart.
- **Adding to Cart**: Click on a product to add it to the cart.
- **Updating Cart**: Modify item quantity or remove items from the cart.
- **Checkout**: Proceed with the order.
- **Logout**: Clear session and cart data.

## Future Enhancements

- **Backend Integration**: Connect with a real database.
- **Payment Gateway**: Implement secure payments.
- **User Profile Management**: Enhance user personalization.
- **Admin Panel**: Add product and order management.

## Contributors

- **Korasikha Akanksha**- Developer

## License

This project is open-source and available under the MIT License.


Site is live in:
https://aadishankara-grandmart.netlify.app/
