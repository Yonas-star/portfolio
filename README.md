# Windows 10 UI Clone – Portfolio of **Yonas Kassahun**

## 📖 Overview

This project is an interactive portfolio website designed as a Windows 10 desktop clone.
It provides a unique way to showcase my skills, projects, and professional information through a familiar Windows 10 interface.
Users can interact with the desktop, open applications, and explore content just like on a real Windows 10 system.

## ✨ Features

* Realistic **Windows 10 UI** with taskbar, start menu, and desktop icons
* **Interactive windows** that can be moved, resized, minimized, and closed
* **Login screen** with animation
* **File Explorer** to browse portfolio content
* Portfolio sections presented as folders:

  * Projects
  * Personal Information
  * Skills
  * Education
  * Certifications
  * Contact Information

## 🛠️ Technologies Used

* React.js – Frontend library
* Next.js – React framework
* Framer Motion – Animations
* CSS Modules – Styling
* Lucide React – Icons

## 🖥️ Usage

1. **Login Screen** → Windows 10-style login page with smooth animations.
2. **Desktop** → Icons to open portfolio sections.
3. **Start Menu** → Access to apps and sections.
4. **Taskbar & Windows** → Switch between apps, minimize, maximize, and close windows.

## 📂 Project Structure

```
yonas-portfolio/
├── app/                  # Next.js app directory
│   ├── layout.js         # Root layout
│   ├── page.js           # Main page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── Desktop.js
│   ├── LoginScreen.js
│   ├── StartMenu.js
│   ├── Taskbar.js
│   └── Window.js
├── data/                 # Data files
│   └── apps.js
├── public/               # Static assets
│   └── images/
└── ...                   # Config files
```

## 🔄 Application Flow

* App starts with **Login Screen**
* After login → **Desktop, Taskbar, Start Menu** are shown
* Windows (Projects, Skills, Info, etc.) open dynamically
* Taskbar manages active/minimized apps

## 📱 Responsive Design

* Fully works on desktop
* Adjusts UI on smaller devices for usability

---

✨ Built with passion by **Yonas Kassahun**


