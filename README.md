# @nimbl3/eslint-config-nimbl3

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) developed and maintained by [Nimbl3](https://www.nimbl3.com/)

## Installation

```
$ npm install --save-dev @nimbl3/eslint-config-nimbl3
```

## Usage

### Standalone

Add `@nimbl3/eslint-config-nimbl3` to the extends section of your `.eslintrc` configuration file.

```js
{
  "extends": [
      "@nimbl3/eslint-config-nimbl3"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

### With a framework

Similar process above but usually it requires to add the extra rules for the JS framework:


```js
{
  "extends": [
      "@nimbl3/eslint-config-nimbl3",
      "plugin:react/recommended", 
      "plugin:vue/recommended"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

Obviously, this would require to define the required dependencies in the project itself. 

## License

This project is Copyright (c) 2014-2018 Nimbl3 Ltd. It is free software,
and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE

## About

![Nimbl3](https://dtvm7z6brak4y.cloudfront.net/logo/logo-repo-readme.jpg)

This project is maintained and funded by Nimbl3 Ltd.

We love open source and do our part in sharing our work with the community!
See [our other projects][community] or [hire our team][hire] to help build your product.

[community]: https://nimbl3.github.io/
[hire]: https://nimbl3.com/