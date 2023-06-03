import React from "react";
import "./App.css";
import Header from "./components/Class/Header";
import { NewsCategories } from "./utils/Categories";
import NewsList from "./components/Class/News/NewsList";
import Pagination from "./components/Class/Pagination";
import ResultCount from "./components/Class/News/ResultCount";
import Loading from "./components/Class/Loading";

const fakeNews = [
	{
		source: {
			id: null,
			name: "Quartz India",
		},
		author: "Faustine Ngila",
		title: "The pwnership of ownership",
		description:
			"Your Canon cameras, HP printers, Amazon Kindles, and Ford cars are subject to their manufacturers' whims—even after you buy them",
		url: "https://qz.com/emails/quartz-weekend-brief/1850499056/the-pwnership-of-ownership",
		urlToImage:
			"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8ef599cefe02f83b0209c8e65421191e.png",
		publishedAt: "2023-06-03T08:00:00Z",
		content:
			"Hi Quartz members!Do you really own what you own?\r\nIt used to be a simple enough questionuntil the era of modern technology, when our products started being laced with software that allowed manufac… [+7430 chars]",
	},
	{
		source: {
			id: null,
			name: "Robohub.org",
		},
		author: "Andra Keay",
		title: "Ranking the best humanoid robots of 2023",
		description:
			"Is Rosie the Robot Maid from the Jetsons here yet? Several different types of humanoid are currently deployed commercially or in trials. We’ve come along way since the DARPA Robotics Challenge of 2015/2016, where the most popular footage was the blooper reels…",
		url: "https://robohub.org/ranking-the-best-humanoid-robots-of-2023/",
		urlToImage:
			"https://robohub.org/wp-content/uploads/2023/06/8d8fc3d7-e15c-4b7a-93cd-5348b29d7974_1200x628-425x222.jpg",
		publishedAt: "2023-06-03T07:52:12Z",
		content:
			"Is Rosie the Robot Maid from the Jetsons here yet? Several different types of humanoid are currently deployed commercially or in trials. Weve come along way since the DARPA Robotics Challenge of 2015… [+3419 chars]",
	},
];

class App extends React.Component {
	render() {
		return (
			<>
				<div className="container ">
					<div className="row">
						<div className="col-sm-6 flex flex-col items-center justify-center">
							<Header category={NewsCategories.technology} />
							<ResultCount />
							<NewsList news={fakeNews} />
							<Pagination />
							<Loading />
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default App;
