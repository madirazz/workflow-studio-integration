# **Project Documentation: Workflow Studio Integration**

## **Project Overview**
This project integrates Workflow Studio with a custom Node.js server to facilitate automated document verification workflows. The integration leverages webhook listeners, API interactions, and Trulioo verification services to streamline the document verification process.

---

## **Prerequisites**
Before you begin, ensure that you have met the following requirements:

- **Node.js and npm** installed locally.
- **Access to Workflow Studio** to create and publish workflows.
- **ngrok** for exposing your local server (if testing externally).

---

## **Setup and Installation**

### **Clone the Repository**
Clone the project to your local machine using the following command:


```
git clone https://github.com/madirazz/workflow-studio-integration.git
cd workflow-studio-integration
```

## Install Dependencies

Install the necessary dependencies by running:


```
npm install
```

## Run the Server

To start the server, use the following command:


```
node .\server.js
```

The server will now be running on `http://localhost:3000.`

## Expose Local Server via ngrok

Use ngrok to expose your local server for external webhook testing. Run:



```
ngrok http 3000
```

This will generate a public URL such as `https://<your-ngrok-id>.ngrok.io.` Copy this URL for use in the workflow.

# Workflow Studio Configuration

## Create a Workflow:

Create a workflow in Workflow Studio to define the process similar to the picture [here](https://docs.verification.trulioo.com/sdk/wfs/index.html#1-set-up-a-workflow-form)

To update your Workflow Studio setup by enabling events in the API export and modifying the Request URL, follow these steps:

1.  **Enable Events in the API Export**:
  - Open Workflow Studio and navigate to your workflow.
  - Go to **API Export** settings.
  - Look for the option to **Enable Events** and switch it on.
2.  **Modify the Request URL**:

   - In the **Request URL** field, change the URL to your exposed URL, ensuring it ends with `/webhook`.
   - For example, change the current URL to something like: `https://your-exposed-url.com/webhook`.
3.  **Save Changes**:

   - Once you’ve modified the Request URL, click on **Save Changes** to ensure the configuration is stored.
4.  **Publish the Workflow**:

   -   After saving, go back to the workflow overview and click **Publish** to push the updated workflow.

---

## **End-to-End Testing Steps**

Follow these steps to perform end-to-end testing of the Workflow Studio Integration:

### **1. Verify Server Setup**

-   Ensure the Node.js server is running without errors.
-   Confirm that ngrok is successfully exposing the server and that the public URL is active.

### **2. Access the Deployed Website**

-   Open the public URL in a web browser.
-   Verify that the workflow form is correctly embedded and visible.

### **3. Submit the Workflow Form**

-   Fill out the form with valid test data.
-   Submit the form to trigger the workflow.

### **4. Verify External API Interaction**

-   Ensure that the server processes the webhook data and interacts with the Trulioo API as intended.
-   Confirm that any actions dependent on the Trulioo API (e.g., data verification) are executed successfully.

### **5. Validate the Workflow Execution**

-   Back in Workflow Studio, verify that the workflow has executed without errors.
-   Check client manager section within Workflow Studio to ensure the workflow completed successfully.

---

## **Expected Outcomes**

Upon successful completion of the end-to-end testing, the following outcomes should be observed:

1.  **Server Operations**
    -   The Node.js server starts without errors and listens on the specified port.
    -   ngrok successfully exposes the server to a public URL.
      
2.  **Workflow Form Functionality**
    -   The workflow form is accessible and correctly embedded on the website.
    -   Submitting the form triggers the workflow in Workflow Studio.
      
3.  **Webhook Processing**
    -   The server receives the webhook payload from Workflow Studio.
    -   The payload is logged in the server terminal, confirming receipt.
       
4.  **External API Integration**
    -   The server successfully interacts with the Trulioo API using the provided credentials.
    -   Responses from the Trulioo API are handled appropriately within the server.
      
5.  **Workflow Execution**
    -   The workflow in Workflow Studio completes without errors.
    -   All defined actions and triggers within the workflow function as expected.

