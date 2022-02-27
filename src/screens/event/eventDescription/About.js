import React from "react";
import { FiClock } from "@react-icons/all-files/fi/FiClock";
import { FiBookmark } from "@react-icons/all-files/fi/FiBookmark";
import { BiCalendarStar } from "@react-icons/all-files/bi/BiCalendarStar";
import { MdOutlineLocationOn } from "react-icons/md";
import { Container } from "../../../components/container";
import { IconedInfoList } from "../../../components/IconedInfoList";
import { TrimmedText } from "../../../components/trimmedText";

const CategoryTag = ({ category }) => {
	return (
		<div className="h-30 w-full bg-secondary text-primary rounded-full px-5 py-1.5 font-semibold text-center my-3">
			{category}
		</div>
	);
};

export const About = ({ event }) => {
	return (
		<div className="md:w-4/6 w-9/12 mx-auto">
			<div className="md:grid md:grid-cols-5 lg:gap-20 gap-10">
				<div className="col-span-3 text-left">
					<h2>{event.name}</h2>
					<div className="text-grey font-normal pt-2 pb-5">
						<TrimmedText text={event.description} />
					</div>
					<IconedInfoList
						list={[
							{
								value: `${event.dateTime.startDate} - ${event.dateTime.endDate}`,
								icon: <BiCalendarStar className="w-6 h-6" />,
							},
							{
								value: `${event.dateTime.startTime} - ${event.dateTime.endTime}`,
								icon: <FiClock className="w-6 h-6" />,
							},
							{
								value: event.location.location,
								icon: <MdOutlineLocationOn className="w-6 h-6" />,
							},
						]}
					/>
				</div>
				<div className="flex col-span-2 md:w-full xs:w-[300px] max-h-[380px] mx-auto">
					<Container
						content={
							<div className="flex shrink h-full flex-col place-content-between">
								<div>
									<h5>Category</h5>
									{event.categories.map((category) => {
										return <CategoryTag key={category} category={category} />;
									})}
								</div>
								<div className="w-full my-3">
									<div className="text-center text-[#6C6C6C] font-semibold text-sm opacity-70">
										{event.fee && <p>Nrs. {event.fee} per entry</p>}
										{!event.fee && <p>Free</p>}
										<hr className="bg-gradient-to-r border-2 from-[#FBFBFB] via-[#6C6C6C] to-[#FBFBFB]" />
									</div>
									<button className="flex items-center place-content-center outlined-primary-btn w-full mt-4 mb-2">
										Add to Favourites{" "}
										<span>
											<FiBookmark className="w-5 h-5 pl-1" />
										</span>
									</button>
									<button className="filled-primary-btn w-full">
										Register
									</button>
								</div>
							</div>
						}
					/>
				</div>
			</div>
		</div>
	);
};
