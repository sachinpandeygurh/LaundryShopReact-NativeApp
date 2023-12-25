# Laundry Shop React-Native App

Welcome to the Laundry Shop React-Native App developed by Sachin Pandey. You can find more about Sachin on [GitHub](https://github.com/sachinpandeygurh).

## Overview

This React-Native app is designed specifically for laundry shops and their customers. The app makes use of your current location and offers a range of services tailored for laundry needs. Customers can conveniently add various types of products for washing, laundry, wash and iron, cleaning, and more. Examples of supported clothing items include jeans, T-shirts, shorts, dresses, shirts, sleeveless garments, sweaters, and more.

## Configuration

Make sure to apply the following changes in the `../node_modules/react-native/index.js` file:

```javascript
// Deprecated Prop Types
get ColorPropType(): $FlowFixMe {
  return require('deprecated-react-native-prop-types').ColorPropType;
},
get EdgeInsetsPropType(): $FlowFixMe {
  return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
},
get PointPropType(): $FlowFixMe {
  return require('deprecated-react-native-prop-types').PointPropType;
},
get ViewPropTypes(): $FlowFixMe {
  return require('deprecated-react-native-prop-types').ViewPropTypes;
},
```

## Project Structure

- React Native Frontend
- React Native Fullstack Project
- React Native Roadmap
- React Native Laundry App
- React Native Firebase Integration
- Frontend Projects React Native

## How to Run

Follow these steps to run the app on your device:

1. If you don't have Yarn installed, run the following command:
    ```bash
    npm i -g yarn
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

3. Start the app:
    ```bash
    yarn start
    ```

## Contribution

Contributions to the project are welcome! Feel free to submit issues, pull requests, or suggestions to improve the Laundry Shop React-Native App. Thank you for your support!