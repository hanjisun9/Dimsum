import { isAdminEmail } from "./admin";

export const requiredAuth = () => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "/login";
    } 
    if (!isAdminEmail()) {
        alert("Anda tidak memiliki akses ke halaman ini.");
        window.location.href = "/";
    }
}