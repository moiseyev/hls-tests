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
| Sierra        | 11.0 | maybe | maybe | ✓ | ✓ |
| Sierra        | 10.0 | maybe | maybe | ✓ | ✓ |
| El Capitan    | 9.1  | maybe | maybe | ✓ | ✓ |
| Yosemite      | 8.0  | maybe | maybe | ✓ | ✓ |
| Mavericks     | 7.1  | maybe | maybe | ✓ | ✓ |
| Mountain Lion | 6.2  | maybe | maybe | ✓ | ✓ |
| Lion          | 6.0  | maybe | maybe | ✓ | ✓ |
| Snow Leopard  | 5.1  | maybe | maybe | ✓ | × |

### Native HLS support on iPhone Safari

| Device | OS Version | canPlayType<sup>[1](#fn)</sup> | canPlayType<sup>[2](#fn)</sup> | video.paused === false | Real Play |
| -------------- |:----:|:-----:|:-----:|:-:|:-:|
| iPhone 7 Plus  | 10.3 | maybe | maybe | ✓ | ✓ |
| iPhone 7       | 10.3 | maybe | maybe | ✓ | ✓ |
| iPhone 6S Plus | 9.0  | maybe | maybe | ✓ | ✓ |
| iPhone 6S      | 9.0  | maybe | maybe | ✓ | ✓ |
| iPhone 6 Plus  | 8.0  | maybe | maybe | ✓ | ✓ |
| iPhone 6       | 8.0  | maybe | maybe | ✓ | ✓ |
| iPhone 5S      | 7.0  | maybe | maybe | ✓ | ✓ |
| iPhone 5       | 6.0  | maybe | maybe | ✓ | ✓ |
| iPhone 4S      | 6.0  | maybe | maybe | ✓ | ✓ |
| iPhone 4S      | 5.1  | maybe | maybe | ✓ | ✓ |
| iPhone 4       | 4.0  | ''    | ''    | × | × |
| iPhone 3GS     | 3.0  | ''    | ''    | × | × |

### Native HLS support on iPad Safari

| Device | OS Version | canPlayType<sup>[1](#fn)</sup> | canPlayType<sup>[2](#fn)</sup> | video.paused === false | Real Play |
| -------------- |:----:|:-----:|:-----:|:-:|:-:|
| iPad Pro       | 10.3 | maybe | maybe | ✓ | ✓ |
| iPad Pro       | 9.3  | maybe | maybe | ✓ | ✓ |
| iPad Air 2     | 9.3  | maybe | maybe | ✓ | ✓ |
| iPad Air 2     | 8.0  | maybe | maybe | ✓ | ✓ |
| iPad Mini 4    | 9.3  | maybe | maybe | ✓ | ✓ |
| iPad Mini 3    | 8.0  | maybe | maybe | ✓ | ✓ |
| iPad Mini 2    | 8.3  | maybe | maybe | ✓ | ✓ |
| iPad Mini 2    | 7.0  | maybe | maybe | ✓ | ✓ |
| iPad Mini      | 7.0  | maybe | maybe | ✓ | ✓ |
| iPad 4         | 7.0  | maybe | maybe | ✓ | ✓ |
| iPad 3rd       | 6.0  | maybe | maybe | ✓ | ✓ |
| iPad 3rd       | 5.1  | maybe | maybe | ✓ | ✓ |
| iPad 2         | 5.0  | maybe | maybe | × | × |
| iPad 2         | 4.3.2| ''    | ''    | ✓ | ✓ |


<a name="fn"></a>
---
1. `canPlayType('application/vnd.apple.mpegURL')`
2. `canPlayType('application/x-mpegurl')`