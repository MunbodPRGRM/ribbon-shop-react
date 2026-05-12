# Ribbon Handmade Shop

เว็บไซต์แสดงผลงานและร้านค้าสำหรับงานริบบิ้น Handmade สร้างด้วย React + Vite + Firebase + Cloundinary
สามารถดูตัวอย่างโปรเจกต์ได้ที่นี่ : [Ribbon Shop Web](https://ribbon-shop.web.app/)

---

# Features

* แสดงผลงานริบบิ้น Handmade
* ระบบร้านค้าออนไลน์
* หน้าแสดงรายละเอียดสินค้า
* ระบบตะกร้าสินค้า
* ระบบ Admin เพิ่มสินค้า
* Upload รูปภาพด้วย Cloudinary
* เก็บข้อมูลด้วย Firebase Firestore
* Responsive Design
* Deploy ด้วย Firebase Hosting

---

# Tech Stack

## Frontend

* React
* Vite
* React Router DOM
* Tailwind CSS

## Backend Service

* Firebase Firestore
* Firebase Hosting
* Cloudinary

---

# Project Structure

```plaintext
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── CartItem.jsx
│
├── context/
│   └── CartContext.jsx
│
├── firebase/
│   ├── firebaseConfig.js
│   └── firestore.js
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Gallery.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   └── Admin.jsx
│
├── utils/
│   └── cloudinary.js
│
├── App.jsx
│
└── main.jsx
```

---

# Installation

## 1. Clone Project

```bash
git clone YOUR_GITHUB_URL
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Create .env File

สร้างไฟล์ `.env` ที่ root project

```env
VITE_FIREBASE_API_KEY=YOUR_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
VITE_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID

VITE_CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
VITE_CLOUDINARY_UPLOAD_PRESET=YOUR_UPLOAD_PRESET
```

---

# Run Project

```bash
npm run dev
```

---

# Build Project

```bash
npm run build
```

---

# Deploy Firebase Hosting

## Build ก่อน

```bash
npm run build
```

## Deploy

```bash
firebase deploy
```

---

# Firebase Setup

## Firebase Services

* Firestore Database
* Firebase Hosting

---

# Firestore Structure

Collection:

```plaintext
products
```

Document Example:

```json
{
  "name": "Ribbon Bow",
  "price": 120,
  "category": "โบว์",
  "description": "โบว์ริบบิ้น handmade",
  "image": "https://..."
}
```

---

# Cloudinary Setup

## Create Upload Preset

Cloudinary Dashboard:

```plaintext
Settings
→ Upload
→ Upload Presets
```

เลือก:

```plaintext
Unsigned
```

---

# Available Pages

| Page         | Description          |
| ------------ | -------------------- |
| /            | หน้าแรก              |
| /shop        | หน้าร้านค้า          |
| /gallery     | หน้าผลงาน            |
| /product/:id | หน้ารายละเอียดสินค้า |
| /cart        | หน้าตะกร้าสินค้า     |
| /admin       | หน้าเพิ่มสินค้า      |

---

# Current Features

## Product System

* เพิ่มสินค้า
* แสดงสินค้า
* แสดงรายละเอียดสินค้า
* แยกหมวดหมู่
* ค้นหาสินค้า
* เรียงราคาสินค้า

---

## Cart System

* เพิ่มสินค้าลงตะกร้า
* ลบสินค้า
* คำนวณราคารวม

---

## Gallery System

* แสดงผลงานแบบ Masonry Layout
* Filter หมวดหมู่
* Hover Animation

---

# Future Improvements

* Firebase Authentication
* Protected Admin Route
* Edit Product
* Delete Product
* Realtime Firestore
* Checkout System
* PromptPay QR
* Dark Mode
* Framer Motion Animation
* SEO Optimization

---

# Screenshots

สามารถเพิ่ม screenshot ของโปรเจกต์ได้ในภายหลัง

```plaintext
public/screenshots/
```

---

# Author

พัฒนาเพื่อใช้เป็นโปรเจกต์เว็บไซต์ร้านค้าริบบิ้น Handmade และแสดงผลงานออนไลน์

---

# License

This project is for educational purposes.
