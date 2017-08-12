# Filterable Product Table :cake: :sushi: :rice_ball: :fries:

[![CircleCI](https://circleci.com/gh/romarioraffington/react-filterable-product-table/tree/master.svg?style=svg)](https://circleci.com/gh/romarioraffington/react-filterable-product-table/tree/master)

This is simple React application that was orginally created for the [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy) post in the  React docs. 

This repository goes along with the medium article titled [Testing React Apps with Jest and chai-enzyme for Beginners](#).  In that article I talked about the tools, folder stucture and my thought process when testing React applications. 

## Component Breakdown
The app is broken down into 5 components:

> ![Components](.README/components.png)

* `FilterableProductTable` (orange): contains the entirety of the example
* `SearchBar` (blue): receives all user input
* `ProductTable` (green): displays and filters the data collection based on user input
* `ProductCategoryRow` (turquoise): displays a heading for each category
* `ProductRow` (red): displays a row for each product


## Getting Started

```shell
$ git clone https://github.com/romarioraffington/react-filterable-product-table.git
$ npm install
$ npm start
```

## Running Tests

```shell
$ npm test
```

## Building the Project

```shell
$ npm run build
```

## Contributing
Feel free to submit a pull requests! For specifics on how to contribute to this project, check out the  [contributing file](CONTRIBUTING.md).

## License
This project is released under the [MIT License](LICENSE).