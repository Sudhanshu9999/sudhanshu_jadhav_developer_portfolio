# Sudhanshu Jadhav - Developer Portfolio

Welcome to the official portfolio website of **Sudhanshu Jadhav**, a passionate software developer with expertise in building modern, responsive web applications. This portfolio showcases my technical skills, projects, and accomplishments. The website is built using **React.js**, **TypeScript**, **HTML**, and **CSS**, and is optimized for both performance and user experience.

## 🌐 Live Website

You can view my portfolio live at:  
[**sudhanshujadhav.com**](https://sudhanshujadhav.com)

## Table of Contents

- [About Me](#about-me)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [License](#license)

## About Me

I am a **Software Developer** with experience in **React.js**, **TypeScript**, and a variety of web technologies. I focus on creating seamless and engaging user interfaces and have a passion for developing solutions that solve real-world problems. This portfolio is a reflection of my work and the skills I have acquired throughout my career.

## Technologies Used

This portfolio was built with the following technologies:

- **Frontend:**
  - React.js
  - TypeScript
  - HTML5
  - CSS3
  - Tailwind CSS

- **Deployment:**
  - AWS S3 for static web hosting
  - Amazon CloudFront for content delivery
  - SSL Certificate for secure hosting

## Features

- **Responsive Design:** The portfolio is designed to work seamlessly across different screen sizes, ensuring an optimal viewing experience on mobile, tablet, and desktop devices.
- **Dark Mode:** Users can switch between dark and light themes according to their preferences.
- **SEO Optimized:** The site is structured with proper meta tags and semantic HTML to improve search engine ranking.
- **Performance Optimized:** The website is hosted on **AWS S3** with **Amazon CloudFront** for fast and secure delivery of content.
- **Clean User Interface:** The design is minimalistic, focusing on content with a smooth user experience.

## Installation

To run this project locally on your machine, follow these steps:

### Prerequisites

Ensure that you have the following installed:

- **Node.js** (LTS version)
- **npm** or **yarn**

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Sudhanshu9999/sudhanshu_jadhav_developer_portfolio.git
   ```

2. Navigate into the project directory:

   ```bash
   cd sudhanshu_jadhav_developer_portfolio
   ```

3. Install the dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

4. Start the development server:

   Using npm:

   ```bash
   npm start
   ```

   Or using yarn:

   ```bash
   yarn start
   ```

   Visit `http://localhost:3000` in your browser to view the project.

## Folder Structure

The folder structure for this project is as follows:

```
/public                # Contains static assets (images, icons, etc.)
  /images              # Images for the website
/src
  /pages               # React components for different pages (Home, About, Projects, etc.)
  /styles              # Tailwind CSS and custom styles
  /components          # Reusable UI components (Header, Footer, etc.)
  /assets              # Icons, logos, and other assets
  /utils               # Utility functions (if any)
README.md              # This file
package.json           # Project dependencies and configuration
tailwind.config.js     # Tailwind CSS configuration
```

## Deployment

This project is deployed on **AWS S3** for static web hosting with **Amazon CloudFront** as the content delivery network (CDN). It ensures fast and secure delivery of the portfolio website across the globe.

### Deployment Steps (for reference)

1. Build the project for production:

   ```bash
   npm run build
   ```

2. Deploy the `build` folder to an S3 bucket and configure CloudFront for CDN distribution.
3. Ensure that the domain is correctly pointed to the CloudFront distribution and SSL is configured for secure browsing.

## License

This project is not currently licensed. Feel free to use it at your own discretion.
