"use client"
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {GetAccessToken} from "../services/token/token_service.tsx";
import {Link, redirect, useNavigate} from "react-router-dom";
import {authService} from "../services/auth/auth_service_impl.tsx";

export default function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        if(GetAccessToken()) {
            navigate("/admin/dashboard")
        }
    })
    const [email, setEmail] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const submitHandler = async (event: React.FormEvent)  => {
        event.preventDefault()
        const res = await authService.SignUp({
            username,
            password,
            email,
        })
        if(res.errorMessage.length > 0) {
            Swal.fire({
                title: "Register",
                titleText: res.errorMessage[0],
                icon: "error"
            })
        } else {
            Swal.fire({
                title: "Login",
                titleText: "Success Register",
                icon: "success"
            })
            redirect("/login")
        }
    }

    return (
      <div className="p-2 min-h-screen flex justify-center items-center sm:p-[30px]">
          <div className="w-full max-w-[500px] bg-white border border-ghost p-5 sm:p-10">
              <h1 className="mb-0 font-bold text-[2rem] lg:text-[2.25rem] text-primary text-blue-400">
                  Stor
              </h1>
              <h2 className="font-light">Get started</h2>
              <h3 className="font-light text-grey-300 mb-[50px]">It free to signup and only takes a minute.</h3>
              <form className="mb-4" onSubmit={submitHandler}>
                  <div className="grid mb-4">
                      <div>
                          <input
                              value={username}
                              onChange={e => setUsername(e.target.value)}
                              type="text"
                              name="username"
                              required={true}
                              placeholder={"Username"}
                              className="form-control block w-full py-[0.54rem] px-3 text-base text-body leading-relaxed bg-white border border-solid border-ghost placeholder-body focus:shadow-none focus:outline-0 focus:text-body focus:bg-white focus:border-blue-100"/>
                      </div>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-4 mb-4">
                      <div>
                          <input
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                              type="email"
                              name="email"
                              required={true}
                              placeholder={"Email"}
                              className="form-control block w-full py-[0.54rem] px-3 text-base text-body leading-relaxed bg-white border border-solid border-ghost placeholder-body focus:shadow-none focus:outline-0 focus:text-body focus:bg-white focus:border-blue-100"/>
                      </div>
                      <div>
                          <input
                              value={password}
                              onChange={e => setPassword(e.target.value)}
                              required={true}
                              type={"password"}
                              placeholder={"Password"}
                              className="form-control block w-full py-[0.54rem] px-3 text-base text-body leading-relaxed bg-white border border-solid border-ghost placeholder-body focus:shadow-none focus:outline-0 focus:text-body focus:bg-white focus:border-blue-100"/>
                      </div>
                  </div>
                  <button className="font-normal text-sm text-white w-full bg-indigo-700 py-2 px-4">SUBMIT</button>
              </form>
              <div className=" text-[14px] mb-4">
                  <span className="text-gray-400">did have account?</span>
                  <Link to="/login" className="text-blue-600"> Sign in</Link>
              </div>
          </div>
      </div>
  );
}
