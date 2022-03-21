import React from "react";
import { EventCard } from "../components/eventcard";
import { fakeEventList } from "../data/fakeDB";
import Link from "react-router-dom";

export const Home = () => {
	const eventList = fakeEventList;
	return (
		<div className="w-5/6 my-5 mx-auto">
			<div>
				<div>
					<h1>All Events</h1>
				</div>
				<div className="flex flex-wrap justify-start">
					{eventList.map((event) => (
						<EventCard event={event} key={event.name} />
					))}
				</div>
			</div>
		</div>
	);
};
