# 🚀 **Mobile Ethics Presentation**
> **Academic Interactive Deck & Research System | React 19 + TypeScript + Vite**  
> _by [mshajkarami.dev](https://mshajkarami.dev)_

[![Deploy to GitHub Pages](https://github.com/mshajkarami/2026-FE-TS-MobileEthicsPresentation--mshajkarami.dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/mshajkarami/2026-FE-TS-MobileEthicsPresentation--mshajkarami.dev/actions/workflows/deploy.yml)
[![License: mshajkarami.dev v1.0](https://img.shields.io/badge/License-mshajkarami.dev_v1.0-blue.svg)](LICENSE)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB.svg)](https://react.dev/)

---

## 🧠 Overview

**Mobile Ethics Presentation** is a next-generation, web-based interactive presentation deck architected under the engineering standard of **Mohammad Saleh Hajkarami (`mshajkarami.dev`)**.  
Built for the **Professional Engineering Ethics** course at **Mohajer Technical College of Isfahan** (Lecturer: **Mrs. Arzoo Sabri**), this presentation serves as a rigorous, data-driven anatomy of ethical concerns across mobile applications.

Rather than relying on static slides or textbook abstractions, this project turns research into an interactive laboratory. It investigates the landmark 2024 empirical research published in *Empirical Software Engineering* (Springer Nature) analyzing **5,864,188 real user reviews** from the Google Play Store across 10 global software platforms.

---

## ⚙️ Tech Stack

| Category | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | React 19.3 + TypeScript | Strict typing, modular functional components |
| **Bundler & Pipeline** | Vite 8 + vite-plugin-singlefile | Self-contained single-file HTML compilation (~1.6 MB) |
| **Styling & Design** | Pure CSS3 Variables + Glassmorphism | Dark theme, neon accents, canvas backdrop, zero bloat |
| **Typography** | `@fontsource/vazirmatn` + `@fontsource/jetbrains-mono` | Persian/Latin bidirectional isolation (`unicode-bidi: isolate`) |
| **Icons** | `lucide-react` | Semantic, lightweight vector iconography |
| **Documentation & Report**| `python-docx` | Automated 5-page formal Word report generator |
| **CI/CD Deployment** | GitHub Actions + GitHub Pages | Instant continuous automated build and preview |

---

## 💡 Key Features

* ✅ **16-Slide Narrative Arc ("Anatomy of..."):** From market monopoly and cognitive manipulation to empirical review analytics and developer accountability.
* ⚡ **Live Interactive Simulator 1 (Ethics Radar Lab):** Multi-platform comparative explorer (TikTok, Uber, Facebook, Instagram, YouTube, LinkedIn, Alexa, Google Home) with live metric breakdowns and real user review streams.
* 📱 **Live Interactive Simulator 2 (Android Dark Pattern Inspector):** Interactive smartphone mockup toggling between anti-patterns and ethical architectural fixes across Android Manifest and Jetpack Compose code.
* 🧩 **Live Interactive Simulator 3 (Classroom Quiz):** 3-question live challenge with 25-second countdown timers, instant feedback, and reference citations.
* 🔒 **Strict Bidirectional (RTL/LTR) Code Isolation:** Persian text flows naturally while technical terms, syscalls, and stats stay strictly isolated in LTR monospace.
* 🪄 **Dual-Mode Presenter UX:** Keyboard shortcuts (`Space`, `Arrows`, `F`, `G`, `N`), wheel debouncing, and spoken notes drawer.
* 📄 **Complete Academic Package:** Includes formal 5-page Persian Word report (`.docx`), spoken scenario script (`PRESENTATION_SCENARIO.md`), and paper distillation (`paper/PAPER_SUMMARY.md`).

---

## 📂 Project Structure

```text
2026-FE-TS-MobileEthicsPresentation--mshajkarami.dev/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages automated deployment
├── paper/
│   └── PAPER_SUMMARY.md            # Detailed scientific summary of Springer paper
├── public/
│   └── favicon.svg                 # Branded vector favicon
├── src/
│   ├── assets/                     # Static icons and badges
│   ├── components/
│   │   ├── ClassQuiz.tsx           # Interactive 3-question live quiz
│   │   ├── EthicsRadarLab.tsx      # Multi-app empirical radar simulator
│   │   ├── MobileDarkPatternSimulator.tsx # Phone mockup & code inspector
│   │   └── SlideRenderer.tsx       # 16-slide responsive rendering engine
│   ├── data/
│   │   ├── ethicsData.ts           # 16 dimensions, app profiles, code diffs, quiz
│   │   └── slidesData.ts           # Slide metadata, presenter notes, key takeaways
│   ├── styles/
│   │   └── global.css              # Glassmorphic dark styling & RTL/LTR rules
│   ├── types/
│   │   └── presentation.ts         # TypeScript data contracts & models
│   ├── App.tsx                     # Presentation container, shortcuts, HUD, notes
│   ├── main.tsx                    # React DOM root entry
│   └── vite-env.d.ts               # Vite client types
├── build_word_report.py            # Python generator for 5-page Word document
├── گزارش_جامع_اخلاق_در_توسعه_نرم_افزار_موبایل.docx # 5-Page Word Report
├── Mobile_Software_Ethics_Final_Report.docx # Alternate English filename copy
├── PRESENTATION_SCENARIO.md        # Full spoken script & presenter cues for Saleh
├── README.md                       # Project documentation
├── LICENSE                         # mshajkarami.dev v1.0 License
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🌐 Live Demo & Source

* 🚀 **Live Interactive Presentation:** [https://mshajkarami.github.io/2026-FE-TS-MobileEthicsPresentation--mshajkarami.dev/](https://mshajkarami.github.io/2026-FE-TS-MobileEthicsPresentation--mshajkarami.dev/)
* 🐙 **Source Code:** [https://github.com/mshajkarami/2026-FE-TS-MobileEthicsPresentation--mshajkarami.dev](https://github.com/mshajkarami/2026-FE-TS-MobileEthicsPresentation--mshajkarami.dev)

---

## 📚 Academic Metadata

* **Institution:** Mohajer Technical and Vocational College of Isfahan
* **Course:** Professional Engineering Ethics (اخلاق حرفه‌ای مهندسی)
* **Lecturer:** Mrs. Arzoo Sabri (سرکار خانم آرزو صبری)
* **Presenter:** Mohammad Saleh Hajkarami (محمد صالح حاج‌کرمی)
* **Reference Paper:** *The best ends by the best means: ethical concerns in app reviews* (Empirical Software Engineering, Springer Nature, 2024. DOI: `10.1007/s10664-024-10463-7`)

---

## 👨‍💻 About the Developer

**Mohammad Saleh Hajkarami** — _Mobile & Multiplatform Engineer_  
📍 Isfahan, Iran  
💻 Specializing in Kotlin & Compose Multiplatform (CMP) • Ktor • On-Device AI  
🚀 Founder of **[mshajkarami.dev](https://mshajkarami.dev)**  
🐙 [GitHub Profile](https://github.com/mshajkarami) • 💼 [LinkedIn](https://linkedin.com/in/mshajkarami)

> Passionate about building robust, scalable architectures and production-grade cross-platform systems.

---

## 🪄 License

Released under the **mshajkarami.dev License (v1.0)**.  
Free for personal, academic, and non-commercial educational use. See [`LICENSE`](LICENSE) for complete terms.

---

> _“Code is temporary, but structure is forever.”_  
> — **mshajkarami.dev**
