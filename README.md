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

### Native HLS support on OS X Safari

| OS Version | Safari Version | canPlayType<sup>[1](#fn)</sup> | canPlayType<sup>[2](#fn)</sup> | video.paused === false | Real Play |
| ------------- |:----:|:-----:|:-----:|:-:|:-:|
| Snow Leopard  | 5.1  | maybe | maybe | ✓ | × |
| Lion          | 6.0  | maybe | maybe | ✓ | ✓ |
| Mountain Lion | 6.2  | maybe | maybe | ✓ | ✓ |
| Mavericks     | 7.1  | maybe | maybe | ✓ | ✓ |
| Yosemite      | 8.0  | maybe | maybe | ✓ | ✓ |
| El Capitan    | 9.1  | maybe | maybe | ✓ | ✓ |
| Sierra        | 10.0 | maybe | maybe | ✓ | ✓ |
| Sierra        | 11.0 | maybe | maybe | ✓ | ✓ |


<a name="fn"></a>
---
1. `canPlayType('application/vnd.apple.mpegURL')`
2. `canPlayType('application/x-mpegurl')`