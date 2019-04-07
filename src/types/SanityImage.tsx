export interface SanityImage {
  _type: "image";
  asset: {
    _type: string;
    _ref: string;
  };
  [styling: string]: string | object;
}
