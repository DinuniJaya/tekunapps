// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem("user_info");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const getUserProfile = () => {
  const userProfile = sessionStorage.getItem("dataProfile");
  if (userProfile) return JSON.parse(userProfile);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user_info");
  sessionStorage.removeItem("dataProfile");
};

// set the token and user from the session storage
export const setUserSession = (token, user_info, dataProfile) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user_info", JSON.stringify(user_info));
  sessionStorage.setItem("dataProfile", JSON.stringify(dataProfile));
};
