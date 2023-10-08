# Creating HTTPS Endpoints with Google Cloud Platform's (GCP) Cloud Functions

## Description

This guide will walk you through the process of creating HTTPS endpoints using GCP's Cloud Functions, which served as essential APIs/endpoints for both our frontend application and Arduino device in our modular bacterial biosensors project.

In our project, we have developed a toolkit that combines biofilm detection, phage-based disruption, real-time communication, and mobile/web application presentation. These HTTPS endpoints play a crucial role in enabling communication between various components:

- **Frontend Application:** The HTTPS endpoints serve as communication bridges, allowing your frontend application to interact with the core functionality of the biosensor system. Data can be transmitted, received, and processed in real-time, facilitating user-friendly access to biofilm information.

- **Arduino Device:** Likewise, the Arduino device, as part of the biosensor system, relies on these endpoints to securely report the presence of biofilm infections. Real-time data transmission ensures that infections are detected promptly, providing a critical advantage in prosthetic joint infection management.

## Prerequisites

- A Google Cloud Platform (GCP) account. You can sign up for GCP [here](https://cloud.google.com/).
- Basic knowledge of Python.

## Getting Started

Follow these steps to create an HTTPS endpoint with Google Cloud Functions:

1. **Create a New Google Cloud Function:**
   
   - Open the [Google Cloud Console](https://console.cloud.google.com/).
   - Select your project or create a new one.
   - In the left sidebar, navigate to **Cloud Functions**.

2. **Click "Create Function":**
   
   - Click the "Create Function" button to start creating a new function.

3. **Configure Your Function:**
   
   - Give your function a name and optionally specify a description.
   - Choose the runtime environment (For this module, we obviously used Python).
   - Select the trigger type as "HTTP".
   - Choose the authentication method (if required).
   - Set up the function's source code (inline editor or upload a ZIP file).

4. **Write/Copy Your Function:**
   
   - Write the code for your Cloud Function, or upload our code (with your own unique credentials).
   - Remember to also upload a `requirements.txt` to your Cloud Function. 
