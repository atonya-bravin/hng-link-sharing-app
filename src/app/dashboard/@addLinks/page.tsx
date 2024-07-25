/**
 * This is the dashboad component that facilitates the link sharing and profile
 * management of the user account.
 */

import Image from "next/image";

export default function Dashboard(){
    return(
        <div className="bg-white rounded-[12px] w-full">
            <div className="flex flex-col gap-[40px] p-[40px]">
                <div className="flex flex-col gap-[8px]">
                    <div className="font-bold text-[32px]">
                        Customize your links
                    </div>
                    <div className="text-[16px]">
                        Add/edit/remove links below and then share all your profiles with the world!
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center border-solid border-[1px] border-[#633CFF] px-[27px] py-[11px] rounded-[8px]">
                        <div className="text-[16px] text-[#633CFF] font-semibold">
                            + Add New Link
                        </div>
                    </div>
                </div>
                <div className="bg-[#FAFAFA] p-[20px] flex flex-col gap-[20px] rounded-[12px]">
                    <div className="mw-[344px] flex flex-col items-center gap-[40px]">
                        <div>
                            <Image
                                alt="logo"
                                src="/Images/dashboard.png"
                                width={249.53}
                                height={160}
                            />
                        </div>
                        <div className="flex flex-col gap-[24px] w-[488px]">
                            <div className="text-[32px] font-bold text-center">
                                Let&apos;s get you started
                            </div>
                            <div className="text-center text-[16px]">
                                Use the &quot;Add new link&quot; button to get started. 
                                Once you have more than one link, you can reorder and 
                                edit them. We&apos;re here to help you share your 
                                profiles with everyone!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[95px] py-[24px] px-[40px] flex justify-end items-center">
                <div className="rounded-[8px] px-[27px] py-[11px] bg-[#633CFF] text-white text-[16px] font-semibold">
                    Save
                </div>
            </div>
        </div>        
    );
};