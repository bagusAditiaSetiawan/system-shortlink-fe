"use client"
import {useEffect, useState} from "react";
import Swal from "sweetalert2"
import {Link, useNavigate} from "react-router-dom";
import {GetAccessToken} from "../../services/token/token_service.tsx";
import {authService} from "../../services/auth/auth_service_impl.tsx";

export default function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        if(GetAccessToken()) {
            navigate("/admin/dashboard")
        }
    })
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler = async (event: React.FormEvent)  => {
        event.preventDefault()
        const res = await authService.SignIn({
            username,
            password,
        })
        if(res.errorMessage.length > 0) {
            Swal.fire({
                title: "Login",
                titleText: res.errorMessage[0],
                icon: "error"
            })
        } else {
            localStorage.setItem("access_token", res.access_token)
            Swal.fire({
                title: "Login",
                titleText: "Success login",
                icon: "success"
            })
            navigate("/admin/dashboard")
        }
    }
    return (
      <div className="p-2 min-h-screen flex justify-center items-center sm:p-[30px]">
        <div className="w-full max-w-[400px] bg-white border border-ghost p-5 sm:p-10">
            <h1 className="mb-0 font-bold text-[2rem] lg:text-[2.25rem] text-primary text-blue-400">
                Stor
            </h1>
            <h2 className="font-light text-2xl">Welcome Back</h2>
            <h3 className="font-light text-gray-400 text-2xl mb-[50px]">Sign in to continue</h3>
            <form className="mb-4" onSubmit={submitHandler}>
                <div className="grid mb-4 lg:my-[50px]">
                    <div className="mb-4">
                        <input
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            type="text"
                            name="username"
                            required={true}
                            placeholder={"Username"}
                            className="form-control block w-full py-[0.54rem] px-3 text-base text-body leading-relaxed bg-white border border-solid border-ghost placeholder-body focus:shadow-none focus:outline-0 focus:text-body focus:bg-white focus:border-blue-100"/>
                    </div>
                    <div>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            required={true}
                            placeholder={"Password"}
                            className="form-control block w-full py-[0.54rem] px-3 text-base text-body leading-relaxed bg-white border border-solid border-ghost placeholder-body focus:shadow-none focus:outline-0 focus:text-body focus:bg-white focus:border-blue-100"/>
                    </div>
                </div>
                <button className="font-normal text-sm text-white w-full bg-indigo-700 py-2 px-4">Sign in</button>
            </form>
            <div className=" text-[14px] mb-4">
                <span className="text-gray-400">Don&apos;t have account?</span>
                <Link to="/" className="text-blue-600"> Sign up</Link>
            </div>

        </div>
      </div>
  );
}
