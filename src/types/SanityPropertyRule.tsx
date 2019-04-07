export interface SanityPropertyRule {
  _key: string;
  _type: string;
  showKey: string;
  showValue: string; // Boolean in text form. 'Yes' for true and 'No' for false
  property?: string;
  timeUsage?: string;
}
