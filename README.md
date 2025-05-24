# Playwright-project

# 🧪 Playwright Testing Framework for SauceDemo.com

This project is a comprehensive Playwright testing framework written in **TypeScript**, designed to automate and validate the core functionalities of the [SauceDemo](https://www.saucedemo.com/) website.

## ✅ Features Tested

The framework covers end-to-end testing for the following features:

- 🔐 **Login**
- 🛒 **Add to Cart**
- 🧹 **Remove from Cart**
- 💳 **Checkout Process**
- 🔃 **Sorting Products**
  - Alphabetical (A-Z, Z-A)
  - Price (Low to High, High to Low)

---

## 📁 Project Structure

```bash
.
├── tests/
│   ├── login.test.ts
│   ├── add-to-cart.test.ts
│   ├── remove-from-cart.test.ts
│   ├── checkout.test.ts
│   └── sort.test.ts
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── LoginSession.ts         # Creates a session to reuse login state
├── playwright.config.ts    # Playwright configuration file
├── .env                    # Environment variables
└── README.md               # Project documentation

⚙️ Technologies Used :

Playwright

TypeScript

Page Object Model (POM)

Environment Configuration with .env

Browser context reuse with storageState

Hooks (beforeEach, afterAll)

Test Grouping with test.describe

Multi-browser testing (Chromium & Firefox)

🧪 How to Run the Tests  :
1. Clone the repository :
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies :
npm install
3. Set up environment variables
Create a .env file in the root directory with:
USER_NAME=standard_user
PASSWORD=secret_sauce
BASE_URL=https://www.saucedemo.com
4-Run all tests :
npx playwright test

🌍 Cross-Browser Testing
This framework runs tests on:

Chromium

Firefox

You can add more browsers by editing playwright.config.ts.

🔗 Author :

Name: Ghaith Abo Hantash

University Project: Software Testing and Quality Assurance

Framework: Playwright + TypeScript








