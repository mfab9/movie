# **Movie Management Application**

This is a web-based project designed for managing movies and user interactions. The application implements a **Spring Boot backend** with **MongoDB** for data storage and a **React-based frontend**. It includes HTML templates for user management, styled with CSS and Bootstrap, and JavaScript for form validation and interactivity.

---

## **Features**

### **User Management**
- **Login and Registration Pages**: Created using JSP with proper form fields for username, password, and email.
- **User Dashboard**: Displays user-specific information and interactions.
- **Validation**: JavaScript-based form validation to ensure secure and error-free inputs.

### **Movie Management**
- List of movies with details and posters retrieved from MongoDB.
- Add reviews and ratings for movies.
- Responsive and visually appealing interface.

---

## **Technologies Used**

### **Backend**
- Spring Boot (Java)
- MongoDB (Database)
- Maven (Build Tool)
- JSP for user management templates

### **Frontend**
- React.js for dynamic UI
- Bootstrap for styling and responsiveness
- JavaScript for form validation and interactivity

---

## **Project Structure**

### **Backend** (`backend/`)
- `src/main/java/`: Contains all backend logic
  - `MovieController.java`: Handles movie-related APIs
  - `ReviewController.java`: Manages user reviews
  - `UserController.java`: Manages user-related functionalities
- `src/main/resources/webapp/`: JSP files for user management
  - `login.jsp`: Login page
  - `register.jsp`: Registration page
  - `validation.js`: Javascript form validation
  

### **Frontend** (`frontend/`)
- `src/`: Contains React application
  - `components/`: All reusable React components
  - `App.js`: Main application logic
  - `index.js`: Entry point of the application
- `public/`: Contains public assets (e.g., images, icons)

---

## **Key Functionalities**

### **1. HTML Templates for User Management**
- Professionally structured using JSP and React.
- Semantic HTML ensures clarity and accessibility.
- Templates: `login.jsp`, `register.jsp`, `dashboard.jsp`

### **2. CSS and Bootstrap Styling**
- Consistent and responsive UI using Bootstrap.
- Custom CSS added for enhanced aesthetics.

### **3. JavaScript Validation**
- **Login Page Validation**: Validates username and password fields.
- **Registration Page Validation**: Ensures email format, password strength, and required fields.
- Real-time feedback for user inputs.

---

## **How to Run the Project**

### **Backend**
1. Navigate to the `backend` folder.
2. Run the Maven command:  
   ```bash
   mvn spring-boot:run
   ```

### **Frontend**
1. Navigate to the `frontend` folder.
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the React app:  
   ```bash
   npm start
   ```



---

## **Folder Structure**

```
movie/
├── backend/
│   ├── src/main/java/
│   │   ├── dev.javaproject.movie/
│   │   │   ├── controllers/
│   │   │   │   ├── MovieController.java
│   │   │   │   ├── UserController.java
│   │   │   │   ├── ReviewController.java
│   │   │   ├── services/
│   │   │   ├── repositories/
│   ├── src/main/resources/templates/
│   │   ├── login.jsp
│   │   ├── register.jsp
│   │   ├── dashboard.jsp
│   ├── pom.xml

```

---

## **Validation and Testing**
- Tested for cross-browser compatibility.
- Verified responsiveness across devices using Chrome DevTools.
- Form validation and interactivity thoroughly checked.

---
