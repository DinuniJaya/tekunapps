// return the user data from the session storage
export const getUser = () => {
  const userStr = localStorage.getItem("user_info");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const getUserProfile = () => {
  const userProfile = localStorage.getItem("dataProfile");
  if (userProfile) return JSON.parse(userProfile);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  return localStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem("token");
  // localStorage.removeItem("user_info");
  // localStorage.removeItem("dataProfile");
};

// set the token and user from the session storage
export const setUserSession = (token, user_info, dataProfile) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user_info", JSON.stringify(user_info));
  localStorage.setItem("dataProfile", JSON.stringify(dataProfile));
};
