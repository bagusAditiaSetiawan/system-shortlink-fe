import Link from "next/link";

export default function Login() {
  return (
      <div className="p-2 min-h-screen flex justify-center items-center sm:p-[30px]">
        <div className="w-full max-w-[400px] bg-white border border-ghost p-5 sm:p-10">
            <h1 className="mb-0 font-bold text-[2rem] lg:text-[2.25rem] text-primary text-blue-400">
                Stor
            </h1>
            <h2 className="font-light text-2xl">Welcome Back</h2>
            <h3 className="font-light text-gray-400 text-2xl mb-[50px]">Sign in to continue</h3>
            <form className="mb-4">
                <div className="grid mb-4 lg:my-[50px]">
                    <div className="mb-4">
                        <input
                            type="input"
                            name="username"
                            required={true}
                            placeholder={"Username"}
                            className="form-control block w-full py-[0.54rem] px-3 text-base text-body leading-relaxed bg-white border border-solid border-ghost placeholder-body focus:shadow-none focus:outline-0 focus:text-body focus:bg-white focus:border-blue-100"/>
                    </div>
                    <div>
                        <input
                            type="input"
                            name="username"
                            required={true}
                            placeholder={"Username"}
                            className="form-control block w-full py-[0.54rem] px-3 text-base text-body leading-relaxed bg-white border border-solid border-ghost placeholder-body focus:shadow-none focus:outline-0 focus:text-body focus:bg-white focus:border-blue-100"/>
                    </div>
                </div>
                <button className="font-normal text-sm text-white w-full bg-indigo-700 py-2 px-4">Sign in</button>
            </form>
            <div className=" text-[14px] mb-4">
                <span className="text-gray-400">Don't have account?</span>
                <Link href="/" className="text-blue-600"> Sign up</Link>
            </div>

        </div>
      </div>
  );
}
