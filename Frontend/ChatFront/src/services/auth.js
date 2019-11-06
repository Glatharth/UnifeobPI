export const TOKEN_KEY = "@admin-Token";
export const PATIENT = "@admin-Patient";
export const NAME = "@admin-Name";
export const NAMECHAT = "@admin-NameChat";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getPatient = () => localStorage.getItem(PATIENT);
export const getName = () => localStorage.getItem(NAME);
export const getNameChat = () => localStorage.getItem(NAMECHAT);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(PATIENT);
  localStorage.removeItem(NAME);
  localStorage.removeItem(NAMECHAT);
};