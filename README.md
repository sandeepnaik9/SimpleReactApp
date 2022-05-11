# Vyorius FullStack Task
## _Sandeep Naik_
A basic task using - Node, Express, MongoDB, React and Redux using **create-react-app** with separate **Server** `(express+mongo)` and **Client** `(react+redux)` folders. Uses Google's Material Design UI (`material-ui` package).
## Requirements of the Task:
- Homepage should list all the tasks.
- In the header login , logout and add task button should be present .
- Using REDUX is mandatory.
- Remove and edit task functionality should be there .
- If the user is logged out/guest then show the login screen.

## 📝 Features
- [x] Home Page Lists all the tasks
- [x] Only the user created can edit/delete/add the task
- [x] Other users can like the task
- [x] Add, Edit, Login, Logout
- [x] Authentication

## ▶️  Installation & Running
- Clone repo `git clone https://github.com/sandeepnaik9/VyoriusFullStackTask.git`
- Install NPM modules for **Client** `cd client` and `npm install`
- Install NPM modules for **server** `cd server` and `npm install`
- Run **server** server `cd server` and `npm start` (runs on port configured under `server/index.js`)
- Run **Client** server `cd client` and `npm start` (runs on port 3000 or your `PORT` environment, should automatically open in your browser)

## 📦 Packages Used

### Frontend
- **classnames** (A simple utility for conditionally joining classNames together)
- **material-ui** (React Components that Implement Google's Material Design)
- **moment** (Parse, validate, manipulate, and display dates)
- **react** (Library for building user interfaces)
- **react-dom** (React package for working with the DOM)
- **react-redux** (Official React bindings for Redux)
- **react-router-dom** (v4, A complete routing library for React)
- **redux** (Predictable state container for JavaScript apps)
- **redux-thunk** (Thunk middleware for Redux)

### API Server
- **bcrypt** (Library to help you hash passwords)
- **body-parser** (Parse incoming request bodies)
- **express** (Fast, unopinionated, minimalist web framework)
- **jsonwebtoken** (JSON Web Token implementation)
- **moment** (Parse, validate, manipulate, and display dates)
- **mongoose** (MongoDB object modeling tool)
### 📸 Screenshots
- #### Home Page Listing all tasks
![screenshot1](https://github.com/sandeepnaik9/VyoriusFullStackTask/blob/master/images/pic1.PNG)
- #### Sign In Page
![screenshot1](https://github.com/sandeepnaik9/VyoriusFullStackTask/blob/master/images/pic2.PNG)
- #### Sign Up Page
![screenshot1](https://github.com/sandeepnaik9/VyoriusFullStackTask/blob/master/images/pic3.PNG)
- #### Image of Home Page after 1st user logins and as you can see the 2nd task displayed can only be liked.
![screenshot1](https://github.com/sandeepnaik9/VyoriusFullStackTask/blob/master/images/pic4.PNG)
- #### Creating a demo task
![screenshot1](https://github.com/sandeepnaik9/VyoriusFullStackTask/blob/master/images/pic7.PNG)
![screenshot1](https://github.com/sandeepnaik9/VyoriusFullStackTask/blob/master/images/pic5.PNG)
- #### Home Page after 2nd user login and as you can see the 1st task was created by first user so 2nd user has the only access of liking the task
![screenshot1](https://github.com/sandeepnaik9/VyoriusFullStackTask/blob/master/images/pic6.PNG)



