import React, { useEffect, useRef } from 'react';

function useListener(
  ref: React.MutableRefObject<HTMLElement | null>,
  eventName: string,
  handler: (event: any) => void
) {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      element.addEventListener(eventName, handler);
      return () => element.removeEventListener(eventName, handler);
    }
  }, [eventName, handler, ref]);
}

export const DatePicker = ({
  duetChange,
  duetFocus,
  duetBlur,
  duetOpen,
  duetClose,
  dateAdapter,
  localization,
  ...props
}: any) => {
  const ref = useRef<HTMLElement | null>(null);

  useListener(ref, 'duetChange', duetChange);
  useListener(ref, 'duetFocus', duetFocus);
  useListener(ref, 'duetBlur', duetBlur);
  useListener(ref, 'duetOpen', duetOpen);
  useListener(ref, 'duetClose', duetClose);

  useEffect(() => {
    if (!customElements.get('duet-date-picker')) {
      // eslint-disable-next-line no-console
      console.warn(
        '<DateRangePicker> depends on @duetds/date-picker but could not be found.\n',
        'See https://github.com/algolia/react-instantsearch-widget-date-range-picker#install for more information.'
      );
    }
  }, []);

  useEffect(() => {
    if (ref.current !== null) {
      (ref.current! as any).localization = localization;
    }
  }, [localization]);

  useEffect(() => {
    if (ref.current !== null) {
      (ref.current! as any).dateAdapter = dateAdapter;
    }
  }, [dateAdapter]);

  // @ts-expect-error ts doesn't know this custom element
  return <duet-date-picker ref={ref} {...props}></duet-date-picker>;
};
