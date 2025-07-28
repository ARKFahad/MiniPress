# 🧱 Phase 1: Static UI & Routing Setup

## 🎯 Objective

Establish the structural layout of the CMS using **React Router** and dummy components. Focus on navigation flow, page templates, and clean state separation. This is the bedrock for all future functionality.

---

## 🧩 Core Pages to Implement

| Route               | Component Name      | Purpose                               |
|---------------------|---------------------|----------------------------------------|
| `/`                 | `Home.jsx`          | Post previews in a blog layout         |
| `/post/:id`         | `PostDetail.jsx`    | Full post content                      |
| `/dashboard`        | `Dashboard.jsx`     | Admin panel for content management     |
| `/editor`           | `Editor.jsx`        | Rich text editor for creating posts    |
| `/login`            | `Login.jsx`         | Simulated authentication               |
| `/register`         | `Register.jsx`      | User sign-up page                      |
| `/about`            | `About.jsx`         | Static info page                       |
| `/contact`          | `Contact.jsx`       | Contact form layout                    |

---

## ⚙️ UI Structure Planning



---

## 🗺️ Routing Setup

Use **React Router** v6 for navigation:

- Define routes in `App.jsx`
- Use layout wrappers (e.g. `Layout.jsx`) to keep Navbar/Footer consistent

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Dashboard from './pages/Dashboard';
import Editor from './pages/Editor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </Router>
  );
}