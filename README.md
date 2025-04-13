# CompareKart
A smart web application that allows users to compare prices of the same product across multiple e-commerce platforms like Amazon, Flipkart, and Aliexpress. The app fetches real-time data using APIs and helps users make informed buying decisions quickly.

-----
## 🚀 Features

- Real-time price comparison across multiple platforms  
- Clean, user-friendly interface  
- Direct redirection to original e-commerce product page  
- No user login or database required — API-based lightweight structure

-----

## 🛠 Tech Stack

- *Frontend*: HTML, CSS, JavaScript  
- *Backend*: Node.js + Express
- *APIs*: RapidAPI for different E-commerce site like Amazone
- *Deployment*: Vercel (frontend), Render (backend)



------

## 🧠 Problem Statement

🛍️ Shopping online is easy, but comparing prices across platforms is hard.

❌ Customers visit Amazon, Flipkart, AliExpress separately  
❌ Price fluctuation & missing deals  
❌ Wastage of time & effort

We solve this with one unified search experience.

-----



## Architecture Diagram

[User Input] → [Frontend] → [Backend]
                              ↓
      ┌───────────────┬───────────────┬───────────────┐
      ↓               ↓               ↓
 [Amazon API]   [AliExpress API]  [Flipkart Scraper]

  ↓               ↓               ↓
[Product Data]   →→→→→→→→→→→→→→→→→→ [Combined Results]
                             ↓
                        [Frontend Grid View]



## 🛠️ Setup Instructions

1. **Clone the repository**
 --bash
   
  git clone https://github.com/your-username/comparekart.git
  cd comparekart

2.Install dependencies

  - npm install
  - npm install express
  - npm install node-fetch
  - npm install ejs

3. Run the application
   node app.js


📂 Project Structure
  comparekart/
├── public/
│   ├── images/              # Product and UI images (7 images)
│   ├── javascripts/
│   │   ├── home.js
│   │   └── index.js
│   └── styles/
│       ├── BodyDiv.css
│       └── home.css
├── views/
│   ├── index.ejs
│   └── home.ejs
├── app.js                   # Main Express application
├── package.json
├── package-lock.json
└── README.md




💡 How It Works
 - Users enter a product name or keyword.
  
 - The app makes API calls to multiple e-commerce APIs via RapidAPI.
  
 - Results are parsed, normalized, and shown in clean comparison cards.
  
 - (in future Users can sort/filter by price, platform, or availability.)
   
 - for now it will show product as shorted by price
  
 - A Contact Us form is included in the footer for feedback or queries.

