
export default function Home() {
  return (
      <div className="p-2 min-h-screen flex justify-center items-center sm:p-[30px]">
        <div className="w-full max-w-[500px] bg-white border border-ghost p-5 sm:p-10">
            <h1 className="mb-0 font-bold text-[2rem] lg:text-[2.25rem] text-primary text-blue-400">
                Stor
            </h1>
            <h2 className="font-light">Get started</h2>
            <h3 className="font-light text-grey-300 mb-[50px]">It free to signup and only takes a minute.</h3>
            <form className="mb-4">
                <div className="grid mb-4">
                    <div>
                        <input
                            type="input"
                            name="username"
                            required={true}
                            placeholder={"Username"}
                            className="form-control block w-full py-[0.54rem] px-3 text-base text-body leading-relaxed bg-white border border-solid border-ghost placeholder-body focus:shadow-none focus:outline-0 focus:text-body focus:bg-white focus:border-blue-100"/>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-4 mb-4">
                    <div>
                        <input
                            type="email"
                            name="email"
                            required={true}
                            placeholder={"Email"}
                            className="form-control block w-full py-[0.54rem] px-3 text-base text-body leading-relaxed bg-white border border-solid border-ghost placeholder-body focus:shadow-none focus:outline-0 focus:text-body focus:bg-white focus:border-blue-100"/>
                    </div>
                    <div>
                        <input
                            required={true}
                            type={"password"}
                            placeholder={"Password"}
                            className="form-control block w-full py-[0.54rem] px-3 text-base text-body leading-relaxed bg-white border border-solid border-ghost placeholder-body focus:shadow-none focus:outline-0 focus:text-body focus:bg-white focus:border-blue-100"/>
                    </div>
                </div>
                <button className="font-normal text-sm text-white w-full bg-indigo-700 py-2 px-4">SUBMIT</button>
            </form>
            <div className="text-center text-gray-400 text-[14px] mb-4">
                <span>or signup using</span>
            </div>
            <div className="mb-2">
                <button className="font-normal text-sm text-white w-full bg-indigo-700 py-2 px-4">Sign up Facebook</button>
            </div>
            <div className="mb-2">
                <button className="font-normal text-sm text-white w-full bg-blue-400 py-2 px-4">Sign up Google</button>
            </div>
        </div>
      </div>
  );
}
