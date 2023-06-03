import React, { Component } from "react";

function getDateString(dateTimeStr) {
	return new Date(dateTimeStr).toDateString();
}

export class NewsItem extends Component {
	render() {
		const { item } = this.props;
		return (
			<>
				<div className="card mb-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					{item.urlToImage && (
						<img
							className="card-image rounded-t-lg"
							src={item.urlToImage}
							alt={item.title}
						/>
					)}

					<div className="card-body p-5">
						<a
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-black">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{item.title}
							</h5>
						</a>
						<a
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-black mb-3 font-normal text-gray-700 dark:text-gray-400">
							{item.content}
						</a>
						<div className="mt-2 flex items-center">
							<small>
								<strong> Publish at {getDateString(item.publishedAt)}</strong>
							</small>
							<div className="ml-auto py-1 px-2 text-gray-700 bg-gray-400">
								<small>{item.source.name}</small>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default NewsItem;
