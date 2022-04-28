export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  }
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  address: UserAddress;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}
