# HLS Tests

## Setup
* Clone the repo
* Install dependencies `npm install`
* Export the environment variables for the Username and Access Key of your BrowserStack account with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings)
  ```
  export INTERN_ARGS="tunnelOptions.username=USERNAME tunnelOptions.accessKey=KEY"
  ```

## Running your tests
* `npm run test` – to run local tests
* `npm run test:bs:osx:safari` – to run BrowserStack OS X Safari tests

## Notes
* You can view your test results on the [BrowserStack automate dashboard](https://www.browserstack.com/automate)
