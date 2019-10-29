export const TOKEN_KEY = "@admin-Token";
export const COMPANY = "@admin-Company";
export const COMPANYID = "@admin-CompanyId";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getCompany = () => localStorage.getItem(COMPANY);
export const getCompanyId = () => localStorage.getItem(COMPANYID);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
