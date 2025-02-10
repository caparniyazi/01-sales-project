export class SalesPerson {
  /**
   * In Angular world, developers commonly use "public" properties.
   * @param firstName
   * @param lastName
   * @param email
   * @param salesVolume
   */
  constructor(public firstName: string,
              public lastName: string,
              public email: string,
              public salesVolume: number) {
  }
}
