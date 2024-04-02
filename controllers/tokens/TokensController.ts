import moment from "moment";

export interface IToken {
  id?: string;
  userId: string;
  token: string;
  createdAt?: string;
  status: boolean;
}

class TokenController {
  private Token: IToken;

  constructor({ userId, token, status }: any) {
    this.Token = {
      userId,
      token,
      status,
      createdAt: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    };
  }

  create() {}

  update() {}

  delete() {}

  getOne() {}
}

module.exports = TokenController;
