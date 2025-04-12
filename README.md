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
