# Lead Management Application

This project is a **Next.js** frontend application designed to create, view, and manage leads. It includes both public and internal UIs:

- A **public form** for prospects to submit their information.
- An **internal dashboard** for authorized users to view and update lead information.

## Features

### Public Lead Form

- A publicly available form for prospects to fill in with required fields:
  - First Name
  - Last Name
  - Email
  - LinkedIn URL
  - Visa type (multiple select options)
  - Resume/CV upload (file)
  - Open text input
- Displays a confirmation message upon successful submission.

### Internal Leads Dashboard

- A table to display all submitted leads, accessible only by authenticated users.
- Table functionalities:
  - **Search**: Search by name or country.
  - **Status filter**: Filter leads by their status (`Pending`, `Reached Out`).
  - **Pagination**: View leads with pagination.
  - **Sortability**: Sort leads by various columns such as name, date, or status.
  - **Update status**: Transition a lead from **`PENDING`** to **`REACHED_OUT`**.

### Admin Panel

- A sidebar on the left with links for **Leads** and **Settings**.
- Main content area with a **Leads List** that includes sorting, filtering, and pagination.

## Technology Stack

- **Next.js**: The core framework used to build the application.
- **React Table**: For rendering the leads list with sorting, filtering, and pagination.
- **Material UI**: For UI components and styling.
- **JSON Forms**: For rendering the lead form in a configuration-driven way.
- **Styled-Components**: For creating responsive and styled UI components.
- **TypeScript**: For static type checking and improved developer experience.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/lead-management-app.git
   cd lead-management-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or if you prefer yarn
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

   Open [http://localhost:3000/admin](http://localhost:3000/admin) with your browser to see the Lead List admin panel. Login credentials are -
   Username: admin / password: password

### File Structure

```
.
├── app
│   ├── api
│   │   └── leads
│   │       └── route.ts   # API routes for fetching and updating leads
│   ├── admin              # Admin dashboard
│   ├── leadForm.tsx       # Lead Form component
│   ├── LeadsList.tsx      # Leads table component
│   └── page.tsx           # Home page
├── components
│   └── Sidebar.tsx        # Admin panel sidebar
├── public
│   └── logo.png           # Company logo
├── styles
│   └── global.css         # Global CSS
└── ...
```

### API Routes

- **GET `/api/leads`**: Fetch all leads (mocked).
- **POST `/api/leads`**: Submit a new lead.
- **PUT `/api/leads`**: Update a lead's status.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
# or
yarn build
```

After the build completes, start the server:

```bash
npm start
# or
yarn start
```

The app will run in production mode.

## Development Notes

- **Public Form**: Uses **JSON Forms** to generate the form dynamically from a schema.
- **Admin Panel**: Protected by a mock authentication mechanism.
- **Leads List**: Implemented using **React Table** for powerful sorting, filtering, and pagination features.
- **State Management**: The application is primarily driven by React state hooks without external state management libraries.

## Future Improvements

- Implement real authentication (e.g., OAuth, JWT).
- Add support for editing leads directly within the dashboard.
- Add better form validation and error handling.
- Unit Testing

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to adjust the repository URL and any additional details specific to your project!
