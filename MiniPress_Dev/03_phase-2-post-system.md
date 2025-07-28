# 📝 Phase 2: Post System Simulation

## 🎯 Objective

Simulate full post management locally using **React state**, components, and user events. No backend yet — focus is on realistic workflows, modular logic, and testable UI.

---

## ⚙️ Core Functionalities

| Feature        | Component        | Description                            |
|----------------|------------------|----------------------------------------|
| Create Post    | `Editor.jsx`     | Text input, title, tags, preview       |
| Edit Post      | `Editor.jsx`     | Load existing post by ID, allow edits |
| View Post      | `PostDetail.jsx` | Render full post content               |
| Delete Post    | `Dashboard.jsx`  | Remove from local store                |
| List Posts     | `Dashboard.jsx`  | Show all created posts                 |

---

## 🗄️ Simulated Data Structure

Use local `useState()` or `useReducer()` for post management:

```js
const [posts, setPosts] = useState([
  { id: 1, title: "First Post", content: "Lorem ipsum", tags: ["intro"] },
  ...
]);

