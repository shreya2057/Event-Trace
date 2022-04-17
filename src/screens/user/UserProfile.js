import { IoLocationOutline } from "@react-icons/all-files/io5/IoLocationOutline";
import { MdEdit } from "@react-icons/all-files/md/MdEdit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
	const { currentUser } = useSelector((state) => state.users);
	const navigate = useNavigate();
	return (
		<div className="flex flex-col xl:items-center xl:justify-center h-full lg:items-start lg:justify-start items-center justify-center w-full">
			<div className="flex flex-col items-start xl:w-3/5 w-5/6  justify-start p-10 pt-8">
				<div className="flex flex-row w-full justify-between">
					<div className="flex sm:w-auto w-full">
						<div className="sm:w-auto lg:pr-16 pr-10 my-auto">
							<img
								src={currentUser.profileImage}
								className="w-[5rem] h-[5rem] lg:w-[9.5rem] lg:h-[9.5rem]"
								alt=""
							/>
						</div>
						<div className="flex flex-col items-start justify-start">
							<div className="pt-1 lg:text-[24px] text-[18px] font-bold whitespace-nowrap text-black">
								{currentUser.name}
							</div>
							<a
								href={`mailto:${currentUser.email}`}
								className="lg:pt-2.5 pt-1.5 lg:text-[18px] text-[14px] font-semibold whitespace-nowrap text-[#0A1C5CA3]"
							>
								{currentUser.email}
							</a>
							<div className="pt-2.5 flex lg:text-[16px] text-[12px] font-regular text-black">
								<IoLocationOutline className="self-center" />
								<span className="px-1.5">
									{currentUser.address ? currentUser.address : "UNKNOWN"}
								</span>
							</div>
							<div
								className="mt-3 p-3 w-32 sm:w-fit text-center rounded-md drop-shadow-lg font-medium text-white bg-[#108B50] cursor-pointer"
								onClick={() => console.log("Organizer")}
							>
								Become an Organizer
							</div>
						</div>
					</div>
					<div className="block">
						<button
							className="hidden md:flex border-2 text-[16px] border-primary text-primary rounded px-3"
							onClick={() => navigate("/u/0/edit-profile")}
						>
							Edit
							<MdEdit className=" self-center ml-2 w-4 h-4" />
						</button>
					</div>
				</div>
				<div className="pt-14 pb-5 md:text-[22px] text-[16px] font-bold whitespace-nowrap text-black">
					Bio
				</div>
				<hr className="text-[#858282C7] h-0.5 bg-[rgba(133,130,130,0.78)] w-full" />
				{currentUser.bio && (
					<p className="w-full text-left pt-3">{currentUser.bio}</p>
				)}
				{!currentUser.bio && (
					<p className="w-full text-center pt-3">No bio added.</p>
				)}
				<div className="pt-6 pb-5 md:text-[22px] text-[16px] font-bold whitespace-nowrap text-black">
					About
				</div>
				<hr className="text-[#858282C7] h-0.5 bg-[rgba(133,130,130,0.78)] w-full" />
				<div className="flex flex-row md:w-1/2 xl:w-3/5 w-full justify-between">
					<div className=" flex flex-col md:text-[16px] text-[14px]  font-medium items-start justify-start pt-5 text-[#0A1C5CA3]">
						<div className="pb-5">Email</div>
						<div className="pb-5">Contact No</div>
						<div className="pb-5">Address</div>
						<div className="pb-5">Gender</div>
					</div>
					<div className=" flex flex-col md:text-[16px] text-[14px] font-medium items-start justify-start pt-5 text-[#00040EA3]">
						<div className="pb-5">{currentUser.email}</div>
						<div className="pb-5">
							{currentUser.phone ? currentUser.phone : "UNKNOWN"}
						</div>
						<div className="pb-5">
							{currentUser.address ? currentUser.address : "UNKNOWN"}
						</div>
						<div className="pb-5">
							{currentUser.gender ? currentUser.gender : "UNKNOWN"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
