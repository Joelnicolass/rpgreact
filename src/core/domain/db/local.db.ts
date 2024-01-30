export class LocalDataBase {
  private static instance: LocalDataBase;

  private static _KEY: string = "rof2efwe03zxvvo3";

  private _data: string = "";

  private constructor() {}

  public static getInstance(): LocalDataBase {
    if (!LocalDataBase.instance) {
      LocalDataBase.instance = new LocalDataBase();
    }

    return LocalDataBase.instance;
  }

  public get data(): string {
    return this._data;
  }

  public load(): void {
    const data = localStorage.getItem(LocalDataBase._KEY);
    if (!data) throw new Error("No data found");

    this._data = this._decrypt(data);
  }

  public save(data: string): void {
    this._data = data;
    localStorage.setItem(LocalDataBase._KEY, this._encrypt(this._data));
  }

  private _encrypt(data: string): string {
    /* const b64 = btoa(data);
    const reverse = b64.split("").reverse().join("");
    return reverse; */

    return data;
  }

  private _decrypt(data: string): string {
    /*  const reverse = data.split("").reverse().join("");
    const b64 = atob(reverse);
    return b64; */

    return data;
  }
}
