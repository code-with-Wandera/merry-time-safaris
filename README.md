# Merry Time Africa Safaris & Expeditions 🐘✈️

Welcome to the official source code for **Merry Time Africa Safaris & Expeditions**, a full-stack web application designed for browsing East African wildlife safaris, mountain expeditions, and submitting custom tailor-made tour enquiries.

---

## Tech Stack
* **Frontend:** React, Vite, Tailwind CSS, DaisyUI, Lucide Icons, React Router DOM
* **Backend:** Node.js, Express.js
* **Database:** MySQL

---

## Getting Started for Beginners (Step-by-Step)

Follow these instructions carefully to clone the repository and set up your local development environment.

### Prerequisites
Make sure you have the following installed on your computer:
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* [Git](https://git-scm.com/)
* A local MySQL server (such as **XAMPP**, **WampServer**, or **MySQL Workbench**)

---

### Step 1: Clone the Repository
Open your terminal (or Command Prompt / Git Bash) and run:
```bash
git clone [https://github.com/code-with-wandera/merry-time-safaris.git](https://github.com/code-with-wandera/merry-time-safaris.git)
cd merry-time-safaris

# Step 2: Set up Database
1. Open your MySql tool eg phpMyAdmin or MySQL Workbench

2. Create a new database and name merry_time_africa

3. Run Sql schema script provided in the backend or simply execute table creation queries for destinations, safaris, enquiries and reviews

# Step 3: Configure the backend server
1. navigate to the server folder 
cd server 

2. install the backend dependancies
npm install 

3. create a .env file inside your server folder to store your private configurations. copy the following lines into your new .env file and update them with your local mysql password

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your mysql password
DB_NAME=merry_time_africa

NOTE: Never commit the .env files it is already included in the .gitignore to keep your passwords secure 

4. Start the backend server
npm run dev (you will see server running on port 5000)

# step 4 configure the frontend client
1. open new separate terminal window in the 
2. root project directory 
cd client 
3. install frontend dependancies 
npm install 
4. start the vite development server
npm run dev 
5. click on the link http://localhost:5173/ to open the browser 


    ###########
Git Collaboration Rules
Never commit node_modules/ or .env files.

Always pull the latest changes before starting your work session:

Bash
git pull origin main
Create a new branch for any new feature you are building:

Bash
git checkout -b feature/your-feature-name

