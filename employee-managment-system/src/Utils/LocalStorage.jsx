const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Homepage Hero Section",
        "taskDescription": "Redesign the hero section with the new brand colors and add a call-to-action button.",
        "taskDate": "2026-08-21",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Navigation Bug",
        "taskDescription": "Resolve the issue where the mobile hamburger menu doesn't close on click.",
        "taskDate": "2026-08-15",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Integrate Payment Gateway",
        "taskDescription": "Connect the Stripe API to the checkout page.",
        "taskDate": "2026-08-10",
        "category": "Backend"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Increase test coverage for the user authentication module.",
        "taskDate": "2026-08-22",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Optimize Image Assets",
        "taskDescription": "Compress and convert all site images to WebP format to improve load times.",
        "taskDate": "2026-08-23",
        "category": "Performance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Documentation",
        "taskDescription": "Add comments and update the README file for the new API endpoints.",
        "taskDate": "2026-08-18",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Discuss the wireframes for the upcoming dashboard feature.",
        "taskDate": "2026-08-19",
        "category": "Meeting"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create User Personas",
        "taskDescription": "Draft 3 different user personas based on recent analytics data.",
        "taskDate": "2026-08-25",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Draft Monthly Newsletter",
        "taskDescription": "Compile the top articles and updates for the September newsletter.",
        "taskDate": "2026-08-20",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Social Media Campaign",
        "taskDescription": "Launch the ad campaign on Twitter and LinkedIn. (Paused due to budget).",
        "taskDate": "2026-08-12",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Migration",
        "taskDescription": "Move user data from the old MongoDB cluster to the new PostgreSQL database.",
        "taskDate": "2026-08-28",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Server Maintenance",
        "taskDescription": "Perform routine security patching on the production servers.",
        "taskDate": "2026-08-10",
        "category": "DevOps"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Setup CI/CD Pipeline",
        "taskDescription": "Configure GitHub Actions to automatically deploy on push to the main branch.",
        "taskDate": "2026-08-24",
        "category": "DevOps"
      }
    ]
  },
  {
    "id": 5,
    "email": "rajibkhan71592@gmail.com",
    "password": "rajib@employee.com",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Onboarding",
        "taskDescription": "Complete the HR onboarding documentation and security training.",
        "taskDate": "2026-08-01",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Review Pull Requests",
        "taskDescription": "Review and merge open PRs for the authentication service.",
        "taskDate": "2026-08-21",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Sync",
        "taskDescription": "Weekly standup with the design and engineering teams.",
        "taskDate": "2026-08-22",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Memory Leak",
        "taskDescription": "Investigate and resolve the memory leak in the background worker process.",
        "taskDate": "2026-08-17",
        "category": "Bug Fix"
      }
    ]
  }
];

const admin = [
  {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const  setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}  

export const getLocalStorage = () => {
  const emplyees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

 console.log(employees, admin)
 return { employees, admin }
}