export default {
  rules: {
    // enforces a style where it requires to have a getter for every property which has a setter defined
    'accessor-pairs': 'error',
    // enforces a style where it disallows spaces inside array brackets
    'array-bracket-spacing': ['error', 'never'],
    // enforces a style where it requires to a space before/after an arrow function's arrow(=>)
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // enforces a style where it requires one or more spaces inside block definition
    'block-spacing': ['error', 'always'],
    // enforces consistent brace style for blocks
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    // enforces camelcase style for property names
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],
    // enforces the usage of trailing commas for multiline statements
    // enforces no trailing commas for singleline statements
    'comma-dangle': ['error', 'always-multiline'],
    // enforces a style where it enforces no space before comma but requires a space after comma
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    // enforces a style where it enforces commas to be placed at the end of the current line
    'comma-style': ['error', 'last'],
    // enforces a style where constructors of derived classes must call super()
    'constructor-super': 'error',
    // enforces a style to never omit curly braces around blocks
    curly: ['error'],
    // enforces a style to require the dot to be on the same line as the property
    'dot-location': ['error', 'property'],
    // enforces a style to require at least one newline at the end of non-empty files.
    'eol-last': 'error',
    // enforces a style to require to use type-safe equality operators === and !== instead of their regular counterparts == and !=
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    // enforces a style to disallow space between the function name and the opening parenthesis.
    'func-call-spacing': ['error', 'never'],
    // enforces a style to enforce spacing around the * of generator functions.
    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // enforces a style to enforce handling of error, if using the callback pattern in Node.js
    'handle-callback-err': ['error', '^(err|error)$'],
    // enforces a style to enforce 2-space indentation and 1-space for case clauses in switch statements
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    // enforces a style to require disallow space before colon in object literal properties but require after
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    // enforces a style to require spaces around JavaScript Keywords
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // enforces a style to require
    //   all new operators to be called with uppercase-started functions.
    //   all uppercase-started functions to be called with new operators.
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    // enforces a style to require parentheses when invoking a constructor with no arguments using the new keyword
    'new-parens': 'error',
    // enforces a style to disallow the use of arguments.caller and arguments.callee
    'no-caller': 'error',
    // enforces a style to disallow modifying variables of class declarations.
    'no-class-assign': 'error',
    // enforces a style to disallow code that tries to compare against -0
    'no-compare-neg-zero': 'error',
    // enforces a style to disallow assignment operators in conditional statements
    'no-cond-assign': 'error',
    // enforces a style to disallow modifying variables that are declared using const
    'no-const-assign': 'error',
    // enforces a style to disallow constant expressions in conditions
    'no-constant-condition': 'error',
    // enforces a style to disallow control characters in regular expressions
    'no-control-regex': 'error',
    // enforces a style to disallow the use of debugger
    'no-debugger': 'error',
    // enforces a style to disallow deleting variables
    'no-delete-var': 'error',
    // enforces a style to disallow duplicate arguments in function definitions
    'no-dupe-args': 'error',
    // enforces a style to disallow duplicate name in class members
    'no-dupe-class-members': 'error',
    // enforces a style to disallow duplicate keys in object literals
    'no-dupe-keys': 'error',
    // enforces a style to disallow a duplicate case label
    'no-duplicate-case': 'error',
    // enforces a style to disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',
    // enforces a style to disallow empty destructuring patterns
    'no-empty-pattern': 'error',
    // enforces a style to disallow eval()
    'no-eval': 'error',
    // enforces a style to disallow reassigning exceptions in catch clauses
    'no-ex-assign': 'error',
    // enforces a style to disallow extending of Native Objects
    'no-extend-native': 'error',
    // enforces a style to disallow unnecessary function binding
    'no-extra-bind': 'error',
    // enforces a style to disallow unnecessary boolean casts
    'no-extra-boolean-cast': 'error',
    // enforces a style to disallow unnecessary parentheses only around function expressions
    'no-extra-parens': ['error', 'functions'],
    // enforces a style to disallow fallthrough scenarios in switch statement
    'no-fallthrough': 'error',
    // enforces a style to disallow floating decimals
    'no-floating-decimal': 'error',
    // enforces a style to disallow reassigning function declarations
    'no-func-assign': 'error',
    // enforces a style to disallow assignment to native objects or read-only global variables
    'no-global-assign': 'error',
    // enforces a style to disallow implied eval() through the use of setTimeout(), setInterval() or execScript()
    'no-implied-eval': 'error',
    // enforces a style to disallow variable or function declarations in nested blocks
    'no-inner-declarations': ['error', 'functions'],
    // enforces a style to disallow invalid regular expression strings in RegExp constructors
    'no-invalid-regexp': 'error',
    // enforces a style to disallow irregular whitespace
    'no-irregular-whitespace': 'error',
    // enforces a style to disallow __iterator__
    'no-iterator': 'error',
    // enforces a style to disallow creating a label that shares a name with a variable that is in scope.
    'no-label-var': 'error',
    // enforces a style to disallow the use of labeled statements
    'no-labels': 'error',
    // enforces a style to disallow unnecessary and potentially confusing blocks at the top level of a script or within other blocks.
    'no-lone-blocks': 'error',
    // enforces a style to disallow mixes of different operators
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    // enforces a style to disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',
    // enforces a style to disallow multiple spaces
    'no-multi-spaces': 'error',
    // enforces a style to disallow multiline strings
    'no-multi-str': 'error',
    // enforces a style to disallow multiple empty lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    // enforces a style to allow Symbol Constructor
    'no-new': 'off',
    // enforces a style to disallow Function Constructor
    'no-new-func': 'error',
    // enforces a style to disallow Object Constructor
    'no-new-object': 'error',
    // enforces a style to disallow new require
    'no-new-require': 'error',
    // enforces a style to disallow Symbol Constructor
    'no-new-symbol': 'error',
    // enforces a style to disallow the use of String, Number, and Boolean with the new operator.
    'no-new-wrappers': 'error',
    // enforces a style to disallow calling global object properties as functions
    'no-obj-calls': 'error',
    // enforces a style to disallow octal literals
    'no-octal': 'error',
    // enforces a style to disallow octal escape sequences in string literals
    'no-octal-escape': 'error',
    // enforces a style to disallow string concatenation when using __dirname and __filename
    'no-path-concat': 'error',
    // enforces a style to disallow use of __proto__
    'no-proto': 'error',
    // enforces a style to disallow variable redeclaration
    'no-redeclare': 'error',
    // enforces a style to disallow multiple spaces in regular expression literals
    'no-regex-spaces': 'error',
    // enforces a style to disallow assignment in return statement
    'no-return-assign': ['error', 'except-parens'],
    // enforces a style to disallow unnecessary return await
    'no-return-await': 'error',
    // enforces a style to disallow self assignments
    'no-self-assign': 'error',
    // enforces a style to disallow compare something to itself.
    'no-self-compare': 'error',
    // enforces a style to disallow use of the comma operator
    'no-sequences': 'error',
    // enforces a style to disallow shadowing of restricted names
    'no-shadow-restricted-names': 'error',
    // enforces a style to disallow sparse array literals which have "holes" where commas are not preceded by elements.
    // It does not apply to a trailing comma following the last element.
    'no-sparse-arrays': 'error',
    // enforces a style to disallow all tabs
    'no-tabs': 'error',
    // enforces a style to disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',
    // enforces a style to disallow use of this/super before calling super() in constructors
    'no-this-before-super': 'error',
    // enforces a style to disallow throwing literals and other expressions which cannot possibly be an Error object.
    'no-throw-literal': 'error',
    // enforces a style to disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',
    // enforces a style to disallow the use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',
    // enforces a style to disallow the use of undefined as an identifier
    'no-undefined': 'error',
    // enforces a style to disallow the use of the void operator
    'no-void': 'error',
    // enforces a style to disallow the use of with statements
    'no-with': 'error',
    // enforces a style to require or disallow spacing inside object literal braces
    'object-curly-spacing': ['error', 'always'],
    // enforces a style to require or disallow spacing inside computed properties
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          consistent: true,
        },
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    'one-var': [
      'error',
      {
        initialized: 'never',
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    'one-var-declaration-per-line': ['error', 'always'],
    // enforces a style to require or disallow spacing inside computed properties
    'operator-assignment': ['error', 'always'],
    // enforces a style to require or disallow spacing inside computed properties
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    'padded-blocks': ['error', 'never'],
    // enforces a style to require or disallow spacing inside computed properties
    'prefer-arrow-callback': 'error',
    // enforces a style to require or disallow spacing inside computed properties
    'prefer-const': 'error',
    // enforces a style to require or disallow spacing inside computed properties
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    'prefer-numeric-literals': 'error',
    // enforces a style to require or disallow spacing inside computed properties
    'prefer-rest-params': 'error',
    // enforces a style to require or disallow spacing inside computed properties
    'prefer-spread': 'error',
    // enforces a style to require or disallow spacing inside computed properties
    'prefer-template': 'error',
    // enforces a style to require or disallow spacing inside computed properties
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    'rest-spread-spacing': ['error', 'never'],
    // enforces a style to require or disallow spacing inside computed properties
    semi: ['error', 'always'],
    // enforces a style to require or disallow spacing inside computed properties
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    'semi-style': ['error', 'last'],
    // enforces a style to require or disallow spacing inside computed properties
    'space-before-blocks': ['error', 'always'],
    // enforces a style to require or disallow spacing inside computed properties
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    'space-in-parens': ['error', 'never'],
    // enforces a style to require or disallow spacing inside computed properties
    'space-infix-ops': 'error',
    // enforces a style to require or disallow spacing inside computed properties
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    'symbol-description': 'error',
    // enforces a style to require or disallow spacing inside computed properties
    'template-curly-spacing': ['error', 'never'],
    // enforces a style to require or disallow spacing inside computed properties
    'template-tag-spacing': ['error', 'never'],
    // enforces a style to require or disallow spacing inside computed properties
    'unicode-bom': ['error', 'never'],
    // enforces a style to require or disallow spacing inside computed properties
    'use-isnan': 'error',
    // enforces a style to require or disallow spacing inside computed properties
    'valid-jsdoc': [
      'error',
      {
        requireReturn: false,
        requireReturnType: false,
        requireParamType: false,
      },
    ],
    // enforces a style to require or disallow spacing inside computed properties
    'valid-typeof': 'error',
    // enforces a style to require or disallow spacing inside computed properties
    'wrap-iife': ['error', 'outside'],
    // enforces a style to require or disallow spacing inside computed properties
    'wrap-regex': 'error',
    // enforces a style to require or disallow spacing inside computed properties
    'yield-star-spacing': ['error', 'both'],
  },
};
