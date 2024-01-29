type BoundingBox = [string, string, string, string];

type Address = {
  name: string;
  house_number: string;
  road: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
};

export type LocationType = {
  place_id: string;
  osm_id: string;
  osm_type: string;
  licence: string;
  lat: string;
  lon: string;
  boundingbox: BoundingBox;
  class: string;
  type: string;
  display_name: string;
  display_place: string;
  display_address: string;
  address: Address;
};