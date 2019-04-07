export type SanityLocaleBlockKeys = "en" | "de" | "fr" | "es" | "_type";

export type SanityLocaleBlock = { [K in SanityLocaleBlockKeys]: any };

export type SanityBlockKeys = "content" | "name" | "_type";

export type SanityBlock = { [K in SanityBlockKeys]: any };

/*
The sanity block content looks something likes this, but is sometimes packed in an array too.

export interface SanityBlockContent {
  _key: string;
  _type: string;
  markDefs: Array<any>;
  style: string;
  children: Array<{
    _key: string;
    _type: string;
    marks: Array<any>;
    text: string;
  }>;
}
*/
