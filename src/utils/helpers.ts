import toast from 'react-hot-toast';
import { AUTH_USER_KEY } from './constant';


/**
 * Displays an error notification
 * @param err the error object
 * @param alternativeMessage alternative message to display if error has no message
 */
export function notifyOfError(err: any, alternativeMessage: string) {
  const errMsg = err.message
  const isAuthError = errMsg === "Response not successful: Received status code 401"
  if (isAuthError) {
    toast.error("Unauthorized")
    return logUserOut()
  }
  toast.error(
    err.graphQLErrors
      ? err.graphQLErrors[0]?.message || err.message
      : err?.message || err?.reason || alternativeMessage
  );
}


export function isUserAuthenticated(): boolean {
  let tk: any = localStorage.getItem(AUTH_USER_KEY);
  return typeof tk === 'string' && tk !== '';
}

export function logUserOut(): void {
  localStorage.clear();
  window.location.href = "/"
}
export function formatNumber(num) {
  const kvalue = (num / 1000).toFixed(0) + "k"
  return num > 999 ?
    kvalue :
    num
}


