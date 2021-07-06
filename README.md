---

[![MIT](https://img.shields.io/npm/l/@algolia/react-instantsearch-widget-date-range-picker)](./LICENSE) [![NPM version](http://img.shields.io/npm/v/@algolia/react-instantsearch-widget-date-range-picker.svg)](https://npmjs.org/package/@algolia/react-instantsearch-widget-date-range-picker)

## Demo

[Demo](https://codesandbox.io/s/github/algolia/react-instantsearch-widget-date-range-picker?file=/example/index.tsx) on CodeSandbox.

## Install

```bash
npm install @algolia/react-instantsearch-widget-date-range-picker
# or
yarn add @algolia/react-instantsearch-widget-date-range-picker
```

This widget is using `@duetds/date-picker` under the hood, so you need to include this at the end of `<head>` tag.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/themes/default.css" />
```

## Widget

### Usage

```jsx
import instantsearch from 'instantsearch.js';
import algoliasearch from 'algoliasearch/lite';
import { DateRangePicker } from '@algolia/react-instantsearch-widget-date-range-picker';

const searchClient = algoliasearch('appId', 'apiKey');
const attribute = '<your-attribuet-for-faceting>';

const App = () => (
  <InstantSearch searchClient={searchClient} indexName="indexName">
    <DateRangePicker attribute={attribute} />
  </InstantSearch>
);
```

### Options

| Option | Type | Required | Default | Description |
| :-- | :-- | :-- | :-- | --- |
| [`attribute`](#attribute) | `string` | true | - | Name of the attribute for faceting |
| [`datePickerProps`](#datePickerProps) | `object` | false | undefined | Props for @duetds/date-picker component |

#### attribute

> `string` | **required**

Name of the attribute for faceting.

```jsx
<DateRangePicker attribute="date" />
```

#### datePickerProps

> `object` | **optional**

Props for [@duetds/date-picker](https://github.com/duetds/date-picker#usage-with-react) component.

```jsx
const datePickerProps = {
  dateAdapter: {
    parse(dateString) {
      // ...
    },
    format(date) {
      // ...
    },
  },
  localization: {
    // ...
  },
  // ...
};

<DateRangePicker attribute="date" datePickerProps={datePickerProps} />;
```

You can see [an example here](./example/datePickerProps.ts).

## Contributing

To start contributing to code, you need to:

1. [Fork the project](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. [Clone the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)
3. Install the dependencies: `yarn`
4. Run the development mode: `yarn start`

Please read [our contribution process](./CONTRIBUTING.md) to learn more.

---

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._
