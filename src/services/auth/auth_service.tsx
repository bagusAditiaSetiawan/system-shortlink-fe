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

export interface Profile {
    id: number;
    username: string;
    email: string;
}

export interface ResponseGetProfileSuccess{
    data: Profile
}

export interface ResponseGetProfile {
    errorMessage: string[],
    profile: Profile
}
export interface AuthService {
    SignIn(params: SignInPayload): Promise<ResponseSignIn>
    SignUp(params: SignUpPayload): Promise<ResponseSignUp>
    GetProfile(token: string): Promise<ResponseGetProfile>
}