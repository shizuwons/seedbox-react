export const RedirectIfUnauthenticated = () => {
    let loggedIn = localStorage.getItem('logged_in');
  
    if (!loggedIn) {
      window.location = "/";
    } else {
      return;
    }
  };