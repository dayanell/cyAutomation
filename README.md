# Cypress - Web Testing Automation

This repository demonstrates my ability to create test automation using Cypress. It includes 5 test suites that validate various flows on the website [Vue Vuex Realworld](https://vue-vuex-realworld.netlify.app/#/). The website is a real-world example showcasing features and functionality implemented using Vue.js, a popular JavaScript framework for building user interfaces.

## Test Suites

1. User Sign Up
2. User Sign In
3. Create Article
4. Edit Article
5. Delete Article

## Jenkins Integration

I have utilized Jenkins to create builds and run the tests from a Git repository. You can view the test results and reports using the following link:

- [Test Results (tests run from Jenkins)](https://cloud.cypress.io/projects/1t7est/runs/31/test-results?actions=%5B%5D&browsers=%5B%5D&groups=%5B%5D&isFlaky=%5B%5D&modificationDateRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D&orderBy=EXECUTION_ORDER&oses=%5B%5D&specs=%5B%5D&statuses=%5B%5D&testingTypesEnum=%5B%5D)

Please refer to the above link to access the detailed test results and reports.

## Test Execution

You can view and pull the code from the Git repository:

- [GitHub Repository](https://github.com/dayanell/cyAutomation)

## Test Scripts Overview

- Commands were implemented to facilitate test execution.
- The `Cypress.on("uncaught:exception", (err, runnable) => { return false; })` command was added to handle uncaught exceptions and prevent test failures. This was necessary as uncaught exceptions were encountered during execution.
- The custom command `stopAllXHR` was created to intercept and abort requests matching a specific URL pattern. This was necessary to handle requests that caused infinite loading and disrupted the tests.
- By setting `CYPRESS_DISABLE_SOURCE_MAPS` to `true`, Cypress is instructed to disable the use of source maps to improve the speed of test runs. This variable was set to `true` because running all scripts together (instead of running them individually) resulted in test failures due to timeouts caused by the source map generation process.
- Page objects were utilized to generate the specs and commands. Any updates to DOM elements can be made in the page objects, providing ease of maintenance.
- A base page was created to encapsulate actions and isolate them from the test files. It is recommended not to interact with the base page directly from the test files; instead, it should be accessed through the page objects files. This helps maintain a clear separation of concerns and promotes better code organization.
- An environment variable was introduced to define the domain, allowing easy testing across different environments such as QA, Dev, and Homologation.
- The tests were designed with isolation, ensuring zero dependencies between them.
- The existing scripts cover the basic scenarios for the 5 flows requested. If additional test scenarios are needed, I am willing to create them on Wednesday. However, I believe the existing scripts are sufficient to evaluate my skills for the job opportunity. Please let me know if there are any specific areas you would like me to address.

## Bug Example Report

This bug is a simulated example. For more complex bugs, I would provide additional details, including browser and device information, and any other relevant information that helps in identifying and resolving the bug.

---

**Bug Report: Bug 001**

**Test Case:** [Test Case Code] should add an article to the website

**Environment:** QA

**Bug Title:** Fields are not clearly indicated as mandatory on the page to add/edit articles

**Steps to Reproduce:**
1. Log in to the application.
2. Click on the "New Article" link on the top menu bar.

**Actual Result:**
The mandatory fields for adding the title, description, and article content are not indicated as mandatory.

**Expected Result:**
The mandatory fields should be clearly indicated as mandatory, ensuring that users are aware that these fields must be filled in order to successfully add an article.
(Note: The "Tag" field is not mandatory; the user can leave it blank.)

---

Please note that the application may have several other issues, but they have not been addressed in this document. However, I have provided an example bug based on the application to demonstrate the bug reporting process I follow. It showcases how I identify and document issues within an application.

In the `package.json`, I added the scripts to run from Jenkins. Additionally, in the Jenkins configuration, I added the Git repository as a code source for the execution of the jobs.

By using the key provided by the Cypress Cloud application and integrating it with Jenkins, the test executions were automatically reported, and generated reports were available. This integration allows for seamless execution of tests and easy access to comprehensive reports that include detailed information such as test results, videos, scripts, and other relevant data. Ithelps in tracking the test execution status, identifying issues, and facilitating collaboration among team members.

Please note that the usage of Cypress Cloud for reports at Raidiam is not confirmed. However, I have provided the link to the test execution reports where you can access detailed information, including videos, scripts, test results, and more.

In my test approach, I did not intentionally create tests to fail. Instead, I followed a process where I executed the scenarios manually first to identify any bugs. Once a bug was discovered, I reported it and waited for it to be fixed. After the fix was implemented, I performed a confirmation test. Only after confirming the fix, I implemented the automated script and added it to the regression test suite. Therefore, intentional failures will not be found in the reports.

Feel free to explore the GitHub repository for the test code and further details on the implementation.

If you have any additional questions or need further assistance, please let me know!
