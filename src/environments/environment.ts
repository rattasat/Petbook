// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'dev',
  apiUrl: 'http://localhost:8081',
  lineFri: 'https://line.me/R/ti/p/%40pvb6787t',
  firebaseConfig: {
    apiKey: "AIzaSyApE4zV6jeT-__mE4jV_gM3KUJIai0ulps",
    authDomain: "petbookapi-1515952572035.firebaseapp.com",
    databaseURL: "https://petbookapi-1515952572035.firebaseio.com",
    storageBucket: "petbookapi-1515952572035.appspot.com",
    messagingSenderId: "1083210610273",
  }
};
