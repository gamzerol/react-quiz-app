# 🧠 React Quiz App

A modern and interactive **React-based quiz application** designed to test users' React knowledge through multiple-choice questions. The app provides a clean UI, progress tracking, timer functionality, and an engaging quiz experience.

---

## 🚀 Features

- ⚛️ Built with **React**
- 📝 Multiple-choice quiz questions
- ⏱️ Timer for time tracking
- 📊 Progress bar (question count & score tracking)
- 🎨 Clean and modern UI
- 🔁 Restartable quiz flow
- 📱 Responsive design

---

## 🛠️ Tech Stack

- **React** (Hooks & Functional Components)
- **JavaScript (ES6+)**
- **CSS / Styled Components** _(or plain CSS, update if needed)_

---

## 📂 Project Structure

```bash
src/
├── components/      # Reusable UI components
├── data/            # Quiz questions data
├── index.js         # Application entry point
└── index.css       # Global styles
```

---

## ⚙️ Installation & Usage

1. Clone the repository

```bash
git clone https://github.com/your-username/react-quiz-app.git
```

2. Navigate to the project directory

```bash
cd react-quiz-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm start
```

---

## 🧩 How It Works

- Users start the quiz from the welcome screen
- Questions are fetched from a local API and stored in state
- State management is handled with `useReducer`
- Each question is displayed one at a time
- Users select an answer before moving to the next question
- Timer and progress bar update dynamically
- Final score and high score are shown at the end of the quiz

---

## 🧪 Testing

This project includes **unit tests** written with **Jest** and **React Testing Library**.

### What is tested?

- ✅ Reducer logic (`useReducer`) is tested in isolation
- ✅ Core state transitions such as:
  - data loading & error handling
  - starting and finishing the quiz
  - answering questions and score calculation
  - timer countdown (`tick` action)
  - restart flow and high score logic

- ✅ UI components are tested independently from global state

### Testing Approach

- Reducer tests are written as **pure function unit tests** (no DOM, no rendering)
- Component tests focus on **user interaction and dispatch behavior**
- Tests are colocated with their related components for maintainability

### Running Tests

```bash
npm test
```

To generate a coverage report:

```bash
npm test -- --coverage
```

---

## 🎯 Purpose of the Project

This project was built to:

- Practice **React fundamentals**
- Improve component-based architecture
- Work with state management and conditional rendering
- Build a real-world, portfolio-ready React project

---

⭐ If you like this project, don’t forget to give it a star!
