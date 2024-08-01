# Coding Challenge: Enhanced Drone Fleet Management Interface

**Objective:** Develop a web interface to display and manage the status and details of a drone fleet, including an overview and detailed stats for each drone, along with user authentication.

## Requirements:

1. **User Authentication:**
    - Implement a simple user login system.
    - Use a preconfigured JSON file to authenticate users (e.g., username and password).
2. **Drone Fleet Overview:**
    - Display a summary list of all drones in the fleet with basic information (e.g., drone ID, status).
    - Allow users to click on a drone to view detailed information.
3. **Drone Details View:**
    - Show detailed stats for each drone when selected, including:
        - Total flight hours
        - Maintenance logs
        - Battery status
        - Last known location
        - Current mission (if any)
4. **Maintenance Management:**
    - Add a section to display maintenance activities, including:
        - Date of maintenance
        - Description of maintenance performed
        - Technician name
5. **Styling:**
    - Apply a clean, professional design using CSS. Use a modern UI framework like Bootstrap or Tailwind CSS, the choice is up to you.
    - Ensure the interface is well-organized and user-friendly on a PC.
6. **Read-Only Data:**
    - All data should be retrievable from the JSON file and displayed on the dashboard but should not be adjustable through the dashboard.
7. **Dockerization:**
    - Dockerize the application to ensure it can be easily set up and run on any environment.
    - Include a `Dockerfile` and `docker-compose.yml` if necessary.

# Getting Started:

## Prerequisites:
    - Node.js (v18 or later)
    - Docker
    - VS Code Editor

## Setup Instructions:
1. **Clone the Repository**

    Open terminal window:

 ### `git clone https://github.com/justin94thomas/drone-fleet-management`
 ### `cd drone-fleet-management`

2. **Install Dependencies**
 ### `npm install`

    Open terminal window:

 ### `npm start` or `yarn start`

3. **Use the following credentials to login**
## Login Credentials:
    - Username: admin
    - Password: password123

Click on Submit

4. **Navigate the application**

    **You can now view the drones available along with some minor details of the drones in the fleet**
    - Click on the drone card to view its details.
    - Drone preview shows detailed information regarding the activity of the drone.


# Docker Instructions:
## Prerequisites:
    - Docker Desktop Application. https://docs.docker.com/desktop/install/windows-install
    
Open terminal window:

Run the following command in terminal window
### `docker build -t react-app:dev .`

Once the build file completes check if docker image is created or not, you can use the following command to check:

### `docker images`

Now run the following code to run your application.
### `docker run -p 3000:3000 *IMAGE ID*`

The application will be available at http://localhost:3000.

# Troubleshooting

## Common Issues:
    Build Failures: Ensure that all dependencies are correctly installed and specified in package.json.
    Port Conflicts: Check if port 3000 is already in use on your machine.
    Permissions Issues: Ensure proper file permissions for Docker 

# Contact
   - Author: Justin Thomas
   - Email: justin19.94thomas@gmail.com
   - GitHub: justin94thomas