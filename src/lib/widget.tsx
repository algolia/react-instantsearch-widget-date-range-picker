import React from 'react';
import { connectRange } from 'react-instantsearch-dom';

import { DateRangePickerComponent } from './component';

import type { ElementType } from 'react';

type WidgetParams = {
  /**
   * Name of the attribute for faceting.
   */
  attribute: string;
  /**
   * The minimum value for the input.
   * The format is `YYYY-MM-dd` by default.
   * If `datePickerProps` is given, follow that format.
   */
  min?: string;
  /**
   * The maximum value for the input.
   * The format is `YYYY-MM-dd` by default.
   * If `datePickerProps` is given, follow that format.
   */
  max?: string;
  /**
   * Convert a date string to a number.
   * Default: `(str) => new Date(str).getTime()`.
   */
  convertDateStringToNumber?: (dateString: string) => number;
  /**
   * Props for @duetds/date-picker component.
   */
  datePickerProps?: any;
};

type ConnectorParams = Omit<WidgetParams, 'min' | 'max'> & {
  min?: number;
  max?: number;
};

export const DateRangePicker = (widgetParams: WidgetParams) => {
  const Comp = connectRange(DateRangePickerComponent);

  const { min, max, ...rest } = widgetParams;
  const convertDateStringToNumber =
    widgetParams.convertDateStringToNumber ??
    ((dateString: string) => new Date(dateString).getTime());
  const connectorParams: ConnectorParams = {
    ...rest,
    convertDateStringToNumber,
  };
  if (min) {
    connectorParams.min = convertDateStringToNumber(min);
  }
  if (max) {
    connectorParams.max = convertDateStringToNumber(max);
  }

  return <Comp {...connectorParams} minString={min} maxString={max} />;
};
