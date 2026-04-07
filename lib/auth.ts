export const requiredAuth = () => {
    if (typeof window === "undefined") return;
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "/login";
    } 
}

export const saveAuth = (token: string, user: any) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("role", user.role);
}