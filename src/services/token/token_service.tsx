

export function GetAccessToken(): string {
    return localStorage.getItem("access_token") ?? "";
}

export function RemoveAccessToken(): void {
    localStorage.removeItem("access_token");
}