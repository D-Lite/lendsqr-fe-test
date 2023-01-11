export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginEvent extends EventTarget {
  name: string;
  data: string;
}
