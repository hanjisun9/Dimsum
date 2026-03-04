export const API_URL = "https://dimsumwrap3d.berkahost.biz.id/api";

export const getToken = () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("token");
};

export const authHeader = (): HeadersInit => {
    const token = getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
}