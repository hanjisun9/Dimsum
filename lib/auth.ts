export const requiredAuth = () => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/admin/login";
}