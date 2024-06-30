export interface ResponseSignInSuccess {
    data: {
        access_token: string;
    }
}
export interface ResponseSignUpSuccess {
    data: {
        username: string;
    }
}


export interface ResponseSignIn {
    errorMessage: string[],
    access_token: string
}

export interface ResponseSignUp {
    errorMessage: string[],
    username: string
}

export interface SignUpPayload {
    username: string
    email: string
    password: string
}

export interface SignInPayload {
    username: string
    password: string
}

export interface AuthService {
    SignIn(params: SignInPayload): Promise<ResponseSignIn>
    SignUp(params: SignUpPayload): Promise<ResponseSignUp>
}