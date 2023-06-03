import React, { Component } from "react";

export class ResultCount extends Component {
	render() {
		return (
			<>
				<div className="flex gap-32 items-center mb-3 ">
					<div>
						<p className="text-gray-300">About {0} result found</p>
					</div>
					<div>
						<p className="text-gray-300 ml-auto">
							{1} page of {100}
						</p>
					</div>
				</div>
			</>
		);
	}
}

export default ResultCount;
