import React, { useState } from 'react';

import { DatePicker } from './DatePicker';
import { localization as defaultLocalization } from './defaultLocalization';

type RefineProps = {
  min?: number;
  max?: number;
};

type Props = {
  refine: (nextRefinement: RefineProps) => void;
  datePickerProps: any;
  min: any;
  max: any;
};

const convertToString = (timestamp: number) => {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${date.getMonth() < 9 ? '0' : ''}${
    date.getMonth() + 1
  }-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
};

export const DateRangePickerComponent = (props: Props) => {
  const [beginDate, setBeginDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const refine = (begin: string | null, end: string | null) => {
    const min = begin ? new Date(begin).getTime() : undefined;
    const max = end ? new Date(end).getTime() : undefined;
    props.refine({ min, max });
  };

  const { dateAdapter = undefined, localization = defaultLocalization } =
    props.datePickerProps || {};

  return (
    <div className="date-range-picker">
      <DatePicker
        dateAdapter={dateAdapter}
        localization={{
          ...localization,
          placeholder: convertToString(props.min),
        }}
        value={beginDate}
        min={convertToString(props.min)}
        max={convertToString(props.max)}
        duetChange={(event: any) => {
          setBeginDate(event.detail.value);
          if (endDate && new Date(event.detail.value) > new Date(endDate)) {
            setEndDate(null);
            refine(event.detail.value, null);
          } else {
            refine(event.detail.value, endDate);
          }
        }}
      />
      <DatePicker
        dateAdapter={dateAdapter}
        localization={{
          ...localization,
          placeholder: convertToString(props.max),
        }}
        value={endDate}
        min={beginDate}
        max={convertToString(props.max)}
        duetChange={(event: any) => {
          if (beginDate && new Date(event.detail.value) < new Date(beginDate)) {
            setBeginDate(null);
            refine(null, event.detail.value);
          } else {
            setEndDate(event.detail.value);
            refine(beginDate, event.detail.value);
          }
        }}
      />
    </div>
  );
};
