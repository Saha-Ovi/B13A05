1️⃣ What is the difference between `var`, `let`, and `const`?

The main difference between var let and const is scope, hoisting, reassigned and redeclaration

 
🔹 `let:`

1. Hoisted but in Temporal dead zone (TDZ)
2. can be reassigned
3. can not be redeclared
4. `let` is **block scope**

🔹 `var :` 

1. Hoisted and initialized as undefined
2. can be reassigned
3. can be redeclared
4. `var` is **Function Scope**

🔹 `const :`

1. Hoisted but in Temporal dead zone(TDZ)
2. can not be reassigned
3. can not be redeclared
4. `const` is block scope
5. must be initialized when declared.

2️⃣ What is the spread operator (`...`)?

The spread operator is an ES6 feature used to expand iterables element
(array, object) into individual element.

🔹 The use of spread operator:

1. spread operator  creates a reference copy of an array.
2. Spread operator expands array elements
3. spread also used for merge array and object
4. array can be pass as parameter value using spread operator.

3️⃣ What is the difference between map(), filter(), and forEach()?

map(), filter(), and forEach() is Javascript function used to traverse array but these function behaves differently.

🔹 map()

Used to transform each element to the newly created array.

1. Return a new array
2. New array length is same as original or old array.

🔹 filter()

creates a new array with elements that passes a condition given in the

1. Return a new array.
2. New array length may be smaller than original array.

🔹 forEach()

Traverse through the whole array and executes some functional task for each element.

1. Do not return new array.
2. used for DOM update etc.

4️⃣ What is an arrow function?

An arrow function is shorter way to write a function in Javascript. we use ⇒(arrow ) this syntax to declare arrow function. it was introduced in ES6. we use arrow function for cleaner and shorter syntax. it makes code more readable. arrow function don’t have this. we use this from the surrounding scope.

5️⃣ What are template literals?

Template literals  are a feature in Javascript that allows us to create a string using backtick 

syntax ( ` `). 

🔹 We use this for several kinds of works:

1. Supports multi line strings.
2. Easily inserts variable and expression.
3. Also we can use condition using these.
4. Makes code cleaner and more readable.




# 🌟 Welcome To (সহজ সরল সিম্পল) Assignment - 5

# **📅 Deadline For 60 marks:** 9th March, 2026 (11:59 pm ⏱️)  
#  📅 No Deadline For 50 marks  
# **📅 Deadline For 30 marks:** Any time after 9th March.

---

# Assignment-05: GitHub Issues Tracker


### **API Endpoints:**
###  **All Issues:** 
  - https://phi-lab-server.vercel.app/api/v1/lab/issues 


###  **Single Issue:**
   - https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

   - Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33


###  **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

   - Example:  https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications


---

## 📝 Main Requirements

## 🎨 Design Part

## Login Page
- Create a login page containing a logo, title, and sub-title
- Below that, there will be 2 inputs, a sign-in button, and a demo credential to sign in. Follow the Figma for this page 
- Styled as per Figma

## Main Page: 

### Navbar: 

- Navbar with website logo/name on the left
- Search input and button on the right

### Tab Section like Figma: 

- 3 tab ( All, Open, Closed) at the top of this section.(**All**, **Open**, **Closed**)

- Below the tab, there will be an icon, the issue count, some text on the left, and an open and closed marker on the right

- Responsiveness: The website should be responsive for mobile devices. It is totally up to you. 


--- 


## ⚙️ Functionalities
- In login page, there will be default admin credentials (username, password). You need to sign in using these credentials.

- Load all issues and display as per Figma

- On clicking on an open or closed tab, it will load the issues data of the related tab and show it in a display-like card in a 4-column layout like Figma. By default, it will show all data 

- Each card shows:
  - Title
  - Description
  - Status
  - Category
  - Author
  - Priority
  - Label
  - CreatedAt
- Clicking on a tree name in a card will open a modal and show all the information about that Issue. 

### 🚀 Challenges


- Show the card Top border based on their category(open, closed), open card will have Green Boder, closed card will have a purple border on top. 

- Loading spinner on data load

- Show active button on changing category names

- Implement Search Functionality and 8 meaningful github commit.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 
    - 1️⃣ What is the difference between var, let, and const?
    - 2️⃣ What is the spread operator (...)?
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    - 4️⃣ What is an arrow function?
    - 5️⃣ What are template literals?


---

## 🛠️ Technology Stack

- **HTML**
- **CSS** (Vanilla/Tailwind/DaisyUI)
- **JavaScript** (Vanilla)

---

## 🔑 Demo Credentials

```text
Username: admin
Password: admin123
```


---

### Optional: 
 - No need to show status: Open, Closed styles On modals. 
 - No Need to show icon on labels 
 - No need to apply styles on Priority 
--- 


## 📤 What to submit

- **GitHub Repository Link:**
- **Live Site Link:**

---


