# Sanhinda Liyanage — Portfolio Setup Guide

## 📁 Folder Structure

```
portfolio/
├── index.html       ← Main HTML file
├── style.css        ← All styles (maroon/cranberry theme)
├── script.js        ← Animations, interactions, effects
└── README.md        ← This file
```

---

## 🚀 Getting Started

1. Create a folder called `portfolio` (or any name you like)
2. Copy all 3 files (`index.html`, `style.css`, `script.js`) into that folder
3. Open `index.html` in your browser — done!

---

## 📸 Adding Your Photos

### Hero Profile Photo (Home section)
Find this comment in `index.html`:
```
<!-- ===== ADD YOUR PROFILE PHOTO HERE ===== -->
```
Replace the placeholder `div` with:
```html
<img src="your-photo.jpg" alt="Sanhinda Liyanage" class="profile-photo" />
```
Place your photo in the same folder. Recommended size: **400×500px**.

### About Section Photo
Find:
```
<!-- ===== ADD YOUR ABOUT PHOTO HERE ===== -->
```
Replace the placeholder with:
```html
<img src="about-photo.jpg" alt="About Sanhinda" class="about-photo" />
```

### Project Screenshots
For each project card, find `project-img-placeholder` divs and replace with:
```html
<img src="project-name.jpg" alt="Project Name" class="project-img" />
```
Recommended project image size: **800×440px**.

---

## 🔗 Important Links to Update

Open `index.html` and update:

| Placeholder | Replace With |
|---|---|
| `YOUR_GOOGLE_DRIVE_LINK` | Your actual Google Drive CV link (appears twice) |
| Behance `href="#"` | Your Behance profile URL |
| Instagram `href="#"` | Your Instagram URL |
| Project `href="#"` | Each project's live/demo URL |

---

## 📧 Contact Form

The form currently shows a "Message Sent" simulation.
To make it actually send emails, replace the `setTimeout` block in `script.js` with a real service like:
- **Formspree**: `action="https://formspree.io/f/YOUR_ID"` on the form tag
- **EmailJS**: JavaScript email sending
- **Netlify Forms**: Add `data-netlify="true"` if hosted on Netlify

---

## 🎨 Color Reference

| Variable | Color |
|---|---|
| `--maroon` | #9B2335 |
| `--cranberry` | #B5345A |
| `--raspberry` | #C0405E |
| `--light-mar` | #D4617A |
| `--blush` | #E8A0AF |

---

## ✨ Features

- Custom magnetic cursor
- Scroll progress bar
- Parallax hero background shapes
- Typing animation on hero label
- Intersection Observer scroll reveals
- Card tilt on mouse move
- Project filter (All / Web / Graphic)
- Experience tabs (Work / Volunteering / Education)
- Skills marquee ticker
- Mobile hamburger menu
- Responsive for all screen sizes
