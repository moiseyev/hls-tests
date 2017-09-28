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

## Results

### OS X Safari

| OS Version    | Safari Version | canPlayType<sup>1</sup> | canPlayType<sup>2</sup> | Play |
| ------------- |:--------------:|:-----------------------:|:-----------------------:|:----:|
| Snow Leopard  | 5.1            | ✓                       | ✓                       | ?    |
| Lion          | 6.0            | ✓                       | ✓                       | ?    |
| Mountain Lion | 6.2            | ✓                       | ✓                       | ✓    |
| Mavericks     | 7.1            | ✓                       | ✓                       | ?    |
| Yosemite      | 8.0            | ✓                       | ✓                       | ✓    |
| El Capitan    | 9.1            | ✓                       | ✓                       | ✓    |
| Sierra        | 10.0           | ✓                       | ✓                       | ✓    |

1: `canPlayType('application/vnd.apple.mpegURL')`
2: `canPlayType('application/x-mpegurl')`