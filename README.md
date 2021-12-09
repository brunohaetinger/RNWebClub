# RNWebClub

PoC to demonstrate how to integrate `react-native-web` in `React Native` project.

`/web` folder contains:
- `/esbuild` folder with `index.html` to be copied to output folder(`/dist`).
- `/webpack` folder with `webpack` and `babel` configuration to make bundle project for web.

## Running the application

### Android

1. `yarn start` in terminal **1**, to start metro bundler.
1. `yarn android` in terminal **2**, to run on Android device/emulator.

### Web

#### esbuild

1. `yarn esbuild:dev` in terminal **1**, to start esbuild with watcher.
1. `yarn esbuild:serve` in terminal **2**, to serve esbuild output.
1. Open http://localhost:8000 in the browser.

#### Webpack
1. `yarn webpack:dev` in terminal, to start webpack bundler.
1. Open http://localhost:8080 in the browser.


## Different versions to each Platform

Official docs: https://necolas.github.io/react-native-web/docs/multi-platform/


## Bundlers

### esbuild

Easy configuration, just having the options defined in `build` script in `package.json`. Build is extremely fast and generates smaller outputs.

### Useful links
1. https://esbuild.github.io/getting-started/#build-scripts
1. https://github.com/necolas/react-native-web/discussions/2052#discussioncomment-864830


### Webpack

With current configuration, there are some problems running `metro bundler` (`yarn start`) + `webpack` (`yarn web`) simultaneouly, so should only one be running.

### Useful links
1. https://necolas.github.io/react-native-web/docs/
1. https://arry.medium.com/how-to-add-react-native-web-to-an-existing-react-native-project-eb98c952c12f
1. https://github.com/necolas/react-native-web/issues/1257#issuecomment-541443684
1. https://github.com/necolas/react-native-web/discussions/2052


## Future improvements

1. Add `esbuild` hot reload.
1. Create `esbuild` config file.