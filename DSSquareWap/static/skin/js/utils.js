const utils = {
  checkPhone: (str) => {
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(str))) {
      return false
    }
  }
}
export { utils }
