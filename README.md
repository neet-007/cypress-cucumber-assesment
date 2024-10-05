# Cypress-cucumber-assesment

This is a project that impleants a cypress-cucumber app using next js as the frontend

## The behaviors tested:
- Logging into the app with valid data.
- Adding a todo to the app with valid data.
- Redirecting users who didn't log in.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
  
## Installation
1. Clone the repository:
  ```bash
  git clone https://github.com/yourusername/yourproject.git
  ```
2. Cd to the frontend directory:
  ```bash
  cd frontend
  ```
3. Install npm pachages:
  ```bash
  npm install
  ```
4. Cd to the cypress-cucumber directroy:
  ```bash
  cd cypress-cucumber
  ```
5. Install npm packages
  ```bash
  npm install
  ```
## Usage
- Add a `.env` file with a `HOST` variable containing the URL on which you run the Next.js server (important if using WSL).
- To run the tests in headless mode, use the following command:
  ```bash
  npm run cypress:run
  ```
- To run the tests with a browser, use the following command:
  ```bash
  npm run cypress:open
  ```
## Demo
You can view the demo video [here](https://drive.google.com/file/d/1GeQ-Kcip2CQMKFYt5m2ibH6TdCfF0Wu7/view?usp=sharing).


  
