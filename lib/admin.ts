import { jwtDecode } from "jwt-decode";

const ADMIN_EMAILS = [
    "erkigosty@gmail.com",
    "xemorii12@gmail.com",
    "kieko1356@gmail.com"
];

export const osAdminEmail = () => {
    if (typeof window === "undefined") return false;

    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
        const decoded: any = jwtDecode(token);
        return ADMIN_EMAILS.includes(decoded.email);
    } catch (error) {
        console.error("Invalid token:", error);
        return false;
    }
}

export const isAdminEmail = () => {
    const admin = localStorage.getItem("admin");
    if (!admin) return false;

    const parsed = JSON.parse(admin);
    return !!parsed.username;
}