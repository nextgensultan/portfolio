import ReactGA from 'react-ga4';

export const initGA = () => {
  console.log(
    `%c
    CONTACT ME
   ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     || 
                
  Hey There i'm glad you liked the site and what to see whats going on, sure check the repo at https://github.com/adenekan41/codewonders 
  
  And dont forget to shoot me an email at hellocodewonders@gmail.com if you need me to come do awesome work at your company`,
    'font-family:inherit'
  );
  ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your GA4 Measurement ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.send({ hitType: 'exception', exDescription: description, exFatal: fatal });
  }
};
