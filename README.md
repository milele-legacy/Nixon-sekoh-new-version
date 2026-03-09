# Nixon Sekoh — Personal Website (Next.js)

A professional one-page personal website built with **Next.js 14 + TypeScript + Tailwind CSS**.

---

## 🚀 Getting Started in Cursor

### 1. Open the project
```
File → Open Folder → select `nixon-sekoh-website`
```

### 2. Install dependencies
Open the terminal in Cursor (`Ctrl + \`` or Terminal → New Terminal):
```bash
npm install
```

### 3. Run the dev server
```bash
npm run dev
```

Open **http://localhost:3000** in your browser — the site is live! 🎉

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      ← Root layout + metadata
│   ├── page.tsx        ← Main page (assembles all sections)
│   └── globals.css     ← Global styles + animations
└── components/
    ├── Navbar.tsx      ← Sticky nav with mobile menu
    ├── Hero.tsx        ← Full-screen hero section
    ├── About.tsx       ← About + values grid
    ├── Pillars.tsx     ← 3 core pillars cards
    ├── WhyChoose.tsx   ← 4 reasons to book Nixon
    ├── Gallery.tsx     ← Photo gallery grid
    ├── Contact.tsx     ← Contact form + details
    ├── Footer.tsx      ← Footer
    └── useScrollReveal.ts  ← Scroll animation hook

public/
└── images/             ← All photos (already included)
```

---

## 🎨 Customization with Cursor AI

Use Cursor's AI (Ctrl+K or Cmd+K) to make changes. Try prompts like:

- *"Add a LinkedIn URL to the footer social links"*
- *"Add a Testimonials section between Gallery and Contact"*
- *"Connect the contact form to Formspree with this endpoint: ..."*
- *"Add a floating WhatsApp button"*
- *"Make the hero section animate on load with staggered text reveals"*

---

## 🌐 Deploy to Vercel (Free)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at **vercel.com** for automatic deploys.

---

## 📬 Make the Contact Form Work

Replace the form's `handleSubmit` in `Contact.tsx` with Formspree:

```tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch("https://formspree.io/f/YOUR_ID", {
    method: "POST",
    body: new FormData(e.target),
  });
  if (res.ok) setSubmitted(true);
};
```

Get a free form endpoint at **formspree.io**.

---

Built with ❤️ | Nixon Sekoh 2024
