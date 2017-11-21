# eslint-config-nimbl3

Eslint Config developed and maintained by Nimble Thailand.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-config-nimbl3`:

```
$ npm install --save-dev git+https://github.com/nimbl3/eslint-config-nimbl3.git
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-nimbl3` globally.

## Usage

Add `nimbl3` to the extends section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
    "extends": [
        "nimbl3"
    ]
}
```





