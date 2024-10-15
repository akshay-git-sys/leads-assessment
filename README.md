# Lead Management Application

This project is a **Next.js** frontend application designed to create, view, and manage leads. It includes both public and internal UIs, allowing prospects to submit their information and authorized users to view and update lead information through an admin dashboard.

## Features

### Public Lead Form

- A publicly available form for prospects to fill in with required fields:
  - First Name
  - Last Name
  - Email
  - LinkedIn URL
  - Visa type (multiple select options)
  - Resume/CV upload (file)
  - Open text input for additional information
- Displays a confirmation message upon successful submission.
- Uses **JSON Forms** to dynamically render the form based on a schema.
- Built with responsive design to ensure accessibility across devices.

### Internal Leads Dashboard

- **Table View**: A table to display all submitted leads, accessible only by authenticated users.
  - **Search**: Search leads by name or country.
  - **Status Filter**: Filter leads by their status (`Pending`, `Reached Out`).
  - **Pagination**: Paginate through leads for better navigation.
  - **Sortability**: Sort leads by various columns such as name, date, or status.
  - **Update Status**: Transition a lead from **`PENDING`** to **`REACHED_OUT`** via a dropdown.
- **Sidebar Navigation**: Admin dashboard includes a sidebar with links for **Leads** and **Settings**, highlighting the current active section in bold.
- **Login Authentication**: Mock login system to access the admin panel (Username: `admin`, Password: `password`).

### Design & UI

- **Responsive Design**: The application is built with mobile-first design principles using **styled-components**.
- **Buttons**: All buttons have a consistent style with **black background and white text** for a sleek, modern look.
- **Aesthetic Improvements**: Form elements, buttons, and overall layouts have been optimized for a more user-friendly and visually pleasing interface.

### Admin Panel

- **Leads Management**: The leads list in the admin dashboard supports sorting, filtering, and pagination.
- **Sidebar**: A simple sidebar on the left with links to manage **Leads** and access **Settings**, with the active section displayed in bold.
- **Table Functionality**:
  - Search for leads by name or country.
  - Filter leads by their status (`Pending`, `Reached Out`).
  - Sortable columns to organize data based on the user's preference.
  - Status dropdown to update lead status easily.

## Technology Stack

- **Next.js**: The core framework used to build the application.
- **React Table**: For rendering the leads list with sorting, filtering, and pagination.
- **Material UI**: For UI components and styling.
- **Styled-Components**: For creating responsive and styled UI components.
- **JSON Forms**: For rendering the lead form in a configuration-driven way.
- **Axios**: For handling API requests.
- **TypeScript**: For static type checking and improved developer experience.
- **Jest & React Testing Library**: For unit tests to ensure code reliability.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/lead-management-app.git
   cd lead-management-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or if you prefer yarn
   yarn install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

   Open [http://localhost:3000/admin](http://localhost:3000/admin) with your browser to see the Lead List admin panel. Login credentials are:
   Username: `admin` / password: `password`

### File Structure

```
.
├── app
│   ├── api
│   │   └── leads
│   │       └── route.ts        # API routes for fetching and updating leads
│   ├── admin                   # Admin dashboard
│   ├── leadForm.tsx            # Lead Form component
│   ├── LeadsList.tsx           # Leads table component
│   └── page.tsx                # Home page
├── components
│   └── Sidebar.tsx             # Admin panel sidebar
├── public
│   └── logo.png                # Company logo
├── styles
│   └── global.css              # Global CSS
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

## System Design

### Architecture Overview

The system follows a **client-server architecture** with the following components:

1. **Frontend**: A Next.js application serves both public and private interfaces.
   - The **public form** allows lead submissions and sends the data to the backend.
   - The **admin dashboard** retrieves and updates lead data from the API.
2. **API Layer**: Next.js API routes handle backend operations such as:

   - Submitting new leads.
   - Fetching lead data for the admin panel.
   - Updating lead statuses.

3. **State Management**: State is managed within individual components using React hooks.
   - **Axios** is used to handle API requests and manage data flow between the frontend and backend.

### Component Breakdown

- **LeadForm**: Uses **JSON Forms** to generate a schema-driven form. Data is submitted to the backend via API.
- **LeadsList**: Renders the admin table for managing leads, including sorting, filtering, and pagination features using **React Table**.
- **Login**: A simple login component with mock authentication.
- **Admin Panel**: Features a responsive sidebar and leads table to manage the system efficiently.

### Future Improvements

- Implement real authentication (e.g., OAuth, JWT).
- Add support for editing lead details directly in the admin dashboard.
- Implement additional validation and error-handling mechanisms.
- Integrate file storage for CVs using cloud services like AWS S3.
- Improve email notifications and alerts for new submissions or lead updates.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
