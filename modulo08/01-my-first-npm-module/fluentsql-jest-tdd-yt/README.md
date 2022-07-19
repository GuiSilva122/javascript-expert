# First NPM package #

__To publish the package for the first time, execute the following command:__
* `npm login`
* `npm publish --access=public`

__To publish a patch version of the package, execute the following command:__
* `rm -rf .git (only if there are git erros)`
* `npm version patch`
* `npm publish`

__To publish a minor version of the package, execute the following command:__
* `rm -rf .git (only if there are git erros)`
* `npm version minor`
* `npm publish`

__To publish a major version of the package, execute the following command:__
* `rm -rf .git (only if there are git erros)`
* `npm version major`
* `npm publish`