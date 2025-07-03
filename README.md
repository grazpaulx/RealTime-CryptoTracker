cat > README.md << 'EOF'
# 💹 Real-Time Crypto Price Tracker

A responsive real-time cryptocurrency price tracking web app built using **React** and the **CoinGecko API**.  
This was developed as a **personal/assignment project**.

---

## 🚀 Features

- 🔄 Auto-refreshes data every 3 seconds
- ✅ Percentage change (1h / 24h / 7d) with green/red indicators
- 🧩 Reusable CryptoCard component
- 🧮 Displays coin name, symbol, price, market cap, and volume
- 🎨 Dark-themed, mobile-friendly responsive layout
- 🖼 Output screenshots included

---

## 🛠 Tech Stack

- ⚛️ React.js + Vite
- 🎯 CoinGecko Public API
- 🎨 Custom CSS
- 🧱 JavaScript (ES6+) + JSX

---

## 📂 Folder Structure

crypto/
├── crypto-tracker/

│ ├── public/

│ ├── src/

│ │ ├── components/

│ │ │ └── CryptoCard.jsx

│ │ ├── App.jsx

│ │ └── index.css

│ ├── package.json

│ └── vite.config.js

├── output screenshot/

│ ├── Screenshot 2025-04-24 185656.png
│ └── Screenshot 2025-04-24 185711.png

└── README.md

---

## 📸 Screenshots

| Home View | Live Coin Display |
|-----------|------------|
| ![](output_screenshots/Screenshot%202025-04-24%20185656.png) | ![](output_screenshots/Screenshot%202025-04-24%20185711.png) |


## ▶️ How to Run the Project

### 1️⃣ Navigate to project folder

\`\`\`bash
cd crypto-tracker
\`\`\`

### 2️⃣ Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3️⃣ Start development server

\`\`\`bash
npm run dev
\`\`\`

Visit: [http://localhost:5173](http://localhost:5173) in your browser.

---

## 👩‍💻 Developed By

**Grace Paul**  
GitHub: [@grazpaulx](https://github.com/grazpaulx)

---

## 📄 License

This project was created for educational purposes as a **personal learning assignment**.  
All data provided by the [CoinGecko API](https://www.coingecko.com/en/api/documentation).

EOF
