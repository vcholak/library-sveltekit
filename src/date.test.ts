import { DateTime } from 'luxon';
import { assert, expect, test } from 'vitest';

test('DateTime', () => {
  const isoDate = '2014-02-10';
  const dt = DateTime.fromISO(isoDate);
  console.log('dt=', dt); // DateTime { ts: 2014-02-10T00:00:00.000-07:00, zone: America/Denver, locale: en-US }
  const date = dt.toJSDate();
  console.log('date=', date); // 2014-02-10T07:00:00.000Z
  const dateStr = DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL);
  expect(dateStr).toBe('February 10, 2014');
})