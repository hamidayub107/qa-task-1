# QA Task 1 Web UI Testing Repository

This repository contains automated Web UI tests for Login Functionality, Dynamic Element & File Upload for a publicly available website. The tests verify valid & invalid login attempts, dynamic element loading after a certain time & uploading file scenarios. This project follows Page Object Model (POM) framework using WebdriverIO & Javascript.

## Table of Contents
- [Getting Started](#getting-started)
- [Tests Structure](#repository-structure)
- [Setup](#setup)
- [Running the Tests](#running-the-tests)
- [Reporting](#reporting)

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (>=14.x)
- npm (Node Package Manager)

### Tests Structure

Tests in this repository are organized as follows:
- `test/data/sample.txt`: Contains a dummy file for file upload test.
- `test/pageobjects/dynamic_loading.page.js`: Contains page objects for dynamic element test.
- `test/pageobjects/file_upload.page.js`: Contains page objects for file upload test.
- `test/pageobjects/login.page.js`: Contains page objects for login functionality test.
- `test/pageobjects/page.js`: Contains base url utilised in other page objects.
- `test/pageobjects/dynamic_loading.page.js`: Contains page objects secure page that come after login.
- `test/specs/1-login.functionality.js`: Tests for Login functionality.
- `test/specs/2-dynamic.elements.js`: Tests for Dynamic element loading.
- `test/specs/3-upload.file.js`: Tests for File upload functionality.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hamidayub107/qa-task-1.git

2. **Install dependencies:**
   ```bash
   npm install

## Running the Tests

1. **To execute all tests, run:**
   ```bash
   npx wdio run ./wdio.conf.cjs

2. **To run specific file:**
   ```bash
   npx wdio run ./wdio.conf.cjs --spec test/specs/1-login.functionality.js

## Reporting
This project uses Spec reports which is more suitable for validating code during development & also has Allure reports for better visual representation of test result.

### Example for Allure
1. **Install Allure CLI:**
   ```bash
   npm install -g allure-commandline --save-dev

2. **Generate an HTML report:**
   ```bash
   npx allure generate allure-results --clean -o allure-report

3. **Open an HTML report:**
   ```bash
   npx allure open allure-report