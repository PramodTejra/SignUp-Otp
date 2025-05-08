# 📧 Appwrite Email OTP - Sample App (React + Vite)

This is a **React** demo application that demonstrates how to implement **Email OTP (One-Time Password)** authentication using **[Appwrite](https://appwrite.io)**.

> 🔐 A simple and modern approach to secure user authentication using Appwrite and React with Tailwind CSS.

---

## 🚀 Features

- Email OTP-based user authentication
- Secure session handling
- React components with Tailwind CSS styling
- Easy Appwrite integration
- Developer-friendly and extendable

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/)

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PramodTejra/SignUp-Otp.git
cd SignUp-Otp
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Rename `.env.example` to `.env` and configure your Appwrite credentials:

```env
VITE_APPWRITE_ENDPOINT=https://your-appwrite-endpoint/v1
VITE_APPWRITE_PROJECT_ID=your-project-id
```

> ✅ Ensure that you’ve created a project in Appwrite and enabled Email OTP authentication.

### 4. Run the Development Server

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) to view the app.

---

## 📁 Project Structure

```
src/
├── components/        # Reusable React components
├── pages/             # Route components (Signup, OTP, Success, etc.)
├── appwrite/          # Appwrite client config and helpers
├── App.jsx            # Main App component
├── main.jsx           # App entry point
├── index.css          # Tailwind CSS import
.env                   # Environment variables
tailwind.config.js     # Tailwind configuration
vite.config.js         # Vite configuration
```

---

## 📸 Screenshots

*(Optional: Add screenshots of the Signup page, OTP verification, and success messages here)*

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## 📬 Contact

Created by [@PramodTejra](https://github.com/PramodTejra) – feel free to reach out!

