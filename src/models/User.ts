import { model, RecordCollection } from '@agentframework/data';

// define your data model
@model('user')
export class User {
  name: string;
  age: number;
}

// access the data model using RecordLayer
export class UserCollection extends RecordCollection<User> {
  constructor() {
    super(User);
  }
}

// or document layer with more advanced APIs
// import { DocumentCollection } from '@agentframework/data';
// export class UserCollection extends DocumentCollection<User> {
//   constructor() {
//     super(User);
//   }
// }
