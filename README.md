# Recipe Notebook

This is a simple notes app created in ES6, so I can learn how to set up and run a project in ES6. I will be using Test Driven Development, using Jest. 

Once I have built a basic Notes App I will be adding additional features to create an easy-to-use Recipe Notebook. 

Documenting my steps below, so I can easily refer back. Feel free to clone and have a look around.

## Getting started

- clone repository and open
- `brew install yarn`
- `yarn`

## Functionality

- Create a note
- Store a note in a list of notes
- View a list of notes
- Edit and delete notes
- Save the list of notes to a database
- View a list of saved notes

## Edge cases to consider

- A note cannot be created with an empty string
- A note cannot be updated with an empty string
- A non-existent note cannot be updated
- A non-existent note cannot be deleted

## Learning Objectives

- Build an app in a modular design pattern in modern JavaScript syntax (ES6)
- Understand how to use JavaScript bundlers such as Webpack and Babel outside of a framework
- Test drive a CRUD app from scratch in JavaScript without tutorials
- A deeper understanding of mocking modules in Jest
- Use of technologies only by requirement
- Build features iteratively on a strong foundation, keeping features simple and code clean

## Future improvements 

This project is a starting point for a bigger project for storing recipes as notes. Extra functionality for this would be:

- Highlighter notes (like in Kindle)
- Track changes (to see recipe alterations over time)
- Unit conversions
- Recipe tags or themed 'cookbooks'

## How I set it up - step by step

1. Initialise a yarn project: `yarn init`
2. Set up Jest for testing: `yarn add --dev jest`
3. Create a basic test ('sum.test.js') and js function ('sum.js') to test jest set up.
4. Add the following to package.json

```json
"scripts": {
    "test": "jest"
  }
```

5. Run `yarn test` and receive a PASS (testing Jest running as expected)
6. Delete test files
7. Run `jest --init` to create jest configuration file
8. Run `yarn add --dev babel-jest @babel/core @babel/cli @babel/preset-env` to set up babel
  





