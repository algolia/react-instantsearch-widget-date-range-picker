import { connectRange } from 'react-instantsearch-dom';

import { DateRangePickerComponent } from './component';

import type { ElementType } from 'react';

type WidgetParams = {
  /**
   * Name of the attribute for faceting.
   */
  attribute: string;
  /**
   * Props for @duetds/date-picker component.
   */
  datePickerProps?: any;
};

export const DateRangePicker = connectRange(
  DateRangePickerComponent
) as ElementType<WidgetParams>;
