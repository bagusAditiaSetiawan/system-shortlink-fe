import {
    AuthService,
    ResponseSignIn,
    ResponseSignInSuccess,
    ResponseSignUp, ResponseSignUpSuccess,
    SignInPayload,
    SignUpPayload
} from "@/services/auth/auth_service";
import {AxiosInstance} from "axios";
import {client_request, ResponseError} from "@/services/client_request";

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
}

export const authService = new AuthServiceImpl(client_request)
