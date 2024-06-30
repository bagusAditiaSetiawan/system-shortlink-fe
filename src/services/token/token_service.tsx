

export function GetAccessToken(): string {
    return typeof window !== "undefined" ? localStorage.getItem("access_token") ?? "" : "";
}