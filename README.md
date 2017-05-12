react-bare-app
===================

WIP

This is a minimal React application to give me a starting point for future projects, and illustrate some basic principles.

Keep in mind that the front end space changes extremeley rapidly. This repo may be out of date, especially the dependency versions specified in the "package.json" file.


What's included here:
Running tasks/scripts
Managing packages
Building and bundling
Styling
Linting
Folder structure
Testing

## Getting up and running

Install dependencies: `yarn`

Start the development server: `yarn dev-server`

`open http://localhost:8080`


## Running tasks/scripts

Use "package.json" scripts instead of a task runner such as grunt or gulp.

Available scripts:

* `yarn build`: Builds the application bundle.
* `yarn dev-server`: Runs the webpack dev server. Automatically rebuilds the bundle and refreshes the browser when it detects changes to any modules in the bundle.
* `yarn test`: Runs tests
* `yarn test:watch`: Runs tests when a change is made to a test or a file under test.


## Managing packages

Use [yarn](https://code.facebook.com/posts/1840075619545360) instead of npm. There is a "yarn.lock" file checked in already.

The default package manager for JavaScript projects has traditionally been npm. While npm remains popular and functional, I recommend that you use yarn with this repo.

Yarn is a package manager that replaces the existing workflow for the npm client or other package managers while remaining compatible with the npm registry. It has the same feature set as existing workflows while operating faster, more securely, and more reliably. Yarn is almost a 1-to-1 replacement for all npm commands. For most commands, just replace the word `npm` with `yarn`. Yarn also continues to use the package.json file, so projects will not need to make any changes to the file structure.


## Building and bundling

Write JavaScipt in ECMAScript 6, and use [Babel](https://babeljs.io/) to transpile it before shipping it to the browser.

Babel is configured with a ".babelrc" file, and includes the following presets:

* [env](https://babeljs.io/docs/plugins/preset-env/): This is the default preset for Javascript. It is "a Babel preset that can automatically determine the Babel plugins and polyfills you need based on your supported environments." It can be configured to to compile for various configurations of browser versions and uses data from http://caniuse.com/.
* [react](https://babeljs.io/docs/plugins/preset-react/): Transforms JSX into React.createElement.

Use [webpack](https://webpack.js.org/) as a module bundler. webpack is configured with a "webpack.config.js" file.


## Styling

Write CSS using CSS-in-JS. Avoid using a preprocessor such as Sass or LESS, as those tools encourage global styling and increase the tooling needed to build the styles and the bundle. Don't rely on a naming convention such as BEM for easing the pain of global CSS.

As a base, this repo is configured with webpack's [css-loader](https://github.com/webpack-contrib/css-loader) with [CSS Modules](https://github.com/css-modules/css-modules) enabled. This makes all class names local to their component by default.

### Global CSS

There is a single global style sheet ("global.css") to set up the few needed global and inherited styles, such as applying styles to the `html` and `body` tag and setting the base font. Keep the global CSS footprint to an absolute minimum.

This project does not currently include CSS "resetting." If you need this, consider using the [Eric Meyer reset](https://meyerweb.com/eric/tools/css/reset/). It is lightweight and battle-tested. Though it has been unchanged for many years, it remains very applicable. Because it's not a library, feel free to change it as you see fit.

### Expanding your styles

When you need more capabilities for CSS, consider using [PostCSS](https://github.com/postcss/postcss). It works in a similar manner to Babel, using [transformers](https://github.com/postcss/postcss/blob/master/docs/plugins.md) to process your CSS. PostCSS is still very new though, so be prepared for some growing pains.

There are [many CSS-in-JS techniques and libraries around](https://github.com/MicheleBertoli/css-in-js), so do your due diligence before choosing one. I don't have much experience here yet beyond PostCSS with CSS Modules.


## Linting

Both eslint and stylelint are done during the build process by using the [eslint-loader](https://github.com/MoOx/eslint-loader) and [StyleLintPlugin](https://github.com/JaKXz/stylelint-webpack-plugin), respectively.

You may find that you want additional rules, or you do not prefer the rules in place. Feel free to edit the linting settings as you see fit.

### JavaScript

[eslint](http://eslint.org/) is included for linting JavaScript. The ".eslintrc.json" file configures eslint for ES6 and JSX, and includes the following recommended rule settings:

* ['eslint:recommended'](http://eslint.org/docs/rules/)
* ['plugin:react/recommended'](https://github.com/yannickcr/eslint-plugin-react)


### CSS

[stylelint](https://github.com/stylelint/stylelint) is included for linting CSS. The ".stylelintrc.json" file configures stylelint with the following recomended rule settings:

* ['stylelint-config-standard'](https://github.com/stylelint/stylelint-config-standard)
* ['stylelint-config-css-modules'](https://github.com/pascalduez/stylelint-config-css-modules): Allows stylelint to accept CSS Modules syntax.


TODO:
- more docs
- state? redux?
