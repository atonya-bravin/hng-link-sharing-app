/**
 * This component facilitates user sign-up
 */

import Image from "next/image"

export default function SignUp(){
    return(
        <div className="w-full flex flex-row justify-center bg-[#FAFAFA]">
            <div className="flex flex-col gap-[51px] items-center">
                {/* This is the section that contains the logo and the company name */}
                <div id="logo-section" className="flex flex-row gap-[14.17px] justify-center">
                    <Image
                        alt="logo"
                        src="/Images/solar_link-circle-bold.png"
                        width={33.33}
                        height={33.33}
                    />
                    <Image
                        alt="logo"
                        src="/Images/devlinks.png"
                        width={135}
                        height={26.25}
                    />
                </div>
                {/* The form section where we can enter the log in creadentials. */}
                <div className="bg-white rounded-[12px] w-[476px] flex flex-col p-[40px] gap-[40px]">
                    <div className="flex flex-col gap-[8px]">
                        <div className="font-bold text-[32px]">Creacte account</div>
                        <div className="text-[16px] font-normal">
                            Let&apos;s get you started sharing your links!
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap[4px]">
                            <div className="text-[12px] font-normal">Email Address</div>
                            <div>
                                <label className="input input-bordered flex items-center gap-2">
                                    <Image 
                                        alt="email"
                                        src="/Icons/email.png"
                                        width={13}
                                        height={10}
                                    />
                                    <input type="text" className="grow text-[16px]" placeholder="e.g. alex@email.com" />
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col gap[4px]">
                            <div className="text-[12px] font-normal">Create Password</div>
                            <div>
                                <label className="input border-solid border-[#D9D9D9] border-[1px]  flex items-center gap-2">
                                    <Image 
                                        alt="password"
                                        src="/Icons/password.png"
                                        width={12}
                                        height={13.5}
                                    />
                                    <input type="password" className="grow text-[16px]" value="" placeholder="Atleast 8 Characters"/>
                                    <span>Cam</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col gap[4px]">
                            <div className="text-[12px] font-normal">Confirm Password</div>
                            <div>
                                <label className="input border-solid border-[#D9D9D9] border-[1px]  flex items-center gap-2">
                                    <Image 
                                        alt="password"
                                        src="/Icons/password.png"
                                        width={12}
                                        height={13.5}
                                    />
                                    <input type="password" className="grow text-[16px]" value="" placeholder="Atleast 8 Characters" />
                                    <span>Cam</span>
                                </label>
                            </div>
                        </div>
                        <div className="text-[12px] font-normal">
                            Password must contain at least 8 characters
                        </div>
                        <div className="w-full">
                            <button className="w-full h-[46px] bg-[#633CFF] rounded-[8px] text-white font-semibold text-[16px] hover:bg-[#BEADFF] hover:shadow-custom">Create new account</button>
                        </div>
                    </div>
                    <div className="text-center text-[16px] font-normal">
                        Already have an account? <a className="text-[#633CFF]" href="/log-in">Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
};