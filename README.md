# Age Calculator

## 📌 Project Description
This is a simple **Age Calculator** web application that takes a user's birth year as input and calculates their current age based on the current year.

## 🚀 Features
- ✅ Takes a **4-digit year** as input
- ✅ Calculates age based on the **current year**
- ✅ Displays the result dynamically on the page
- ✅ Includes **input validation** to prevent invalid years
- ✅ Provides user-friendly **error messages**

## 🛠️ Technologies Used
- **HTML** - Structure
- **CSS** - Styling
- **JavaScript** - Logic and DOM Manipulation

## 📂 Project Structure
```
📁 Age-Calculator
│-- 📄 index.html  (HTML structure)
│-- 📄 style.css   (Styling)
│-- 📄 script.js   (Age calculation logic)
│-- 📄 README.md   (Project Documentation)
```

## 🎯 How to Use
1. **Enter your birth year** (e.g., `1999`).
2. Click the `Calculate Age` button.
3. Your current age will be displayed below.
4. If an invalid year is entered, an error message will be shown.

## 📜 Code Example
Here is the **JavaScript** logic for age calculation:
```javascript
const input = document.querySelector("#ipt");
const btn = document.querySelector("#btn");
const age = document.querySelector("#age");

btn.addEventListener("click", () => {
    const dob = input.value.trim();
    if (!dob || dob.length < 4) {
        age.innerText = "Please enter a valid year!";
        return;
    }

    const birthYear = parseInt(dob.substring(0, 4), 10);
    const currentYear = new Date().getFullYear();

    if (isNaN(birthYear) || birthYear > currentYear || birthYear < 1900) {
        age.innerText = "Enter a valid birth year!";
        return;
    }

    age.innerText = `Your age is ${currentYear - birthYear} years old`;
});
```

## 🌟 Live Demo
[Click here](https://pyhtondevelopernishu.github.io/Age_Calulator_In_Js/) to see the project in action.

## 📌 Contributing
Feel free to contribute to this project! You can:
- **Fork** the repository
- **Clone** it locally: `git clone https://github.com/PyhtonDeveloperNishu/Age_Calulator_In_Js.git`
- Make improvements and **submit a pull request**

## 📜 License
This project is **open-source** and free to use. 🚀

