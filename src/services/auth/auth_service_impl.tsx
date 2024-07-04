import {
    AuthService, Profile, ResponseGetProfile, ResponseGetProfileSuccess,
    ResponseSignIn,
    ResponseSignInSuccess,
    ResponseSignUp, ResponseSignUpSuccess,
    SignInPayload,
    SignUpPayload
} from "./auth_service";
import {AxiosInstance} from "axios";
import {client_request, ResponseError} from "./../client_request";

class AuthServiceImpl implements AuthService {
    client_request: AxiosInstance

    constructor(clientRequest: AxiosInstance) {
        this.client_request = clientRequest
    }

    async SignIn(params: SignInPayload): Promise<ResponseSignIn> {
        return this.client_request.post<ResponseSignInSuccess>("/auth/signin", params).then((res) => ({
            access_token: res.data.data.access_token,
            errorMessage: [],
        })).catch((err) => {
            const errorResponse = err.response.data as ResponseError
            return ({
                errorMessage: errorResponse.errors,
                access_token: "",
            })
        })
    }

    async SignUp(params: SignUpPayload): Promise<ResponseSignUp> {
        return this.client_request.post<ResponseSignUpSuccess>("/auth/signup", params).then((res) => ({
            username: res.data.data.username,
            errorMessage: [],
        })).catch((err) => {
            const errorResponse = err.response.data as ResponseError
            return ({
                errorMessage: errorResponse.errors,
                username: "",
            })
        })
    }

    async GetProfile(token: string): Promise<ResponseGetProfile> {
        return this.client_request.get<ResponseGetProfileSuccess>("/profile", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => ({
            profile: res.data.data,
            errorMessage: [] as string[],
        })).catch((err) => {
            const errorResponse = err.response.data as ResponseError
            return ({
                profile: {} as Profile,
                errorMessage: errorResponse.errors,
            })
        })
    }
}

export const authService = new AuthServiceImpl(client_request)
