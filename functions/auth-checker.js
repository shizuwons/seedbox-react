export const RedirectIfUnauthenticated = () => {
  let loggedIn = localStorage.getItem('logged_in');
  let verified = localStorage.getItem('userStatus');

  if (!loggedIn || verified === 'REG') {
    window.location = "/";
  } else {
    return;
  }
};