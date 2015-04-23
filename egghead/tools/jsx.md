# JSX

For simple React apps, it's okay to write JS. However, the code is more difficult to navigate because it is rendered JavaScript rather than JSX-HTML.

The in-browser compiler is slow, recommends precompilation from JSX to JS in build process
- [react-tool](https://www.npmjs.com/package/react-tools) `npm install -g react-tools`
  - Use:`jsx [devfile] [buildfile] --no-cache-dir --watch`
