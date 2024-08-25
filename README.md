**Introduction:**
This documentation outlines the functionalities, architecture, and usage instructions for the MERN Face Recognition Application. This application leverages the MERN stack (MongoDB, Express.js, React.js, Node.js) for its backend and frontend components and utilizes the face-api.js library for face recognition capabilities.

**Features:**
1. **User Authentication:** Users can register, login, and logout securely.
2. **Face Recognition:** Utilizes face-api.js for facial recognition functionality.
3. **Image Upload:** Users can upload images containing faces for recognition.
4. **Face Detection:** Detects faces within uploaded images.
5. **Face Matching:** Matches detected faces with registered user faces.

**Architecture:**
1. **Backend:**
   - Built with Node.js and Express.js.
   - Utilizes MongoDB for data storage, including user information and face recognition data.
   - Implements RESTful APIs for communication with the frontend.
   - Integrates face-api.js for facial recognition functionality.

2. **Frontend:**
   - Developed with React.js , vite.js .
   - Provides a user-friendly interface for interacting with the application.
   - Allows users to register, login, upload images, and view face recognition results.
   - Incorporates UI components for displaying face detection and recognition results.

**If Error Occurs Just Follow These Installation:**
1. **Backend Setup:**
   - Clone this repository.
   - Navigate to the backend directory.
   - Run `npm install` to install dependencies.
   - Configure environment variables for MongoDB connection and other settings.
   - Start the server by running `npm start`.

2. **Frontend Setup:**
   - Navigate to the frontend directory.
   - Run `npm install` to install dependencies.
   - Update API endpoint URLs in the codebase to match the backend server.
   - Start the frontend server by running `npm run dev`.

3. **Face Recognition Setup:**
   - Ensure face-api.js is properly installed and configured in the backend.
   - Train the model with facial data as needed for recognition accuracy.
   - Update recognition parameters and thresholds according to application requirements.

**Usage:**
1. **User Authentication:**
   - Register a new account or login with existing credentials.

2. **Image Upload:**
   - Navigate to the upload page.
   - Select an image file containing one or more faces for recognition.
   - Submit the image for processing.

3. **Face Recognition:**
   - The application will detect and recognize faces within the uploaded image.
   - Matched faces will be displayed along with corresponding user information.
