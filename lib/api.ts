import axios from "axios";

export const api = axios.create({
    baseURL: "https://dimsumwrap3d.berkahost.biz.id/",
    headers: {
        "Content-Type": "application/json",
    },
});

// AUTO ATTACH TOKEN
api.interceptors.request.use((config) => {
    const token = typeof window !== "undefined"
        ? localStorage.getItem("token")
        : null;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});