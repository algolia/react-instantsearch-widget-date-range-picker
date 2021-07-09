import React, { useState } from 'react';

import { DatePicker } from './DatePicker';

type RefineProps = {
  min?: number;
  max?: number;
};

type Props = {
  refine: (nextRefinement: RefineProps) => void;
  minString?: string;
  maxString?: string;
  datePickerProps: any;
};

export const DateRangePickerComponent = (props: Props) => {
  const [beginDate, setBeginDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const refine = (begin: string | null, end: string | null) => {
    const min = begin ? new Date(begin).getTime() : undefined;
    const max = end ? new Date(end).getTime() : undefined;
    props.refine({ min, max });
  };

  return (
    <div className="date-range-picker">
      <DatePicker
        {...props.datePickerProps}
        value={beginDate}
        min={props.minString}
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
        {...props.datePickerProps}
        value={endDate}
        min={beginDate}
        max={props.maxString}
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
