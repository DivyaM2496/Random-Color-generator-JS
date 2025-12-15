# 🎨 Background Color Changer App

## 📌 Overview

The **Background Color Changer App** is a simple web application built using **HTML, CSS, and JavaScript**. On clicking a button, the background color of the container changes randomly from a predefined list of colors.

This project is ideal for beginners to practice **arrays**, **random number generation**, and **DOM style manipulation** in JavaScript.

---

## 🧩 Features

* Changes background color on button click
* Uses a predefined array of colors
* Random color selection
* Simple and interactive UI

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation)

---

## ⚙️ How It Works

* An array stores multiple background color values.
* When the button is clicked:

  * A random index is generated
  * A color is selected from the array
  * The background color of the container is updated dynamically

---

## 📂 Project Structure

```
background-color-changer-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function button() {
  let i = Math.ceil(Math.random() * 10);
  bgContainerElement.style.backgroundColor = bgColorsArray[i];
}
```

---

## 📚 Concepts Covered

* Arrays in JavaScript
* Random number generation using `Math.random()`
* DOM element selection
* Dynamic CSS style updates

---

## 🚀 Future Improvements

* Fix random index range for full safety
* Display selected color code
* Add smooth transition effects

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript fundamentals** and **DOM manipulation skills**.

---

⭐ If you find this project useful, feel free to star the repository!
