module.exports = {
  'rules': {
    // enforces a style where it requires to have a getter for every property which has a setter defined
    'accessor-pairs': 'error',
    // enforces a style where it disallows spaces inside array brackets
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    // enforces a style where it requires to a space before/after an arrow function’s arrow(=>)
    'arrow-spacing': [
      'error',
      {
        'before': true,
        'after': true,
      },
    ],
    // enforces a style where it requires one or more spaces inside block definition
    'block-spacing': [
      'error',
      'always',
    ],
    // enforces consistent brace style for blocks
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': true,
      },
    ],
    // enforces camelcase style for property names
    'camelcase': [
      'error',
      {
        'properties': 'always',
      },
    ],
    // enforces the usage of trailing commas for multiline statements
    // enforces no trailing commas for singleline statements
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    // enforces a style where it enforces no space before comma but requires a space after comma
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    // enforces a style where it enforces commas to be placed at the end of the current line
    'comma-style': [
      'error',
      'last',
    ],
    // enforces a style where constructors of derived classes must call super()
    'constructor-super': 'error',
    // enforces a style to never omit curly braces around blocks
    'curly': [
      'error',
    ],
    // enforces a style to require the dot to be on the same line as the property
    'dot-location': [
      'error',
      'property',
    ],
    // enforces a style to require at least one newline at the end of non-empty files.
    'eol-last': 'error',
    // enforces a style to require to use type-safe equality operators === and !== instead of their regular counterparts == and !=
    'eqeqeq': [
      'error',
      'always',
      {
        'null': 'ignore',
      },
    ],
    // enforces a style to disallow space between the function name and the opening parenthesis.
    'func-call-spacing': [
      'error',
      'never',
    ],
    // enforces a style to enforce spacing around the * of generator functions.
    'generator-star-spacing': [
      'error',
      {
        'before': true,
        'after': true,
      },
    ],
    // enforces a style to enforce handling of error, if using the callback pattern in Node.js
    'handle-callback-err': [
      'error',
      '^(err|error)$',
    ],
    // enforces a style to enforce 2-space indentation and 1-space for case clauses in switch statements
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
      },
    ],
    // enforces a style to require disallow space before colon in object literal properties but require after
    'key-spacing': [
      'error',
      {
        'beforeColon': false,
        'afterColon': true,
      },
    ],
    // enforces a style to require spaces around JavaScript Keywords
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true,
      },
    ],
    // enforces a style to require
    //   all new operators to be called with uppercase-started functions.
    //   all uppercase-started functions to be called with new operators.
    'new-cap': [
      'error',
      {
        'newIsCap': true,
        'capIsNew': false,
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
    'no-extra-parens': [
      'error',
      'functions',
    ],
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
    'no-inner-declarations': [
      'error',
      'functions',
    ],
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
        'groups': [
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<=',
          ],
          [
            '&&',
            '||',
          ],
          [
            'in',
            'instanceof',
          ],
        ],
        'allowSamePrecedence': true,
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
        'max': 1,
        'maxEOF': 0,
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
    'no-return-assign': [
      'error',
      'except-parens',
    ],
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
    // enforces a style to disallow sparse array literals which have “holes” where commas are not preceded by elements.
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
    // enforces a style to disallow undeclared variables
    'no-undef': 'error',
    // enforces a style to disallow initializing to undefined
    'no-undef-init': 'error',
    // enforces a style to disallow confusing multiline expressions
    'no-unexpected-multiline': 'error',
    // enforces a style to disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 'error',
    // enforces a style to disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': [
      'error',
      {
        'defaultAssignment': false,
      },
    ],
    // enforces a style to disallow unreachable code after return, throw, continue, and break statements
    'no-unreachable': 'error',
    // enforces a style to disallow control flow statements in finally blocks
    'no-unsafe-finally': 'error',
    // enforces a style to disallow disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',
    // enforces a style to disallow unused expressions
    'no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTernary': true,
        'allowTaggedTemplates': true,
      },
    ],
    // enforces a style to disallow unused variables
    'no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'none',
        'ignoreRestSiblings': true,
      },
    ],
    // enforces a style to disallow early use of  variables
    'no-use-before-define': [
      'error',
      {
        'functions': false,
        'classes': false,
        'variables': false,
      },
    ],
    // enforces a style to disallow usage of Function.prototype.call() and Function.prototype.apply()
    'no-useless-call': 'error',
    // enforces a style to disallow unnecessary computed property keys on objects
    'no-useless-computed-key': 'error',
    // enforces a style to disallow unnecessary constructor
    'no-useless-constructor': 'error',
    // enforces a style to disallow unnecessary escape usage
    'no-useless-escape': 'error',
    // enforces a style to disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 'error',
    // enforces a style to disallow redundant return statements
    'no-useless-return': 'error',
    // enforces a style to disallow whitespace around the dot or before the opening bracket before properties of objects if they are on the same line
    'no-whitespace-before-property': 'error',
    // enforces a style to disallow with statements
    'no-with': 'error',
    // enforces a style to allow placing object properties on separate lines
    'object-property-newline': [
      'error',
      {
        'allowMultiplePropertiesPerLine': true,
      },
    ],
    // enforces a style to enforces a newline around variable initializations
    'one-var': [
      'error',
      {
        'initialized': 'never',
      },
    ],
    // enforces a style to enforces linebreaks to be placed after the operator
    'operator-linebreak': [
      'error',
      'after',
      {
        'overrides': {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    // enforces a style to disallow empty lines at the beginning and ending of block statements and classes
    'padded-blocks': [
      'error',
      {
        'blocks': 'never',
        'switches': 'never',
        'classes': 'never',
      },
    ],
    // enforces a style to ensure that Promises are only rejected with Error objects.
    'prefer-promise-reject-errors': 'error',
    // enforces a style to requires the use of single quotes wherever possible
    //  allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise
    //  allows strings to use backticks
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      },
    ],
    // enforces a style to disallow whitespace between spread operators and their expressions.
    'rest-spread-spacing': [
      'error',
      'never',
    ],
    // enforces a style to require semicolons at the end of statements
    'semi': 'error',
    // enforces a style to require spacing after semicolons and disallows spacing before semicolons.
    'semi-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    // enforces a style to require at least one preceding space.
    'space-before-blocks': [
      'error',
      'always',
    ],
    // enforces a style to requires a space followed by the ( of arguments.
    'space-before-function-paren': [
      'error',
      'never',
    ],
    // enforces a style to disallow any spaces inside of parentheses
    'space-in-parens': [
      'error',
      'never',
    ],
    // enforces a style to require spaces around infix operators.
    'space-infix-ops': 'error',
    // enforces a style to
    //    require spaces around unary word operators such as: new, delete, typeof, void, yield
    //    disallow spaces around unary operators such as: -, +, --, ++, !, !!
    'space-unary-ops': [
      'error',
      {
        'words': true,
        'nonwords': false,
      },
    ],
    // enforces a style to require a whitespace (space or tab) beginning a comment
    'spaced-comment': [
      'error',
      'always',
      {
        'line': {
          'markers': [
            '*package',
            '!',
            '/',
            ',',
            '=',
          ],
        },
        'block': {
          'balanced': true,
          'markers': [
            '*package',
            '!',
            ',',
            ':',
            '::',
            'flow-include',
          ],
          'exceptions': [
            '*',
          ],
        },
      },
    ],
    // enforces a style to require a description when creating symbols.
    'symbol-description': 'error',
    // enforces a style to disallow spaces inside of the curly brace pair.
    'template-curly-spacing': [
      'error',
      'never',
    ],
    // enforces a style to disallow spaces between a tag function and its template literal.
    'template-tag-spacing': [
      'error',
      'never',
    ],
    // enforces a style to require that files must not begin with the Unicode BOM
    'unicode-bom': [
      'error',
      'never',
    ],
    // enforces a style to require calls to isNaN() when checking for NaN
    'use-isnan': 'error',
    // enforces a style to enforce comparing typeof expressions against valid strings
    'valid-typeof': [
      'error',
      {
        'requireStringLiterals': true,
      },
    ],
    // enforces a style to require all immediately-invoked function expressions to be wrapped in parentheses.
    //    additionally enforces wrapping function expressions invoked using .call and .apply.
    'wrap-iife': [
      'error',
      'any',
      {
        'functionPrototypeMethods': true,
      },
    ],
    // enforces a style to enforce spacing around the * in yield* expressions
    'yield-star-spacing': [
      'error',
      'both',
    ],
    // enforces a style to disallow Yoda Conditions
    'yoda': [
      'error',
      'never',
    ],
  },
};
