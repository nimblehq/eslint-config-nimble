# `@nimblehq/eslint-config-nimble-testing`

This package provides ESLint testing rules inheriting from @nimblehq/eslint-config-nimble-core.

## Caution

@nimblehq/eslint-config-nimble-testing includes `jest` and `cypress` as the primary test suite stack. Consider if the targeting project is not using those libraries.

## Installation

```bash
  npm install --save-dev @nimblehq/eslint-config-nimble-testing
```

## Usage

### Standalone

Add `@nimblehq/eslint-config-nimble-testing` to the extends section of your `.eslintrc` configuration file.

```js
{
  "extends": [
      "@nimblehq/eslint-config-nimble-testing"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

### With a framework

Similar to the process above, but usually it requires adding the extra rules for the JS framework:

```js
{
  "extends": [
      "@nimblehq/eslint-config-nimble-testing",
      "plugin:react/recommended",
      "plugin:vue/recommended"
  ],
  "rules": {
    // Additional, per-project rules...
  }
}
```

This would require defining the required dependencies in the project itself.

## License

This project is Copyright (c) 2021 and onwards Nimble. It is free software and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE

## About

![Nimble](https://assets.nimblehq.co/logo/dark/logo-dark-text-160.png)

This project is maintained and funded by [Nimble](https://nimblehq.co).

We love open source and do our part in sharing our work with the community!
See [our other projects][community] or [hire our team][hire] to help build your product.

[community]: https://github.com/nimblehq
[hire]: https://nimblehq.co/
