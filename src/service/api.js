// console.log("My URI", process.env.REACT_APP_BASE_URI);
const BASE_URL = "http://localhost:3000/api/v1";

export const endpoints = {
  SIGNUP_API: BASE_URL + "/user/signup",
  LOGIN_API: BASE_URL + "/user/login",
  UPDATE_PASSWORD_API: BASE_URL + "/user/updatePassword",
  RESET_PASSWORD_API: BASE_URL + "/user/resetPassword",
  FORGET_PASSWORD_API: BASE_URL + "/user/forgetPassword",
};

export const locationEndpoints = {
  GET_ALL_LOCATION_API: BASE_URL + "/location",
};

export const userEndpoints = {
  USER_API: BASE_URL + "/user",
  CREATE_CUSTOMER_API: BASE_URL + "/createCustomer",
  CREATE_USER_API: BASE_URL + "/createUser",
  TOTAL_SALES_API: BASE_URL + "/totalSales",
  SALES_BY_LOCATION_API: BASE_URL + "/salesByLocation",
  TOP_CUSTOMER_API: BASE_URL + "/topCustomer",
};

export const userProfileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/userProfile/userDetails",
  UPDATE_USER_PROFILE_API: BASE_URL + "/userProfile/updateProfile",
  GET_ALL_USER_PROFILE_API: BASE_URL + "/userProfile",
};

export const productEndpoints = {
  GET_ALL_PRODUCT_API: BASE_URL + "/product",
  GET_ALL_PRODUCT_TRANSACTION_API: BASE_URL + "/productTransaction",
};

export const serviceEndpoints = {
  GET_ALL_SERVICE_TRANSACTION_API: BASE_URL + "/serviceTransaction",
  GET_ALL_SERVICE_API: BASE_URL + "/service",
  GET_ALL_SERVICE_USAGES_API: BASE_URL + "/serviceUsage",
};
