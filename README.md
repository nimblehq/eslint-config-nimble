# @nimbl3/eslint-config-nimbl3

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) developed and maintained by [Nimble (Thailand) Co., Ltd.](https://www.nimbl3.com/)

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

MIT License


