
# <img src="img/button_save_128.png" width="32"> Pull The Lever!

[![Version](https://img.shields.io/github/manifest-json/v/TheDavidDelta/pull-the-lever)](https://addons.mozilla.org/firefox/addon/pull-the-lever/)
[![License](https://img.shields.io/github/license/TheDavidDelta/pull-the-lever)](./LICENSE)

Extension for saving all your currently open tabs

🦊 [Firefox](https://addons.mozilla.org/firefox/addon/pull-the-lever/)  


## How does it work?

This addon saves and closes the open tabs of the current window to the addon's synced storage. When the lever is pushed up, the tabs are restored in the present window in the order they were saved.


## Source Code generation

This proyect is build with [TypeScript](https://www.typescriptlang.org/) and using [Firefox's WebExtension Types](https://www.npmjs.com/package/@types/firefox-webext-browser) and ported to Chromium platforms using [Mozilla's WebExtension API Polyfill](https://www.npmjs.com/package/webextension-polyfill).

If you want generate the compiled JavaScript to **check the validity** of the code the extension uses in production, or with intention of **contributing** to this addon, simply follow these steps:

1. Clone this repo
```
git clone https://github.com/TheDavidDelta/pull-the-lever
```
2. Install the dependencies specified in the lockfile
```
yarn
```
```
npm i
```
3. Run the TypeScript Compiler
```
yarn tsc
```
```
npx tsc
```


## Contact

You can report any bug you find or suggest any feature using the [GitHub Issues](https://github.com/TheDavidDelta/pull-the-lever/issues) page, or contact me about anything related to this app on info@thedaviddelta.com.


## License

[![](https://www.gnu.org/graphics/gplv3-with-text-136x68.png)](https://www.gnu.org/licenses/gpl-3.0.html)

Copyright © 2021 [TheDavidDelta](https://github.com/TheDavidDelta)  
This project is [GNU GPLv3](./LICENSE) licensed
