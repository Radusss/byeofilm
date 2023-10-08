### README for `byeofilm` Mobile/Web Application

---

#### Introduction

`byeofilm` is a mobile/web application designed with React Native and managed through the Expo CLI. This README section provides guidelines for setting up the development environment and running the application on your local machine.

#### Requirements

To run `byeofilm`, ensure your environment is set up for React Native and Expo CLI development. Here's what you need:

- [Node.js](https://nodejs.org/) (version 12 or newer)
- [npm](https://www.npmjs.com/) (usually comes bundled with Node.js)
- [Expo CLI](https://expo.dev/)
- Android/iOS Emulator or a physical device with [Expo Go](https://expo.dev/client) installed

#### Getting Started

##### Step 1: Clone the Repository

Clone the `byeofilm` application repository to your local machine using the following command:

```
git clone https://gitlab.igem.org/2023/software-tools/groningen.git
cd groningen
```

##### Step 2: Install Dependencies

Navigate to the project directory (ie, the "frontend_app" folder) and install the dependencies listed in the `package.json` file using npm:

```
npm install
```

##### Step 3: Start the Development Server

Use one of the npm scripts defined in `package.json` to start the development server:

- To start the Expo development server:
  
  ```
  npm start
  ```
