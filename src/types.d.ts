export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  photoUrl: string;
}

export interface FormData extends Omit<Contact, 'id'> {}

export interface ContactsList {
  [id: string]: FormData;
}