# 🏢 Employee Management System

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)

**A modern, role-based Employee Management System with a clean, Pinterest-inspired UI.**

Create tasks. Assign them. Track them to completion — all with persistent state, zero backend required.

[Features](#️-features) • [Architecture](#-repository-navigation) • [Getting Started](#-quick-start--installation) • [Roadmap](#-roadmap)

</div>

---

## 🌟 Overview

This project separates users into two distinct roles, each with a purpose-built experience:

| Role | Capabilities |
|------|-------------|
| 🛡️ **Admin** | Create new tasks, assign them to specific employees, and monitor the global status of every project in one dashboard. |
| 👤 **Employee** | View a personalized feed of assigned tasks, accept them, and update their lifecycle status (Completed / Failed). |

The entire application is powered by the **React Context API**, which manages authentication and task data globally — no prop-drilling, no tangled state. **LocalStorage** persists both the user session and task data, so a page reload never wipes progress.

## 🛠️ Features

- 🔐 **Authentication System** — Secure login that distinguishes between Admin and Employee user types
- 🎭 **Role-Based Dashboards** — Completely different UI/UX depending on the logged-in user's role
- 🔄 **Task Lifecycle Management** — Tasks flow through clear states: `New → Active → Completed / Failed`
- 🎨 **Pinterest-Style UI** — Soft backgrounds, rounded cards, and bold interactive elements built with Tailwind CSS
- 💾 **Data Persistence** — Seamless session and task retention across browser reloads, powered by LocalStorage

## 📂 Repository Navigation

The codebase is modularly structured for high maintainability and a clear separation of concerns.

```
src/
├── assets/                        # New folder for static assets (images, icons, etc.)
├── Components/
│   ├── Auth/
│   │   └── Login.jsx              # Secure login, routes users by role
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx     # Command center for creating & distributing tasks
│   │   └── EmployeeDashboard.jsx  # Masonry-style grid of assigned tasks
│   ├── Others/                    # Folder for shared/other components
│   │   ├── Header.jsx             # UI for the top navigation or heading section
│   │   └── TaskListNumbers.jsx    # UI for displaying task statistics/numbers
│   └── Tasklist/
│       ├── AcceptTask.jsx         # UI for newly assigned tasks
│       ├── CompleteTask.jsx       # UI for successfully finished tasks
│       ├── FaildTask.jsx          # UI for tasks marked as failed
│       ├── NewTask.jsx            # Card design for incoming tasks
│       └── TaskList.jsx           # New main list component rendering the tasks
├── Context/
│   ├── AuthContext.jsx            # Global login state + session persistence
│   └── TaskContext.jsx            # Global task array, distributed to employee views
├── Pages/                         # Page layouts assembling the components above
├── Utils/
│   └── LocalStorage.jsx           # Helpers bridging browser storage and Context API
├── App.jsx                        # Traffic controller — conditional rendering by auth status
└── main.jsx                       # Entry point, wraps the app in Context providers
```

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Library | React |
| Styling | Tailwind CSS |
| Build Tool | Vite |
| State Management | React Context API |
| Persistence | Browser LocalStorage |

## 🚀 Quick Start & Installation

To run this project locally on your machine, follow these steps:

**1. Clone the repository**

```bash
git clone https://github.com/your-username/employee-managment-system.git
```

**2. Navigate into the project directory**

```bash
cd employee-managment-system
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

The app will be running at `http://localhost:5173` 🎉

## 🗺️ Roadmap

- [ ] Backend integration (replace LocalStorage with a real API)
- [ ] Task due dates & reminders
- [ ] Search and filtering on the Admin dashboard
- [ ] Dark mode

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues) or open a pull request.

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
Made with ❤️ using React + Tailwind CSS
</div>
