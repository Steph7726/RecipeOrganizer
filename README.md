# Recipe Organizer

## Description

The **Recipe Organizer** is a web application that allows users to **add, edit, delete, filter, and favorite** their recipes.  
It includes:

- Google Sign-In Authentication
- Firestore Database for Persistent Storage
- AI Chatbot for Recipe Assistance
- Offline Support with Service Workers
- Responsive & Accessible UI

The app is deployed using GitHub Pages and built with Vanilla JavaScript, Firebase, and Parcel.

---

## Setup Instructions

Follow these steps to set up and run the app on your local machine:

Before running the app, make sure you have the following installed:

- Node.js
- Git
- A Firebase account

### Clone the Repository

To download the code to your local machine, open a terminal and run:

```sh
git clone https://github.com/Steph7726/RecipeOrganizer.git
```

cd RecipeOrganizer

### Install Dependencies

To install the required dependencies, run:

npm install

### Configure Firebase

1. Go to Firebase Console
2. Create a new project (or select and existing one)
3. Enable Firestore Database:

- Build - Firestore Database
- Create Database

4. Enable Google Authentication:

- Build - Authentication - Sign-in Method
- Enable Google Sign-in

5. Copy Firebase Config Keys:

- Project Settings - Your App

6. Add the config to firebase.js

### Run App Locally

To start the development server, run:
npx parcel html/index.html

### GitHub Pages Deployment

Run:
npm run build
