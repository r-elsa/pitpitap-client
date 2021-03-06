// default config for all the environments
const defaultConfig = {
  someMoreConfigs: "VARIOUSKEYS",
  language: "he"
};

// write here every environmet configuration
const modes = {
  development: {
    ...defaultConfig,

    //backend localhost
    API_URL: "https://my-server-staging.herokuapp.com/api/v1"
  },
  staging: {
    ...defaultConfig,

    API_URL: "https://my-server-staging.herokuapp.com/api/v1"
  },
  production: {
    ...defaultConfig,
    API_URL: "https://my-server-production.herokuapp.com/api/v1"
  }
};

const appMode = modes[process.env.REACT_APP_ENV] || modes.staging;

export default appMode;
