/* General API Constants */
const API_URL =
  process.env.REACT_APP_CONTAINER_1_URL || "https://intramark-backend.herokuapp.com";

/* Custom Endpoint Constants */

const LOGIN = API_URL + "/login";
const FORGOT_PASSWORD = API_URL + "/forgot-password";
const REGISTER = API_URL + "/register";
const CONTACT_US = API_URL + "/contact-us";
const CURRENT_PERIOD = API_URL + "/current-period";
const HISTORICAL = API_URL + "/historical";


module.exports = {
  API_URL,
  LOGIN,
  REGISTER,
  CONTACT_US,
  CURRENT_PERIOD,
  HISTORICAL,
  FORGOT_PASSWORD,
};
