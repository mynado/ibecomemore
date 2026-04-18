export type BaseData = {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
};

export interface Screening extends BaseData {
  start: string;
  title: string;
  country?: string;
  end: string;
  eventName?: string;
  isOnline?: boolean;
  language?: "sv" | "en";
  url?: string;
  urlLabel?: string;
  venueName?: string;
  city?: string;
}
