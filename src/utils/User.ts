export default class User {
  constructor() {}
  getTierRank(rating: number) {
    const result = Math.floor((2000 - rating) / 100);
    return result > 0 ? result : 1;
  }
}
