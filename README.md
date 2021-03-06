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
* `npm run test:bs:osx:safari` – to run BrowserStack tests on OS X/Safari
* `npm run test:bs:iphone:safari` – to run BrowserStack tests on iPhone/Safari
* `npm run test:bs:android:chrome` – to run BrowserStack tests on Android/Chrome
* `npm run test:bs:android:tablets:chrome` – to run BrowserStack tests on Android Tablets/Chrome

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
| iPhone 7 Plus  | 10.3 | maybe | maybe | ? | ✓ |
| iPhone 7       | 10.3 | maybe | maybe | ? | ✓ |
| iPhone 6S Plus | 9.0  | maybe | maybe | ? | ✓ |
| iPhone 6S      | 9.0  | maybe | maybe | ? | ✓ |
| iPhone 6 Plus  | 8.0  | maybe | maybe | ? | ✓ |
| iPhone 6       | 8.0  | maybe | maybe | ? | ✓ |
| iPhone 5S      | 7.0  | maybe | maybe | ? | ✓ |
| iPhone 5       | 6.0  | maybe | maybe | ? | ✓ |
| iPhone 4S      | 6.0  | maybe | maybe | ? | ✓ |
| iPhone 4S      | 5.1  | maybe | maybe | ? | ✓ |
| iPhone 4       | 4.0  | ''    | ''    | ? | × |
| iPhone 3GS     | 3.0  | ''    | ''    | ? | × |

### Native HLS support on iPad Safari

| Device | OS Version | canPlayType<sup>[1](#fn)</sup> | canPlayType<sup>[2](#fn)</sup> | video.paused === false | Real Play |
| -------------- |:----:|:-----:|:-----:|:-:|:-:|
| iPad Pro       | 10.3 | maybe | maybe | ? | ✓ |
| iPad Pro       | 9.3  | maybe | maybe | ? | ✓ |
| iPad Air 2     | 9.3  | maybe | maybe | ? | ✓ |
| iPad Air 2     | 8.0  | maybe | maybe | ? | ✓ |
| iPad Mini 4    | 9.3  | maybe | maybe | ? | ✓ |
| iPad Mini 3    | 8.0  | maybe | maybe | ? | ✓ |
| iPad Mini 2    | 8.3  | maybe | maybe | ? | ✓ |
| iPad Mini 2    | 7.0  | maybe | maybe | ? | ✓ |
| iPad Mini      | 7.0  | maybe | maybe | ? | ✓ |
| iPad 4         | 7.0  | maybe | maybe | ? | ✓ |
| iPad 3rd       | 6.0  | maybe | maybe | ? | ✓ |
| iPad 3rd       | 5.1  | maybe | maybe | ? | ✓ |
| iPad 2         | 5.0  | maybe | maybe | ? | × |
| iPad 2         | 4.3.2| ''    | ''    | ? | ✓ |

### Native HLS support on Android in Chrome
| Device | OS Version | canPlayType<sup>[1](#fn)</sup> | canPlayType<sup>[2](#fn)</sup> | video.paused === false | Real Play |
| ----------------------- |:----:|:-----:|:-----:|:-:|:-:|
| Samsung Galaxy S8       | 7.0 | maybe | maybe | ✓ | ✓ |
| Samsung Galaxy S8 Plus  | 7.0 | maybe | maybe | ✓ | ✓ |
| Samsung Galaxy S7       | 6.0 | maybe | maybe | ✓ | ✓ |
| Samsung Galaxy S6       | 5.0 | maybe | maybe | ✓ | ✓ |
| Samsung Galaxy S5       | 4.4 | ''    | ''    | crash | crash |
| Samsung Galaxy S5*      | 4.4 | maybe | maybe | ✓ | ✓ |
| Samsung Galaxy S4       | 4.3 | maybe | maybe | crash | crash |
| Samsung Galaxy S4*      | 4.4 | maybe | maybe | ✓ | ✓ |
| Samsung Galaxy S3       | 4.1 | maybe | maybe | × | × |
| Samsung Galaxy S2*      | 2.3 | ''    | ''    | × | × |
| Samsung Galaxy S*       | 2.2 | ''    | ''    | × | × |
| Samsung Galaxy Note 4*  | 4.4 | maybe | maybe | ✓ | ✓ |
| Samsung Galaxy Note 3*  | 4.3 | maybe | maybe | ✓ | ✓ |
| Samsung Galaxy Note 2   | 4.1 | maybe | maybe | ✓ | × |
| Samsung Galaxy S5 Mini  | 4.4 | ''    | ''    | crash | crash |
| Motorola Moto X 2nd Gen | 6.0 | maybe | maybe | ✓ | ✓ |
| Motorola Moto X 2nd Gen | 5.0 | maybe | maybe | ✓ | ✓ |
| Motorola Moto G 2nd Gen*| 5.0 | maybe | maybe | ✓ | ✓ |
| Motorola Razr           | 4.0 | maybe | maybe | × | × |
| Motorola Razr Maxx HD   | 4.1 | maybe | maybe | × | × |
| HTC One M8              | 4.4 | ''    | ''    | × | × |
| HTC One X               | 4.0 | maybe | maybe | × | × |
| Google Pixel*           | 8.0 | maybe | maybe | ✓ | ✓ |
| Google Pixel*           | 7.1 | maybe | maybe | ✓ | ✓ |
| Google Pixel XL*        | 7.1 | maybe | maybe | ✓ | ✓ |
| Google Nexus 6P*        | 7.0 | maybe | maybe | ✓ | ✓ |
| Google Nexus 5X*        | 7.0 | maybe | maybe | ✓ | ✓ |
| Google Nexus 6*         | 6.0 | maybe | maybe | ✓ | ✓ |
| Google Nexus 6*         | 5.0 | maybe | maybe | ✓ | ✓ |
| Google Nexus 4*         | 4.2 | maybe | maybe | × | × |
| LG G5*                  | 6.0 | maybe | maybe | ✓ | ✓ |
| Sony Xperia Tipo*       | 4.0 | maybe | maybe | × | × |

### Native HLS support on Android Tablets in Chrome
| Device | OS Version | canPlayType<sup>[1](#fn)</sup> | canPlayType<sup>[2](#fn)</sup> | video.paused === false | Real Play |
| -------------------------- |:----:|:-----:|:-----:|:-:|:-:|
| Samsung Galaxy Tab 4       | 4.4  | maybe | maybe | ✓ | ✓ |
| Samsung Galaxy Note 4      | 6.0  | maybe | maybe | ✓ | ✓ |
| Samsung Galaxy Tab 4 10.1  | 4.0  | maybe | maybe | × | × |
| Samsung Galaxy Tab 4 10.1* | 4.4  | maybe | maybe | ✓ | ✓ |
| Samsung Galaxy Tab 2 10.1* | 4.0  | maybe | maybe | × | × |
| Samsung Galaxy Note 10.1   | 4.0  | maybe | maybe | × | × |
| Amazon Kindle Fire 2       | 4.0  | maybe | maybe | × | × |
| Amazon Kindle Fire HD 8.9  | 4.0  | maybe | maybe | × | × |
| Amazon Kindle Fire HDX 7   | 4.3  | maybe | maybe | crash | crash |
| Google Nexus 9             | 5.1  | maybe | maybe | ✓ | ✓ |
| Google Nexus 7             | 4.1  | maybe | maybe | × | × |
| Google Nexus 7*            | 6.0  | maybe | maybe | ✓ | ✓ |

<a name="fn"></a>
---
1. `canPlayType('application/vnd.apple.mpegURL')`
2. `canPlayType('application/x-mpegurl')`

*~ – Manualy tested