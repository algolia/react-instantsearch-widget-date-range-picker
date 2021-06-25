# date-range-picker

InstantSearch widget that makes a date range picker

---

[![MIT](https://img.shields.io/npm/l/@eunjae-lee/react-instantsearch-widget-date-range-picker)](./LICENSE) [![NPM version](http://img.shields.io/npm/v/@eunjae-lee/react-instantsearch-widget-date-range-picker.svg)](https://npmjs.org/package/@eunjae-lee/react-instantsearch-widget-date-range-picker)

## Install

```bash
npm install @eunjae-lee/react-instantsearch-widget-date-range-picker
# or
yarn add @eunjae-lee/react-instantsearch-widget-date-range-picker
```

## Widget

### Usage

```jsx
import instantsearch from 'instantsearch.js';
import algoliasearch from 'algoliasearch/lite';
import { DateRangePicker } from '@eunjae-lee/react-instantsearch-widget-date-range-picker';

const searchClient = algoliasearch('appId', 'apiKey');

const App = () => (
  <InstantSearch searchClient={searchClient} indexName="indexName">
    <DateRangePicker />
  </InstantSearch>
);
```

### Options

| Option | Type | Required | Default | Description |
| :-- | :-- | :-- | :-- | --- |
| [`option1`](#option1) | `string` | true | - | REPLACE WITH THE DESCRIPTION FOR THIS OPTION |

#### option1

> `string` | **required**

REPLACE WITH THE DESCRIPTION FOR THIS OPTION

## Connector

### Usage

```jsx
import { connectDateRangePicker } from '@eunjae-lee/react-instantsearch-widget-date-range-picker';

// 1. Create a render function
const RenderDateRangePicker = (renderOptions, isFirstRender) => {
  // Rendering logic
};

// 2. Create the custom widget
const CustomDateRangePicker = connectDateRangePicker(
  RenderDateRangePicker
);

// 3. Instantiate
const App = () => (
  <InstantSearch searchClient={searchClient} indexName="indexName">
    <CustomDateRangePicker />
  </InstantSearch>
);
```

## Contributing

To start contributing to code, you need to:

1. [Fork the project](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. [Clone the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)
3. Install the dependencies: `yarn`
4. Run the development mode: `yarn start`

Please read [our contribution process](./CONTRIBUTING.md) to learn more.

---

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._
