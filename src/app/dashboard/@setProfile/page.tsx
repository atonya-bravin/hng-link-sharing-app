import Image from "next/image"

export default function Profile(){
    return(
        <div className="bg-white rounded-[12px] w-full">
            <div className="flex flex-col gap-[40px] p-[40px]">
                <div className="flex flex-col gap-[8px]">
                    <div className="font-bold text-[32px]">
                        Profile Details
                    </div>
                    <div className="text-[16px]">
                        Add your details to create a personal touch to your profile.
                    </div>
                </div>
                <div className="flex flex-col gap-[24px]">
                    <div className="bg-[#FAFAFA] p-[20px] rounded-[12px]">
                            <div className="w-full h-[193px] flex flex-row gap-[16px] items-center">
                                <div className="text-[16px] font-normal w-[240px]">
                                    Profile picture
                                </div>
                                <div className="flex flex-row gap-[24px] items-center">
                                    <div>
                                        <Image
                                            alt="profile image"
                                            src="/Images/profile.png"
                                            width={193}
                                            height={193}
                                        />
                                    </div>
                                    <div className="w-[215px] text-[12px]">
                                        Image must be below 1024x1024px. Use PNG or JPG format.
                                    </div>   
                                </div>
                            </div>
                    </div>
                    <div className="bg-[#FAFAFA] p-[20px] rounded-[12px] flex flex-col gap-[12px]">
                        <div className="flex flex-row gap-[16px] w-full items-center">
                            <div className="w-[240px] font-normal text-[16px]">
                                First name*
                            </div>
                            <input className="w-full h-[48px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px] px-[12px] py-[16px]" type="text" placeholder="e.g John"/>
                        </div>
                        <div className="flex flex-row gap-[16px] w-full items-center">
                            <div className="w-[240px] font-normal text-[16px]">
                                Last name*
                            </div>
                            <input className="w-full h-[48px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px] px-[12px] py-[16px]" type="text" placeholder="e.g Appleseed"/>
                        </div>
                        <div className="flex flex-row gap-[16px] w-full items-center">
                            <div className="w-[240px] font-normal text-[16px]">
                                Email
                            </div>
                            <input className="w-full h-[48px] border-[1px] border-solid border-[#D9D9D9] rounded-[8px] px-[12px] py-[16px]" type="text" placeholder="e.g email@example.com"/>
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
    )
}