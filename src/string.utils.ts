/* 
  @TyAPI Utils - String Utility
*/

/** 
 * Evaluate if the parameter is not `null`, `undefined` or an empty `string`. It returns `true` for any string that not only contains spaces, otherwise it returns `false`.
 */
export function isNotEmpty(char: any) {
  return char != null && typeof char == 'string' && char.trim() != ''
}

/** 
 * Evaluate if the parameter is `null`, `undefined` or a empty `string`. It returns `true` for `null`, `undefined` or any `string` that only contains spaces, otherwise it returns `false`.
 */
export function isEmpty(char: any) {
  return char === null || char === undefined || (typeof char == 'string' && char.trim() == '')
}

/** 
 * Returns the length of a `string`. If the parameter is `null` or is not a `string` the result will be `0`.
 */
export function length(char: any) {
  return char != null && typeof char == 'string' ? char.length : 0
}

/**
 * Return a text in reversed characters. Returns `null` if the input is an empty `string` or any other type.
 */
export function reverse(text: string) {
  if (isNotEmpty(text)) {
    var newText = ""
    for (var x = 0; x < text.length; x++) {
      newText = text.charAt(x) + newText
    }
    return newText
  } else {
    return null
  }
}

/** 
 * Returns `true` if the input is a valid string email.
 */
export function isEmailValid(email: string) {
  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
  // return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(t)
  // return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(t)
  if (isNotEmpty(email)) {
    let t = email.trim()
    return /^\w+([\.-]?\w+)*@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/.test(t)
  } else {
    return false
  }
}

/** 
 * Returns `true` if the input is a valid domain name sting.
 */
export function isDomainValid(domain: string) {
  if (isNotEmpty(domain)) {
    let t = domain.trim()
    return /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/.test(t)
  } else {
    return false
  } 
}

/** 
 * Returns `true` if the input is a valid URL string.
 */
export function isWebUrlValid(url: string) {
  if (isNotEmpty(url)) {
    let t = url.trim()
    return /(http(s)?):\/\/(((?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])|((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}|localhost)(:\d{1,6})?([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(t)
  } else {
    return false
  } 
}