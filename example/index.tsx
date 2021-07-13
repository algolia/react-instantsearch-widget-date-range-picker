import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Pagination,
} from 'react-instantsearch-dom';

// import { datePickerProps } from './datePickerProps';
import { DateRangePicker } from '../src';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

const Hit = ({ hit }: { hit: any }) => {
  return (
    <div className="hit">
      <div className="pictures-wrapper">
        <img className="picture" alt={hit.name} src={hit.picture_url} />
        <img
          className="profile"
          alt={hit.user.user.first_name}
          src={hit.user.user.thumbnail_url}
        />
      </div>
      <div className="infos">
        <h4 className="media-heading">
          <Highlight attribute="name" hit={hit} />
        </h4>
        <p>
          {hit.room_type} - <Highlight attribute="city" hit={hit} />,{' '}
          <Highlight attribute="country" hit={hit} />
        </p>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <InstantSearch indexName="airbnb_with_date" searchClient={searchClient}>
      <SearchBox />
      {/* <DateRangePicker attribute="date" datePickerProps={datePickerProps} /> */}
      <DateRangePicker attribute="date" />
      <Hits hitComponent={Hit} />
      <Pagination />
    </InstantSearch>
  </React.StrictMode>,
  document.getElementById('root')
);
