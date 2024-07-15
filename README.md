# Playwright guthub autotests
## How to launch the tests locally
You must have Node.js and a Google Chrome browser installed on your local machine.
1. clone repository
2. update test data with your data
3. run `npm i`
4. run `npx playwright test`
## Running Tests in Docker
- Build the Docker image:
- run `docker build -t playwright-tests .`
- Run the tests:
- run `docker run --rm playwright-tests`
