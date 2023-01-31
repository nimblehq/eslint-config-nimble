# @nimblehq/eslint-config-nimble

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) developed and maintained by [nimble](https://nimblehq.co/)

## Usage

The configurations are separated into dedicated packages:

- [eslint-config-nimble](/packages/eslint-config-nimble-core): ESLint core base rules
- [eslint-config-nimble](/packages/eslint-config-nimble-testing): ESLint testing base rules
- [eslint-config-nimble-react](/packages/eslint-config-nimble-react): ESLint rules for React

__Usage information is in the packages' documentation.__

## How to contribute

- This project uses [Lerna](https://lerna.js.org/) to manage packages. Install Lerna for accessing to the lerna CLI.

- To contribute to the existing packages, simply navigate to the `/packages` folder and create a pull request to change them.

### Add a new package

- Use [`lerna create`](https://github.com/lerna/lerna/tree/main/commands/create#readme) command to add a new package.

- The package name should have the following format: `@nimblehq/{package-name}`. This project is shareable configurations for [ESLint](https://eslint.org/), the `{package-name}` should be `eslint-config-nimble-*`:

```bash
  lerna create @nimblehq/eslint-config-nimble-react
```

### Publish packages

- Packages will be published to npmjs automatically after publishing a new release.

- Need to set the version in `/packages/**/package.json` before creating the release.

- More details in [publish workflow](/.github/workflows/publish.yml). This workflow uses [`lerna publish`](https://github.com/lerna/lerna/tree/main/commands/publish#readme) command to publish packages.

### Run commands

This project also uses [workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces) feature.

To run a command:

- Add the command to `scripts` part in `package.json` files.
- Run the command with `--workspaces/--workspace` parameters:

```bash
  # Run `lint` on all workspaces:
  npm run lint --workspaces

  # Run `lint` on `@nimblehq/eslint-config-nimble` workspace:
  npm run lint --workspace=@nimblehq/eslint-config-nimble
```

## License

This project is Copyright (c) 2014 and onwards Nimble. It is free software and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE

## About

![Nimble](https://assets.nimblehq.co/logo/dark/logo-dark-text-160.png)

This project is maintained and funded by [Nimble](https://nimblehq.co).

We love open source and do our part in sharing our work with the community!
See [our other projects][community] or [hire our team][hire] to help build your product.

[community]: https://github.com/nimblehq
[hire]: https://nimblehq.co/
