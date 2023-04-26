export enum DateStyle {
  Long = 'Long',
  Short = 'Short',
  Humanize = 'Humanize',
  Time = 'Time',
  DateTime = 'DateTime',
}

export const dateStyle = {
  [DateStyle.Long]: {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  },
  [DateStyle.Short]: {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  },
  [DateStyle.Humanize]: {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  },
  [DateStyle.Time]: {
    hour: '2-digit',
    minute: '2-digit',
  },
  [DateStyle.DateTime]: {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  },
} as const;

export enum Weekday {
  Sunday = 'sunday',
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
}

export const DEFAULT_WEEK_START_DAY = Weekday.Sunday;
export const WEEK_START_DAYS = new Map([
  // Saturday
  ['AE', Weekday.Saturday],
  ['AF', Weekday.Saturday],
  ['BH', Weekday.Saturday],
  ['DZ', Weekday.Saturday],
  ['EG', Weekday.Saturday],
  ['IQ', Weekday.Saturday],
  ['IR', Weekday.Saturday],
  ['JO', Weekday.Saturday],
  ['KW', Weekday.Saturday],
  ['LY', Weekday.Saturday],
  ['OM', Weekday.Saturday],
  ['QA', Weekday.Saturday],
  ['SA', Weekday.Saturday],
  ['SY', Weekday.Saturday],
  ['YE', Weekday.Saturday],
  // Sunday
  ['AR', Weekday.Sunday],
  ['BO', Weekday.Sunday],
  ['BR', Weekday.Sunday],
  ['BZ', Weekday.Sunday],
  ['CA', Weekday.Sunday],
  ['CL', Weekday.Sunday],
  ['CO', Weekday.Sunday],
  ['CR', Weekday.Sunday],
  ['DO', Weekday.Sunday],
  ['EC', Weekday.Sunday],
  ['GT', Weekday.Sunday],
  ['HK', Weekday.Sunday],
  ['HN', Weekday.Sunday],
  ['IL', Weekday.Sunday],
  ['JM', Weekday.Sunday],
  ['JP', Weekday.Sunday],
  ['KE', Weekday.Sunday],
  ['KR', Weekday.Sunday],
  ['MO', Weekday.Sunday],
  ['MX', Weekday.Sunday],
  ['NI', Weekday.Sunday],
  ['PA', Weekday.Sunday],
  ['PE', Weekday.Sunday],
  ['PH', Weekday.Sunday],
  ['SG', Weekday.Sunday],
  ['SV', Weekday.Sunday],
  ['TW', Weekday.Sunday],
  ['US', Weekday.Sunday],
  ['VE', Weekday.Sunday],
  ['ZA', Weekday.Sunday],
  ['ZW', Weekday.Sunday],
  // Monday
  ['AD', Weekday.Monday],
  ['AL', Weekday.Monday],
  ['AM', Weekday.Monday],
  ['AU', Weekday.Monday],
  ['AZ', Weekday.Monday],
  ['BE', Weekday.Monday],
  ['BG', Weekday.Monday],
  ['BN', Weekday.Monday],
  ['BY', Weekday.Monday],
  ['CH', Weekday.Monday],
  ['CN', Weekday.Monday],
  ['CZ', Weekday.Monday],
  ['DE', Weekday.Monday],
  ['DK', Weekday.Monday],
  ['EE', Weekday.Monday],
  ['ES', Weekday.Monday],
  ['FI', Weekday.Monday],
  ['FR', Weekday.Monday],
  ['GB', Weekday.Monday],
  ['GE', Weekday.Monday],
  ['GF', Weekday.Monday],
  ['GR', Weekday.Monday],
  ['HR', Weekday.Monday],
  ['HU', Weekday.Monday],
  ['ID', Weekday.Monday],
  ['IE', Weekday.Monday],
  ['IN', Weekday.Monday],
  ['IS', Weekday.Monday],
  ['IT', Weekday.Monday],
  ['KG', Weekday.Monday],
  ['KZ', Weekday.Monday],
  ['LB', Weekday.Monday],
  ['LT', Weekday.Monday],
  ['LU', Weekday.Monday],
  ['LV', Weekday.Monday],
  ['MA', Weekday.Monday],
  ['MC', Weekday.Monday],
  ['MK', Weekday.Monday],
  ['MN', Weekday.Monday],
  ['MY', Weekday.Monday],
  ['NL', Weekday.Monday],
  ['NO', Weekday.Monday],
  ['NZ', Weekday.Monday],
  ['PK', Weekday.Monday],
  ['PL', Weekday.Monday],
  ['PT', Weekday.Monday],
  ['PY', Weekday.Monday],
  ['RO', Weekday.Monday],
  ['RS', Weekday.Monday],
  ['RU', Weekday.Monday],
  ['SE', Weekday.Monday],
  ['SK', Weekday.Monday],
  ['TH', Weekday.Monday],
  ['TN', Weekday.Monday],
  ['TR', Weekday.Monday],
  ['UA', Weekday.Monday],
  ['UY', Weekday.Monday],
  ['UZ', Weekday.Monday],
  ['VN', Weekday.Monday],
  ['XK', Weekday.Monday],
]);

/* eslint-disable line-comment-position */
// See https://en.wikipedia.org/wiki/Right-to-left
export const RTL_LANGUAGES = [
  'ae', // Avestan
  'ar', // 'العربية', Arabic
  'arc', // Aramaic
  'bcc', // 'بلوچی مکرانی', Southern Balochi
  'bqi', // 'بختياري', Bakthiari
  'ckb', // 'Soranî / کوردی', Sorani
  'dv', // Dhivehi
  'fa', // 'فارسی', Persian
  'glk', // 'گیلکی', Gilaki
  'he', // 'עברית', Hebrew
  'ku', // 'Kurdî / كوردی', Kurdish
  'mzn', // 'مازِرونی', Mazanderani
  'nqo', // N'Ko
  'pnb', // 'پنجابی', Western Punjabi
  'ps', // 'پښتو', Pashto,
  'sd', // 'سنڌي', Sindhi
  'ug', // 'Uyghurche / ئۇيغۇرچە', Uyghur
  'ur', // 'اردو', Urdu
  'yi', // 'ייִדיש', Yiddish
];
/* eslint-enable */

export {
  currencyDecimalPlaces,
  DEFAULT_DECIMAL_PLACES,
} from './currency-decimal-places';

export const EASTERN_NAME_ORDER_FORMATTERS = new Map([
  [
    'ko',
    (firstName: string, lastName: string, full: boolean) =>
      full ? `${lastName}${firstName}` : lastName,
  ],
  [
    'ja',
    (firstName: string, lastName: string, full: boolean) =>
      full ? `${lastName}${firstName}` : `${lastName}様`,
  ],
  [
    'zh-CN',
    (firstName: string, lastName: string, full: boolean) =>
      full ? `${lastName}${firstName}` : lastName,
  ],
  [
    'zh-TW',
    (firstName: string, lastName: string, full: boolean) =>
      full ? `${lastName}${firstName}` : lastName,
  ],
]);

export const CurrencyShortFormException = {
  BRL: 'R$',
  HKD: 'HK$',
} as const;

export enum UnicodeCharacterSet {
  DirectionControl = '[\u200E\u200F\u202A-\u202E]',
  Negative = '[\u002D\u058A\u05BE\u1806\u2010-\u2015\u2212\u2796\u2E3A\u2E3B\uFE58\uFE63\uFF0D]',
  Punctuation = '[!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65\uD800]|[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]',
  Latin = '[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]|\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E]',
  Han = '[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]',
  Hangul = '[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]',
  Katakana = '[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D\uD82B]|[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67]',
  Hiragana = '[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|\uD83C\uDE00',
  Thai = '[\u0E01-\u0E3A\u0E40-\u0E5B]',
}
