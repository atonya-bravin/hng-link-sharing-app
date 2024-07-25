/**
 * This is the component that facilitates user log-in.
 */
'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react";

export default function LogIn(){
    const router = useRouter();
    const [email, setEmail] = useState(()=> "");
    const [password, setPassword] = useState(()=> "password");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    return(
        <div className="w-full h-[100vh] flex flex-row items-center justify-center bg-[#FAFAFA]">
            <div className="flex flex-col gap-[51px] items-center">
                {/* This is the section that contains the logo and the company name */}
                <div id="logo-section" className="flex flex-row gap-[14.17px] justify-center">
                    <div>
                        <Image
                            alt="logo"
                            src="/Images/solar_link-circle-bold.png"
                            width={33.33}
                            height={33.33}
                        />
                    </div>
                    <div>
                        <Image
                            alt="logo"
                            src="/Images/devlinks.png"
                            width={135}
                            height={26.25}
                        />
                    </div>
                </div>
                {/* The form section where we can enter the log in creadentials. */}
                <div className="bg-white rounded-[12px] w-[476px] flex flex-col p-[40px] gap-[40px]">
                    <div className="flex flex-col gap-[8px]">
                        <div className="font-bold text-[32px]">LogIn</div>
                        <div className="text-[16px] font-normal">
                            Add your details below to get back into the app
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap[4px]">
                            <div className={emailError ? "text-[12px] font-normal text-[#FF3939]" : "text-[12px] font-normal"}>Enter Email</div>
                            <div>
                                <label className={emailError ? "input input-bordered flex items-center gap-2 border-solid border-[1px] border-[#FF3939]" : "input input-bordered flex items-center gap-2"}>
                                    <Image 
                                        alt="email"
                                        src="/Icons/email.png"
                                        width={13}
                                        height={10}
                                    />
                                    <input type="text" className="grow text-[16px]" placeholder="e.g. alex@email.com" value={email} 
                                        onChange={(e)=>{
                                            setEmailError(false);
                                            setEmail(e.target.value);
                                        }}
                                    />
                                    {emailError ? <span className="inline text-[12px] text-[#FF3939]">Can&apos;t be empty</span> : <span className="hidden"></span>}
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col gap[4px]">
                            <div className={passwordError ? "text-[12px] font-normal text-[#FF3939]" : "text-[12px] font-normal"}>Password</div>
                            <div>
                                <label className={passwordError ? "input input-bordered flex items-center gap-2 border-solid border-[1px] border-[#FF3939]" : "input input-bordered flex items-center gap-2"}>
                                    <Image 
                                        alt="password"
                                        src="/Icons/password.png"
                                        width={12}
                                        height={13.5}
                                    />
                                    <input type="password" className="grow" value={password}
                                        onChange={(e)=>{
                                            setPasswordError(false);
                                            setPassword(e.target.value);
                                        }}
                                    />
                                    {passwordError ? <span className="inline text-[12px] text-[#FF3939]">Please Check Again</span> : <span className="hidden"></span>}
                                    
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            <button className="w-full h-[46px] bg-[#633CFF] rounded-[8px] text-white font-semibold text-[16px] hover:bg-[#BEADFF] hover:shadow-custom"
                                onClick={()=> {
                                    if(password.length === 0 || password === "password"){
                                        setPasswordError(true);
                                    }
                                    if(email.length === 0){
                                        setEmailError(true);
                                    }
                                    if(email.length > 0 && password.length > 0 && emailError === false && passwordError === false && password != "password"){
                                        // The user will be sent to the dashboard when they click on the log-in button
                                        router.push('/dashboard');
                                    }
                                }}
                            >Log In</button>
                        </div>
                    </div>
                    <div className="text-center text-[16px] font-normal">
                        Don&apos;t have an account? <a className="text-[#633CFF]" href="/sign-up">Create account</a>
                    </div>
                </div>
            </div>
        </div>
    )
};