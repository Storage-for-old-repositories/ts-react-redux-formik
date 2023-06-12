export interface Customer {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
}

export interface Address {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  geo?: Geo;
}

export interface Geo {
  lat?: string;
  lng?: string;
}

export interface Company {
  name?: string;
  catchPhrase?: string;
  bs?: string;
}

export const fetchCustomers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();
  return json as Customer[];
};
