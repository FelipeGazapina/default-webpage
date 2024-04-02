import { db } from "@/db";
import { user } from "@/db/schema";

import bcrypt from "bcrypt";
import moment from "moment";

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}

export default class UserController {
  private user: IUser;
  private saltRounds = 10;

  constructor({ name, email, password, role }: any) {
    this.user = {
      name,
      email,
      password,
      role,
      createdAt: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    };
  }

  async create() {
    var encripted_password;
    // bcrypt password
    bcrypt.genSalt(this.saltRounds, function (err, salt) {
      bcrypt.hash(this.user.password, salt, function (err, hash) {
        // Store hash in your password DB.
        encripted_password = hash;
      });
    });
    // get last id
     awaitdb.query.user.findMany({
      orderBy: [desc(user.id)],
    });
    // creawait {
      name: this.
    }er
  }

  update() {}

  delete() {}

  getAll() {}

  getOne() {}

  login() {}

  logout() {}
}
